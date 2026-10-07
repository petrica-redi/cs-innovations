import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Sediul și datele de identificare ale ${company.legalName}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 py-16">
      <h1 className="font-serif text-[2.6rem] leading-[1.1] md:text-5xl">Contact</h1>
      <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-soft">
        Ne puteți scrie la sediul firmei din Blejești, pe adresa de mai jos.
      </p>
      <address className="mt-10 max-w-md rounded-md border border-ink/15 bg-white/50 p-6 not-italic">
        <p className="font-serif text-2xl">{company.legalName}</p>
        <p className="mt-4 leading-relaxed text-ink-soft">
          {company.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-4 text-sm">
          CUI {company.cui} · {company.tradeRegister}
        </p>
        {company.email ? (
          <p className="mt-4">
            <a className="underline decoration-copper underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        ) : null}
        {company.phone ? <p className="mt-2">{company.phone}</p> : null}
      </address>
    </main>
  );
}
