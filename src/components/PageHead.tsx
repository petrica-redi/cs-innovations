import Link from "next/link";
import type { ReactNode } from "react";
import { Shapes } from "@/components/Shapes";

type Props = { label: string; title: string; children?: ReactNode; aside?: ReactNode };

export function PageHead({ label, title, children, aside }: Props) {
  return (
    <section className="on-dark relative overflow-hidden bg-night">
      <Shapes />
      <div
        className={`relative mx-auto grid max-w-[1200px] gap-12 px-5 pt-20 pb-20 lg:pt-24 lg:pb-24 ${
          aside ? "lg:grid-cols-[1.05fr_1fr] lg:items-center" : ""
        }`}
      >
        <div>
          <nav aria-label="Breadcrumb" className="text-[14px] font-bold text-lavender">
            <Link href="/" className="focus-ring hover:text-white">
              Acasă
            </Link>
            <span aria-hidden="true" className="mx-2 text-flame">
              /
            </span>
            <span className="text-white">{label}</span>
          </nav>
          <h1 className="mt-5 max-w-[20ch] text-[2.5rem] leading-[1.15] md:text-[3.5rem]">{title}</h1>
          {children ? <div className="mt-6 max-w-[62ch] text-[17px] leading-[1.8] text-white/75">{children}</div> : null}
        </div>
        {aside}
      </div>
    </section>
  );
}
