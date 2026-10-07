import type { ReactNode } from "react";

type Props = { label: string; title: string; children?: ReactNode; aside?: ReactNode };

export function PageHead({ label, title, children, aside }: Props) {
  return (
    <section className="grid-paper bg-night text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 pt-14 pb-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <p className="font-mono text-xs text-[#a996ff]">{label}</p>
          <h1 className="mt-3 text-[2.4rem] leading-[1.1] font-semibold md:text-5xl">{title}</h1>
          {children ? <div className="mt-5 max-w-[60ch] text-lg leading-relaxed text-white/70">{children}</div> : null}
        </div>
        {aside}
      </div>
    </section>
  );
}
