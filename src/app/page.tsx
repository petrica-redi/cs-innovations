import Image from "next/image";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icons";
import { OrchestrationGraph } from "@/components/OrchestrationGraph";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Shapes } from "@/components/Shapes";
import { capabilities, company, principles, programmes, stack, steps } from "@/lib/company";
import { featured } from "@/lib/projects";

const strip = [
  [programmes[0].name, programmes[0].kind],
  [programmes[1].name, programmes[1].kind],
  [`Din ${company.founded}`, "București"],
  ["Date în UE", "Găzduire și procesare"],
  ["Cod sursă", "Predat instituției"],
];

const capabilityIcons: IconName[] = ["platform", "ai", "data", "security"];

const services: { icon: IconName; title: string; text: string; href: string }[] = [
  { icon: "platform", title: "Platforme la comandă", text: "Aplicații web pentru dosare, programări, registre și rapoarte, construite pe procedura instituției.", href: "/servicii#platforme" },
  { icon: "ai", title: "Orchestrare AI", text: "Modele de limbaj, vorbire și imagine în fluxuri cu validare, aprobare umană și jurnal.", href: "/orchestrare-ai" },
  { icon: "data", title: "Date și integrări", text: "Integrări prin API, importuri de date istorice, hărți și tablouri de bord cu cifre agregate.", href: "/servicii#date" },
  { icon: "research", title: "Calcul științific", text: "Simulatoare și programe de laborator, cu evidența formulelor, a loturilor și a versiunilor.", href: "/servicii#cercetare" },
  { icon: "security", title: "Securitate și GDPR", text: "Acces pe roluri, jurnal de audit, date minime și găzduire în regiuni din Uniunea Europeană.", href: "/servicii#securitate" },
  { icon: "ops", title: "Operare și mentenanță", text: "Monitorizare în producție, copii de siguranță, actualizări și dezvoltare continuă după lansare.", href: "/servicii" },
];

const tech: { icon: IconName; label: string }[] = [
  { icon: "code", label: "Aplicații web" },
  { icon: "database", label: "Baze de date" },
  { icon: "ai", label: "Modele AI" },
  { icon: "flow", label: "Orchestrare" },
  { icon: "cloud", label: "Găzduire în UE" },
  { icon: "test", label: "Teste automate" },
];

const showcase = ["Platforma Mediere Publică", "REDI Health", "Sentinel", "REDI Business", "Scriva", "Chemistry tools"]
  .map((name) => featured.find((p) => p.name === name))
  .filter((p) => p !== undefined);

