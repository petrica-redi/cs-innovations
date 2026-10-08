import { roomEnv, sameOrigin, sessionFromRequest } from "@/lib/data-room-auth";
import { noStore } from "@/lib/data-room-http";
import { saveAccessCode } from "@/lib/data-room-store";

export async function POST(request: Request) {
  if (!sameOrigin(request) || sessionFromRequest(request)?.role !== "admin") {
    return noStore({ error: "Doar administratorul poate schimba codul." }, 401);
  }
  if (!roomEnv().ready) return noStore({ error: "Camera de date nu este deschisă." }, 503);
  let body: { code?: string };
  try {
    body = (await request.json()) as { code?: string };
  } catch {
    return noStore({ error: "Cerere invalidă." }, 400);
  }
  const code = body.code?.trim() ?? "";
  if (code.length < 8 || code.length > 80) return noStore({ error: "Codul trebuie să aibă între 8 și 80 de caractere." }, 400);
  await saveAccessCode(code);
  return noStore({ ok: true });
}
