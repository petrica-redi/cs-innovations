import type { Metadata } from "next";
import { DataRoom, type RoomFileView } from "@/components/DataRoom";
import { PageHead } from "@/components/PageHead";
import { roomEnv } from "@/lib/data-room-auth";
import { currentSession } from "@/lib/data-room-http";
import { listFiles } from "@/lib/data-room-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cameră de date",
  description: "Documentele CS Innovations se transmit prin cameră de date, cu cod de acces.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/camera-de-date" },
};

function views(files: Awaited<ReturnType<typeof listFiles>>): RoomFileView[] {
  return files.map(({ id, name, size, uploadedAt }) => ({ id, name, size, uploadedAt }));
}

export default async function CameraDeDatePage() {
  const ready = roomEnv().ready;
  const session = ready ? await currentSession() : null;
  let files: RoomFileView[] | null = null;
  if (session) {
    try {
      files = views(await listFiles());
    } catch {
      files = [];
    }
  }

  return (
    <main className="flex-1">
      <PageHead label="Acces restrâns" title="Cameră de date">
        Documentele firmei nu sunt publice și nu apar în motoarele de căutare. Intrați cu codul primit de la noi. Codul se
        transmite separat de link.
      </PageHead>
      <section className="mx-auto w-full max-w-[860px] px-5 py-14">
        <DataRoom kind="guest" ready={ready} files={files} />
      </section>
    </main>
  );
}
