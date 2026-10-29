import { OrchestrationTrace } from "@/components/OrchestrationTrace";

type Tone = "plain" | "core" | "model" | "human" | "out";
type Node = { id: string; x: number; y: number; w: number; h: number; label: string; sub: string; tone: Tone };

const nodes: Node[] = [
  { id: "audio", x: 16, y: 34, w: 188, h: 56, label: "Audio consultație", sub: "înregistrare", tone: "plain" },
  { id: "docs", x: 16, y: 124, w: 188, h: 56, label: "Documente", sub: "PDF, scanări", tone: "plain" },
  { id: "forms", x: 16, y: 214, w: 188, h: 56, label: "Formulare", sub: "cereri, fișe", tone: "plain" },
  { id: "api", x: 16, y: 304, w: 188, h: 56, label: "API instituție", sub: "sisteme existente", tone: "plain" },
  { id: "orch", x: 268, y: 142, w: 196, h: 110, label: "Orchestrator", sub: "pași · reîncercări · cost", tone: "core" },
  { id: "speech", x: 528, y: 34, w: 196, h: 56, label: "Vorbire în text", sub: "model audio", tone: "model" },
  { id: "llm", x: 528, y: 124, w: 196, h: 56, label: "Model de limbaj", sub: "extragere, redactare", tone: "model" },
  { id: "vision", x: 528, y: 214, w: 196, h: 56, label: "Model de imagine", sub: "documente, imagini", tone: "model" },
  { id: "rag", x: 528, y: 304, w: 196, h: 56, label: "Căutare cu sursă", sub: "documentele instituției", tone: "model" },
  { id: "check", x: 790, y: 96, w: 176, h: 56, label: "Validare", sub: "schemă, reguli", tone: "plain" },
  { id: "human", x: 790, y: 242, w: 176, h: 56, label: "Aprobare umană", sub: "semnează responsabilul", tone: "human" },
  { id: "system", x: 1028, y: 96, w: 176, h: 56, label: "Dosarul instituției", sub: "salvat după aprobare", tone: "out" },
  { id: "audit", x: 1028, y: 242, w: 176, h: 56, label: "Jurnal de audit", sub: "model, prompt, cost", tone: "out" },
];

