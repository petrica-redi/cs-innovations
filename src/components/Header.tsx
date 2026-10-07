"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, nav } from "@/lib/company";

export function Header() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-paper/15 bg-night text-paper">
      <div className="mx-auto flex min-h-16 max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3">
        <Link
          href="/"
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
        >
          <span className="block font-serif text-xl leading-none">{company.brand}</span>
        </Link>
        <nav aria-label="Principal" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {nav.map((item) => {
            const current = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`border-b-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper ${
                  current ? "border-copper" : "border-transparent hover:border-paper/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
