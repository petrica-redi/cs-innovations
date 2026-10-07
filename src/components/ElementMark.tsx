type Props = { size?: "sm" | "lg"; inverted?: boolean };

export function ElementMark({ size = "sm", inverted = false }: Props) {
  const box = size === "lg" ? "size-14" : "size-10";
  const symbol = size === "lg" ? "text-2xl" : "text-lg";
  const colors = inverted ? "bg-white text-night" : "bg-flame text-white";
  return (
    <span aria-hidden="true" className={`relative inline-flex ${box} shrink-0 items-end rounded-[3px] ${colors} p-1.5`}>
      <span className="absolute top-1 left-1.5 font-mono text-[9px] leading-none opacity-80">55</span>
      <span className={`font-semibold leading-none tracking-tight ${symbol}`}>Cs</span>
    </span>
  );
}
