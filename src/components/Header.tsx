"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementMark } from "@/components/ElementMark";
import { company, nav } from "@/lib/company";

export function Header() {
  const path = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night/95 text-white backdrop-blur supports-[backdrop-filter]:bg-night/85">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm">
          <ElementMark />
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold">{company.brand}</span>
            <span className="block font-mono text-[11px] text-white/55">inginerie · platforme</span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 text-sm lg:flex">
          {nav.map((item) => {
            const current = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`focus-ring rounded-[4px] px-3 py-2 ${
                  current ? "bg-white/10 text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <details key={path} className="group relative lg:hidden">
          <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 rounded-[4px] border border-white/20 px-3 py-2 text-sm [&::-webkit-details-marker]:hidden">
            Meniu
            <span aria-hidden="true" className="font-mono text-xs transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <nav
            aria-label="Principal (mobil)"
            className="absolute right-0 mt-2 w-56 rounded-md border border-white/10 bg-night p-2 shadow-xl"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={path === item.href ? "page" : undefined}
                className="focus-ring block rounded-[4px] px-3 py-2.5 text-sm text-white/80 hover:bg-white/10 aria-[current=page]:bg-white/10 aria-[current=page]:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
