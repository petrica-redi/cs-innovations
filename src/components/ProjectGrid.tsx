"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Screen } from "@/components/Screen";
import { areas, featured, others, type Area } from "@/lib/projects";

export function ProjectGrid() {
  return (
    <Suspense fallback={<p className="text-sm text-ink-soft">Se încarcă lista.</p>}>
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
      <div className="flex flex-wrap gap-2" role="group" aria-label="Domeniu">
        {(["Toate", ...areas] as const).map((item) => {
          const selected = item === area;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => choose(item)}
              className={`rounded-full border px-4 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${
                selected ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink hover:border-ink/50"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {shown.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              rel="noreferrer"
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              <Screen
                src={project.screen!}
                domain={project.domain!}
                alt={`Pagina ${project.name}, așa cum arată online`}
                sizes="(min-width: 768px) 45vw, 100vw"
                className="transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
              />
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl group-hover:underline">{project.name}</h2>
                <span className="text-sm text-copper">{project.area}</span>
              </div>
              <p className="mt-2 text-[16px] leading-relaxed text-ink-soft">{project.summary}</p>
              <p className="mt-2 text-sm text-ink-soft">Autor: {project.credit}</p>
            </a>
          </li>
        ))}
      </ul>

      {rest.length > 0 ? (
        <section className="mt-16 border-t border-line pt-8" aria-labelledby="alte">
          <h2 id="alte" className="font-serif text-2xl">
            Alte lucrări
          </h2>
          <p className="mt-2 max-w-[62ch] text-sm text-ink-soft">
            Aplicații mai mici, machete și panouri interne. Cele fără link nu au o versiune publică.
          </p>
          <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
            {rest.map((project) => (
              <li key={project.name} className="border-b border-line py-4">
                <p className="font-serif text-lg">
                  {project.href ? (
                    <a
                      href={project.href}
                      rel="noreferrer"
                      className="underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </p>
                <p className="mt-1 text-sm text-ink-soft">{project.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
