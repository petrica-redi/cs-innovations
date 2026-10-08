import { randomUUID } from "node:crypto";
import { sameOrigin, sessionFromRequest } from "@/lib/data-room-auth";
import { currentSession, noStore } from "@/lib/data-room-http";
import { addFile, describeUpload, listFiles, removeFile } from "@/lib/data-room-store";
import { displayName, isRoomPath } from "@/lib/data-room-shared";

function views(files: Awaited<ReturnType<typeof listFiles>>) {
  return files.map(({ id, name, size, uploadedAt }) => ({ id, name, size, uploadedAt }));
}

export async function GET() {
  const session = await currentSession();
  if (!session) return noStore({ error: "Neautorizat." }, 401);
  return noStore({ files: views(await listFiles()) });
}

export async function POST(request: Request) {
  if (!sameOrigin(request) || sessionFromRequest(request)?.role !== "admin") {
    return noStore({ error: "Doar administratorul poate încărca." }, 401);
  }
  let body: { pathname?: string; name?: string };
  try {
    body = (await request.json()) as { pathname?: string; name?: string };
  } catch {
    return noStore({ error: "Cerere invalidă." }, 400);
  }
  if (!body.pathname || !isRoomPath(body.pathname)) return noStore({ error: "Tip de fișier neacceptat." }, 400);
  const meta = await describeUpload(body.pathname);
  if (!meta) return noStore({ error: "Fișierul nu a putut fi verificat." }, 400);
  const id = body.pathname.split("/")[2] || randomUUID();
  const file = {
    id,
    pathname: meta.pathname,
    name: displayName(body.name || meta.pathname.split("/").pop() || "document"),
    size: meta.size,
    contentType: meta.contentType,
    uploadedAt: new Date().toISOString(),
  };
  await addFile(file);
  return noStore({ id: file.id, name: file.name, size: file.size, uploadedAt: file.uploadedAt });
}

export async function DELETE(request: Request) {
  if (!sameOrigin(request) || sessionFromRequest(request)?.role !== "admin") {
    return noStore({ error: "Doar administratorul poate șterge." }, 401);
  }
  const id = new URL(request.url).searchParams.get("id") ?? "";
  if (!id) return noStore({ error: "Lipsește documentul." }, 400);
  const removed = await removeFile(id);
  if (!removed) return noStore({ error: "Documentul nu există." }, 404);
  return noStore({ ok: true });
}
