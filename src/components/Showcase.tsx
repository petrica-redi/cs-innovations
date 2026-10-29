import Image from "next/image";
import { featured, type Project } from "@/lib/projects";

const tints: Record<string, { panel: string; chip: string; dark?: boolean }> = {
  "REDI Business": { panel: "bg-[linear-gradient(160deg,#efecff_0%,#f8f7ff_60%)]", chip: "bg-white/70 text-[#4f46e5]" },
  Sentinel: { panel: "bg-[linear-gradient(160deg,#17181c_0%,#0b0b0c_70%)]", chip: "bg-white/10 text-white/80", dark: true },
  "REDI Health": { panel: "bg-[linear-gradient(160deg,#e6f6ef_0%,#f6fbf8_60%)]", chip: "bg-white/70 text-[#0f7a55]" },
  SISCI: { panel: "bg-[linear-gradient(160deg,#f3eee4_0%,#faf8f3_60%)]", chip: "bg-white/70 text-[#7a5a1f]" },
  "REDI NGO": { panel: "bg-[linear-gradient(160deg,#0f2a1e_0%,#0b0b0c_70%)]", chip: "bg-white/10 text-white/80", dark: true },
  Scriva: { panel: "bg-[linear-gradient(160deg,#e3f3f1_0%,#f6fbfa_60%)]", chip: "bg-white/70 text-[#0f6b62]" },
};

function Panel({ project, wide }: { project: Project; wide?: boolean }) {
  const tint = tints[project.name] ?? tints.SISCI;
  const dark = tint.dark;
  return (
    <a
      href={project.href}
      rel="noreferrer"
      className={`focus-ring reveal group relative flex flex-col overflow-hidden rounded-3xl border ${dark ? "border-white/10" : "border-black/[0.06]"} ${tint.panel} ${
        wide ? "lg:col-span-2 lg:grid lg:grid-cols-[0.9fr_1.4fr] lg:items-end" : ""
      }`}
    >
      <div className={`p-8 md:p-10 ${wide ? "lg:self-center lg:pr-0" : ""}`}>
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${tint.chip}`}>{project.area}</span>
          {project.ai ? <span className={`rounded-full px-2.5 py-1 font-mono text-[11px] ${tint.chip}`}>AI</span> : null}
        </div>
        <h3 className={`mt-5 text-3xl font-semibold md:text-[2.25rem] ${dark ? "text-white" : "text-ink"}`}>
          {project.name}
          <span aria-hidden="true" className="ml-2 inline-block text-xl opacity-40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
        </h3>
        <p className={`mt-3 max-w-[52ch] text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-ink/65"}`}>{project.summary}</p>
        {project.ai ? (
          <p className={`mt-4 max-w-[52ch] border-l-2 pl-3 text-[14px] ${dark ? "border-signal text-white/75" : "border-[#0f7a55] text-ink/75"}`}>
            {project.ai}
          </p>
        ) : null}
        <p className={`mt-6 font-mono text-[11px] ${dark ? "text-white/40" : "text-ink/40"}`}>{project.domain}</p>
      </div>
      <div className={`relative px-8 md:px-10 ${wide ? "lg:pt-10 lg:pl-0" : ""}`}>
        <div
          className={`relative aspect-[16/10] translate-y-3 overflow-hidden rounded-t-xl border border-b-0 transition-transform duration-500 group-hover:translate-y-0 ${
            dark ? "border-white/10" : "border-black/[0.08]"
          } shadow-[0_-20px_60px_-30px_rgba(12,12,13,0.45)]`}
        >
          <Image
            src={project.screen!}
            alt={`Pagina ${project.name}, așa cum arată online`}
            fill
            sizes={wide ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
            className="object-cover object-top"
          />
        </div>
      </div>
    </a>
  );
}

export function Showcase({ names }: { names: string[] }) {
  const items = names.map((name) => featured.find((p) => p.name === name)).filter((p): p is Project => Boolean(p));
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((project, index) => (
        <Panel key={project.name} project={project} wide={index === 0} />
      ))}
    </div>
  );
}
