"use client";

import { upload } from "@vercel/blob/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { filePath, formatBytes, MAX_BYTES } from "@/lib/data-room-shared";

export type RoomFileView = { id: string; name: string; size: number; uploadedAt: string };

type Props = {
  kind: "guest" | "admin";
  ready: boolean;
  files: RoomFileView[] | null;
  missing?: string[];
};

export function DataRoom({ kind, ready, files, missing = [] }: Props) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [pending, setPending] = useState(false);
  const [progress, setProgress] = useState("");

  async function login(form: FormData) {
    setError("");
    setNotice("");
    setPending(true);
    const response = await fetch("/api/camera-de-date/session", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ kind, secret: String(form.get("secret") ?? "") }),
    });
    setPending(false);
    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      setError(data?.error ?? "Nu am putut intra.");
      return;
    }
    router.refresh();
  }

  async function logout() {
    await fetch("/api/camera-de-date/session", { method: "DELETE" });
    router.refresh();
  }

  async function onPick(list: FileList | null) {
    if (!list?.length) return;
    setError("");
    setNotice("");
    setPending(true);
    try {
      for (const file of [...list]) {
        if (file.size > MAX_BYTES) throw new Error(`${file.name} depășește 32 MB.`);
        const pathname = filePath(crypto.randomUUID(), file.name);
        if (!pathname) throw new Error(`${file.name} nu este un tip acceptat. Folosiți PDF, Word, Excel, PowerPoint, text, imagini sau ZIP.`);
        setProgress(file.name);
        await upload(pathname, file, {
          access: "private",
          handleUploadUrl: "/api/camera-de-date/upload",
          clientPayload: file.name,
          multipart: file.size > 4 * 1024 * 1024,
        });
        const registered = await fetch("/api/camera-de-date/files", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ pathname, name: file.name }),
        });
        if (!registered.ok) throw new Error(`${file.name} nu a putut fi adăugat în listă.`);
      }
      setNotice("Documentele au fost adăugate.");
      router.refresh();
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Încărcarea a eșuat.");
    } finally {
      setPending(false);
      setProgress("");
    }
  }

  async function remove(id: string) {
    setError("");
    const response = await fetch(`/api/camera-de-date/files?id=${encodeURIComponent(id)}`, { method: "DELETE" });
    if (!response.ok) {
      setError("Documentul nu a putut fi șters.");
      return;
    }
    router.refresh();
  }

  async function changeCode(form: FormData) {
    setError("");
    setNotice("");
    setPending(true);
    const response = await fetch("/api/camera-de-date/access-code", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code: String(form.get("code") ?? "") }),
    });
    setPending(false);
    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    if (!response.ok) {
      setError(data?.error ?? "Codul nu a putut fi schimbat.");
      return;
    }
    setNotice("Codul nou este activ. Trimiteți-l separat de linkul camerei.");
    router.refresh();
  }

  if (!ready) {
    return (
      <div className="rounded-md border border-line bg-surface p-6">
        {kind === "admin" ? (
          <>
            <p>Camera de date are nevoie de aceste variabile, setate în Vercel, nu în cod:</p>
            <ul className="mt-3 list-disc pl-5 font-mono text-sm">
              {missing.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Camera de date nu este deschisă încă.</p>
        )}
      </div>
    );
  }

  if (!files) {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void login(new FormData(event.currentTarget));
        }}
        className="max-w-md rounded-md border border-line bg-surface p-6"
      >
        <label htmlFor="secret" className="font-mono text-xs text-muted">
          {kind === "admin" ? "Parolă de administrator" : "Cod de acces"}
        </label>
        <input
          id="secret"
          name="secret"
          type="password"
          autoComplete={kind === "admin" ? "current-password" : "off"}
          required
          className="focus-ring mt-2 w-full rounded-[4px] border border-line bg-bg px-3 py-2.5"
        />
        {error ? <p className="mt-3 text-sm text-flame">{error}</p> : null}
        <button type="submit" disabled={pending} className="focus-ring mt-5 rounded-[4px] bg-flame px-5 py-2.5 text-sm font-medium text-white disabled:opacity-60">
          {pending ? "Se verifică…" : "Intră"}
        </button>
      </form>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {files.length === 0 ? "Nu este încă niciun document." : `${files.length} ${files.length === 1 ? "document" : "documente"}`}
        </p>
        <button type="button" onClick={() => void logout()} className="focus-ring font-mono text-sm text-flame">
          Ieșire
        </button>
      </div>

      {kind === "admin" ? (
        <div className="rounded-md border border-dashed border-flame/40 bg-surface p-6">
          <label className="font-medium">Încarcă documente</label>
          <p className="mt-1 text-sm text-muted">PDF, Word, Excel, PowerPoint, text, imagini sau ZIP. Maximum 32 MB de fișier.</p>
          <input
            type="file"
            multiple
            disabled={pending}
            onChange={(event) => {
              void onPick(event.target.files);
              event.target.value = "";
            }}
            className="focus-ring mt-4 block w-full text-sm"
          />
          {progress ? <p className="mt-3 font-mono text-xs text-muted">Se încarcă {progress}</p> : null}
        </div>
      ) : null}

      {error ? <p className="text-sm text-flame">{error}</p> : null}
      {notice ? <p className="text-sm text-ink">{notice}</p> : null}

      <ul className="overflow-hidden rounded-md border border-line bg-surface">
        {files.map((file) => (
          <li key={file.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 last:border-b-0">
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {formatBytes(file.size)} · {new Date(file.uploadedAt).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              <a href={`/api/camera-de-date/files/${file.id}`} className="focus-ring text-flame">
                Descarcă
              </a>
              {kind === "admin" ? (
                <button type="button" onClick={() => void remove(file.id)} className="focus-ring text-muted">
                  Șterge
                </button>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      {kind === "admin" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void changeCode(new FormData(event.currentTarget));
            event.currentTarget.reset();
          }}
          className="rounded-md border border-line bg-surface p-6"
        >
          <h2 className="text-lg font-semibold">Codul invitaților</h2>
          <p className="mt-1 max-w-[60ch] text-sm text-muted">
            Cine primește camera intră cu acest cod. Trimiteți codul pe alt canal decât linkul.
          </p>
          <label htmlFor="code" className="mt-4 block font-mono text-xs text-muted">
            Cod nou
          </label>
          <input id="code" name="code" type="text" minLength={8} maxLength={80} required className="focus-ring mt-2 w-full max-w-sm rounded-[4px] border border-line bg-bg px-3 py-2.5" />
          <button type="submit" disabled={pending} className="focus-ring mt-4 rounded-[4px] border border-ink px-4 py-2 text-sm disabled:opacity-60">
            Schimbă codul
          </button>
        </form>
      ) : (
        <p className="text-sm text-muted">Nu trimiteți mai departe codul împreună cu linkul acestei pagini.</p>
      )}

      <p className="text-sm">
        {kind === "admin" ? (
          <Link href="/camera-de-date" className="focus-ring text-flame">
            Pagina invitaților
          </Link>
        ) : (
          <Link href="/camera-de-date/admin" className="focus-ring text-muted">
            Administrare
          </Link>
        )}
      </p>
    </div>
  );
}
