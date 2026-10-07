import Link from "next/link";
import { ElementMark } from "@/components/ElementMark";
import { company, nav, programmes } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-auto bg-night text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 text-sm md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <ElementMark />
            <p className="text-base font-semibold">{company.brand}</p>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-white/65">
            Firmă de inginerie din Blejești, Teleorman, înființată în {company.founded}. Proiectăm platforme
            informatice și lucrăm la proiecte de chimie și inovare socială.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs text-white/45">Date firmă</p>
          <dl className="mt-3 space-y-1.5 font-mono text-[13px] text-white/75">
            <div>{company.legalName}</div>
            <div>CUI {company.cui}</div>
            <div>{company.tradeRegister}</div>
            <address className="not-italic text-white/60">{company.addressLines.join(", ")}</address>
          </dl>
        </div>
        <div>
          <p className="font-mono text-xs text-white/45">Pagini</p>
          <nav aria-label="Subsol" className="mt-3 grid gap-1.5">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring w-fit text-white/80 hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-xs text-white/50">
          Selectată în {programmes.map((p) => `${p.kind.toLowerCase()}ul ${p.name}`).join(" și în ")}, programe
          finanțate de Uniunea Europeană.
        </p>
      </div>
    </footer>
  );
}
