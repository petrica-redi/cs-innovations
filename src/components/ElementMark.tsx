type Props = { size?: "sm" | "lg"; inverted?: boolean };

export function ElementMark({ size = "sm", inverted = false }: Props) {
  const box = size === "lg" ? "size-14" : "size-10";
  const symbol = size === "lg" ? "text-2xl" : "text-lg";
  const colors = inverted ? "bg-white text-night" : "bg-flame text-white";
  return (
    <span aria-hidden="true" className={`inline-flex ${box} shrink-0 items-center justify-center rounded-[3px] ${colors}`}>
      <span className={`font-semibold leading-none tracking-tight ${symbol}`}>CS</span>
    </span>
  );
}
