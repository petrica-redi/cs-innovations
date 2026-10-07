import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Platformele construite de CS Innovations și de Petrică Dulgheru: SISCI, REDI Health, REDI Business, REDI NGO, Chemistry tools, Sentinel, Scriva.",
  alternates: { canonical: "/proiecte" },
};

export default function ProiectePage() {
  return (
    <main className="flex-1">
      <PageHead label="Portofoliu" title="Proiecte">
        Platformele construite de CS Innovations și de Petrică Dulgheru, grupate pe domenii. Imaginile sunt capturi ale
        versiunilor online; un clic pe card deschide platforma.
      </PageHead>
      <div className="mx-auto w-full max-w-[1200px] px-5 py-12">
        <ProjectGrid />
      </div>
    </main>
  );
}
