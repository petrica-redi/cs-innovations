import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icons";
import { OrchestrationGraph } from "@/components/OrchestrationGraph";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Shapes } from "@/components/Shapes";
import { company, programmes } from "@/lib/company";
import { featured } from "@/lib/projects";

const description =
  "CS Innovations is a Bucharest software house building production platforms and orchestrated AI systems for the public sector, healthcare and research, with validation, human approval and data kept in the EU.";

export const metadata: Metadata = {
  title: { absolute: "CS Innovations | Software development and AI orchestration" },
  description,
  alternates: { canonical: "/en", languages: { ro: "/", en: "/en" } },
  openGraph: { title: "CS Innovations | Software development and AI orchestration", description, locale: "en_GB", url: "/en" },
};

const services: { icon: IconName; title: string; text: string }[] = [
  { icon: "platform", title: "Custom platforms", text: "Web applications for case files, appointments, registers and reports, built on the procedures your staff already follow. Separate roles, audit log, exports." },
  { icon: "ai", title: "AI orchestration", text: "Language, speech and vision models working in controlled steps, with sourced answers, schema-validated output and a person who approves what matters." },
  { icon: "data", title: "Data and integrations", text: "API integrations with existing systems, historical data imports, maps and dashboards that publish aggregated figures only." },
  { icon: "research", title: "Scientific computing", text: "Simulators and laboratory software, especially in chemistry and materials, with tracking of formulas, batches and procedure versions." },
];

const principles = [
  ["The right model for each step", "One workflow uses several models, chosen by accuracy, cost and where the data may be processed."],
  ["Answers with sources", "When a model answers from your documents, it shows the passage it relied on."],
  ["Validated output", "Model output passes a schema and business rules before it reaches a record. What fails is returned, not saved."],
  ["A person approves", "A clinical note, decision or official document enters the system only after the responsible person signs it."],
  ["Every call is traced", "Input, model, prompt version, cost and result are logged, and quality is measured on test cases before each change."],
  ["Data stays in the EU", "Providers and processing regions are configured so your data stays in the EU and is not used for model training."],
];

const projects: Record<string, { area: string; text: string }> = {
  "Platforma Mediere Publică": { area: "Public sector", text: "Case management for integrated community services, from first assessment to case closure, with printed annexes." },
  "REDI Health": { area: "Healthcare / AI", text: "Workspace for health mediators and medical staff in four languages. A vision model explains a photographed prescription." },
  Sentinel: { area: "Data", text: "Collects public air-quality and radiation data for Romania and raises alerts when thresholds are exceeded." },
  "REDI Business": { area: "Public sector", text: "Free platform for Roma entrepreneurs in the Balkans: courses, business plan, mentors and credit readiness." },
  Scriva: { area: "Healthcare / AI", text: "Turns a recorded consultation into a structured clinical note that the doctor reviews and signs." },
  "Chemistry tools": { area: "Research", text: "Six interactive simulators, from atomic orbitals to titration, for teaching and research." },
};

const engagement = [
  ["Fixed-price project", "After discovery you receive a phased plan with deliverables, deadlines and acceptance at the end of each phase."],
  ["Dedicated team", "Reserved monthly capacity for a product that keeps evolving. You set the priorities at the start of each iteration."],
  ["Maintenance and support", "Response times by severity level agreed in the contract, security updates and production monitoring."],
  ["Public procurement", "We bid on tenders for information platforms. Procedure documents are exchanged through our private data room."],
];

const commitments = [
  ["You own the code", "Rights to the code written for you are transferred by contract, together with the documentation."],
  ["In your accounts", "The repository and infrastructure can live in your accounts from day one."],
  ["Defect warranty", "Defects reported during the contractual warranty period are fixed at no extra cost."],
  ["Visible progress", "Access to the test environment and the backlog, with a demo at the end of every iteration."],
  ["Confidentiality", "We sign an NDA before discovery on request."],
  ["No lock-in", "Code, manuals and technical documentation are handed over so any team can take the system over."],
];

const showcase = Object.keys(projects)
  .map((name) => featured.find((p) => p.name === name))
  .filter((p) => p !== undefined);

