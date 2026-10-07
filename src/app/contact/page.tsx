import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Sediul și datele de identificare ale ${company.legalName}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHead label="Contact" title="Scrieți-ne">
        Ne puteți scrie la sediul firmei din Blejești, pe adresa de mai jos.
      </PageHead>
      <section className="mx-auto grid max-w-[1200px] gap-6 px-5 py-16 md:grid-cols-2">
        <address className="rounded-md border border-line bg-surface p-7 not-italic">
          <p className="font-mono text-xs text-muted">Sediul social</p>
          <p className="mt-3 text-xl font-semibold">{company.legalName}</p>
          <p className="mt-3 leading-relaxed text-muted">
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          {company.email ? (
            <p className="mt-4">
              <a className="focus-ring text-flame underline underline-offset-4" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          ) : null}
          {company.phone ? <p className="mt-2">{company.phone}</p> : null}
        </address>
        <div className="rounded-md border border-line bg-surface p-7">
          <p className="font-mono text-xs text-muted">Identificare</p>
          <dl className="mt-3 space-y-2 font-mono text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">CUI</dt>
              <dd>{company.cui}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-muted">Reg. com.</dt>
              <dd>{company.tradeRegister}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted">CAEN</dt>
              <dd>{company.caen}</dd>
            </div>
          </dl>
          <Link href="/despre#date" className="focus-ring mt-6 inline-block font-mono text-sm text-flame hover:underline">
            Toate datele firmei →
          </Link>
        </div>
      </section>
    </main>
  );
}
