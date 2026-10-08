import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { roomEnv, sameOrigin, sessionFromRequest } from "@/lib/data-room-auth";
import { noStore } from "@/lib/data-room-http";
import { addFile, describeUpload } from "@/lib/data-room-store";
import { ALLOWED_TYPES, displayName, isRoomPath, MAX_BYTES } from "@/lib/data-room-shared";

export async function POST(request: Request) {
  const env = roomEnv();
  if (!env.ready) return noStore({ error: "Camera de date nu este deschisă." }, 503);

  let body: HandleUploadBody;
  try {
    body = (await request.json()) as HandleUploadBody;
  } catch {
    return noStore({ error: "Cerere invalidă." }, 400);
  }

  if (body.type === "blob.generate-client-token") {
    if (!sameOrigin(request) || sessionFromRequest(request)?.role !== "admin") {
      return noStore({ error: "Doar administratorul poate încărca." }, 401);
    }
    if (!isRoomPath(body.payload.pathname)) return noStore({ error: "Tip de fișier neacceptat." }, 400);
  }

  try {
    const result = await handleUpload({
      request,
      body,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        if (!isRoomPath(pathname)) throw new Error("Tip de fișier neacceptat.");
        return {
          allowedContentTypes: ALLOWED_TYPES,
          maximumSizeInBytes: MAX_BYTES,
          addRandomSuffix: false,
          tokenPayload: displayName(clientPayload || pathname),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        const meta = await describeUpload(blob.pathname);
        if (!meta) return;
        await addFile({
          id: blob.pathname.split("/")[2] ?? meta.pathname,
          pathname: meta.pathname,
          name: displayName(tokenPayload || meta.pathname.split("/").pop() || "document"),
          size: meta.size,
          contentType: meta.contentType,
          uploadedAt: new Date().toISOString(),
        });
      },
    });
    return noStore(result);
  } catch {
    return noStore({ error: "Încărcarea a fost refuzată." }, 400);
  }
}
