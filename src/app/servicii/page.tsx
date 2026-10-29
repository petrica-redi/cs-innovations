import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Icon, type IconName } from "@/components/Icons";
import { Screen } from "@/components/Screen";
import { Shapes } from "@/components/Shapes";
import { standards } from "@/lib/company";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Dezvoltare de platforme software la comandă, orchestrare AI, date și integrări, cercetare și calcul științific. Securitate și conformitate în fiecare proiect.",
  alternates: { canonical: "/servicii" },
};

const sections = [
  {
    id: "platforme",
    label: "Dezvoltare software",
    title: "Platforme software la comandă",
    screen: "/screens/sisci-case.jpg",
    domain: "sisci.vercel.app",
    alt: "Dosarul unui beneficiar în SISCI, cu pașii de la evaluare la închidere",
    text: "Aplicații web pentru instituții și echipe care țin dosare, programări, registre și rapoarte. Pornim de la procedura pe care oamenii o aplică deja și o transformăm în roluri, ecrane, fluxuri de aprobare și exporturi.",
    points: ["Analiză de proces și specificații", "Arhitectură, model de date și UX", "Roluri, permisiuni și jurnal de acțiuni", "Rapoarte, exporturi și documente tipărite", "Lucru pe teren, și fără semnal", "Mentenanță și dezvoltare continuă"],
    href: "/proiecte?domeniu=Public%20%C8%99i%20social",
  },
  {
    id: "ai",
    label: "Orchestrare AI",
    title: "Fluxuri AI în pași controlați",
    screen: "/screens/redi-health-staff.jpg",
    domain: "redi-health.vercel.app",
    alt: "Spațiul de lucru REDI Health, cu lista cererilor de ajutor medical",
    text: "Punem modele de limbaj, vorbire și imagine în fluxuri cu intrări clare, ieșiri validate și aprobare umană. Fiecare apel este urmărit, iar calitatea se măsoară pe cazuri de test înainte de fiecare schimbare.",
    points: ["Transcriere și structurarea notelor", "Căutare în documentele instituției, cu sursă", "Citirea imaginilor și a documentelor scanate", "Rutare între modele după sarcină și cost", "Evaluare, trasare și limite de cost", "Procesare în regiuni din UE"],
    href: "/orchestrare-ai",
  },
  {
    id: "date",
    label: "Date și integrări",
    title: "Date, hărți și integrări",
    screen: "/screens/sentinel-map.jpg",
    domain: "sentinel-cbrn.vercel.app",
    alt: "Harta României din Sentinel, cu stațiile de măsurare",
    text: "Legăm platforma de sistemele existente prin API, importăm date istorice și publicăm hărți și tablouri de bord cu cifre agregate. Sentinel, de exemplu, adună date publice despre aer și radiație și dă alertă la depășirea pragurilor.",
    points: ["Integrări API pe specificația instituției", "Importuri și migrare de date", "Hărți și tablouri de bord", "Alerte pe praguri"],
    href: "/proiecte?domeniu=Date%20%C8%99i%20cercetare",
  },
  {
    id: "cercetare",
    label: "Cercetare",
    title: "Cercetare și calcul științific",
    screen: "/screens/chemistry-tools.jpg",
    domain: "chemistry-tools.vercel.app",
    alt: "Prima pagină Chemistry tools, cu cele șase simulatoare",
    text: "Construim programe pentru laborator și cercetare, în special în chimie și materiale. Chemistry tools reunește șase simulatoare, de la orbitali atomici la titrare, iar pentru echipele de cercetare facem evidența formulelor, a loturilor și a versiunilor de procedură.",
    points: ["Simulatoare și calcul științific", "Evidența formulelor și a loturilor", "Proiecte de inovare în chimie"],
    href: "/proiecte?domeniu=Date%20%C8%99i%20cercetare",
  },
];

