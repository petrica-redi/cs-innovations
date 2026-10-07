import type { Metadata } from "next";
import { Screen } from "@/components/Screen";
import { company, programmes } from "@/lib/company";

export const metadata: Metadata = {
  title: "Despre noi",
  description: `${company.legalName}, firmă de inginerie din Blejești condusă de ${company.founder}.`,
};

export default function DesprePage() {
  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 py-16">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="font-serif text-[2.6rem] leading-[1.1] md:text-5xl">Despre noi</h1>
          <div className="mt-6 max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-ink-soft">
            <p>
              {company.legalName}, cunoscută sub numele {company.brand}, a fost înființată în{" "}
              {company.founded} și are sediul în Blejești, județul Teleorman. Fondatorul și administratorul
              firmei este {company.founder}.
            </p>
            <p>
              Petrică este chimist de formare și dezvoltă aplicații informatice. De aici vin direcțiile firmei:
              proiecte de inovare în chimie și platforme informatice, multe gândite pentru servicii sociale
              și de sănătate. A construit SISCI, REDI Health, REDI Business, Scriva, Chemistry tools și
              Sentinel. Site-ul redi-ngo.eu l-a realizat împreună cu echipa REDI.
            </p>
          </div>
        </div>
        <Screen src="/screens/redi-business.jpg" domain="redi.business" alt="Prima pagină REDI Business" />
      </div>

      <section className="mt-16 grid gap-6 md:grid-cols-2" aria-label="Programe europene">
        {programmes.map((item) => (
          <a
            key={item.name}
            href={item.href}
            rel="noreferrer"
            className="block rounded-md border border-ink/15 p-6 hover:border-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            <p className="text-sm text-copper">{item.kind}</p>
            <h2 className="mt-1 font-serif text-2xl">{item.name}</h2>
            <p className="mt-2 leading-relaxed text-ink-soft">{item.text}</p>
          </a>
        ))}
      </section>

      <dl id="date" className="mt-16 grid scroll-mt-24 gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <dt className="text-ink-soft">Denumire</dt>
          <dd className="mt-1">{company.legalName}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">CUI</dt>
          <dd className="mt-1">{company.cui}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Registrul comerțului</dt>
          <dd className="mt-1">{company.tradeRegister}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">CAEN</dt>
          <dd className="mt-1">
            {company.caen}, {company.caenLabel.toLowerCase()}
          </dd>
        </div>
        <div>
          <dt className="text-ink-soft">Administrator</dt>
          <dd className="mt-1">{company.founder}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Sediu</dt>
          <dd className="mt-1">
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </main>
  );
}
