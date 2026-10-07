import Image from "next/image";

type Props = {
  src: string;
  domain: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export function Screen({ src, domain, alt, priority, sizes = "(min-width: 1024px) 50vw, 100vw", className = "" }: Props) {
  return (
    <div className={`overflow-hidden rounded-md border border-ink/15 bg-white shadow-[0_18px_40px_-24px_rgba(20,19,17,0.45)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-ink/10 bg-[#ece7dd] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-ink/20" />
          <span className="size-2.5 rounded-full bg-ink/20" />
          <span className="size-2.5 rounded-full bg-ink/20" />
        </span>
        <span className="truncate text-xs text-ink-soft">{domain}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    </div>
  );
}
