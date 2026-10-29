import type { Metadata } from "next";
import Link from "next/link";
import { OrchestrationGraph } from "@/components/OrchestrationGraph";
import { Icon, type IconName } from "@/components/Icons";
import { PageHead } from "@/components/PageHead";
import { Shapes } from "@/components/Shapes";
import { principles } from "@/lib/company";
import { featured, others } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Orchestrare AI",
  description:
    "Cum construiește CS Innovations sisteme AI pentru instituții: fluxuri în pași, modele alese pe sarcină, răspunsuri cu sursă, validare, aprobare umană, urmărirea fiecărui apel și date păstrate în UE.",
  alternates: { canonical: "/orchestrare-ai" },
};

const layers = [
  { name: "Interfață", text: "Aplicația în care lucrează oamenii, cu ecranul în care văd ce a propus modelul și aprobă sau corectează." },
  { name: "Orchestrator", text: "Definește pașii fluxului, ordinea lor, reîncercările și ce se întâmplă când un pas eșuează." },
  { name: "Modele și unelte", text: "Modele de limbaj, vorbire și imagine, căutarea în documente și apelurile către sistemele instituției." },
  { name: "Control", text: "Validare pe schemă, reguli de business, limite de cost și de volum, aprobarea umană a rezultatelor." },
  { name: "Observabilitate", text: "Fiecare apel este trasat: intrare, model, versiunea promptului, cost, durată și rezultat. Seturile de test măsoară calitatea." },
  { name: "Date", text: "Baza de date a aplicației și documentele instituției, în regiuni din Uniunea Europeană, cu acces pe roluri." },
];

const fit = [
  ["Text liber de structurat", "Note, cereri, rapoarte de teren care trebuie să devină câmpuri într-un dosar."],
  ["Documente lungi", "Proceduri, legislație și arhive în care oamenii caută zilnic același tip de răspuns."],
  ["Vorbire", "Consultații și interviuri care azi se transcriu de mână."],
  ["Imagini", "Fotografii de documente, rețete sau radiografii care trebuie citite și explicate."],
];

const principleIcons: IconName[] = ["flow", "audit", "test", "security", "data", "cloud"];

const applied = ["Scriva", "REDI Health", "Optim Dental", "Levio"]
  .map((name) => [...featured, ...others].find((p) => p.name === name))
  .filter((p) => p !== undefined);

export default function OrchestrarePage() {
  return (
    <main className="flex-1">
      <PageHead label="Orchestrare AI" title="Sisteme AI care pot fi verificate">
        Orchestrarea înseamnă să puneți un model AI într-un flux de lucru cu pași clari: ce date primește, ce face cu ele,
        cum este verificat rezultatul, cine îl aprobă și unde rămâne urma fiecărei acțiuni. Așa construim sistemele AI pentru
        instituții și clinici.
      </PageHead>

      <div className="mx-auto max-w-[1200px] px-5 pt-14">
        <OrchestrationGraph />
      </div>

      <section className="mx-auto max-w-[1200px] px-5 py-24" aria-labelledby="arhitectura">
        <p className="eyebrow">Arhitectură</p>
        <h2 id="arhitectura" className="mt-3 text-[2rem] md:text-[2.5rem]">
          Straturile unui sistem orchestrat
        </h2>
        <ol className="mt-12 border-t-2 border-line">
          {layers.map((layer, index) => (
            <li key={layer.name} className="grid gap-2 border-b border-line py-7 md:grid-cols-[5rem_15rem_1fr] md:items-baseline md:gap-6">
              <span className="font-heading text-[2rem] leading-none font-extrabold text-flame/40">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-[19px]">{layer.name}</h3>
              <p className="leading-relaxed text-muted">{layer.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="on-dark relative overflow-hidden bg-night text-white" aria-labelledby="principii">
        <Shapes variant="band" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-24">
          <p className="eyebrow">Principii</p>
          <h2 id="principii" className="mt-3 text-[2rem] md:text-[2.5rem]">
            Ce garantează fiecare flux
          </h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, index) => (
              <li key={item.title} className="relative overflow-hidden border border-white/10 bg-night-2/60 p-8">
                <span aria-hidden="true" className="big-num absolute top-3 right-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon name={principleIcons[index]} className="size-10" light />
                <h3 className="mt-5 text-[19px]">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-lavender">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 lg:grid-cols-2" aria-labelledby="unde">
        <div>
          <p className="eyebrow">Unde are sens</p>
          <h2 id="unde" className="mt-3 text-[1.9rem] md:text-[2.25rem]">
            Folosim AI acolo unde munca este cu text, vorbire sau imagini
          </h2>
          <p className="mt-4 max-w-[56ch] leading-relaxed text-muted">
            Calculele, termenele și regulile fixe rămân în cod obișnuit, care dă de fiecare dată același rezultat. Modelul
            preia partea pe care oamenii o fac azi citind, ascultând sau rescriind.
          </p>
          <dl className="mt-8 space-y-5">
            {fit.map(([title, text]) => (
              <div key={title} className="border-t border-line pt-4">
                <dt className="font-semibold">{title}</dt>
                <dd className="mt-1 text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="eyebrow">Aplicat</p>
          <h2 className="mt-3 text-[1.9rem] md:text-[2.25rem]">Sisteme cu AI construite de noi</h2>
          <ul className="mt-8 space-y-4">
            {applied.map((project) => (
              <li key={project.name}>
                <a
                  href={project.href}
                  rel="noreferrer"
                  className="focus-ring group block border border-line bg-surface p-6 transition-colors hover:border-cta"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-cta">{project.name} ↗</h3>
                    <span className="text-[12px] font-extrabold tracking-[0.06em] text-violet uppercase">{project.area}</span>
                  </div>
                  <p className="mt-2 leading-relaxed text-muted">{project.ai ?? project.summary}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-5 pb-24">
        <div className="on-dark relative mx-auto flex max-w-[1200px] flex-col gap-6 overflow-hidden bg-[linear-gradient(110deg,#262051_0%,#332d5f_55%,#3d2f7a_100%)] px-8 py-16 text-white md:flex-row md:items-center md:justify-between md:px-14">
          <Shapes variant="band" />
          <div className="relative">
            <h2 className="text-[1.6rem] md:text-[2rem]">Evaluăm împreună un flux din instituția dumneavoastră</h2>
            <p className="mt-3 max-w-[56ch] text-white/75">
              Alegem un proces, măsurăm cât durează azi și construim un pilot pe date de test, cu rezultatele comparate.
            </p>
          </div>
          <Link href="/contact" className="btn btn-line focus-ring relative shrink-0 self-start md:self-center">
            Discutăm un proiect
          </Link>
        </div>
      </section>
    </main>
  );
}
