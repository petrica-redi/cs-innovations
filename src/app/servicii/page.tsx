import type { Metadata } from "next";
import Link from "next/link";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Servicii",
  description: "Platforme informatice, proiecte de inovare în chimie și instrumente pentru inovare socială.",
};

const sections = [
  {
    id: "platforme",
    title: "Platforme informatice",
    href: "/proiecte?domeniu=Platforme",
    screen: "/screens/sentinel-map.jpg",
    domain: "sentinel-cbrn.vercel.app",
    alt: "Harta stațiilor de senzori din Sentinel",
    paragraphs: [
      "Proiectăm și construim aplicații web pentru instituții și echipe care țin evidența unor dosare, consultații sau măsurători. Pornim de la procedura pe care oamenii o aplică deja și o transformăm în conturi, ecrane și rapoarte, cu interfața în limba română.",
      "Acolo unde ajută, folosim un model de limbaj care caută în documentele proiectului sau scrie o primă variantă de text. Decizia rămâne la persoana care semnează, iar datele rămân la instituție. La final predăm codul și manualul, ca echipa să poată continua și fără noi.",
    ],
  },
  {
    id: "chimie",
    title: "Chimie",
    href: "/proiecte?domeniu=Chimie",
    screen: "/screens/chemistry-tools.jpg",
    domain: "chemistry-tools.vercel.app",
    alt: "Prima pagină Chemistry tools, cu cele șase simulatoare",
    paragraphs: [
      "Partea de chimie a firmei pornește de la formarea lui Petrică Dulgheru. Lucrăm la proiecte de inovare în chimie și construim programe care ușurează munca de laborator.",
      "Chemistry tools reunește șase simulatoare, de la orbitali atomici la titrare. Pentru o echipă de cercetare putem construi și evidența formulelor: ce versiune s-a folosit la fiecare lot și cine a modificat un pas al procedurii.",
    ],
  },
  {
    id: "social",
    title: "Inovare socială",
    href: "/proiecte?domeniu=Social",
    screen: "/screens/redi-business.jpg",
    domain: "redi.business",
    alt: "Prima pagină REDI Business, cu primul din cei cinci pași",
    paragraphs: [
      "Construim instrumente pentru echipele care lucrează direct cu oamenii dintr-o comunitate. SISCI urmărește cazul unui beneficiar de la prima evaluare până la închiderea dosarului, cu planul de intervenție și vizitele dintre ele.",
      "REDI Business îi ajută pe antreprenorii romi din Balcani să învețe, să-și scrie planul de afaceri și să se pregătească pentru un credit. REDI Health dă mediatorilor sanitari un loc unde își țin cazurile și trimiterile.",
    ],
  },
];

export default function ServiciiPage() {
  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 py-16">
      <h1 className="font-serif text-[2.6rem] leading-[1.1] md:text-5xl">Servicii</h1>
      <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
        Lucrăm în trei domenii: platforme informatice, chimie și inovare socială.
      </p>
      <div className="mt-14 space-y-20">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <Screen src={section.screen} domain={section.domain} alt={section.alt} />
            </div>
            <div>
              <h2 className="font-serif text-3xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
              <Link
                href={section.href}
                className="mt-5 inline-block text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                Vezi proiectele
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
