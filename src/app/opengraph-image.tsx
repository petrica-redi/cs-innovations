import { ImageResponse } from "next/og";

export const alt = "CS Innovations, dezvoltare software și orchestrare AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#262051",
          color: "#ffffff",
          padding: "72px 80px",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 520,
            height: 630,
            background: "linear-gradient(200deg, rgba(140,120,255,0.65), rgba(113,65,177,0.1))",
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 180,
            bottom: 0,
            width: 300,
            height: 340,
            background: "linear-gradient(180deg, rgba(67,186,255,0.85), rgba(67,186,255,0.15))",
            clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 36 36">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#43baff" />
                <stop offset="1" stopColor="#8c78ff" />
              </linearGradient>
            </defs>
            <path d="M18 2.5 33 10.5 18 18.5 3 10.5Z" fill="url(#g)" />
            <path d="M3 17.5 18 25.5 33 17.5" fill="none" stroke="url(#g)" strokeWidth="3.2" strokeLinejoin="round" />
            <path d="M3 24.5 18 32.5 33 24.5" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinejoin="round" />
          </svg>
          <div style={{ display: "flex", fontSize: 38 }}>
            <span>cs</span>
            <span style={{ fontWeight: 700 }}>innovations</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.85)" }}>{"// Dezvoltare software și orchestrare AI"}</div>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 18, textTransform: "uppercase" }}>
            Software de producție. AI sub control.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#aeaacb" }}>
          București · din 2017 · selectată în EIT RawMaterials și 28DIGITAL
        </div>
      </div>
    ),
    size,
  );
}
