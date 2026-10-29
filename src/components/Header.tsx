"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Wordmark } from "@/components/ElementMark";
import { company, nav, programmes } from "@/lib/company";

export function Header() {
  const path = usePathname();

  return (
    <>
      <div className="hidden bg-deep text-[13px] text-white/70 md:block">
        <div className="mx-auto flex h-10 max-w-[1200px] items-center justify-between px-5">
          <p className="flex items-center gap-2 border-x border-white/10 px-4 leading-10">
            Selectată în {programmes[0].name} și {programmes[1].name}
          </p>
          <div className="flex h-full items-center">
            <p className="flex h-full items-center gap-2 border-l border-white/10 px-4">
              <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 text-flame">
                <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.4 4.5 8.5 4.5 8.5s4.5-5.1 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4Z" fill="currentColor" />
              </svg>
              {company.addressLines[0]}, București
            </p>
            {company.email ? (
              <a href={`mailto:${company.email}`} className="focus-ring flex h-full items-center border-l border-white/10 px-4 hover:text-white">
                {company.email}
              </a>
            ) : null}
            <p className="flex h-full items-center border-x border-white/10 px-4">CUI {company.cui}</p>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 bg-white shadow-[0_10px_30px_-18px_rgba(20,29,56,0.35)]">
        <div className="mx-auto flex h-[78px] max-w-[1200px] items-center justify-between gap-6 px-5">
          <Link href="/" className="focus-ring" aria-label={`${company.brand}, pagina principală`}>
            <Wordmark />
          </Link>

          <nav aria-label="Principal" className="hidden h-full items-stretch gap-1 lg:flex">
            {nav.map((item) => {
              const current = path === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`focus-ring relative flex items-center px-3.5 text-[15px] font-bold transition-colors after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:bg-flame after:transition-transform ${
                    current ? "text-ink after:scale-x-100" : "text-ink/80 after:scale-x-0 hover:text-ink hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn focus-ring hidden !px-6 !py-[15px] !text-[13px] xl:inline-flex">
              Discutăm un proiect
            </Link>
            <details key={path} className="group relative lg:hidden">
              <summary className="focus-ring flex cursor-pointer list-none items-center gap-2 border border-line px-4 py-2.5 text-sm font-bold text-ink [&::-webkit-details-marker]:hidden">
                Meniu
                <span aria-hidden="true" className="text-base leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <nav
                aria-label="Principal (mobil)"
                className="absolute right-0 mt-3 w-72 border-t-[3px] border-flame bg-white py-2 shadow-[0_25px_50px_-20px_rgba(20,29,56,0.4)]"
              >
                {[...nav, { href: "/contact", label: "Discutăm un proiect" }].map((item, index) => (
                  <Link
                    key={`${item.href}-${index}`}
                    href={item.href}
                    aria-current={path === item.href && index < nav.length ? "page" : undefined}
                    className="focus-ring block px-5 py-2.5 text-[15px] font-bold text-ink/80 hover:bg-soft hover:text-ink aria-[current=page]:text-cta"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
