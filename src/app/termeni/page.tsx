import type { Metadata } from "next";
import Link from "next/link";
import { LegalText } from "@/components/LegalText";
import { PageHead } from "@/components/PageHead";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Termeni de utilizare",
  description: `Termenii de utilizare a site-ului ${company.brand}.`,
  alternates: { canonical: "/termeni" },
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHead label="Termeni" title="Termeni de utilizare">
        Regulile care se aplică atunci când folosiți acest site.
      </PageHead>
      <LegalText updated="29 octombrie 2026">
        <h2>Despre site</h2>
        <p>
          Site-ul este operat de <strong>{company.legalName}</strong>, CUI {company.cui}, {company.tradeRegister}. Prin
          folosirea site-ului acceptați acești termeni.
        </p>

        <h2>Conținutul</h2>
        <p>
          Textele, grafica și codul site-ului aparțin {company.legalName}. Le puteți cita cu indicarea sursei. Capturile de
          ecran ale proiectelor arată versiuni online ale platformelor la data publicării și pot diferi de versiunile actuale.
          Mărcile și denumirile terților aparțin titularilor lor.
        </p>
        <p>
          Informațiile de pe site au caracter general și nu constituie o ofertă. Obligațiile părților într-un proiect se
          stabilesc prin contract sau prin documentația procedurii de achiziție.
        </p>

        <h2>Platformele demonstrative</h2>
        <p>
          Linkurile din portofoliu duc la platforme separate. Versiunile demonstrative folosesc date de test. Nu introduceți
          date personale reale în versiunile demonstrative.
        </p>

        <h2>Camera de date</h2>
        <p>
          Accesul se face doar cu un cod transmis de noi. Codul este personal și nu se transmite mai departe. Documentele
          primite prin camera de date se folosesc doar în scopul pentru care au fost transmise.
        </p>

        <h2>Răspundere</h2>
        <p>
          Depunem eforturi ca site-ul să fie disponibil și corect, dar nu garantăm funcționarea neîntreruptă. Nu răspundem
          pentru conținutul site-urilor externe către care trimitem.
        </p>

        <h2>Date personale</h2>
        <p>
          Prelucrarea datelor este descrisă în{" "}
          <Link href="/politica-de-confidentialitate" className="font-bold text-cta underline underline-offset-4">
            politica de confidențialitate
          </Link>
          .
        </p>

        <h2>Legea aplicabilă</h2>
        <p>Se aplică legea română. Eventualele litigii se soluționează de instanțele competente din România.</p>
      </LegalText>
    </main>
  );
}
