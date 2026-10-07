import Link from "next/link";
import { company, nav } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-auto bg-night text-paper">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 text-sm md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="font-serif text-xl">{company.brand}</p>
          <p className="mt-2 max-w-md text-paper/75">
            Firmă de inginerie din Blejești, Teleorman, înființată în {company.founded}. Proiectăm platforme informatice și lucrăm la proiecte de chimie și inovare socială.
          </p>
          <p className="mt-6 text-paper/60">
            {company.legalName} · CUI {company.cui} · {company.tradeRegister}
          </p>
          <address className="mt-1 text-paper/60 not-italic">{company.addressLines.join(", ")}</address>
        </div>
        <nav aria-label="Subsol" className="grid grid-cols-2 gap-2 md:justify-items-end md:text-right">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit border-b border-transparent hover:border-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper md:col-span-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
