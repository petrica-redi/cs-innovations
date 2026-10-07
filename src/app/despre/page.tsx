import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Despre",
  description: `${company.legalName}, selectată în incubatorul EIT RawMaterials și în acceleratorul 28DIGITAL.`,
};

export default function DesprePage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] flex-1 px-5 py-16">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="text-[13px] tracking-[0.08em] text-copper uppercase">Despre</p>
          <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.15] md:text-5xl">{company.brand}</h1>
          <div className="mt-6 max-w-[62ch] space-y-4 text-[17px] leading-relaxed text-ink-soft">
            <p>
              {company.legalName} este firma din spatele numelui {company.brand}. A fost
              înființată în {company.founded}, cu sediul în Blejești, județul Teleorman.
              Obiectul de activitate este CAEN {company.caen}, {company.caenLabel.toLowerCase()}.
            </p>
            <p>
              Proiectăm platforme informatice. În paralel ducem proiecte de inovare în
              chimie și proiecte de inovare socială. SISCI este platforma de management de
              caz construită pentru servicii comunitare integrate: evaluare, plan,
              monitorizare și roluri.
            </p>
            <p>
              Firma a fost selectată în incubatorul EIT RawMaterials și în acceleratorul
              28DIGITAL (Digital28). 28DIGITAL este denumirea actuală a fostei comunități
              EIT Digital, în cadrul Institutului European de Inovare și Tehnologie.
              Programele sunt finanțate de Uniunea Europeană.
            </p>
          </div>
        </div>
        <figure>
          <div className="relative aspect-[4/3] bg-night">
            <Image
              src="/photos/ops-wall.jpg"
              alt="Perete de monitoare într-o sală de lucru"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
          <figcaption className="mt-2 text-sm text-ink-soft">
            Sistemele se văd pe același perete: hartă, liste, grafic.
          </figcaption>
        </figure>
      </div>
      <dl className="mt-14 grid gap-6 border-t border-line pt-8 text-sm sm:grid-cols-2 lg:grid-cols-3">
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
            {company.caen} — {company.caenLabel}
          </dd>
        </div>
        <div>
          <dt className="text-ink-soft">Înființare</dt>
          <dd className="mt-1">{company.founded}</dd>
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
