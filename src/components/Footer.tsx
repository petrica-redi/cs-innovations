import Link from "next/link";
import { company, nav } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-paper/15 bg-night text-paper">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-5 py-10 text-sm sm:grid-cols-2">
        <div>
          <p className="font-serif text-lg">{company.legalName}</p>
          <p className="mt-3 text-paper/70">
            CUI {company.cui}
            <span aria-hidden="true"> · </span>
            {company.tradeRegister}
            <span aria-hidden="true"> · </span>
            CAEN {company.caen}
          </p>
          <address className="mt-3 text-paper/70 not-italic">
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 max-w-md text-paper/80">
            Selectată în incubatorul EIT RawMaterials și în acceleratorul 28DIGITAL —
            programe finanțate de Uniunea Europeană.
          </p>
        </div>
        <nav aria-label="Subsol" className="flex flex-col gap-2 sm:items-end">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit border-b border-transparent hover:border-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
