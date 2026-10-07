import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Proiecte",
  description:
    "Sisteme construite, listate din depozitele GitHub: platforme, inteligență artificială, chimie, social și sănătate.",
};

export default function ProiectePage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] flex-1 px-5 py-16">
      <p className="text-[13px] tracking-[0.08em] text-copper uppercase">Sisteme</p>
      <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.15] md:text-5xl">Proiecte</h1>
      <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">
        Pe această pagină sunt sistemele construite de CS Innovations: platforme
        informatice, instrumente de chimie, proiecte sociale și de sănătate. SISCI este
        platforma de management de caz pentru servicii comunitare integrate, cu evaluare,
        plan, monitorizare și roluri. Depozitele private rămân fără adresă publică.
      </p>
      <div className="mt-8">
        <ProjectGrid />
      </div>
    </main>
  );
}
