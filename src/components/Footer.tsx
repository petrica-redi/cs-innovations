import Link from "next/link";
import { ElementMark } from "@/components/ElementMark";
import { company, dataRoomLink, nav, programmes } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-auto overflow-hidden bg-night text-white">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 pt-20 pb-12 text-sm md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <ElementMark inverted />
            <p className="text-base font-semibold tracking-[-0.02em]">{company.brand}</p>
          </div>
          <p className="mt-5 max-w-sm leading-relaxed text-white/55">
            {company.tagline} pentru sectorul public, sănătate și cercetare. București, din {company.founded}.
          </p>
          <Link
            href="/contact"
            className="focus-ring mt-7 inline-flex rounded-full bg-white px-4 py-2 font-medium text-ink transition-colors hover:bg-white/85"
          >
            Discutăm un proiect
          </Link>
        </div>
        <div>
          <p className="text-xs text-white/40">Companie</p>
          <dl className="mt-4 space-y-2 text-[13px] text-white/70">
            <div>{company.legalName}</div>
            <div className="font-mono">CUI {company.cui}</div>
            <div className="font-mono">{company.tradeRegister}</div>
            <address className="pt-2 not-italic text-white/55">
              {company.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </dl>
        </div>
        <div>
          <p className="text-xs text-white/40">Navigare</p>
          <nav aria-label="Subsol" className="mt-4 grid gap-2">
            {[...nav, dataRoomLink].map((item) => (
              <Link key={item.href} href={item.href} className="focus-ring w-fit text-white/70 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] px-5">
        <p
          aria-hidden="true"
          className="translate-y-[22%] text-[clamp(3rem,13vw,10.5rem)] leading-none font-semibold whitespace-nowrap tracking-[-0.06em] text-white/[0.07] select-none"
        >
          CS Innovations
        </p>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-xs text-white/45">
          Selectată în {programmes.map((p) => `${p.kind.toLowerCase()}ul ${p.name}`).join(" și în ")}, programe
          finanțate de Uniunea Europeană.
        </p>
      </div>
    </footer>
  );
}
