export function Shapes({ variant = "banner" }: { variant?: "banner" | "hero" | "band" }) {
  if (variant === "hero") {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="shape shape-violet -top-24 right-[-6%] h-[130%] w-[46%] [clip-path:polygon(28%_0,100%_0,100%_100%)]" />
        <div className="shape shape-lines right-[2%] top-[18%] h-[82%] w-[38%] [clip-path:polygon(20%_0,100%_0,100%_100%,72%_100%)] opacity-70" />
        <div className="shape shape-cyan shape-tri bottom-0 right-[16%] h-[58%] w-[30%]" />
      </div>
    );
  }
  if (variant === "band") {
    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="shape shape-cyan shape-tri -bottom-6 left-[-4%] h-[120%] w-[26%] opacity-60" />
        <div className="shape shape-violet right-0 top-0 h-full w-[34%] [clip-path:polygon(40%_0,100%_0,100%_100%,0_100%)]" />
        <div className="shape shape-lines right-[8%] top-0 h-full w-[22%] opacity-60" />
      </div>
    );
  }
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="shape shape-violet right-0 top-0 h-full w-[38%] [clip-path:polygon(45%_0,100%_0,100%_100%,8%_100%)] opacity-80" />
      <div className="shape shape-lines right-[10%] top-0 h-full w-[26%] opacity-50" />
      <div className="shape shape-cyan shape-tri bottom-0 right-[22%] h-[55%] w-[18%] opacity-70" />
    </div>
  );
}
