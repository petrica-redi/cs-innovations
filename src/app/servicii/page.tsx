import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Screen } from "@/components/Screen";
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

export default function ServiciiPage() {
  return (
    <main className="flex-1">
      <PageHead label="Servicii" title="Ce construim">
        Platforme software la comandă, orchestrare AI, date și integrări, cercetare și calcul științific. Aceeași echipă
        merge de la analiză până la operarea sistemului.
      </PageHead>
      <nav aria-label="Secțiuni" className="sticky top-16 z-20 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-6 gap-y-2 px-5 py-4 font-mono text-sm">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="focus-ring text-muted hover:text-flame">
              {section.label}
            </a>
          ))}
          <a href="#securitate" className="focus-ring text-muted hover:text-flame">
            Securitate
          </a>
        </div>
      </nav>
      <div className="mx-auto max-w-[1200px] space-y-24 px-5 py-20">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="grid scroll-mt-32 items-center gap-12 lg:grid-cols-2">
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <Screen src={section.screen} domain={section.domain} alt={section.alt} />
            </div>
            <div>
              <p className="font-mono text-xs text-flame">{section.label}</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{section.title}</h2>
              <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-muted">{section.text}</p>
              <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-2 text-[15px]">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-flame" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={section.href} className="focus-ring mt-7 inline-block font-mono text-sm text-flame hover:underline">
                {section.id === "ai" ? "Arhitectura completă →" : "Proiecte din domeniu →"}
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section id="securitate" className="scroll-mt-32 bg-night text-white" aria-labelledby="securitate-titlu">
        <div className="mx-auto max-w-[1200px] px-5 py-24">
          <p className="font-mono text-xs text-signal">Securitate și conformitate</p>
          <h2 id="securitate-titlu" className="mt-3 text-3xl font-semibold md:text-[2.75rem]">
            Incluse în fiecare proiect
          </h2>
          <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {security.map(([title, text]) => (
              <div key={title} className="bg-night-2 p-7">
                <dt className="text-lg font-semibold">{title}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-white/60">{text}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-16 text-xl font-semibold">Practici de inginerie</h3>
          <dl className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {standards.map(([title, text]) => (
              <div key={title} className="border-t border-white/10 pt-4">
                <dt className="font-medium">{title}</dt>
                <dd className="mt-1 text-[15px] text-white/60">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
