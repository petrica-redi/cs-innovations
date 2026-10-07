import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Dezvoltare de aplicații, platforme cu inteligență artificială, inovație în chimie și inovație socială.",
};

const sections = [
  {
    id: "dezvoltare",
    title: "Dezvoltare",
    image: "/photos/racks.jpg",
    alt: "Rack-uri într-o sală tehnică",
    paragraphs: [
      "Construim aplicații web pe care organizația le poate opera după predare. Interfața este în limba română când utilizatorii sunt din România.",
      "Livrăm codul, modul de instalare și un manual scurt. Componentele cu licență sunt inventariate.",
    ],
  },
  {
    id: "ai",
    title: "Platforme cu inteligență artificială",
    image: "/photos/ai-screen.jpg",
    alt: "Monitor cu un panou de asistență lângă un document",
    paragraphs: [
      "Modelele intră unde ajută: căutare într-un set de documente, o primă redactare, o verificare. Omul confirmă rezultatul.",
      "Datele de lucru stau la client. Nu antrenăm un model pe dosarele sau formulele lui și nu le trimitem mai departe fără acord scris.",
    ],
  },
  {
    id: "chimie",
    title: "Inovație în chimie",
    image: "/photos/lab-screen.jpg",
    alt: "Laborator cu sticlărie și un ecran cu un model molecular",
    paragraphs: [
      "Instrumentele țin versiunile unei formule, loturile și cine a schimbat un pas. Nu vindem substanțe și nu publicăm rețete.",
      "Regulile de laborator se scriu cu specialistul clientului.",
    ],
  },
  {
    id: "social",
    title: "Inovație socială",
    image: "/photos/community-desk.jpg",
    alt: "Birou de comunitate cu un laptop pe care rulează un dosar digital",
    paragraphs: [
      "Platforme pentru echipe care lucrează cu oameni: dosar, evaluare, plan, monitorizare și formare pentru personal.",
      "Un exemplu este platforma de management de caz pentru servicii comunitare integrate. Datele de probă sunt fictive.",
    ],
  },
];

export default function ServiciiPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
      <h1 className="text-4xl">Servicii</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Patru direcții. Un contract poate folosi una sau le poate combina.
      </p>
      <div className="mt-10 space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 grid items-center gap-6 lg:grid-cols-2">
            <div className="relative aspect-[16/10] bg-night">
              <Image src={section.image} alt={section.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
