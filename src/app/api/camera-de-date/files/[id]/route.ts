import { get } from "@vercel/blob";
import { currentSession, noStore } from "@/lib/data-room-http";
import { fileById } from "@/lib/data-room-store";
import { contentDisposition } from "@/lib/data-room-shared";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  const session = await currentSession();
  if (!session) return noStore({ error: "Neautorizat." }, 401);
  const { id } = await params;
  const file = await fileById(id);
  if (!file) return noStore({ error: "Documentul nu există." }, 404);
  const result = await get(file.pathname, { access: "private", useCache: false });
  if (!result || result.statusCode !== 200) return noStore({ error: "Documentul nu există." }, 404);
  return new Response(result.stream, {
    headers: {
      "Content-Type": file.contentType || "application/octet-stream",
      "Content-Disposition": contentDisposition(file.name),
      "Content-Length": String(file.size),
      "Cache-Control": "private, no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
