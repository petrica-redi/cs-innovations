"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AreaTile } from "@/components/AreaTile";
import { Screen } from "@/components/Screen";
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
          className={`focus-ring h-12 rounded-[3px] border px-4 font-mono text-sm ${
            area === "Toate" ? "border-flame bg-flame text-white" : "border-line bg-surface hover:border-flame"
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
            className={`focus-ring flex items-center gap-3 rounded-[3px] pr-4 text-sm font-medium ${
              area === item ? "text-flame" : "text-ink hover:text-flame"
            }`}
          >
            <AreaTile area={item} active={area === item} />
            {item}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                rel="noreferrer"
                className="focus-ring group flex h-full flex-col rounded-md border border-line bg-surface p-4 transition-colors hover:border-flame"
              >
                <Screen
                  src={project.screen!}
                  domain={project.domain!}
                  alt={`Pagina ${project.name}, așa cum arată online`}
                  sizes="(min-width: 768px) 45vw, 100vw"
                />
                <div className="mt-5 flex items-baseline justify-between gap-4 px-1">
                  <h2 className="text-xl font-semibold group-hover:text-flame">{project.name}</h2>
                  <span className="font-mono text-xs text-muted">{project.area}</span>
                </div>
                <p className="mt-2 flex-1 px-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
                <p className="mt-4 border-t border-line px-1 pt-3 font-mono text-xs text-muted">Autor: {project.credit}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {rest.length > 0 ? (
        <section className="mt-16" aria-labelledby="alte">
          <h2 id="alte" className="text-2xl font-semibold">
            Alte lucrări
          </h2>
          <p className="mt-2 max-w-[62ch] text-sm text-muted">
            Aplicații mai mici, machete și panouri interne. Cele fără link nu au o versiune publică.
          </p>
          <ul className="mt-6 overflow-hidden rounded-md border border-line bg-surface">
            {rest.map((project) => (
              <li key={project.name} className="grid gap-1 border-b border-line px-5 py-4 last:border-b-0 sm:grid-cols-[14rem_1fr_auto] sm:items-baseline sm:gap-6">
                <p className="font-medium">
                  {project.href ? (
                    <a href={project.href} rel="noreferrer" className="focus-ring hover:text-flame hover:underline">
                      {project.name} ↗
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="text-sm text-muted">{project.summary}</p>
                <p className="font-mono text-xs text-muted">{project.area}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
