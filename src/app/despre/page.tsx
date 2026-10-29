import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import { PageHead } from "@/components/PageHead";
import { Shapes } from "@/components/Shapes";
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

      <section className="mx-auto grid max-w-[1200px] items-start gap-16 px-5 py-24 lg:grid-cols-[1.2fr_1fr]" aria-labelledby="ce">
        <div className="max-w-[62ch] space-y-5">
          <p className="eyebrow">Ce facem</p>
          <h2 id="ce" className="!mt-3 text-[2rem] md:text-[2.5rem]">
            Software și orchestrare AI pentru instituții
          </h2>
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
        <div className="space-y-5">
          {programmes.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              rel="noreferrer"
              className="focus-ring group relative block overflow-hidden border border-line bg-white p-8 transition-shadow hover:shadow-[0_25px_50px_-20px_rgba(38,32,81,0.3)]"
            >
              <span aria-hidden="true" className="big-num big-num-light absolute top-4 right-5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Icon name={index === 0 ? "research" : "platform"} className="size-11" />
              <p className="eyebrow mt-5">{item.kind}</p>
              <h3 className="mt-1 text-[21px]">{item.name}</h3>
              <p className="mt-2 text-[15px] leading-[1.75]">{item.text}</p>
              <span className="link-arrow mt-4">
                <span aria-hidden="true">→</span> Site-ul programului
              </span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-flame transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </div>
      </section>

      <section id="date" className="on-dark relative scroll-mt-24 overflow-hidden bg-night" aria-labelledby="date-titlu">
        <Shapes variant="band" />
        <div className="relative mx-auto max-w-[1200px] px-5 py-20">
          <p className="eyebrow">Identificare</p>
          <h2 id="date-titlu" className="mt-3 text-[2rem]">
            Datele firmei
          </h2>
          <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map(([label, value]) => (
              <div key={label} className="border border-white/10 bg-night-2/60 p-6">
                <dt className="text-[12px] font-extrabold tracking-[0.06em] text-flame uppercase">{label}</dt>
                <dd className="mt-2 font-heading text-[17px] font-semibold text-white">{value}</dd>
              </div>
            ))}
            <div className="border border-white/10 bg-night-2/60 p-6">
              <dt className="text-[12px] font-extrabold tracking-[0.06em] text-flame uppercase">Birou</dt>
              <dd className="mt-2 font-heading text-[17px] font-semibold text-white">{company.addressLines.join(", ")}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
