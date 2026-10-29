import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

function Card({
  dark,
  className = "",
  eyebrow,
  title,
  text,
  children,
}: {
  dark?: boolean;
  className?: string;
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
}) {
  return (
    <article
      className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border p-7 ${
        dark ? "border-white/10 bg-night text-white" : "border-line bg-surface"
      } ${className}`}
    >
      <p className={`font-mono text-[11px] ${dark ? "text-[#aab8ff]" : "text-flame"}`}>{eyebrow}</p>
      <h3 className="mt-3 text-[1.6rem] leading-tight font-semibold">{title}</h3>
      <p className={`mt-2 max-w-[46ch] text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{text}</p>
      <div className="mt-7 flex-1">{children}</div>
    </article>
  );
}

function SchemaCheck() {
  const lines: [string, string, "ok" | "wait"][] = [
    ["motiv_prezentare", '"tuse, febră 3 zile"', "ok"],
    ["examen_obiectiv", '"murmur vezicular prezent"', "ok"],
    ["plan", '"hemoleucogramă, control 7 zile"', "ok"],
    ["semnat_de", "null", "wait"],
  ];
  return (
    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-night-2 p-4 font-mono text-[12px] leading-6 text-white/70">
        <span className="text-white/35">{"// ieșire model → schema notei"}</span>
        {"\n{\n"}
        {lines.map(([key, value, state]) => (
          <span key={key}>
            {"  "}
            <span className="text-[#aab8ff]">{`"${key}"`}</span>: <span className={state === "wait" ? "text-amber-300" : "text-white/80"}>{value}</span>
            {",\n"}
          </span>
        ))}
        {"}"}
      </pre>
      <ul className="space-y-2 text-[13px]">
        {[
          ["Schemă validă", "ok"],
          ["Câmpuri obligatorii", "ok"],
          ["Sursă atașată", "ok"],
          ["Semnătura medicului", "wait"],
        ].map(([label, state]) => (
          <li key={label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
            {label}
            <span
              className={`rounded-full px-2 py-0.5 font-mono text-[10px] ${
                state === "ok" ? "bg-signal/15 text-signal" : "bg-amber-300/15 text-amber-300"
              }`}
            >
              {state === "ok" ? "trecut" : "așteaptă"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AuditLog() {
  const rows = [
    ["10:42:07", "transcriere", "model audio"],
    ["10:42:19", "structurare", "model de limbaj"],
    ["10:42:20", "validare", "schemă"],
    ["10:44:51", "aprobare", "medic"],
  ];
  return (
    <ul className="divide-y divide-line rounded-xl border border-line bg-bg font-mono text-[12px]">
      {rows.map(([time, step, actor], index) => (
        <li key={time} className="flex items-center gap-3 px-3.5 py-2.5">
          <span className="text-muted">{time}</span>
          <span className="flex-1 text-ink">{step}</span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] ${index === rows.length - 1 ? "bg-[#e7f8f0] text-[#0f7a55]" : "bg-flame-soft text-flame"}`}>
            {actor}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Roles() {
  const roles = [
    ["Teren", "Evaluare, vizite", true],
    ["Coordonare", "Planuri, aprobări", true],
    ["Administrare", "Liste, utilizatori", false],
  ] as const;
  return (
    <ul className="space-y-2">
      {roles.map(([role, scope, on]) => (
        <li key={role} className="flex items-center justify-between rounded-xl border border-line bg-bg px-3.5 py-3">
          <span>
            <span className="block text-sm font-medium">{role}</span>
            <span className="block text-xs text-muted">{scope}</span>
          </span>
          <span aria-hidden="true" className={`relative h-5 w-9 rounded-full ${on ? "bg-flame" : "bg-line"}`}>
            <span className={`absolute top-0.5 size-4 rounded-full bg-white shadow ${on ? "left-[18px]" : "left-0.5"}`} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function MapCrop() {
  return (
    <div className="relative h-44 overflow-hidden rounded-xl border border-line">
      <Image src="/screens/sentinel-map.jpg" alt="Harta Sentinel cu stațiile de măsurare din România" fill sizes="400px" className="object-cover object-left transition-transform duration-700 group-hover:scale-105" />
    </div>
  );
}

function Checklist() {
  return (
    <ul className="grid grid-cols-2 gap-2 text-[13px]">
      {["Date în UE", "Acces pe roluri", "GDPR din proiectare", "Jurnal de audit", "Copii de siguranță", "Cod sursă predat"].map((item) => (
        <li key={item} className="flex items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2.5">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0 text-flame">
            <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Bento() {
  return (
    <div className="grid gap-4 lg:grid-cols-6">
      <Card
        dark
        className="lg:col-span-4"
        eyebrow="Orchestrare AI"
        title="Fiecare ieșire a modelului este verificată înainte să conteze"
        text="Modelele de limbaj, vorbire și imagine lucrează în pași controlați. Rezultatul trece prin schemă și reguli, apoi așteaptă aprobarea omului responsabil."
      >
        <SchemaCheck />
      </Card>
      <Card
        className="lg:col-span-2"
        eyebrow="Trasabilitate"
        title="Jurnal pentru fiecare pas"
        text="Cine, ce model, ce versiune de prompt și când. Orice decizie se poate reconstitui din jurnal."
      >
        <AuditLog />
      </Card>
      <Card
        className="lg:col-span-2"
        eyebrow="Platforme la comandă"
        title="Roluri, fluxuri, rapoarte"
        text="Aplicații web construite pe procedura instituției, cu permisiuni separate pentru fiecare rol."
      >
        <Roles />
      </Card>
      <Card
        className="lg:col-span-2"
        eyebrow="Date și integrări"
        title="Hărți, API, alerte"
        text="Legăm sistemele existente și publicăm cifre agregate, cu alerte la depășirea pragurilor."
      >
        <MapCrop />
      </Card>
      <Card
        className="lg:col-span-2"
        eyebrow="Securitate și conformitate"
        title="Incluse în fiecare proiect"
        text="Datele rămân în Uniunea Europeană, iar codul și documentația se predau instituției."
      >
        <Checklist />
      </Card>
      <Link
        href="/servicii"
        className="focus-ring reveal flex items-center justify-between rounded-2xl border border-line bg-surface px-7 py-5 text-[15px] font-medium transition-colors hover:border-ink lg:col-span-6"
      >
        Toate serviciile, cu detaliile tehnice
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
