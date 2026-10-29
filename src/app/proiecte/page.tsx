import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Platforme și sisteme AI construite de CS Innovations: Platforma Mediere Publică, REDI Health, Scriva, Sentinel, REDI Business, REDI NGO, Chemistry tools.",
  alternates: { canonical: "/proiecte" },
};

export default function ProiectePage() {
  return (
    <main className="flex-1">
      <PageHead label="Portofoliu" title="Proiecte">
        Sisteme construite de CS Innovations pentru sectorul public și social, sănătate, date și cercetare. Imaginile sunt
        capturi ale versiunilor online; un clic pe card deschide platforma.
      </PageHead>
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14">
        <ProjectGrid />
      </div>
    </main>
  );
}