export default function Home() {
  return (
    <main className="flex-1">
      <section className="on-dark relative overflow-hidden bg-night">
        <Shapes variant="hero" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-14 px-5 pt-24 pb-28 lg:grid-cols-[1.05fr_1fr] lg:pt-28 lg:pb-32">
          <div>
            <p className="text-[19px] text-white/90">{"// "}Dezvoltare software și orchestrare AI</p>
            <h1 className="mt-5 text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[1.08] uppercase">
              Software de producție. AI sub control.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.8] text-white/80">
              Construim platforme pentru sectorul public, sănătate și cercetare. Modelele AI lucrează în fluxuri cu pași
              verificabili, validare înainte de salvare și un om care aprobă.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn focus-ring">
                Discutăm un proiect
              </Link>
              <Link href="/orchestrare-ai" className="btn btn-line focus-ring">
                Cum orchestrăm AI
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[560px] pb-10 lg:pb-0">
            <div className="relative ml-[12%] aspect-[16/10] overflow-hidden border-[6px] border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
              <Image src="/screens/redi-health-staff.jpg" alt="Spațiul de lucru REDI Health" fill priority sizes="(min-width: 1024px) 500px, 90vw" className="object-cover object-top" />
            </div>
            <div className="absolute bottom-0 left-0 w-[62%] lg:-bottom-16">
              <div className="relative aspect-[16/10] overflow-hidden border-[6px] border-white shadow-[0_40px_80px_-25px_rgba(0,0,0,0.75)]">
                <Image src="/screens/sisci-case.jpg" alt="Dosarul unui beneficiar în Platforma Mediere Publică" fill priority sizes="(min-width: 1024px) 340px, 60vw" className="object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Pe scurt" className="border-b border-line bg-soft">
        <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-6 px-5 py-9 sm:grid-cols-3 lg:grid-cols-5">
          {strip.map(([title, sub]) => (
            <li key={title} className="flex items-center gap-3">
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center bg-[#e4e4ea] font-heading text-xs font-extrabold text-[#9a98ad]">
                {title.slice(0, 2).toUpperCase()}
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-[15px] font-bold text-[#8d8b9c]">{title}</span>
                <span className="block text-[12px] text-[#a3a3a3]">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto grid max-w-[1200px] items-center gap-16 px-5 py-28 lg:grid-cols-2" aria-labelledby="despre">
        <div>
          <p className="eyebrow">Despre companie</p>
          <h2 id="despre" className="mt-3 text-[2rem] md:text-[2.5rem]">
            Partenerul tehnic pentru platforme și AI
          </h2>
          <p className="mt-5 max-w-[56ch]">
            {company.brand} construiește aplicații web pentru instituții, clinici și echipe de cercetare. Aceeași echipă face
            analiza, arhitectura, codul, integrarea modelelor AI și operarea, iar la final predă codul sursă și documentația.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {[
              { icon: "audit" as const, title: "Trasabilitate", text: "Fiecare acțiune și fiecare apel de model rămân în jurnal." },
              { icon: "security" as const, title: "Date în UE", text: "Găzduire și procesare în regiuni din Uniunea Europeană." },
            ].map((item) => (
              <div key={item.title}>
                <Icon name={item.icon} className="size-10" />
                <h3 className="mt-4 border-b border-line pb-4 text-[18px] font-semibold">{item.title}</h3>
                <p className="mt-4 text-[15px]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative pb-16 lg:pr-6">
          <div className="relative aspect-[16/11] overflow-hidden shadow-[0_30px_60px_-30px_rgba(20,29,56,0.5)]">
            <Image src="/screens/sentinel-map.jpg" alt="Harta Sentinel cu stațiile de măsurare din România" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-left" />
          </div>
          <div className="absolute right-0 bottom-0 w-[48%] border-[6px] border-white shadow-[0_30px_60px_-20px_rgba(20,29,56,0.5)]">
            <div className="relative aspect-[4/3]">
              <Image src="/screens/redi-business.jpg" alt="Pagina REDI Business" fill sizes="280px" className="object-cover object-top" />
            </div>
          </div>
          <Link href="/despre" className="link-arrow focus-ring absolute bottom-3 left-6">
            <span aria-hidden="true">→</span> Despre companie
          </Link>
        </div>
      </section>

      <section className="on-dark relative bg-[linear-gradient(to_bottom,var(--night)_78%,#fff_78%)]" aria-labelledby="dece">
        <div className="mx-auto max-w-[1200px] px-5 pt-24">
          <SectionTitle center eyebrow="De ce CS Innovations" title="Software care rămâne în funcțiune după lansare" id="dece" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <li key={item.code} className="reveal group relative overflow-hidden border border-white/10 bg-night-2/60 px-7 pt-10 pb-24 transition-colors hover:bg-night-2">
                <span aria-hidden="true" className="big-num absolute top-3 left-4">
                  {item.code}
                </span>
                <h3 className="relative text-[20px]">{item.title}</h3>
                <p className="relative mt-3 text-[15px] leading-[1.75] text-lavender">{item.text}</p>
                <span aria-hidden="true" className="absolute -right-10 -bottom-10 size-36 rounded-full bg-white/[0.04]" />
                <span className="absolute right-6 bottom-6">
                  <Icon name={capabilityIcons[index]} className="size-11" light />
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {[
              { value: String(featured.length), label: "Platforme publice online", text: "Le puteți deschide acum: management de caz, sănătate, date de mediu, cercetare.", src: "/screens/sentinel-map.jpg", tint: "from-[#43baff]/70" },
              { value: "5", label: "Limbi de interfață livrate", text: "Română, engleză, albaneză, italiană și romani, în platformele aflate online.", src: "/screens/redi-ngo.jpg", tint: "from-[#8c78ff]/70" },
            ].map((card) => (
              <div key={card.label} className="reveal relative overflow-hidden bg-deep px-9 py-12">
                <Image src={card.src} alt="" fill sizes="(min-width: 768px) 600px, 100vw" className="object-cover opacity-15 blur-[2px] grayscale" />
                <div aria-hidden="true" className={`absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l ${card.tint} to-transparent [clip-path:polygon(45%_0,100%_0,100%_100%,0_100%)]`} />
                <div className="relative">
                  <p className="font-heading text-[3rem] leading-none font-extrabold text-white">{card.value}</p>
                  <h3 className="mt-3 text-[20px]">{card.label}</h3>
                  <p className="mt-2 max-w-[42ch] text-[15px] text-white/75">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="servicii">
        <SectionTitle
          eyebrow="Servicii"
          title="Ce construim pentru instituții și companii"
          id="servicii"
          aside={
            <Link href="/servicii" className="btn focus-ring">
              Toate serviciile
            </Link>
          }
        />
        <ul className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <li key={item.title} className="reveal grid grid-cols-[3.25rem_1fr] gap-5">
              <Icon name={item.icon} className="size-11" />
              <div>
                <h3 className="text-[19px] font-bold">
                  <Link href={item.href} className="focus-ring hover:text-cta">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-[15px]">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative z-10 px-5">
        <div className="on-dark relative mx-auto max-w-[1200px] overflow-hidden bg-[linear-gradient(110deg,#262051_0%,#332d5f_55%,#3d2f7a_100%)] px-8 py-16 md:px-16 md:py-20">
          <Shapes variant="band" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[18px] text-white/85">{"// "}Pornim de la procedura dumneavoastră</p>
              <h2 className="mt-3 max-w-[22ch] text-[2rem] leading-[1.15] md:text-[2.75rem]">Aveți un proces care merită automatizat?</h2>
            </div>
            <Link href="/contact" className="btn btn-line focus-ring shrink-0 self-start md:self-center">
              Discutăm un proiect
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-[-120px] bg-soft pt-[200px] pb-28" aria-labelledby="proiecte">
        <div className="mx-auto max-w-[1200px] px-5">
          <SectionTitle
            eyebrow="Proiecte"
            title="Sisteme pe care le puteți deschide acum"
            id="proiecte"
            aside={<p className="text-[15px]">Imaginile sunt capturi ale versiunilor online. Un clic pe card deschide platforma, cu date de test acolo unde este cazul.</p>}
          />
          <ul className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {showcase.map((project) => (
              <li key={project.name}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <Link href="/proiecte" className="btn focus-ring">
              Tot portofoliul
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="ai">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">Orchestrare AI</p>
            <h2 id="ai" className="mt-3 text-[2rem] md:text-[2.5rem]">
              Un model nu este un produs. Fluxul din jurul lui este.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {principles.slice(0, 4).map((item) => (
              <li key={item.title} className="flex gap-3 text-[15px] font-semibold text-ink">
                <svg aria-hidden="true" viewBox="0 0 16 16" className="mt-1 size-4 shrink-0 text-cta">
                  <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-14">
          <OrchestrationGraph />
        </div>
        <div className="mt-8">
          <Link href="/orchestrare-ai" className="link-arrow focus-ring">
            <span aria-hidden="true">→</span> Arhitectura completă
          </Link>
        </div>
      </section>

      <section className="on-dark relative overflow-hidden bg-deep" aria-labelledby="tehnologii">
        <Shapes variant="band" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-24">
          <SectionTitle center eyebrow="Tehnologii" title="Un set matur, ușor de preluat de orice echipă" id="tehnologii" />
          <ul className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {tech.map((item) => (
              <li key={item.label} className="flex flex-col items-center gap-4 border border-white/15 px-4 py-9 text-center transition-colors hover:border-flame hover:bg-white/[0.04]">
                <Icon name={item.icon} className="size-10" light />
                <span className="font-heading text-[14px] font-bold text-white uppercase">{item.label}</span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-[90ch] text-center text-[14px] text-lavender">
            {stack.flatMap((row) => row.items).join(" · ")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="livrare">
        <SectionTitle center eyebrow="Livrare" title="Cum ajunge un sistem în producție" id="livrare" />
        <ol className="relative mt-16 grid gap-12 md:grid-cols-5 md:gap-6">
          <span aria-hidden="true" className="absolute top-8 right-[10%] left-[10%] hidden border-t-2 border-dashed border-line md:block" />
          {steps.map((step, index) => (
            <li key={step.title} className="reveal relative text-center">
              <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-white font-heading text-lg font-extrabold text-night shadow-[0_15px_35px_-12px_rgba(38,32,81,0.35)] ring-[6px] ring-flame-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[18px]">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-[1.75]">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
