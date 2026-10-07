import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Sediu și date de identificare pentru ${company.legalName}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12 sm:py-16">
      <h1 className="text-4xl text-ink">Contact</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Scrieți firmei la sediul social. Emailul și telefonul se publică aici imediat ce
        sunt stabilite; până atunci nu afișăm o adresă care nu primește mesaje.
      </p>
      <address className="mt-10 max-w-md border-t border-line pt-8 not-italic">
        <p className="font-serif text-2xl text-ink">{company.legalName}</p>
        <p className="mt-4 text-ink-soft">
          {company.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-4 text-ink">CUI {company.cui}</p>
        {company.email ? (
          <p className="mt-2">
            <a className="underline decoration-copper underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        ) : null}
        {company.phone ? <p className="mt-2">{company.phone}</p> : null}
      </address>
    </main>
  );
}
