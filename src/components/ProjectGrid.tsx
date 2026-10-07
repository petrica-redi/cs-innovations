"use client";

import Image from "next/image";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { areas, projects, type Area } from "@/lib/projects";

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

  const visible = (area === "Toate" ? projects : projects.filter((item) => item.area === area)).filter(
    (item) => !item.draft,
  );
  const drafts = (area === "Toate" ? projects : projects.filter((item) => item.area === area)).filter(
    (item) => item.draft,
  );

  function choose(next: Area | "Toate") {
    const href = next === "Toate" ? "/proiecte" : `/proiecte?domeniu=${encodeURIComponent(next)}`;
    router.replace(href, { scroll: false });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtru pe domeniu">
        {(["Toate", ...areas] as const).map((item) => {
          const selected = item === area;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => choose(item)}
              className={`border px-3 py-1.5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper ${
                selected ? "border-ink bg-ink text-paper" : "border-line bg-paper text-ink"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        {visible.length} {visible.length === 1 ? "sistem" : "sisteme"}
        {drafts.length > 0 ? ` · ${drafts.length} în arhivă` : ""}
      </p>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.repo} className="border border-line bg-paper">
            <div className="relative aspect-[4/3]">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs tracking-wide text-copper">{project.area}</p>
              <h2 className="mt-1 font-serif text-2xl">{project.name}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{project.summary}</p>
              {project.href ? (
                <a
                  href={project.href}
                  className="mt-3 inline-block text-sm text-ink underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
                  rel="noreferrer"
                >
                  Deschide
                </a>
              ) : (
                <p className="mt-3 text-sm text-ink-soft">Fără adresă publică</p>
              )}
            </div>
          </li>
        ))}
      </ul>
      {drafts.length > 0 ? (
        <div className="mt-12 border-t border-line pt-8">
          <h2 className="font-serif text-[1.375rem]">Arhivă și schițe</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {drafts.map((project) => (
              <li key={project.repo} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <p className="text-sm text-copper">{project.area}</p>
                <div>
                  <h3 className="font-serif text-xl">{project.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{project.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
