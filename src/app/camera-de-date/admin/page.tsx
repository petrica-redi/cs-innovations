import type { Metadata } from "next";
import { DataRoom, type RoomFileView } from "@/components/DataRoom";
import { PageHead } from "@/components/PageHead";
import { missingRoomEnv, roomEnv } from "@/lib/data-room-auth";
import { currentSession } from "@/lib/data-room-http";
import { listFiles } from "@/lib/data-room-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Administrare cameră de date",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const ready = roomEnv().ready;
  const session = ready ? await currentSession() : null;
  const admin = session?.role === "admin";
  let files: RoomFileView[] | null = null;
  if (admin) {
    try {
      files = (await listFiles()).map(({ id, name, size, uploadedAt }) => ({ id, name, size, uploadedAt }));
    } catch {
      files = [];
    }
  }

  return (
    <main className="flex-1">
      <PageHead label="Doar pentru firmă" title="Administrare">
        Aici încărcați documentele pe care le trimiteți unei autorități sau unui partener. Fișierele rămân private: se descarcă
        doar după codul de acces, prin site, nu printr-un link public.
      </PageHead>
      <section className="mx-auto w-full max-w-[860px] px-5 py-14">
        <DataRoom kind="admin" ready={ready} files={files} missing={missingRoomEnv()} />
      </section>
    </main>
  );
}
