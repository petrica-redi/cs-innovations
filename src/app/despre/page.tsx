import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { company, programmes } from "@/lib/company";

export const metadata: Metadata = {
  title: "Despre noi",
  description: `${company.legalName}, firmă de dezvoltare software și orchestrare AI cu birou în București, înființată în ${company.founded}.`,
  alternates: { canonical: "/despre" },
};

const facts = [
  ["Denumire", company.legalName],
  ["CUI", company.cui],
  ["Registrul comerțului", company.tradeRegister],
  ["CAEN", `${company.caen}, ${company.caenLabel.toLowerCase()}`],
  ["Înființare", company.founded],
];

export default function DesprePage() {
  return (
    <main className="flex-1">
      <PageHead label="Companie" title="Despre CS Innovations">
        {company.legalName}, cunoscută sub numele {company.brand}, a fost înființată în {company.founded}. Biroul este la
        Spaces Unirii View, în București.
      </PageHead>

      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-muted">
          <h2 className="text-3xl font-semibold text-ink">Ce construim</h2>
          <p>
            CS Innovations este o firmă de dezvoltare software și orchestrare AI. Construim platforme pentru sectorul public
            și social, sănătate și cercetare, iar acolo unde un model AI aduce un câștig îl integrăm într-un flux cu pași
            verificabili și aprobare umană.
          </p>
          <p>
            Proiectele pornesc de la procedura pe care echipa clientului o aplică deja și se predau cu cod sursă, instruire și
            manual în limba română. Printre sistemele realizate sunt SISCI, REDI Health, Scriva, Sentinel, REDI Business și
            Chemistry tools. Site-ul redi-ngo.eu a fost realizat împreună cu echipa REDI.
          </p>
          <p>
            Rădăcinile firmei sunt în inginerie și chimie, de aici selecția în incubatorul EIT RawMaterials. Pentru partea
            digitală, firma a fost selectată în acceleratorul 28DIGITAL.
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
              <dt className="font-mono text-xs text-muted">Birou</dt>
              <dd className="mt-1.5">{company.addressLines.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