const security = [
  ["Date în UE", "Găzduire și procesare în regiuni din Uniunea Europeană."],
  ["Acces pe roluri", "Fiecare utilizator vede și modifică doar ce îi permite rolul."],
  ["Jurnal de audit", "Cine a făcut ce și când, pentru fiecare dosar și document."],
  ["GDPR din proiectare", "Date minime, termene de păstrare și export la cerere."],
  ["Copii de siguranță", "Frecvența și locul copiilor urmează cerințele contractului."],
  ["Codul sursă al instituției", "Predăm codul, documentația și scenariile de recepție."],
];

const icons: Record<string, IconName> = { platforme: "platform", ai: "ai", date: "data", cercetare: "research" };
const securityIcons: IconName[] = ["cloud", "security", "audit", "test", "database", "code"];

export default function ServiciiPage() {
  return (
    <main className="flex-1">
      <PageHead label="Servicii" title="Ce construim">
        Platforme software la comandă, orchestrare AI, date și integrări, cercetare și calcul științific. Aceeași echipă
        merge de la analiză până la operarea sistemului.
      </PageHead>

      <section className="mx-auto max-w-[1200px] px-5 pt-24" aria-label="Pe scurt">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="focus-ring group relative block h-full overflow-hidden border border-line bg-white px-7 pt-9 pb-8 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0_25px_50px_-20px_rgba(38,32,81,0.3)]"
              >
                <span aria-hidden="true" className="big-num big-num-light absolute top-4 right-5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon name={icons[section.id]} className="size-12" />
                <h2 className="mt-6 text-[19px] font-bold">{section.title}</h2>
                <span className="link-arrow mt-4">
                  <span aria-hidden="true">→</span> Detalii
                </span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-flame transition-transform group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="mx-auto max-w-[1200px] space-y-28 px-5 py-28">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="grid scroll-mt-28 items-center gap-14 lg:grid-cols-2" aria-labelledby={`${section.id}-titlu`}>
            <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div aria-hidden="true" className={`absolute -bottom-5 h-[70%] w-[70%] bg-flame-soft ${index % 2 === 1 ? "-right-5" : "-left-5"}`} />
              <Screen src={section.screen} domain={section.domain} alt={section.alt} className="relative" />
            </div>
            <div>
              <p className="eyebrow">{section.label}</p>
              <h2 id={`${section.id}-titlu`} className="mt-3 text-[1.9rem] md:text-[2.25rem]">
                {section.title}
              </h2>
              <p className="mt-5 max-w-[60ch]">{section.text}</p>
              <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[15px] font-semibold text-ink">
                    <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-cta">
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={section.href} className="link-arrow focus-ring mt-8">
                <span aria-hidden="true">→</span> {section.id === "ai" ? "Arhitectura completă" : "Proiecte din domeniu"}
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section id="securitate" className="on-dark relative scroll-mt-20 overflow-hidden bg-night" aria-labelledby="securitate-titlu">
        <Shapes variant="band" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-24">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">Securitate și conformitate</p>
            <h2 id="securitate-titlu" className="mt-3 text-[2rem] md:text-[2.5rem]">
              Incluse în fiecare proiect
            </h2>
          </div>
          <dl className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {security.map(([title, text], index) => (
              <div key={title} className="relative overflow-hidden border border-white/10 bg-night-2/60 p-8">
                <span aria-hidden="true" className="big-num absolute top-3 right-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon name={securityIcons[index]} className="size-10" light />
                <dt className="mt-5 font-heading text-[19px] font-bold text-white">{title}</dt>
                <dd className="mt-2 text-[15px] leading-[1.75] text-lavender">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-24" aria-labelledby="practici">
        <p className="eyebrow">Inginerie</p>
        <h2 id="practici" className="mt-3 text-[2rem] md:text-[2.5rem]">
          Practici aplicate în fiecare proiect
        </h2>
        <dl className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {standards.map(([title, text]) => (
            <div key={title} className="border-t-2 border-line pt-5">
              <dt className="font-heading text-[18px] font-bold text-ink">{title}</dt>
              <dd className="mt-2 text-[15px]">{text}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
