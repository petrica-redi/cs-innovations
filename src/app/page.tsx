import Link from "next/link";
import { Bento } from "@/components/Bento";
import { OrchestrationGraph } from "@/components/OrchestrationGraph";
import { Showcase } from "@/components/Showcase";
import { company, principles, programmes, stack, standards, steps } from "@/lib/company";
import { featured } from "@/lib/projects";

const stats = [
  { value: company.founded, label: "anul înființării" },
  { value: String(featured.length), label: "platforme publice online" },
  { value: "5", label: "limbi de interfață livrate" },
  { value: "UE", label: "găzduire și procesare a datelor" },
];

function SectionHead({ eyebrow, title, text, dark }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
      <div>
        <p className={`font-mono text-xs ${dark ? "text-[#aab8ff]" : "text-flame"}`}>{eyebrow}</p>
        <h2 className="mt-4 text-[2.25rem] leading-[1.05] font-semibold md:text-[3.25rem]">{title}</h2>
      </div>
      {text ? <p className={`max-w-[52ch] text-[17px] leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="dot-grid absolute inset-0" />
        <div aria-hidden="true" className="absolute top-[-20%] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,91,253,0.14),transparent)]" />
        <div className="relative mx-auto max-w-[1200px] px-5 pt-16 pb-20 text-center md:pt-24">
          <Link
            href="/despre"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pr-3 pl-1 text-[13px] text-muted shadow-sm backdrop-blur transition-colors hover:text-ink"
          >
            <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-white">UE</span>
            Selectată în {programmes[0].name} și {programmes[1].name}
            <span aria-hidden="true">→</span>
          </Link>
          <h1 className="mx-auto mt-8 max-w-[15ch] text-[clamp(2.75rem,7.2vw,5.75rem)] leading-[0.98] font-semibold tracking-[-0.045em]">
            Software de producție.{" "}
            <span className="bg-[linear-gradient(90deg,#3b5bfd,#7c8cff_55%,#0c0c0d)] bg-clip-text text-transparent">
              AI sub control.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl">
            Proiectăm și construim platforme pentru sectorul public, sănătate și cercetare. Modelele AI lucrează în fluxuri cu
            pași verificabili, validare înainte de salvare și un om care aprobă.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="focus-ring rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(12,12,13,0.6)] transition-colors hover:bg-[#2a2a2e]"
            >
              Discutăm un proiect
            </Link>
            <Link
              href="/orchestrare-ai"
              className="focus-ring rounded-full border border-line bg-surface px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-ink"
            >
              Cum orchestrăm AI <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-16 text-left md:mt-20">
            <OrchestrationGraph />
          </div>
        </div>
      </section>

      <section aria-label="Pe scurt" className="border-y border-line bg-surface">
        <dl className="mx-auto grid max-w-[1200px] grid-cols-2 gap-px bg-line lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="bg-surface px-5 py-10 lg:px-8">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block text-[2.75rem] leading-none font-semibold tracking-[-0.04em] md:text-[3.5rem]">{item.value}</span>
                <span className="mt-3 block text-sm text-muted">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="servicii">
        <SectionHead
          eyebrow="Ce construim"
          title="De la analiza procesului la sistemul care rulează"
          text="Aceeași echipă face analiza, arhitectura, codul, integrarea AI și operarea. Predăm sisteme care funcționează, împreună cu codul sursă și documentația."
        />
        <div className="mt-14">
          <Bento />
        </div>
      </section>

      <section className="border-t border-line bg-surface" aria-labelledby="proiecte">
        <div className="mx-auto max-w-[1200px] px-5 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs text-flame">Proiecte</p>
              <h2 id="proiecte" className="mt-4 max-w-[16ch] text-[2.25rem] leading-[1.05] font-semibold md:text-[3.25rem]">
                Sisteme pe care le puteți deschide acum
              </h2>
            </div>
            <Link href="/proiecte" className="focus-ring shrink-0 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink">
              Tot portofoliul →
            </Link>
          </div>
          <div className="mt-14">
            <Showcase names={["REDI Business", "Sentinel", "REDI Health", "SISCI", "REDI NGO"]} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night text-white" aria-labelledby="ai">
        <div aria-hidden="true" className="glow-cobalt absolute inset-x-0 top-0 h-[500px] opacity-70" />
        <div className="relative mx-auto grid max-w-[1200px] gap-16 px-5 py-28 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs text-[#aab8ff]">Orchestrare AI</p>
            <h2 id="ai" className="mt-4 text-[2.25rem] leading-[1.05] font-semibold md:text-[3.25rem]">
              Un model nu este un produs. Fluxul din jurul lui este.
            </h2>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-white/60">
              Valoarea unui sistem AI pentru o instituție vine din pașii care îl fac predictibil: ce date primește, cum este
              verificat, cine aprobă și cum se vede ce a făcut.
            </p>
            <Link
              href="/orchestrare-ai"
              className="focus-ring mt-9 inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white/85"
            >
              Arhitectura completă →
            </Link>
          </div>
          <ol className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((item, index) => (
              <li key={item.title} className="reveal grid grid-cols-[3.5rem_1fr] gap-4 py-8">
                <span className="font-mono text-sm text-white/35">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/60">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="inginerie">
        <SectionHead
          eyebrow="Inginerie"
          title="Standarde aplicate în fiecare proiect"
          text="Un set de tehnologii matur și bine documentat, ușor de preluat de orice echipă, și practici care țin sistemul stabil după lansare."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <dl className="reveal grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {standards.map(([title, text]) => (
              <div key={title} className="bg-surface p-6">
                <dt className="font-semibold">{title}</dt>
                <dd className="mt-1.5 text-[14px] leading-relaxed text-muted">{text}</dd>
              </div>
            ))}
          </dl>
          <div className="reveal rounded-2xl border border-line bg-surface p-7">
            <p className="font-mono text-xs text-muted">Tehnologii</p>
            <dl className="mt-4 divide-y divide-line">
              {stack.map((row) => (
                <div key={row.group} className="grid gap-2 py-4 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
                  <dt className="text-sm font-medium sm:pt-1">{row.group}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {row.items.map((tech) => (
                      <span key={tech} className="rounded-full border border-line bg-bg px-3 py-1 text-[13px]">
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

      <section className="border-t border-line bg-surface" aria-labelledby="cum">
        <div className="mx-auto max-w-[1200px] px-5 py-28">
          <SectionHead eyebrow="Livrare" title="Cum ajunge un sistem în producție" />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
            <span aria-hidden="true" className="absolute top-5 right-0 left-0 hidden h-px bg-line md:block" />
            {steps.map((step, index) => (
              <li key={step.title} className="reveal relative">
                <span className="relative grid size-10 place-items-center rounded-full border border-line bg-surface font-mono text-sm">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl bg-night px-8 py-20 text-center text-white md:px-16">
          <div aria-hidden="true" className="dot-grid-dark absolute inset-0 opacity-70" />
          <div aria-hidden="true" className="glow-cobalt absolute inset-0" />
          <div className="relative">
            <h2 className="mx-auto max-w-[18ch] text-[2.25rem] leading-[1.05] font-semibold md:text-[3.5rem]">
              Aveți un proces care merită automatizat?
            </h2>
            <p className="mx-auto mt-5 max-w-[56ch] text-lg text-white/65">
              Pornim de la procedura actuală și vă spunem ce se poate construi, în ce ordine și unde are sens un model AI.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="focus-ring rounded-full bg-white px-6 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-white/85">
                Discutăm un proiect
              </Link>
              <Link
                href="/pentru-autoritati"
                className="focus-ring rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-medium transition-colors hover:border-white/60"
              >
                Pentru sectorul public
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
