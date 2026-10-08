import assert from "node:assert/strict";
import test from "node:test";
import { readSession, sameSecret, signSession } from "./data-room-auth.ts";
import { contentDisposition, filePath, isPrivateBlobUrl, isRoomPath } from "./data-room-shared.ts";

const secret = "test-secret-value-32";

test("session round trip", () => {
  const token = signSession("guest", secret, 1_000);
  assert.equal(readSession(token, secret, 1_000)?.role, "guest");
  assert.equal(readSession(token, secret, 1_000 + 8 * 60 * 60 * 1000)?.role, undefined);
  assert.equal(readSession(`${token}x`, secret, 1_000), null);
  assert.equal(readSession(token, "other-secret-value", 1_000), null);
});

test("password compare", () => {
  assert.equal(sameSecret("corect-12345", "corect-12345", secret), true);
  assert.equal(sameSecret("gresit-12345", "corect-12345", secret), false);
  assert.equal(sameSecret("", "corect-12345", secret), false);
});

test("file paths stay inside the room", () => {
  const id = "11111111-1111-1111-1111-111111111111";
  const path = filePath(id, "Anexă 2.pdf");
  assert.equal(path, `data-room/files/${id}/anexa-2.pdf`);
  assert.equal(isRoomPath(path!), true);
  assert.equal(filePath(id, "virus.exe"), null);
  assert.equal(filePath(id, "../manifest.json"), null);
  assert.equal(isRoomPath("data-room/manifest.json"), false);
});

test("download names cannot break the header", () => {
  const header = contentDisposition('raport"\r\n.pdf');
  assert.equal(header.includes("\r"), false);
  assert.equal(header.includes("\n"), false);
});

test("only private blob hosts pass", () => {
  assert.equal(isPrivateBlobUrl("https://store.private.blob.vercel-storage.com/a.pdf"), true);
  assert.equal(isPrivateBlobUrl("https://store.public.blob.vercel-storage.com/a.pdf"), false);
});
