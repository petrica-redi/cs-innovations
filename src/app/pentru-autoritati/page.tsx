import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, delivery } from "@/lib/company";

export const metadata: Metadata = {
  title: "Pentru autorități",
  description:
    "Ce livrează CS INNOVATIONS SOLUTIONS SRL într-un contract de sistem informatic: analiză, aplicație, rapoarte, hartă, teren, integrări, recepție și suport.",
};

const included = [
  ["Roluri", "Conturi separate pentru teren, supervizare și administrare. Un administrator poate aproba sau dezactiva un cont fără o nouă instalare."],
  ["Dosar", "Evaluare, plan, monitorizare și închidere, cu grile diferite pentru copil, adult și vârstnic când procedura o cere."],
  ["Registre și rapoarte", "Registrele cerute de caiet și rapoartele minime, exportabile. Un raport nou se adaugă de cine dezvoltă, nu dintr-un ecran gol."],
  ["Nomenclatoare", "Listele pe care instituția le schimbă singură: localități, categorii, furnizori."],
  ["Portal", "O pagină publică cu cifre agregate, fără nume și fără cod numeric personal."],
  ["Instruire", "Sesiuni pentru personal, separate de grilele de educație dintr-un dosar. Materialele de curs se predau odată cu sistemul."],
  ["Date", "Găzduire în Uniunea Europeană, copii de siguranță și un jurnal al acțiunilor. Datele de probă folosite la construire sunt fictive."],
  ["Proprietate", "La recepția finală, drepturile patrimoniale asupra lucrărilor create pentru contract trec la autoritate, în limita caietului."],
];

export default function AutoritatiPage() {
  return (
    <main className="flex-1">
      <div className="relative h-64 bg-night sm:h-80">
        <Image
          src="/photos/map-wall.jpg"
          alt="Hartă de sistem pe un ecran de sală"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-sm tracking-wide text-copper">{company.legalName}</p>
        <h1 className="mt-3 max-w-3xl text-4xl">Pentru autorități contractante</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
          Pagina aceasta este scrisă pentru cine citește un caiet de sarcini. Descrie ce
          putem preda. Calificarea — cifră de afaceri, servicii similare recepționate,
          experți — se depune în documentele procedurii, nu se înlocuiește cu un site.
        </p>

        <ol className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {delivery.map(([title, text], index) => (
            <li key={title} className="bg-paper p-5">
              <p className="text-sm text-copper">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 font-serif text-xl">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-14 text-3xl">Ce intră într-o predare</h2>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {included.map(([title, text]) => (
            <div key={title} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-8">
              <dt className="font-serif text-xl">{title}</dt>
              <dd className="text-ink-soft">{text}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 grid gap-6 border border-line p-5 sm:grid-cols-[1.2fr_1fr] sm:items-center">
          <div className="relative aspect-video bg-night">
            <Image
              src="/photos/community-desk.jpg"
              alt="Laptop cu o listă de dosare, pe un birou de lucru"
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl">Cel mai apropiat sistem</h2>
            <p className="mt-3 text-ink-soft">
              SISCI este o demonstrație de management de caz pentru servicii comunitare
              integrate, construită după documentul funcțional din 2022. Nu este un sistem
              primit în operare de o autoritate. Arată cum arată dosarul, planul și rolurile
              înainte de un contract.
            </p>
            <p className="mt-4">
              <Link
                href="/proiecte"
                className="underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
              >
                Toate sistemele
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
