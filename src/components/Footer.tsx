import Link from "next/link";
import type { ReactNode } from "react";
import { Wordmark } from "@/components/ElementMark";
import { company, dataRoomLink, nav, programmes } from "@/lib/company";

function Contact({ icon, value, label }: { icon: ReactNode; value: ReactNode; label: string }) {
  return (
    <div className="text-center">
      <span aria-hidden="true" className="mx-auto grid size-8 place-items-center text-flame">
        {icon}
      </span>
      <p className="mt-4 text-[15px] text-white">{value}</p>
      <p className="mt-1 text-[13px] text-lavender">{label}</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="on-dark relative mt-auto overflow-hidden bg-night text-lavender">
      <div aria-hidden="true" className="shape shape-lines shape-tri-left -right-24 bottom-0 h-[420px] w-[260px] opacity-40" />
      <div className="relative mx-auto max-w-[1200px] px-5 pt-20 pb-10">
        <div className="flex justify-center">
          <Link href="/" className="focus-ring" aria-label={`${company.brand}, pagina principală`}>
            <Wordmark inverted />
          </Link>
        </div>
        <p className="mx-auto mt-5 max-w-[56ch] text-center text-[15px]">
          {company.tagline} pentru sectorul public, sănătate și cercetare. București, din {company.founded}.
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          <Contact
            label="Birou"
            value={company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            icon={
              <svg viewBox="0 0 24 24" className="size-6">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" fill="currentColor" />
              </svg>
            }
          />
          <Contact
            label={company.email ? "Email" : "Denumire"}
            value={company.email ? <a href={`mailto:${company.email}`} className="focus-ring hover:text-flame">{company.email}</a> : company.legalName}
            icon={
              <svg viewBox="0 0 24 24" className="size-6">
                <path d="M3 5h18v14H3V5Zm2 2v.3l7 4.6 7-4.6V7H5Zm14 2.7-7 4.6-7-4.6V17h14V9.7Z" fill="currentColor" />
              </svg>
            }
          />
          <Contact
            label="CUI și registrul comerțului"
            value={`${company.cui} · ${company.tradeRegister}`}
            icon={
              <svg viewBox="0 0 24 24" className="size-6">
                <path d="M6 2h9l5 5v15H6V2Zm8 1.5V8h4.5L14 3.5ZM9 12v1.6h8V12H9Zm0 4v1.6h8V16H9Z" fill="currentColor" />
              </svg>
            }
          />
        </div>

        <nav aria-label="Subsol" className="mt-16 flex flex-wrap justify-center gap-x-9 gap-y-3 text-[15px] font-semibold">
          {[...nav, dataRoomLink].map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring text-white/85 transition-colors hover:text-flame">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-center text-[13px]">
          © {company.legalName}. Selectată în{" "}
          {programmes.map((p) => `${p.kind.toLowerCase()}ul ${p.name}`).join(" și în ")}, programe finanțate de Uniunea
          Europeană.
        </p>
      </div>
    </footer>
  );
}
