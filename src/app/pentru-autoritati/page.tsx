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
          <Link href="/camera-de-date" className="text-white underline decoration-[#a996ff] underline-offset-4">
            camera de date
          </Link>
          : linkul și codul de acces pleacă pe canale separate.
        </p>
        <p className="mt-6 flex flex-wrap gap-3 text-sm">
          <a href="https://sisci.vercel.app" rel="noreferrer" className="focus-ring rounded-[4px] bg-flame px-5 py-3 font-medium text-white hover:bg-[#6b50ff]">
            Deschide SISCI ↗
          </a>
          <Link href="/despre#date" className="focus-ring rounded-[4px] border border-white/25 px-5 py-3 font-medium text-white hover:border-white/60">
            Datele firmei
          </Link>
        </p>
      </PageHead>

      <section className="mx-auto max-w-[1200px] px-5 py-16" aria-labelledby="primiti">
        <h2 id="primiti" className="text-3xl font-semibold">
          Ce primiți
        </h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, text], index) => (
            <li key={title} className="rounded-md border border-line bg-surface p-6">
              <p className="font-mono text-xs text-flame">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
