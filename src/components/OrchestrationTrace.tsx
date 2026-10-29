const runSteps = [
  { kind: "intrare", title: "Înregistrarea consultației", detail: "audio, cu acordul pacientului" },
  { kind: "model", title: "Transcriere", detail: "model de vorbire, procesare în UE" },
  { kind: "model", title: "Structurare", detail: "model de limbaj, ieșire pe schema notei" },
  { kind: "regulă", title: "Validare", detail: "câmpuri obligatorii, format, coerență" },
  { kind: "om", title: "Revizie și semnătură", detail: "medicul corectează și aprobă" },
  { kind: "audit", title: "Jurnal", detail: "model, versiune prompt, cost, aprobare" },
] as const;

const kindStyle: Record<(typeof runSteps)[number]["kind"], string> = {
  intrare: "border-white/15 text-white/60",
  model: "border-flame/50 text-flame",
  regulă: "border-white/15 text-white/60",
  om: "border-signal/50 text-signal",
  audit: "border-white/15 text-white/60",
};

function Steps() {
  return (
    <ol className="relative px-5 py-4">
      <span aria-hidden="true" className="absolute top-7 bottom-7 left-[33px] w-px bg-gradient-to-b from-flame/70 via-white/15 to-signal/70" />
      {runSteps.map((step, index) => (
        <li key={step.title} className="relative grid grid-cols-[28px_1fr_auto] items-center gap-4 py-2.5">
          <span className="relative z-10 grid size-7 place-items-center rounded-full border border-white/15 bg-night font-mono text-[11px] text-white/70">
            {index + 1}
          </span>
          <span>
            <span className="block text-[15px] font-medium text-white">{step.title}</span>
            <span className="block font-mono text-[11px] text-white/45">{step.detail}</span>
          </span>
          <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${kindStyle[step.kind]}`}>{step.kind}</span>
        </li>
      ))}
    </ol>
  );
}

export function OrchestrationTrace({ bare = false }: { bare?: boolean }) {
  if (bare) return <Steps />;
  return (
    <figure className="overflow-hidden bg-night text-white">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
        <span className="font-mono text-xs text-white/55">flux / notă-clinică</span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-signal">
          <span aria-hidden="true" className="live-dot size-1.5 rounded-full bg-signal" />
          în rulare
        </span>
      </div>
      <Steps />
      <figcaption className="border-t border-white/10 px-5 py-3 font-mono text-[11px] text-white/45">
        Exemplu de flux, după modelul folosit în Scriva
      </figcaption>
    </figure>
  );
}
