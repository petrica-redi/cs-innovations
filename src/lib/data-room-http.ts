import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readSession, roomEnv, signSession, type RoomRole } from "@/lib/data-room-auth";

export async function currentSession() {
  const jar = await cookies();
  return readSession(jar.get("cs_dr")?.value, roomEnv().secret);
}

export function noStore(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export function openSession(role: RoomRole) {
  const env = roomEnv();
  const response = noStore({ ok: true, role });
  response.cookies.set("cs_dr", signSession(role, env.secret), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 8 * 60 * 60,
  });
  return response;
}

export function closeSession() {
  const response = noStore({ ok: true });
  response.cookies.set("cs_dr", "", { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 0 });
  return response;
}
