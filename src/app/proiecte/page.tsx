import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Platformele construite de CS Innovations și de Petrică Dulgheru: SISCI, REDI Health, REDI Business, REDI NGO, Chemistry tools, Sentinel, Scriva.",
};

export default function ProiectePage() {
  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 py-16">
      <h1 className="font-serif text-[2.6rem] leading-[1.1] md:text-5xl">Proiecte</h1>
      <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
        Aici sunt platformele construite de CS Innovations și de {"Petrică Dulgheru"}, grupate pe
        domenii. Imaginile sunt capturi ale versiunilor online; un clic pe card deschide platforma.
      </p>
      <div className="mt-10">
        <ProjectGrid />
      </div>
    </main>
  );
}
