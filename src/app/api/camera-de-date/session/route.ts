import { roomEnv, sameOrigin, sameSecret, sessionFromRequest, clientIp, ipKey } from "@/lib/data-room-auth";
import { closeSession, noStore, openSession } from "@/lib/data-room-http";
import { accessCodeMatches, attemptsOpen, hasAccessCode, recordFailure } from "@/lib/data-room-store";

export async function POST(request: Request) {
  if (!sameOrigin(request)) return noStore({ error: "Cerere refuzată." }, 403);
  const env = roomEnv();
  if (!env.ready) return noStore({ error: "Camera de date nu este deschisă." }, 503);

  let body: { kind?: string; secret?: string };
  try {
    body = (await request.json()) as { kind?: string; secret?: string };
  } catch {
    return noStore({ error: "Cerere invalidă." }, 400);
  }

  const kind = body.kind === "admin" ? "admin" : body.kind === "guest" ? "guest" : null;
  const secret = typeof body.secret === "string" ? body.secret : "";
  if (!kind || !secret) return noStore({ error: "Completați codul." }, 400);

  const key = ipKey(clientIp(request), env.secret);
  if (!(await attemptsOpen(key))) return noStore({ error: "Prea multe încercări. Reîncercați peste câteva minute." }, 429);

  if (kind === "guest" && !(await hasAccessCode())) {
    return noStore({ error: "Codul de acces nu a fost setat încă." }, 503);
  }

  const accepted = kind === "admin" ? sameSecret(secret, env.adminPassword, env.secret) : await accessCodeMatches(secret);
  if (!accepted) {
    await recordFailure(key);
    return noStore({ error: kind === "admin" ? "Parolă greșită." : "Cod greșit." }, 401);
  }

  return openSession(kind);
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request) || !sessionFromRequest(request)) return noStore({ error: "Neautorizat." }, 401);
  return closeSession();
}
