import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import { del, get, head, put } from "@vercel/blob";
import { roomEnv, sameSecret } from "@/lib/data-room-auth";
import { isPrivateBlobUrl, isRoomPath, MAX_BYTES } from "@/lib/data-room-shared";

const MANIFEST = "data-room/manifest.json";
const LIMITS = "data-room/limits.json";
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILS = 8;

export type RoomFile = {
  id: string;
  pathname: string;
  name: string;
  size: number;
  contentType: string;
  uploadedAt: string;
};

type Manifest = {
  accessSalt?: string;
  accessHash?: string;
  files: RoomFile[];
};

type Limits = Record<string, { fails: number; resetAt: number }>;

function asManifest(value: Partial<Manifest> | null): Manifest {
  if (!value || typeof value !== "object" || Array.isArray(value)) return { files: [] };
  return { ...value, files: Array.isArray(value.files) ? value.files : [] };
}

async function readJson<T>(pathname: string, fallback: T): Promise<{ value: T; etag?: string }> {
  const result = await get(pathname, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return { value: fallback };
  const text = await new Response(result.stream).text();
  return { value: JSON.parse(text) as T, etag: result.blob.etag };
}

async function writeJson(pathname: string, value: unknown, etag?: string) {
  await put(pathname, JSON.stringify(value), {
    access: "private",
    allowOverwrite: true,
    addRandomSuffix: false,
    contentType: "application/json",
    cacheControlMaxAge: 60,
    ...(etag ? { ifMatch: etag } : {}),
  });
}

async function updateManifest(mutate: (manifest: Manifest) => Manifest) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const current = await readJson<Manifest>(MANIFEST, { files: [] });
    const manifest = asManifest(current.value);
    try {
      await writeJson(MANIFEST, mutate(manifest), current.etag);
      return;
    } catch (error) {
      if (attempt === 3) throw error;
    }
  }
}

export async function listFiles(): Promise<RoomFile[]> {
  const current = await readJson<Manifest>(MANIFEST, { files: [] });
  const files = asManifest(current.value).files;
  return files.filter((file) => isRoomPath(file.pathname));
}

export async function fileById(id: string) {
  const files = await listFiles();
  return files.find((file) => file.id === id) ?? null;
}

export async function addFile(file: RoomFile) {
  await updateManifest((manifest) => {
    const existing = manifest.files.find((item) => item.pathname === file.pathname);
    if (existing) {
      return {
        ...manifest,
        files: manifest.files.map((item) => (item.pathname === file.pathname ? { ...item, name: file.name } : item)),
      };
    }
    return { ...manifest, files: [file, ...manifest.files] };
  });
}

export async function removeFile(id: string) {
  const file = await fileById(id);
  if (!file) return false;
  await del(file.pathname);
  await updateManifest((manifest) => ({ ...manifest, files: manifest.files.filter((item) => item.id !== id) }));
  return true;
}

export async function saveAccessCode(code: string) {
  const accessSalt = randomBytes(16).toString("base64url");
  const accessHash = scryptSync(code, accessSalt, 32).toString("base64url");
  await updateManifest((manifest) => ({ ...manifest, accessSalt, accessHash }));
}

export async function hasAccessCode() {
  const current = await readJson<Manifest>(MANIFEST, { files: [] });
  const manifest = asManifest(current.value);
  return Boolean((manifest.accessHash && manifest.accessSalt) || roomEnv().accessCode);
}

export async function accessCodeMatches(code: string) {
  if (!code || code.length > 200) return false;
  const current = await readJson<Manifest>(MANIFEST, { files: [] });
  const manifest = asManifest(current.value);
  if (manifest.accessHash && manifest.accessSalt) {
    const hash = scryptSync(code, manifest.accessSalt, 32);
    const expected = Buffer.from(manifest.accessHash, "base64url");
    return expected.length === hash.length && timingSafeEqual(hash, expected);
  }
  const env = roomEnv();
  if (!env.accessCode || !sameSecret(code, env.accessCode, env.secret)) return false;
  await saveAccessCode(code);
  return true;
}

export async function attemptsOpen(key: string) {
  const current = await readJson<Limits>(LIMITS, {});
  const row = current.value[key];
  if (!row || Date.now() > row.resetAt) return true;
  return row.fails < MAX_FAILS;
}

export async function recordFailure(key: string) {
  const current = await readJson<Limits>(LIMITS, {});
  const limits = current.value;
  const row = limits[key];
  const now = Date.now();
  if (!row || now > row.resetAt) limits[key] = { fails: 1, resetAt: now + WINDOW_MS };
  else row.fails += 1;
  for (const [name, value] of Object.entries(limits)) {
    if (now > value.resetAt) delete limits[name];
  }
  await writeJson(LIMITS, limits, current.etag);
}

const blockedTypes = new Set(["text/html", "image/svg+xml", "application/javascript", "text/javascript"]);

export async function describeUpload(pathname: string) {
  if (!isRoomPath(pathname)) return null;
  try {
    const meta = await head(pathname);
    if (!isPrivateBlobUrl(meta.url) || meta.size > MAX_BYTES || blockedTypes.has(meta.contentType)) {
      await del(meta.url);
      return null;
    }
    return meta;
  } catch {
    return null;
  }
}
