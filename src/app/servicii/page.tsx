import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Platforme informatice, inovare în chimie, inovare socială și programele europene în care CS Innovations a fost selectată.",
};

const sections = [
  {
    id: "platforme",
    title: "Platforme informatice",
    image: "/photos/racks.jpg",
    alt: "Rack-uri într-o sală tehnică",
    href: "/proiecte?domeniu=Platforme",
    paragraphs: [
      "Proiectăm aplicații pe care organizația le operează după predare. Interfața este în limba română când utilizatorii sunt din România.",
      "În platformă intră roluri, dosar și rapoarte. Unde ajută, un model caută într-un set de documente sau redactează o primă variantă. Omul confirmă. Datele de lucru rămân la client.",
    ],
  },
  {
    id: "chimie",
    title: "Inovație în chimie",
    image: "/photos/lab-screen.jpg",
    alt: "Laborator cu sticlărie și un ecran cu un model molecular",
    href: "/proiecte?domeniu=Chimie",
    paragraphs: [
      "Instrumentele țin versiunile unei formule, loturile și cine a schimbat un pas. Simulările rămân la structuri, grafice și scenarii de laborator.",
      "Firma nu comercializează substanțe și nu publică rețete. Regulile de laborator se scriu cu specialistul clientului.",
    ],
  },
  {
    id: "social",
    title: "Inovație socială",
    image: "/photos/community-desk.jpg",
    alt: "Birou de comunitate cu un laptop pe care rulează un dosar",
    href: "/proiecte?domeniu=Social",
    paragraphs: [
      "Construim platforme pentru echipe care lucrează cu oameni: dosar, evaluare, plan, monitorizare și formare pentru personal.",
      "SISCI este platforma de management de caz pentru servicii comunitare integrate. Acoperă evaluarea, planul, monitorizarea și rolurile.",
    ],
  },
  {
    id: "programe",
    title: "Programe europene",
    image: "/photos/map-wall.jpg",
    alt: "Hartă de sistem pe un ecran de sală",
    href: "/despre",
    paragraphs: [
      "CS INNOVATIONS SOLUTIONS SRL a fost selectată în incubatorul EIT RawMaterials și în acceleratorul 28DIGITAL (Digital28). 28DIGITAL este denumirea actuală a fostei comunități EIT Digital.",
      "Ambele programe țin de Institutul European de Inovare și Tehnologie. Programele sunt finanțate de Uniunea Europeană.",
    ],
  },
];

export default function ServiciiPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] flex-1 px-5 py-16">
      <p className="text-[13px] tracking-[0.08em] text-copper uppercase">Servicii</p>
      <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.15] md:text-5xl">Patru direcții</h1>
      <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">
        Platforme informatice, chimie, inovare socială și programele europene în care
        firma a fost selectată.
      </p>
      <div className="mt-14 space-y-16">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 grid items-start gap-8 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[16/10] bg-night">
                <Image src={section.image} alt={section.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-[1.75rem]">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
              <p className="mt-4">
                <Link
                  href={section.href}
                  className="text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                >
                  {section.id === "programe" ? "Despre firmă" : "Sistemele din această direcție"}
                </Link>
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
