import Image from "next/image";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, sizes = "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" }: { project: Project; sizes?: string }) {
  return (
    <a href={project.href} rel="noreferrer" className="focus-ring group reveal block">
      <div className="relative aspect-[4/3] overflow-hidden bg-soft">
        <Image
          src={project.screen!}
          alt={`Pagina ${project.name}, așa cum arată online`}
          fill
          sizes={sizes}
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="relative z-10 -mt-14 mr-8 ml-6 overflow-hidden bg-night px-6 py-5 transition-colors duration-300 group-hover:bg-cta">
        <span aria-hidden="true" className="absolute -top-10 -right-10 size-24 rounded-full bg-white/[0.06]" />
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[19px] leading-snug text-white">{project.name}</h3>
            <p className="mt-1 text-[12px] font-extrabold tracking-[0.06em] text-lavender uppercase group-hover:text-white/80">
              {project.area}
              {project.ai ? " / AI" : ""}
            </p>
          </div>
          <span aria-hidden="true" className="mt-1 text-lg text-flame transition-transform group-hover:translate-x-1 group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
