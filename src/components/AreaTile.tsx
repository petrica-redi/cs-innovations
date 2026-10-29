import { countByArea, type Area } from "@/lib/projects";

export function AreaTile({ area, active = false }: { area: Area; active?: boolean }) {
  const count = String(countByArea(area)).padStart(2, "0");
  return (
    <span
      aria-hidden="true"
      className={`inline-flex h-8 items-center border px-2.5 font-heading text-xs font-bold ${
        active ? "border-cta bg-cta text-white" : "border-line bg-surface text-ink"
      }`}
    >
      {count}
    </span>
  );
}
