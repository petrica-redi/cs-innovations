"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementMark } from "@/components/ElementMark";
import { company, nav } from "@/lib/company";

export function Header() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line/70 bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5">
        <Link href="/" className="focus-ring flex items-center gap-2.5 rounded-md">
          <ElementMark />
          <span className="text-[15px] font-semibold tracking-[-0.02em]">{company.brand}</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-0.5 text-[14px] lg:flex">
          {nav.map((item) => {
            const current = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`focus-ring rounded-md px-3 py-2 transition-colors ${
                  current ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="focus-ring hidden rounded-full bg-ink px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#2a2a2e] sm:inline-flex"
          >
            Discutăm un proiect
          </Link>
          <details key={path} className="group relative lg:hidden">
            <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-sm [&::-webkit-details-marker]:hidden">
              Meniu
              <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <nav
              aria-label="Principal (mobil)"
              className="absolute right-0 mt-2 w-64 rounded-xl border border-line bg-surface p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
            >
              {[...nav, { href: "/contact", label: "Discutăm un proiect" }].map((item, index) => (
                <Link
                  key={`${item.href}-${index}`}
                  href={item.href}
                  aria-current={path === item.href && index < nav.length ? "page" : undefined}
                  className="focus-ring block rounded-lg px-3 py-2.5 text-sm text-ink/80 hover:bg-bg aria-[current=page]:bg-bg aria-[current=page]:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
