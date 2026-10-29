import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHead } from "@/components/PageHead";
import { Shapes } from "@/components/Shapes";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Biroul din București și datele de identificare ale ${company.legalName}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHead label="Contact" title="Scrieți-ne">
        Ne puteți scrie la biroul din București, Spaces Unirii View.
      </PageHead>
      <section className="mx-auto grid max-w-[1200px] gap-6 px-5 py-24 md:grid-cols-3" aria-label="Date de contact">
        <address className="relative overflow-hidden border border-line bg-white p-9 not-italic">
          <Icon name="cloud" className="size-11" />
          <p className="eyebrow mt-6">Birou</p>
          <p className="mt-2 font-heading text-[19px] font-bold text-ink">{company.legalName}</p>
          <p className="mt-3 leading-[1.75]">
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          {company.email ? (
            <p className="mt-4">
              <a className="focus-ring font-bold text-cta underline underline-offset-4" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
          ) : null}
          {company.phone ? <p className="mt-2 font-bold text-ink">{company.phone}</p> : null}
        </address>
        <div className="relative overflow-hidden border border-line bg-white p-9">
          <Icon name="audit" className="size-11" />
          <p className="eyebrow mt-6">Identificare</p>
          <dl className="mt-4 space-y-3 text-[15px]">
            {[
              ["CUI", company.cui],
              ["Reg. com.", company.tradeRegister],
              ["CAEN", company.caen],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-line pb-3">
                <dt>{label}</dt>
                <dd className="font-heading font-bold text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/despre#date" className="link-arrow focus-ring mt-6">
            <span aria-hidden="true">→</span> Toate datele firmei
          </Link>
        </div>
        <div className="on-dark relative overflow-hidden bg-night p-9 text-lavender">
          <Shapes variant="band" />
          <div className="relative">
            <Icon name="security" className="size-11" light />
            <p className="eyebrow mt-6">Documente</p>
            <p className="mt-2 font-heading text-[19px] font-bold text-white">Cameră de date</p>
            <p className="mt-3 text-[15px] leading-[1.75]">
              Documentele pentru proceduri și parteneriate se transmit prin camera de date, cu un cod de acces trimis separat.
            </p>
            <Link href="/camera-de-date" className="link-arrow focus-ring mt-6">
              <span aria-hidden="true">→</span> Intră în camera de date
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
