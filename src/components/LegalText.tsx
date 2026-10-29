import type { ReactNode } from "react";

export function LegalText({ updated, children }: { updated: string; children: ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-[820px] px-5 py-20 text-[16px] leading-[1.85] [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-[1.5rem] [&_li]:mt-1.5 [&_p]:mt-4 [&_strong]:text-ink [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6">
      <p className="eyebrow !mt-0">Ultima actualizare: {updated}</p>
      {children}
    </article>
  );
}
