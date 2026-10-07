import Image from "next/image";

type Props = {
  src: string;
  domain: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  dark?: boolean;
  className?: string;
};

export function Screen({ src, domain, alt, priority, sizes = "(min-width: 1024px) 50vw, 100vw", dark, className = "" }: Props) {
  return (
    <figure
      className={`overflow-hidden rounded-md border ${
        dark ? "border-white/15 bg-[#121a2b] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]" : "border-line bg-surface shadow-[0_20px_40px_-28px_rgba(11,18,32,0.5)]"
      } ${className}`}
    >
      <div className={`flex items-center gap-3 border-b px-3 py-2 ${dark ? "border-white/10" : "border-line bg-[#f6f8fb]"}`}>
        <span className="flex gap-1" aria-hidden="true">
          <span className={`h-1.5 w-4 rounded-full ${dark ? "bg-white/20" : "bg-ink/15"}`} />
          <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/20" : "bg-ink/15"}`} />
        </span>
        <span className={`truncate font-mono text-[11px] ${dark ? "text-white/60" : "text-muted"}`}>{domain}</span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
      </div>
    </figure>
  );
}
