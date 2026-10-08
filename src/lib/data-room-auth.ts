import { createHash, createHmac, scryptSync, timingSafeEqual } from "node:crypto";

export type RoomRole = "admin" | "guest";

const TTL_MS = 8 * 60 * 60 * 1000;

export function roomEnv() {
  const secret = process.env.DATA_ROOM_SECRET ?? "";
  const adminPassword = process.env.DATA_ROOM_ADMIN_PASSWORD ?? "";
  const accessCode = process.env.DATA_ROOM_ACCESS_CODE ?? "";
  const blob = Boolean(process.env.BLOB_READ_WRITE_TOKEN);
  const ready = secret.length >= 16 && adminPassword.length >= 10 && blob;
  return { secret, adminPassword, accessCode, blob, ready };
}

export function missingRoomEnv() {
  const env = roomEnv();
  const missing: string[] = [];
  if (env.secret.length < 16) missing.push("DATA_ROOM_SECRET");
  if (env.adminPassword.length < 10) missing.push("DATA_ROOM_ADMIN_PASSWORD");
  if (!env.blob) missing.push("BLOB_READ_WRITE_TOKEN");
  return missing;
}

export function sameSecret(input: string, expected: string, pepper: string) {
  if (!input || !expected || !pepper || input.length > 200 || expected.length > 200) return false;
  const left = scryptSync(input, pepper, 32);
  const right = scryptSync(expected, pepper, 32);
  return timingSafeEqual(left, right);
}

export function signSession(role: RoomRole, secret: string, now = Date.now()) {
  const payload = Buffer.from(JSON.stringify({ role, exp: now + TTL_MS })).toString("base64url");
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function readSession(token: string | undefined, secret: string, now = Date.now()): { role: RoomRole } | null {
  if (!token || !secret) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const given = Buffer.from(sig);
  const wanted = Buffer.from(expected);
  if (given.length !== wanted.length || !timingSafeEqual(given, wanted)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString()) as { role?: string; exp?: number };
    if (data.role !== "admin" && data.role !== "guest") return null;
    if (typeof data.exp !== "number" || data.exp <= now) return null;
    return { role: data.role };
  } catch {
    return null;
  }
}

export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = (request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "").split(",")[0]?.trim();
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  return (forwarded?.split(",")[0] ?? request.headers.get("x-real-ip") ?? "unknown").trim().slice(0, 80);
}

export function ipKey(ip: string, secret: string) {
  return createHash("sha256").update(`${secret}:${ip}`).digest("hex").slice(0, 24);
}

export function sessionFromRequest(request: Request) {
  const header = request.headers.get("cookie") ?? "";
  const pair = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith("cs_dr="));
  const token = pair ? decodeURIComponent(pair.slice("cs_dr=".length)) : undefined;
  return readSession(token, roomEnv().secret);
}
