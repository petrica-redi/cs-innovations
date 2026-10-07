import Link from "next/link";
import { company, nav } from "@/lib/company";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-night/95 text-paper backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper">
          <span className="block font-serif text-lg tracking-tight">{company.brand}</span>
          <span className="block text-[11px] tracking-wide text-paper/70">{company.legalName}</span>
        </Link>
        <nav aria-label="Principal" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
