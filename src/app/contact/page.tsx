import type { Metadata } from "next";
import Image from "next/image";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Sediu și date de identificare pentru ${company.legalName}.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid w-full max-w-[1120px] flex-1 items-start gap-10 px-5 py-16 lg:grid-cols-2">
      <div>
      <p className="text-[13px] tracking-[0.08em] text-copper uppercase">Contact</p>
      <h1 className="mt-3 font-serif text-[2.5rem] leading-[1.15] md:text-5xl">Sediu social</h1>
      <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-ink-soft">
        Corespondența se trimite la sediul din Blejești.
      </p>
      <address className="mt-10 max-w-md border-t border-line pt-8 not-italic">
        <p className="font-serif text-[1.75rem] text-ink">{company.legalName}</p>
        <p className="mt-4 text-ink-soft">
          {company.addressLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-4">CUI {company.cui}</p>
        <p className="mt-1 text-ink-soft">{company.tradeRegister}</p>
        {company.email ? (
          <p className="mt-4">
            <a className="underline decoration-copper underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        ) : null}
        {company.phone ? <p className="mt-2">{company.phone}</p> : null}
      </address>
      </div>
      <figure>
        <div className="relative aspect-[4/3] bg-night">
          <Image
            src="/photos/lab-screen.jpg"
            alt="Laborator cu un ecran de lucru"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-sm text-ink-soft">
          Selectată în incubatorul EIT RawMaterials și în acceleratorul 28DIGITAL.
        </figcaption>
      </figure>
    </main>
  );
}
