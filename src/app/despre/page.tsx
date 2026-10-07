import type { Metadata } from "next";
import Image from "next/image";
import { company, competitions } from "@/lib/company";

export const metadata: Metadata = {
  title: "Despre",
  description: `${company.legalName}, firmă românească de dezvoltare software, platforme, chimie aplicată și inovație socială.`,
};

export default function DesprePage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12">
      <div className="relative mb-10 aspect-[21/9] bg-night">
        <Image
          src="/photos/ops-wall.jpg"
          alt="Perete de monitoare într-o sală de lucru"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl text-ink">Despre</h1>
      <div className="mt-6 max-w-2xl space-y-4 text-lg leading-8 text-ink-soft">
        <p>
          {company.legalName} este firma din spatele numelui {company.brand}. A fost
          înființată în {company.founded}, cu sediul în Blejești, Teleorman.
        </p>
        <p>
          Dezvoltăm software și platforme. Trei teme revin în proiecte: inteligența
          artificială folosită ca instrument, inovația în chimie și instrumentele pentru
          servicii sociale. Le ținem separate când obiectul o cere și le unim când un
          sistem are nevoie de mai multe dintre ele.
        </p>
        <p>
          Suntem înscriși în competițiile {competitions.map((item) => item.name).join(" și ")}.
          Participarea nu este un premiu și nu este un contract public.
        </p>
        <p>
          Site-ul descrie ce știm să facem. Nu listează contracte, premii sau clienți
          care nu sunt publicați de firmă.
        </p>
      </div>
      <dl className="mt-12 grid max-w-xl gap-4 border-t border-line pt-8 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-ink-soft">Denumire</dt>
          <dd className="mt-1 text-ink">{company.legalName}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">CUI</dt>
          <dd className="mt-1 text-ink">{company.cui}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">Registrul comerțului</dt>
          <dd className="mt-1 text-ink">{company.tradeRegister}</dd>
        </div>
        <div>
          <dt className="text-ink-soft">CAEN</dt>
          <dd className="mt-1 text-ink">
            {company.caen} — {company.caenLabel}
          </dd>
        </div>
        <div>
          <dt className="text-ink-soft">Sediu</dt>
          <dd className="mt-1 text-ink">
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
