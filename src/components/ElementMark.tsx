type Props = { size?: number; inverted?: boolean };

export function ElementMark({ size = 34, inverted = false }: Props) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 36 36" className="shrink-0">
      <defs>
        <linearGradient id="cs-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#43baff" />
          <stop offset="1" stopColor="#7141b1" />
        </linearGradient>
      </defs>
      <path d="M18 2.5 33 10.5 18 18.5 3 10.5Z" fill="url(#cs-mark)" />
      <path d="M3 17.5 18 25.5 33 17.5" fill="none" stroke="url(#cs-mark)" strokeWidth="3.2" strokeLinejoin="round" />
      <path
        d="M3 24.5 18 32.5 33 24.5"
        fill="none"
        stroke={inverted ? "#ffffff" : "#262051"}
        strokeOpacity={inverted ? 0.85 : 1}
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <ElementMark inverted={inverted} />
      <span className={`font-heading text-[21px] leading-none tracking-[-0.01em] ${inverted ? "text-white" : "text-ink"}`}>
        <span className="font-normal">cs</span>
        <span className="font-bold">innovations</span>
      </span>
    </span>
  );
}
