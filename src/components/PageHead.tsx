import type { ReactNode } from "react";

type Props = { label: string; title: string; children?: ReactNode; aside?: ReactNode };

export function PageHead({ label, title, children, aside }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div className="relative mx-auto grid max-w-[1200px] gap-12 px-5 pt-20 pb-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-24 lg:pb-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-flame" />
            {label}
          </p>
          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-semibold md:text-[4rem]">{title}</h1>
          {children ? <div className="mt-6 max-w-[58ch] text-lg leading-relaxed text-muted">{children}</div> : null}
        </div>
        {aside}
      </div>
    </section>
  );
}
