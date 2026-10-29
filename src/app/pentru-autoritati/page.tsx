import type { Metadata } from "next";
import Link from "next/link";
import { PageHead } from "@/components/PageHead";
import { Screen } from "@/components/Screen";

export const metadata: Metadata = {
  title: "Pentru autorități contractante",
  description:
    "Ce primește o autoritate la finalul unui contract de platformă informatică cu CS Innovations, cu exemplul SISCI.",
  alternates: { canonical: "/pentru-autoritati" },
};

const items = [
  ["Analiza", "Înainte de primul ecran stabilim cu echipa instituției cine folosește aplicația, ce poate face fiecare și ce intră în prima versiune."],
  ["Dosarul și conturile", "Fiecare caz trece prin evaluare, plan, monitorizare și închidere, iar conturile pentru teren, coordonare și administrare sunt separate."],
  ["Registre, rapoarte și liste", "Registrele și rapoartele cerute prin caietul de sarcini se exportă în Excel. Listele de localități, categorii și furnizori le modifică administratorul instituției, fără să aștepte o versiune nouă de la noi."],
  ["Hartă și lucru pe teren", "Harta și portalul public arată doar cifre agregate, fără nume și fără CNP. Pe teren, aplicația merge și fără semnal și se sincronizează când revine conexiunea."],
  ["Date și integrări", "Locul găzduirii, copiile de siguranță și jurnalul acțiunilor urmează cerințele din caietul de sarcini. Legăturile cu alte sisteme le facem prin API, pe specificația și mediul de test primite de la instituție."],
  ["AI cu aprobare umană", "Unde caietul de sarcini cere asistență AI, modelul propune, iar funcționarul aprobă. Fiecare propunere rămâne în jurnal, cu modelul și versiunea folosite, iar datele sunt procesate în UE."],
  ["Predare și recepție", "Pilot, instruire, cod sursă, manual în limba română și scenariile de recepție. Drepturile asupra codului creat prin contract se transferă în condițiile stabilite de caietul de sarcini."],
];

export default function AutoritatiPage() {
  return (
    <main className="flex-1">
      <PageHead
        label="Achiziții publice"
        title="Pentru autorități contractante"
        aside={
          <Screen
            src="/screens/sisci-case.jpg"
            domain="sisci.vercel.app"
            alt="Dosarul unui beneficiar în SISCI, cu anexele 1–7"
            priority
            dark
          />
        }
      >
        <p>
          Pagina aceasta este pentru autoritățile care pregătesc achiziția unei platforme informatice. Exemplul concret este
          SISCI, platforma noastră de management de caz pentru servicii comunitare integrate, pe care o puteți încerca în
          versiunea demonstrativă, cu date de test. Documentele procedurii se transmit prin{" "}
          <Link href="/camera-de-date" className="text-white underline decoration-flame underline-offset-4">
            camera de date
          </Link>
          : linkul și codul de acces pleacă pe canale separate.
        </p>
        <p className="mt-8 flex flex-wrap gap-4">
          <a href="https://sisci.vercel.app" rel="noreferrer" className="btn focus-ring">
            Deschide SISCI
          </a>
          <Link href="/despre#date" className="btn btn-line focus-ring">
            Datele firmei
          </Link>
        </p>
      </PageHead>

      <section className="mx-auto max-w-[1200px] px-5 py-24" aria-labelledby="primiti">
        <p className="eyebrow">Contract de platformă informatică</p>
        <h2 id="primiti" className="mt-3 text-[2rem] md:text-[2.5rem]">
          Ce primiți
        </h2>
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, text], index) => (
            <li key={title} className="group relative overflow-hidden border border-line bg-white p-8 transition-shadow hover:shadow-[0_25px_50px_-20px_rgba(38,32,81,0.3)]">
              <span aria-hidden="true" className="big-num big-num-light absolute top-4 right-5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="relative text-[19px]">{title}</h3>
              <p className="relative mt-3 text-[15px] leading-[1.75]">{text}</p>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-flame transition-transform group-hover:scale-x-100" />
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
