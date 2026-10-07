import Link from "next/link";
import { company } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-night text-paper">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 text-sm sm:grid-cols-2">
        <div>
          <p className="font-serif text-base">{company.legalName}</p>
          <p className="mt-2 text-paper/70">
            CUI {company.cui}
            <span aria-hidden="true"> · </span>
            {company.tradeRegister}
          </p>
          <address className="mt-2 text-paper/70 not-italic">
            {company.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div className="sm:text-right">
          <Link
            href="/proiecte"
            className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
          >
            Proiecte
          </Link>
          <p className="mt-2 text-paper/70">Firmă înființată în {company.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
