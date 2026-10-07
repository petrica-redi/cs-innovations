import type { Metadata } from "next";
import Link from "next/link";
import { AreaTile } from "@/components/AreaTile";
import { PageHead } from "@/components/PageHead";
import { Screen } from "@/components/Screen";
import type { Area } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Servicii",
  description: "Platforme informatice, proiecte de inovare în chimie și instrumente pentru inovare socială.",
  alternates: { canonical: "/servicii" },
};

const sections: { id: string; area: Area; title: string; screen: string; domain: string; alt: string; paragraphs: string[] }[] = [
  {
    id: "platforme",
    area: "Platforme",
    title: "Platforme informatice",
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
    area: "Chimie",
    title: "Chimie",
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
    area: "Social",
    title: "Inovare socială și sănătate",
    screen: "/screens/redi-health-staff.jpg",
    domain: "redi-health.vercel.app",
    alt: "Lista cererilor de ajutor medical din spațiul de lucru REDI Health",
    paragraphs: [
      "Construim instrumente pentru echipele care lucrează direct cu oamenii dintr-o comunitate. SISCI urmărește cazul unui beneficiar de la prima evaluare până la închiderea dosarului, cu planul de intervenție și vizitele dintre ele.",
      "REDI Business îi ajută pe antreprenorii romi din Balcani să învețe, să-și scrie planul de afaceri și să se pregătească pentru un credit. REDI Health dă mediatorilor și cadrelor medicale un loc unde țin cererile de ajutor, pacienții și programările.",
    ],
  },
];

export default function ServiciiPage() {
  return (
    <main className="flex-1">
      <PageHead label="Ce oferim" title="Servicii">
        Lucrăm în trei domenii: platforme informatice, chimie și inovare socială.
      </PageHead>
      <nav aria-label="Secțiuni" className="border-b border-line bg-surface">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-6 gap-y-2 px-5 py-4 font-mono text-sm">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="focus-ring text-muted hover:text-flame">
              {section.title}
            </a>
          ))}
        </div>
      </nav>
      <div className="mx-auto max-w-[1200px] space-y-20 px-5 py-16">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <Screen src={section.screen} domain={section.domain} alt={section.alt} />
            </div>
            <div>
              <AreaTile area={section.area} />
              <h2 className="mt-5 text-3xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
              <Link
                href={`/proiecte?domeniu=${encodeURIComponent(section.area)}`}
                className="focus-ring mt-6 inline-block font-mono text-sm text-flame hover:underline"
              >
                Vezi proiectele →
              </Link>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
