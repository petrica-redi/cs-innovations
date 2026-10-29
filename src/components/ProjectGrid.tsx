"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AreaTile } from "@/components/AreaTile";
import { ProjectCard } from "@/components/ProjectCard";
import { areas, featured, others, type Area } from "@/lib/projects";

export function ProjectGrid() {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Se încarcă lista.</p>}>
      <ProjectGridInner />
    </Suspense>
  );
}

function ProjectGridInner() {
  const params = useSearchParams();
  const router = useRouter();
  const requested = params.get("domeniu");
  const area: Area | "Toate" = areas.includes(requested as Area) ? (requested as Area) : "Toate";
  const match = (item: { area: Area }) => area === "Toate" || item.area === area;
  const shown = featured.filter(match);
  const rest = others.filter(match);

  function choose(next: Area | "Toate") {
    const href = next === "Toate" ? "/proiecte" : `/proiecte?domeniu=${encodeURIComponent(next)}`;
    router.replace(href, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Domeniu">
        <button
          type="button"
          aria-pressed={area === "Toate"}
          onClick={() => choose("Toate")}
          className={`focus-ring h-12 border px-5 font-heading text-sm font-bold ${
            area === "Toate" ? "border-cta bg-cta text-white" : "border-line bg-surface text-ink hover:border-cta"
          }`}
        >
          Toate
        </button>
        {areas.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={area === item}
            onClick={() => choose(item)}
            className={`focus-ring flex items-center gap-3 pr-4 text-sm font-bold ${
              area === item ? "text-cta" : "text-ink hover:text-cta"
            }`}
          >
            <AreaTile area={item} active={area === item} />
            {item}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {shown.map((project) => (
            <li key={project.name} className="flex flex-col">
              <ProjectCard project={project} sizes="(min-width: 768px) 560px, 100vw" />
              <div className="mt-5 px-1">
                <p className="text-[15px]">{project.summary}</p>
                {project.ai ? (
                  <p className="mt-4 border-l-[3px] border-flame bg-flame-soft px-4 py-3 text-[14px] text-ink">
                    <span className="font-heading text-xs font-extrabold text-cta">AI </span>
                    {project.ai}
                  </p>
                ) : null}
                {project.tags ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="bg-soft px-3 py-1 text-[12px] font-bold text-ink/70">
                        {tag}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {rest.length > 0 ? (
        <section className="mt-16" aria-labelledby="alte">
          <p className="eyebrow">Alte lucrări</p>
          <h2 id="alte" className="mt-3 text-[1.75rem]">
            Aplicații și panouri interne
          </h2>
          <p className="mt-2 max-w-[62ch] text-[15px]">
            Cele fără link nu au o versiune publică.
          </p>
          <ul className="mt-8 border-t-2 border-line">
            {rest.map((project) => (
              <li key={project.name} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-6">
                <p className="font-heading font-bold text-ink">
                  {project.href ? (
                    <a href={project.href} rel="noreferrer" className="focus-ring hover:text-cta hover:underline">
                      {project.name} ↗
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="text-[15px]">{project.summary}</p>
                <p className="text-[12px] font-extrabold tracking-[0.06em] text-violet uppercase">{project.area}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
