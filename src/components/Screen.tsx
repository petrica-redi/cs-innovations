import Image from "next/image";

type Props = {
  src: string;
  domain: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  dark?: boolean;
  aspect?: string;
  className?: string;
};

export function Screen({
  src,
  domain,
  alt,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  dark,
  aspect = "aspect-[16/10]",
  className = "",
}: Props) {
  return (
    <figure
      className={`overflow-hidden border ${
        dark
          ? "border-white/10 bg-night-2 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          : "border-black/[0.06] bg-surface shadow-[0_30px_60px_-30px_rgba(38,32,81,0.45)]"
      } ${className}`}
    >
      <div className={`flex items-center gap-3 border-b px-3.5 py-2.5 ${dark ? "border-white/10" : "border-black/[0.06] bg-[#f3f3f7]"}`}>
        <span className="flex gap-1.5" aria-hidden="true">
          {[0, 1, 2].map((dot) => (
            <span key={dot} className={`size-2 rounded-full ${dark ? "bg-white/15" : "bg-black/10"}`} />
          ))}
        </span>
        <span className={`mx-auto truncate px-3 py-0.5 font-mono text-[11px] ${dark ? "bg-white/5 text-white/50" : "bg-black/[0.04] text-muted"}`}>
          {domain}
        </span>
        <span className="w-[42px]" aria-hidden="true" />
      </div>
      <div className={`relative ${aspect}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
    </figure>
  );
}
