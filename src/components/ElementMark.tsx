type Props = { size?: "sm" | "lg"; inverted?: boolean };

export function ElementMark({ size = "sm", inverted = false }: Props) {
  const box = size === "lg" ? "size-12 rounded-[10px] text-lg" : "size-8 rounded-[8px] text-[13px]";
  const colors = inverted ? "bg-white text-ink" : "bg-ink text-white";
  return (
    <span aria-hidden="true" className={`relative inline-grid ${box} shrink-0 place-items-center font-semibold tracking-[-0.04em] ${colors}`}>
      cs
      <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-flame ring-2 ring-bg" />
    </span>
  );
}
