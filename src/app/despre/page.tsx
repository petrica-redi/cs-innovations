import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { company, programmes } from "@/lib/company";

export const metadata: Metadata = {
  title: "Despre noi",
  description: `${company.legalName}, firmă de inginerie din Blejești condusă de ${company.founder}.`,
  alternates: { canonical: "/despre" },
};

const facts = [
  ["Denumire", company.legalName],
  ["CUI", company.cui],
  ["Registrul comerțului", company.tradeRegister],
  ["CAEN", `${company.caen}, ${company.caenLabel.toLowerCase()}`],
  ["Administrator", company.founder],
  ["Înființare", company.founded],
];

export default function DesprePage() {
  return (
    <main className="flex-1">
      <PageHead label="Firma" title="Despre noi">
        {company.legalName}, cunoscută sub numele {company.brand}, a fost înființată în {company.founded} și are sediul în
        Blejești, județul Teleorman.
      </PageHead>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-muted">
          <h2 className="text-3xl font-semibold text-ink">Fondatorul</h2>
          <p>
            Fondatorul și administratorul firmei este {company.founder}. Este chimist de formare și dezvoltă aplicații
            informatice. De aici vin direcțiile firmei: proiecte de inovare în chimie și platforme informatice, multe gândite
            pentru servicii sociale și de sănătate.
          </p>
          <p>
            A construit SISCI, REDI Health, REDI Business, Scriva, Chemistry tools și Sentinel. Site-ul redi-ngo.eu l-a
            realizat împreună cu echipa REDI.
          </p>
        </div>
        <div className="space-y-4">
          {programmes.map((item) => (
            <a
              key={item.name}
              href={item.href}
              rel="noreferrer"
              className="focus-ring block rounded-md border border-line bg-surface p-6 transition-colors hover:border-flame"
            >
              <p className="font-mono text-xs text-flame">{item.kind}</p>
              <h2 className="mt-1 text-xl font-semibold">{item.name} ↗</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="date" className="scroll-mt-24 border-t border-line bg-surface" aria-labelledby="date-titlu">
        <div className="mx-auto max-w-[1200px] px-5 py-14">
          <h2 id="date-titlu" className="text-2xl font-semibold">
            Datele firmei
          </h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(([label, value]) => (
              <div key={label} className="bg-surface p-5">
                <dt className="font-mono text-xs text-muted">{label}</dt>
                <dd className="mt-1.5">{value}</dd>
              </div>
            ))}
            <div className="bg-surface p-5 sm:col-span-2 lg:col-span-3">
              <dt className="font-mono text-xs text-muted">Sediu</dt>
              <dd className="mt-1.5">{company.addressLines.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
