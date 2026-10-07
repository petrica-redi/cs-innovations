import { areaSymbol, countByArea, type Area } from "@/lib/projects";

export function AreaTile({ area, active = false }: { area: Area; active?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex size-12 shrink-0 items-end rounded-[3px] border p-1.5 ${
        active ? "border-flame bg-flame text-white" : "border-line bg-surface text-ink"
      }`}
    >
      <span className={`absolute top-1 left-1.5 font-mono text-[9px] leading-none ${active ? "text-white/80" : "text-muted"}`}>
        {countByArea(area)}
      </span>
      <span className="text-lg font-semibold leading-none tracking-tight">{areaSymbol[area]}</span>
    </span>
  );
}
