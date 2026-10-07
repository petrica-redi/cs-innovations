"use client";

import Image from "next/image";
import { useState } from "react";
import { areas, projects, type Area } from "@/lib/projects";

export function ProjectGrid() {
  const [area, setArea] = useState<Area | "Toate">("Toate");
  const visible = area === "Toate" ? projects : projects.filter((item) => item.area === area);

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
              onClick={() => setArea(item)}
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
    </div>
  );
}
