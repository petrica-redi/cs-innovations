import Link from "next/link";
import { AreaTile } from "@/components/AreaTile";
import { Screen } from "@/components/Screen";
import { company, programmes, steps } from "@/lib/company";
import { featured, others, type Area } from "@/lib/projects";

const areasOfWork: { area: Area; title: string; text: string }[] = [
  {
    area: "Platforme",
    title: "Platforme informatice",
    text: "Aplicații web pentru echipe care lucrează cu dosare, consultații sau date de la senzori. Pornim de la procedura pe care oamenii o aplică deja.",
  },
  {
    area: "Chimie",
    title: "Chimie",
    text: "Proiecte de inovare în chimie și programe pentru laborator. Chemistry tools reunește șase simulatoare, de la orbitali atomici la titrare.",
  },
  {
    area: "Social",
    title: "Inovare socială",
    text: "Instrumente pentru cei care lucrează direct cu oamenii dintr-o comunitate: asistenți sociali, mediatori sanitari, consilieri de afaceri.",
  },
  {
    area: "Sănătate",
    title: "Sănătate",
    text: "Educație pentru sănătate, consultații la distanță și notițe clinice pregătite pentru medic, cu decizia lăsată la el.",
  },
];

const figures = [
  { value: String(featured.length), label: "platforme publice" },
  { value: String(others.length), label: "alte lucrări" },
  { value: String(programmes.length), label: "programe UE" },
  { value: company.founded, label: "anul înființării" },
];

export default function Home() {
  const showcase = featured.slice(0, 4);

  return (
    <main className="flex-1">
      <section className="grid-paper relative overflow-hidden bg-night text-white">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 pt-16 pb-14 lg:grid-cols-[1fr_1.05fr] lg:pt-24">
          <div>
            <p className="font-mono text-xs text-white/55">
              {company.legalName} · Blejești, Teleorman · din {company.founded}
            </p>
            <h1 className="mt-5 text-[2.5rem] leading-[1.08] font-semibold md:text-[3.5rem]">
              Proiectăm platforme pentru servicii sociale, sănătate și <span className="text-[#a996ff]">laborator</span>.
            </h1>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-white/70">
              O conduce {company.founder}, chimist de formare, care proiectează și construiește platformele firmei.
              Le vedeți mai jos, așa cum arată online.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/proiecte" className="focus-ring rounded-[4px] bg-flame px-5 py-3 text-sm font-medium hover:bg-[#6b50ff]">
                Vezi proiectele
              </Link>
              <Link
                href="/pentru-autoritati"
                className="focus-ring rounded-[4px] border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60"
              >
                Pentru autorități contractante
              </Link>
            </div>
          </div>
          <div className="relative pb-20 lg:pb-28">
            <Screen
              src="/screens/sisci-case.jpg"
              domain="sisci.vercel.app"
              alt="Dosarul unui beneficiar în SISCI, cu pașii de la evaluare la închidere"
              priority
              dark
            />
            <Screen
              src="/screens/redi-health-staff.jpg"
              domain="redi-health.vercel.app"
              alt="Lista cererilor de ajutor medical din spațiul de lucru REDI Health"
              sizes="(min-width: 1024px) 30vw, 60vw"
              dark
              className="absolute right-0 bottom-0 w-[60%] xl:right-[-5%]"
            />
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-[1200px] gap-px px-5 md:grid-cols-[auto_1fr_1fr]">
            <p className="py-6 pr-10 font-mono text-xs text-white/50 md:self-center">Programe europene</p>
            {programmes.map((item) => (
              <a
                key={item.name}
                href={item.href}
                rel="noreferrer"
                className="focus-ring group block border-t border-white/10 py-6 md:border-t-0 md:border-l md:px-8"
              >
                <span className="font-mono text-xs text-[#a996ff]">{item.kind}</span>
                <span className="mt-1 block text-lg font-medium group-hover:underline">{item.name} ↗</span>
                <span className="mt-1 block text-sm leading-relaxed text-white/60">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="În cifre" className="border-b border-line bg-surface">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 md:grid-cols-4">
          {figures.map((item, index) => (
            <div key={item.label} className={`py-8 ${index > 0 ? "md:border-l md:border-line md:pl-8" : ""}`}>
              <dt className="font-mono text-xs text-muted">{item.label}</dt>
              <dd className="mt-1 text-4xl font-semibold tracking-tight">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20" aria-labelledby="ce-facem">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="ce-facem" className="text-3xl font-semibold md:text-4xl">
            Ce facem
          </h2>
          <p className="max-w-[46ch] text-sm text-muted">Cifra din colțul fiecărui simbol arată câte proiecte avem în acel domeniu.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areasOfWork.map((item) => (
            <Link
              key={item.area}
              href={`/proiecte?domeniu=${encodeURIComponent(item.area)}`}
              className="focus-ring group flex flex-col rounded-md border border-line bg-surface p-6 transition-colors hover:border-flame"
            >
              <AreaTile area={item.area} />
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
              <span className="mt-5 font-mono text-xs text-flame group-hover:underline">Proiectele →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid-paper-light border-y border-line" aria-labelledby="platforme">
        <div className="mx-auto max-w-[1200px] px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="platforme" className="text-3xl font-semibold md:text-4xl">
              Platforme pe care le-am construit
            </h2>
            <Link href="/proiecte" className="focus-ring font-mono text-sm text-flame hover:underline">
              Toate proiectele →
            </Link>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {showcase.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  rel="noreferrer"
                  className="focus-ring group block h-full rounded-md border border-line bg-surface p-4 transition-colors hover:border-flame"
                >
                  <Screen src={project.screen!} domain={project.domain!} alt={`Pagina ${project.name}, așa cum arată online`} sizes="(min-width: 768px) 45vw, 100vw" />
                  <div className="mt-5 flex items-baseline justify-between gap-4 px-1">
                    <h3 className="text-xl font-semibold group-hover:text-flame">{project.name}</h3>
                    <span className="font-mono text-xs text-muted">{project.area}</span>
                  </div>
                  <p className="mt-2 px-1 pb-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-20" aria-labelledby="cum">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-end">
          <h2 id="cum" className="text-3xl font-semibold md:text-4xl">
            Cum lucrăm
          </h2>
          <p className="max-w-[60ch] text-muted">
            Punem aplicația devreme în mâna oamenilor care o vor folosi și o corectăm după ce ne spun ei.
          </p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((text, index) => (
            <li key={text} className="relative border-t-2 border-ink pt-5">
              <span className="absolute -top-[7px] left-0 size-3 rounded-full border-2 border-ink bg-bg" aria-hidden="true" />
              <p className="font-mono text-xs text-flame">Pasul {index + 1}</p>
              <p className="mt-2 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-md bg-flame px-8 py-10 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Pregătiți achiziția unei platforme?</h2>
            <p className="mt-2 max-w-[56ch] text-white/80">
              Am descris ce primește o autoritate la finalul unui contract, cu exemplul SISCI pe care îl puteți încerca.
            </p>
          </div>
          <Link href="/pentru-autoritati" className="focus-ring shrink-0 rounded-[4px] bg-white px-5 py-3 text-sm font-medium text-ink hover:bg-white/90">
            Pentru autorități contractante
          </Link>
        </div>
      </section>
    </main>
  );
}
