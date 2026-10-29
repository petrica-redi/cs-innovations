import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  id?: string;
  center?: boolean;
  aside?: ReactNode;
};

export function SectionTitle({ eyebrow, title, id, center, aside }: Props) {
  if (center) {
    return (
      <div className="mx-auto max-w-[760px] text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="mt-3 text-[2rem] md:text-[2.5rem]">
          {title}
        </h2>
      </div>
    );
  }
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
      <div className="max-w-[640px]">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id} className="mt-3 text-[2rem] md:text-[2.5rem]">
          {title}
        </h2>
      </div>
      {aside ? <div className="lg:max-w-[480px]">{aside}</div> : null}
    </div>
  );
}