const edges: [string, string, "h" | "v", Tone][] = [
  ["audio", "orch", "h", "core"],
  ["docs", "orch", "h", "core"],
  ["forms", "orch", "h", "core"],
  ["api", "orch", "h", "core"],
  ["orch", "speech", "h", "model"],
  ["orch", "llm", "h", "model"],
  ["orch", "vision", "h", "model"],
  ["orch", "rag", "h", "model"],
  ["speech", "check", "h", "model"],
  ["llm", "check", "h", "model"],
  ["vision", "check", "h", "model"],
  ["rag", "check", "h", "model"],
  ["check", "human", "v", "human"],
  ["human", "system", "h", "human"],
  ["human", "audit", "h", "human"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

const stroke: Record<Tone, string> = {
  plain: "rgba(255,255,255,0.55)",
  core: "#43baff",
  model: "#43baff",
  human: "#34d399",
  out: "rgba(255,255,255,0.55)",
};

function path(fromId: string, toId: string, dir: "h" | "v") {
  const a = byId[fromId];
  const b = byId[toId];
  if (dir === "v") {
    const x = a.x + a.w / 2;
    return `M ${x} ${a.y + a.h} L ${x} ${b.y}`;
  }
  const x1 = a.x + a.w;
  const y1 = a.y + a.h / 2;
  const x2 = b.x;
  const y2 = b.y + b.h / 2;
  const dx = (x2 - x1) * 0.55;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}

function NodeBox({ node }: { node: Node }) {
  const core = node.tone === "core";
  const human = node.tone === "human";
  return (
    <g>
      <rect
        x={node.x}
        y={node.y}
        width={node.w}
        height={node.h}
        rx={core ? 4 : 2}
        fill={core ? "#3a3270" : human ? "#163a3a" : "#2e2861"}
        stroke={core ? "#43baff" : human ? "#34d399" : "rgba(255,255,255,0.12)"}
        strokeOpacity={core || human ? 0.7 : 1}
      />
      {core ? (
        <circle cx={node.x + 22} cy={node.y + 26} r={4} fill="#43baff" className="live-dot" />
      ) : (
        <circle cx={node.x + 16} cy={node.y + node.h / 2} r={3} fill={stroke[node.tone]} />
      )}
      <text
        x={core ? node.x + 36 : node.x + 30}
        y={core ? node.y + 31 : node.y + 25}
        fill="#fff"
        fontSize={core ? 18 : 14.5}
        fontWeight={500}
        letterSpacing="-0.01em"
      >
        {node.label}
      </text>
      <text
        x={core ? node.x + 22 : node.x + 30}
        y={core ? node.y + 62 : node.y + 42}
        fill="rgba(255,255,255,0.45)"
        fontSize={11.5}
        fontFamily="var(--font-geist-mono)"
      >
        {node.sub}
      </text>
      {core ? (
        <g fontFamily="var(--font-geist-mono)" fontSize={10.5}>
          {["rutare", "limite", "urmărire"].map((tag, index) => (
            <g key={tag}>
              <rect x={node.x + 22 + index * 56} y={node.y + 76} width={50} height={20} rx={2} fill="rgba(67,186,255,0.16)" />
              <text x={node.x + 47 + index * 56} y={node.y + 90} fill="#9fdcff" textAnchor="middle">
                {tag}
              </text>
            </g>
          ))}
        </g>
      ) : null}
    </g>
  );
}

export function OrchestrationGraph() {
  return (
    <figure className="relative overflow-hidden bg-night text-white shadow-[0_40px_80px_-35px_rgba(38,32,81,0.7)]">
      <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
        <span className="flex min-w-0 items-center gap-3 truncate font-mono text-xs text-white/55">
          <span className="hidden gap-1.5 sm:flex" aria-hidden="true">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-2 rounded-full bg-white/15" />
            ))}
          </span>
          orchestrator / notă-clinică
        </span>
        <span className="flex shrink-0 items-center gap-2 font-mono text-[11px] whitespace-nowrap text-signal">
          <span aria-hidden="true" className="live-dot size-1.5 rounded-full bg-signal" />
          în rulare
        </span>
      </div>

      <div className="relative hidden px-4 py-6 md:block">
        <svg viewBox="0 0 1220 394" role="img" aria-labelledby="graph-title" className="h-auto w-full font-sans">
          <title id="graph-title">
            Flux orchestrat: intrările ajung la orchestrator, care trimite fiecare pas modelului potrivit; rezultatul trece prin
            validare și aprobare umană, apoi este salvat în dosar și în jurnalul de audit.
          </title>
          {edges.map(([from, to, dir]) => (
            <path key={`base-${from}-${to}`} d={path(from, to, dir)} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={1.25} />
          ))}
          {edges.map(([from, to, dir, tone], index) => (
            <path
              key={`flow-${from}-${to}`}
              d={path(from, to, dir)}
              fill="none"
              stroke={stroke[tone]}
              strokeWidth={1.5}
              strokeLinecap="round"
              className="flow-line"
              style={{ animationDelay: `${(index % 5) * -0.3}s` }}
            />
          ))}
          {nodes.map((node) => (
            <NodeBox key={node.id} node={node} />
          ))}
        </svg>
      </div>

      <div className="relative md:hidden">
        <OrchestrationTrace bare />
      </div>

      <figcaption className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3 font-mono text-[11px] text-white/45">
        <span className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-flame" /> model
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-signal" /> om
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-white/50" /> date și jurnal
          </span>
        </span>
        <span>Exemplu de flux, după modelul folosit în Scriva</span>
      </figcaption>
    </figure>
  );
}
