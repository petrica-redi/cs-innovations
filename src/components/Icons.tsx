import type { ReactNode } from "react";

export type IconName = "platform" | "ai" | "data" | "research" | "security" | "ops" | "code" | "database" | "cloud" | "test" | "flow" | "audit";

const paths: Record<IconName, ReactNode> = {
  platform: (
    <>
      <rect x="4" y="7" width="40" height="30" rx="2" />
      <path d="M4 14h40M16 41h16M24 37v4" />
      <path className="accent" d="m19 21-5 4.5 5 4.5M29 21l5 4.5-5 4.5M26 19l-4 13" />
    </>
  ),
  ai: (
    <>
      <rect x="13" y="13" width="22" height="22" rx="2" />
      <path d="M19 4v9M29 4v9M19 35v9M29 35v9M4 19h9M4 29h9M35 19h9M35 29h9" />
      <path className="accent" d="M19 29v-7l5-3 5 3v7M19 25h10" />
    </>
  ),
  data: (
    <>
      <path d="M5 42h38M9 42V28M18 42V20M27 42V25M36 42V12" />
      <path className="accent" d="m9 22 9-8 9 5 10-11M31 8h6v6" />
    </>
  ),
  research: (
    <>
      <path d="M18 5h12M20 5v14L8 39a3 3 0 0 0 2.6 4.5h26.8A3 3 0 0 0 40 39L28 19V5" />
      <path className="accent" d="M13 31h22M19 37h2M27 35h2" />
    </>
  ),
  security: (
    <>
      <path d="M24 4 7 10v12c0 10.5 7.2 18.6 17 22 9.8-3.4 17-11.5 17-22V10L24 4Z" />
      <path className="accent" d="m16 24 6 6 11-12" />
    </>
  ),
  ops: (
    <>
      <circle cx="24" cy="24" r="7" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.9 9.9l4.2 4.2M33.9 33.9l4.2 4.2M9.9 38.1l4.2-4.2M33.9 14.1l4.2-4.2" />
      <path className="accent" d="M24 20v4l3 2" />
    </>
  ),
  code: (
    <>
      <rect x="5" y="8" width="38" height="32" rx="2" />
      <path className="accent" d="m17 18-6 6 6 6M31 18l6 6-6 6M27 15l-6 18" />
    </>
  ),
  database: (
    <>
      <ellipse cx="24" cy="10" rx="16" ry="6" />
      <path d="M8 10v28c0 3.3 7.2 6 16 6s16-2.7 16-6V10" />
      <path className="accent" d="M8 20c0 3.3 7.2 6 16 6s16-2.7 16-6M8 29c0 3.3 7.2 6 16 6s16-2.7 16-6" />
    </>
  ),
  cloud: (
    <>
      <path d="M14 36H12a8 8 0 0 1-1.2-15.9A12 12 0 0 1 34 17a9.5 9.5 0 0 1 2 19h-2" />
      <path className="accent" d="M24 44V26M18 32l6-6 6 6" />
    </>
  ),
  test: (
    <>
      <rect x="9" y="6" width="30" height="38" rx="2" />
      <path d="M17 6V3h14v3" />
      <path className="accent" d="m15 20 3 3 6-6M15 33l3 3 6-6M28 20h6M28 33h6" />
    </>
  ),
  flow: (
    <>
      <rect x="4" y="18" width="12" height="12" rx="2" />
      <rect x="32" y="5" width="12" height="12" rx="2" />
      <rect x="32" y="31" width="12" height="12" rx="2" />
      <path className="accent" d="M16 24h8m0 0V11h8m-8 13v13h8" />
    </>
  ),
  audit: (
    <>
      <path d="M10 4h20l8 8v32H10V4Z" />
      <path d="M30 4v8h8" />
      <path className="accent" d="M16 22h16M16 29h16M16 36h9" />
    </>
  ),
};

export function Icon({ name, className = "size-12", light }: { name: IconName; className?: string; light?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} ${light ? "stroke-white [&_.accent]:stroke-flame" : "stroke-violet [&_.accent]:stroke-flame"}`}
    >
      {paths[name]}
    </svg>
  );
}
