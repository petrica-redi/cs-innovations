const EXTENSIONS = ["pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "txt", "csv", "png", "jpg", "jpeg", "zip", "odt", "ods"] as const;

export const MAX_BYTES = 32 * 1024 * 1024;

export const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "text/plain",
  "text/csv",
  "image/png",
  "image/jpeg",
  "application/zip",
  "application/vnd.oasis.opendocument.text",
  "application/vnd.oasis.opendocument.spreadsheet",
  "application/octet-stream",
];

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const ROOM_PATH =
  /^data-room\/files\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/[a-z0-9][a-z0-9-]{0,60}\.(pdf|doc|docx|xls|xlsx|ppt|pptx|txt|csv|png|jpg|jpeg|zip|odt|ods)$/;

export function extensionOf(name: string) {
  const base = name.split(/[/\\]/).pop() ?? "";
  const dot = base.lastIndexOf(".");
  if (dot <= 0) return "";
  return base.slice(dot + 1).toLowerCase();
}

export function filePath(id: string, filename: string) {
  if (!UUID.test(id)) return null;
  const ext = extensionOf(filename);
  if (!EXTENSIONS.includes(ext as (typeof EXTENSIONS)[number])) return null;
  const stem =
    (filename.split(/[/\\]/).pop() ?? "")
      .slice(0, -(ext.length + 1))
      .toLowerCase()
      .replace(/[ăâ]/g, "a")
      .replace(/î/g, "i")
      .replace(/[șş]/g, "s")
      .replace(/[țţ]/g, "t")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 60) || "document";
  const pathname = `data-room/files/${id}/${stem}.${ext}`;
  return isRoomPath(pathname) ? pathname : null;
}

export function isRoomPath(pathname: string) {
  return ROOM_PATH.test(pathname);
}

export function displayName(name: string) {
  const base = name.split(/[/\\]/).pop() ?? "";
  const clean = base.replace(/[\u0000-\u001f\u007f"\\]/g, "").trim().slice(0, 140);
  return clean || "document";
}

export function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function isPrivateBlobUrl(url: string) {
  try {
    return new URL(url).hostname.endsWith(".private.blob.vercel-storage.com");
  } catch {
    return false;
  }
}

export function contentDisposition(name: string) {
  const safe = displayName(name);
  const ascii = safe.replace(/[^\x20-\x7E]/g, "_");
  return `attachment; filename="${ascii}"; filename*=UTF-8''${encodeURIComponent(safe)}`;
}
