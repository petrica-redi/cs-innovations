import type { Metadata } from "next";
import Link from "next/link";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Pentru autorități contractante",
  description:
    "Ce primește o autoritate la finalul unui contract de platformă informatică cu CS Innovations, cu exemplul SISCI.",
};

const items = [
  ["Analiza", "Înainte de primul ecran stabilim cu echipa instituției cine folosește aplicația, ce poate face fiecare și ce intră în prima versiune."],
  ["Dosarul și conturile", "Fiecare caz trece prin evaluare, plan, monitorizare și închidere, iar conturile pentru teren, coordonare și administrare sunt separate."],
  ["Registre, rapoarte și liste", "Registrele și rapoartele cerute prin caietul de sarcini se exportă în Excel. Listele de localități, categorii și furnizori le modifică administratorul instituției, fără să aștepte o versiune nouă de la noi."],
  ["Hartă și lucru pe teren", "Harta și portalul public arată doar cifre agregate, fără nume și fără CNP. Pe teren, aplicația merge și fără semnal și se sincronizează când revine conexiunea."],
  ["Date și integrări", "Locul găzduirii, copiile de siguranță și jurnalul acțiunilor urmează cerințele din caietul de sarcini. Legăturile cu alte sisteme le facem prin API, pe specificația și mediul de test primite de la instituție."],
  ["Predare și recepție", "Pilot, instruire, cod sursă, manual în limba română și scenariile de recepție. Drepturile asupra codului creat prin contract se transferă în condițiile stabilite de caietul de sarcini."],
];

export default function AutoritatiPage() {
  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-5 py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-[2.6rem] leading-[1.1] md:text-5xl">Pentru autorități contractante</h1>
          <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink-soft">
            Pagina aceasta este pentru autoritățile care pregătesc achiziția unei platforme informatice.
            Mai jos descriem ce primiți la finalul unui contract cu noi. Exemplul concret este SISCI,
            platforma noastră de management de caz pentru servicii comunitare integrate, pe care o puteți
            încerca în versiunea demonstrativă, cu date de test.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="https://sisci.vercel.app"
              rel="noreferrer"
              className="underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Deschide SISCI ↗
            </a>
            <Link
              href="/despre#date"
              className="underline decoration-copper underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              Datele firmei și sediul
            </Link>
          </p>
        </div>
        <Screen
          src="/screens/sisci-case.jpg"
          domain="sisci.vercel.app"
          alt="Dosarul unui beneficiar în SISCI, cu anexele 1–7"
          priority
        />
      </div>

      <h2 className="mt-20 font-serif text-3xl">Ce primiți</h2>
      <ol className="mt-8 grid gap-x-12 md:grid-cols-2">
        {items.map(([title, text], index) => (
          <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-6">
            <span className="font-serif text-2xl text-copper">{index + 1}</span>
            <div>
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  );
}
