import Link from "next/link";
import { OrchestrationTrace } from "@/components/OrchestrationTrace";
import { Screen } from "@/components/Screen";
import { capabilities, company, principles, programmes, stack, standards, steps } from "@/lib/company";
import { featured } from "@/lib/projects";

const credentials = [
  { label: programmes[0].kind, value: programmes[0].name },
  { label: programmes[1].kind, value: programmes[1].name },
  { label: "Platforme publice online", value: String(featured.length) },
  { label: "Birou", value: `București, din ${company.founded}` },
];

export default function Home() {
  const showcase = featured.slice(0, 4);

  return (
    <main className="flex-1">
      <section className="grid-paper relative overflow-hidden bg-night text-white">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 pt-16 pb-16 lg:grid-cols-[1.1fr_1fr] lg:pt-24 lg:pb-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-xs text-white/70">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-signal" />
              {company.tagline}
            </p>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-semibold md:text-[4rem]">
              Software de producție, cu AI care lucrează <span className="text-[#93c5fd]">sub control</span>.
            </h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-white/70">
              Proiectăm și construim platforme pentru sectorul public, sănătate și cercetare. Acolo unde un model AI aduce
              un câștig, îl punem într-un flux cu pași verificabili: sursă pentru fiecare răspuns, validare înainte de
              salvare și un om care aprobă.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring rounded-[4px] bg-flame px-5 py-3 text-sm font-medium hover:bg-[#1d4ed8]">
                Discutăm un proiect
              </Link>
              <Link
                href="/orchestrare-ai"
                className="focus-ring rounded-[4px] border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60"
              >
                Cum orchestrăm AI
              </Link>
            </div>
          </div>
          <OrchestrationTrace />
        </div>

        <div className="relative border-t border-white/10 bg-night/60">
          <dl className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-4">
            {credentials.map((item, index) => (
              <div
                key={item.label}
                className={`py-6 ${index % 2 === 1 ? "pl-6" : ""} ${index > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${
                  index > 1 ? "border-t border-white/10 lg:border-t-0" : ""
                }`}
              >
                <dt className="font-mono text-[11px] text-white/45">{item.label}</dt>
                <dd className="mt-1 text-lg font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-24" aria-labelledby="servicii">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-xs text-flame">Ce facem</p>
            <h2 id="servicii" className="mt-3 text-3xl font-semibold md:text-[2.75rem] md:leading-[1.1]">
              De la analiza procesului la sistemul care rulează în producție
            </h2>
          </div>
          <p className="max-w-[58ch] text-[17px] leading-relaxed text-muted">
            Aceeași echipă face analiza, arhitectura, codul, integrarea AI și operarea. Predăm sisteme care funcționează,
            împreună cu codul sursă și documentația lor.
          </p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.code} className="flex flex-col bg-surface p-8">
              <p className="font-mono text-xs text-muted">{item.code}</p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{item.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.points.map((point) => (
                  <li key={point} className="rounded-full bg-flame-soft px-3 py-1 font-mono text-xs text-[#1e40af]">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-night text-white" aria-labelledby="ai">
        <div className="mx-auto max-w-[1200px] px-5 py-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-xs text-signal">Orchestrare AI</p>
              <h2 id="ai" className="mt-3 text-3xl font-semibold md:text-[2.75rem] md:leading-[1.1]">
                Un model nu este un produs. Fluxul din jurul lui este.
              </h2>
            </div>
            <p className="max-w-[58ch] text-[17px] leading-relaxed text-white/65">
              Valoarea unui sistem AI pentru o instituție vine din pașii care îl fac predictibil: ce date primește, cum este
              verificat, cine aprobă și cum se vede ce a făcut.
            </p>
          </div>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <li key={item.title} className="bg-night-2 p-7">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/60">{item.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/orchestrare-ai" className="focus-ring mt-10 inline-block font-mono text-sm text-signal hover:underline">
            Arhitectura completă →
          </Link>
        </div>
      </section>

      <section className="grid-paper-light border-b border-line" aria-labelledby="proiecte">
        <div className="mx-auto max-w-[1200px] px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-flame">Proiecte</p>
              <h2 id="proiecte" className="mt-3 text-3xl font-semibold md:text-[2.75rem]">
                Sisteme pe care le puteți deschide acum
              </h2>
            </div>
            <Link href="/proiecte" className="focus-ring font-mono text-sm text-flame hover:underline">
              Tot portofoliul →
            </Link>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {showcase.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  rel="noreferrer"
                  className="focus-ring group flex h-full flex-col rounded-lg border border-line bg-surface p-4 transition-colors hover:border-flame"
                >
                  <Screen src={project.screen!} domain={project.domain!} alt={`Pagina ${project.name}, așa cum arată online`} sizes="(min-width: 768px) 45vw, 100vw" />
                  <div className="mt-5 flex items-baseline justify-between gap-4 px-1">
                    <h3 className="text-xl font-semibold group-hover:text-flame">{project.name} ↗</h3>
                    <span className="font-mono text-xs text-muted">{project.area}</span>
                  </div>
                  <p className="mt-2 flex-1 px-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                  {project.ai ? (
                    <p className="mx-1 mt-4 rounded-md border border-signal/40 bg-[#ecfdf9] px-3 py-2 text-sm text-[#0f5f56]">
                      <span className="font-mono text-xs">AI · </span>
                      {project.ai}
                    </p>
                  ) : null}
                  {project.tags ? (
                    <ul className="mt-4 flex flex-wrap gap-2 px-1 pb-1">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] text-muted">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-24" aria-labelledby="inginerie">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="font-mono text-xs text-flame">Inginerie</p>
            <h2 id="inginerie" className="mt-3 text-3xl font-semibold md:text-[2.75rem] md:leading-[1.1]">
              Standarde pe care le aplicăm în fiecare proiect
            </h2>
            <dl className="mt-10 space-y-6">
              {standards.map(([title, text]) => (
                <div key={title} className="grid gap-1 border-t border-line pt-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-semibold">{title}</dt>
                  <dd className="leading-relaxed text-muted">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="self-start rounded-lg border border-line bg-surface p-8 lg:sticky lg:top-24">
            <h3 className="text-lg font-semibold">Tehnologii</h3>
            <p className="mt-1 text-sm text-muted">Un set matur și bine documentat, ușor de preluat de orice echipă.</p>
            <dl className="mt-6 divide-y divide-line">
              {stack.map((row) => (
                <div key={row.group} className="grid gap-2 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="font-mono text-xs text-muted sm:pt-1">{row.group}</dt>
                  <dd className="flex flex-wrap gap-2">
                    {row.items.map((tech) => (
                      <span key={tech} className="rounded-[4px] border border-line bg-bg px-2.5 py-1 text-sm">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface" aria-labelledby="cum">
        <div className="mx-auto max-w-[1200px] px-5 py-24">
          <p className="font-mono text-xs text-flame">Livrare</p>
          <h2 id="cum" className="mt-3 text-3xl font-semibold md:text-[2.75rem]">
            Cum ajunge un sistem în producție
          </h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => (
              <li key={step.title} className="relative border-t-2 border-ink pt-5">
                <span className="absolute -top-[7px] left-0 size-3 rounded-full border-2 border-ink bg-surface" aria-hidden="true" />
                <p className="font-mono text-xs text-flame">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="grid-paper mx-auto flex max-w-[1200px] flex-col gap-8 overflow-hidden rounded-lg bg-night px-8 py-14 text-white md:flex-row md:items-center md:justify-between md:px-14">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Aveți un proces care merită automatizat?</h2>
            <p className="mt-3 max-w-[56ch] text-white/70">
              Pornim de la o discuție despre procedura actuală și vă spunem ce se poate construi, în ce ordine și unde are
              sens un model AI.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/contact" className="focus-ring rounded-[4px] bg-flame px-5 py-3 text-sm font-medium hover:bg-[#1d4ed8]">
              Discutăm un proiect
            </Link>
            <Link href="/pentru-autoritati" className="focus-ring rounded-[4px] border border-white/25 px-5 py-3 text-sm font-medium hover:border-white/60">
              Pentru sectorul public
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