export default function EnglishPage() {
  return (
    <main className="flex-1" lang="en">
      <section className="on-dark relative overflow-hidden bg-night">
        <Shapes variant="hero" />
        <div className="relative mx-auto max-w-[1200px] px-5 pt-24 pb-28">
          <p className="text-[19px] text-white/90">{"// "}Software development and AI orchestration</p>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[1.08] uppercase">Production software. AI under control.</h1>
          <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.8] text-white/80">
            We design and build platforms for the public sector, healthcare and research. AI models work in workflows with
            verifiable steps, validation before anything is saved, and a person who approves. Based in Bucharest, Romania,
            since {company.founded}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn focus-ring">
              Discuss a project
            </a>
            <a href="#projects" className="btn btn-line focus-ring">
              See our work
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-soft">
        <p className="mx-auto max-w-[1200px] px-5 py-7 text-center font-heading text-[15px] font-bold text-[#8d8b9c]">
          Selected for the {programmes[0].name} {programmes[0].kind.toLowerCase()} and the {programmes[1].name}{" "}
          {programmes[1].kind.toLowerCase()}, both funded by the European Union.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="services">
        <SectionTitle eyebrow="Services" title="What we build" id="services" />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <li key={item.title} className="border border-line bg-white p-8">
              <Icon name={item.icon} className="size-11" />
              <h3 className="mt-5 text-[19px]">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.75]">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="on-dark relative overflow-hidden bg-night" aria-labelledby="ai">
        <Shapes variant="band" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-24">
          <SectionTitle center eyebrow="AI orchestration" title="A model is not a product. The workflow around it is." id="ai" />
          <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(([title, text], index) => (
              <li key={title} className="relative overflow-hidden border border-white/10 bg-night-2/60 p-8">
                <span aria-hidden="true" className="big-num absolute top-3 right-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[19px]">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75] text-lavender">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-5 pt-24" lang="ro">
        <OrchestrationGraph />
        <p className="mt-3 text-[13px]" lang="en">
          Example workflow, as used in Scriva. Labels are in Romanian, the language of the deployed system.
        </p>
      </div>

      <section id="projects" className="scroll-mt-24 mx-auto max-w-[1200px] px-5 py-28" aria-labelledby="projects-title">
        <SectionTitle
          eyebrow="Projects"
          title="Systems you can open right now"
          id="projects-title"
          aside={<p className="text-[15px]">Screenshots of the live versions. Each card opens the platform, with test data where relevant.</p>}
        />
        <ul className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((project) => (
            <li key={project.name}>
              <ProjectCard project={project} label={projects[project.name].area} />
              <p className="mt-4 px-1 text-[15px]">{projects[project.name].text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-soft" aria-labelledby="how">
        <div className="mx-auto max-w-[1200px] px-5 py-28">
          <SectionTitle eyebrow="How we work" title="Engagement models and what the contract guarantees" id="how" />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {engagement.map(([title, text]) => (
              <li key={title} className="border border-line bg-white p-8">
                <h3 className="text-[19px]">{title}</h3>
                <p className="mt-3 text-[15px] leading-[1.75]">{text}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map(([title, text]) => (
              <div key={title}>
                <dt className="font-heading text-[17px] font-bold text-ink">{title}</dt>
                <dd className="mt-1 text-[15px]">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 mx-auto grid max-w-[1200px] gap-6 px-5 py-24 md:grid-cols-2" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="mt-3 text-[2rem] md:text-[2.5rem]">
            Company details
          </h2>
          <p className="mt-5 max-w-[50ch]">
            We work in Romanian and English. Proposals and procurement documents are exchanged through our private data room,
            with an access code sent separately.
          </p>
          <Link href="/camera-de-date" className="link-arrow focus-ring mt-6">
            <span aria-hidden="true">→</span> Data room
          </Link>
        </div>
        <dl className="border border-line bg-white p-9 text-[15px]">
          {[
            ["Company", company.legalName],
            ["Tax ID (CUI)", company.cui],
            ["Trade register", company.tradeRegister],
            ["Founded", company.founded],
            ["Office", company.addressLines.join(", ")],
            ...(company.email ? [["Email", company.email]] : []),
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between gap-6 border-b border-line py-3 last:border-b-0">
              <dt>{label}</dt>
              <dd className="text-right font-heading font-bold text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
