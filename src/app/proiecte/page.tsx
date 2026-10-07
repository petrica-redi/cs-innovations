import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Sisteme construite, listate din depozitele GitHub: platforme, inteligență artificială, chimie, social și sănătate.",
};

export default function ProiectePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
      <h1 className="text-4xl">Proiecte</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        {projects.length} depozite din contul GitHub, în afară de tutorialul gol al
        aplicației desktop. Pentru o achiziție de sistem informatic, cele mai apropiate
        sunt SISCI, instrumentele de chimie, harta Sentinel și platformele de sănătate.
        Unele sunt demonstrații, altele instrumente interne. Lista nu este un registru de
        contracte. Depozitele rămân private; unde există o adresă deja publică, ea este
        legată.
      </p>
      <div className="mt-8">
        <ProjectGrid />
      </div>
    </main>
  );
}
