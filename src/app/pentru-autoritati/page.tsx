import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, delivery } from "@/lib/company";

export const metadata: Metadata = {
  title: "Pentru autorități",
  description:
    "Ce predă CS INNOVATIONS SOLUTIONS SRL: analiză, aplicație, rapoarte, hartă, teren, integrări și recepție.",
};

const included = [
  ["Roluri", "Conturi separate pentru teren, supervizare și administrare, activate sau dezactivate fără o nouă instalare."],
  ["Dosar", "Evaluare, plan, monitorizare și închidere, cu grile pentru copil, adult și vârstnic când procedura o cere."],
  ["SISCI", "Platformă de management de caz pentru servicii comunitare integrate, construită de firmă: evaluare, plan, monitorizare și roluri."],
  ["Registre și rapoarte", "Registrele din caiet și rapoartele minime, cu export. Un raport nou se adaugă în dezvoltare."],
  ["Nomenclatoare", "Localități, categorii și furnizori: liste pe care instituția le schimbă singură."],
  ["Portal", "Pagină publică cu cifre agregate, fără nume și fără cod numeric personal."],
  ["Date", "Găzduire în Uniunea Europeană, copii de siguranță și jurnal al acțiunilor."],
  ["Predare", "Instruire, cod, manual în limba română și, la recepția finală, drepturile patrimoniale asupra lucrărilor create pentru contract, în limita caietului."],
];

export default function AutoritatiPage() {
  return (
    <main className="mx-auto w-full max-w-[1120px] flex-1 px-5 py-16">
      <p className="text-[13px] tracking-[0.08em] text-copper uppercase">{company.legalName}</p>
      <h1 className="mt-3 max-w-[18em] font-serif text-[2.5rem] leading-[1.15] md:text-5xl">
        Pentru autorități contractante
      </h1>
      <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">
        CS INNOVATIONS SOLUTIONS SRL proiectează platforma, o construiește și o predă:
        analiză, aplicație, rapoarte, hartă, teren și suport. SISCI este platforma de
        management de caz construită de firmă pentru servicii comunitare integrate.
      </p>
      <p className="mt-4">
        <Link
          href="/contact"
          className="text-sm underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
        >
          Sediu, Blejești
        </Link>
      </p>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
        <div className="relative aspect-[16/10] bg-night">
          <Image
            src="/photos/ai-screen.jpg"
            alt="Monitor cu un panou de asistență lângă un document"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-1">
          {delivery.map(([title, text], index) => (
            <li key={title} className="bg-paper py-4">
              <p className="text-[13px] text-copper">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-1 font-serif text-[1.375rem]">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </div>

      <h2 className="mt-16 font-serif text-[1.75rem]">Ce intră într-o predare</h2>
      <dl className="mt-6 divide-y divide-line border-y border-line">
        {included.map(([title, text]) => (
          <div key={title} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr] sm:gap-8">
            <dt className="font-serif text-[1.375rem]">{title}</dt>
            <dd className="text-[17px] leading-relaxed text-ink-soft">{text}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
