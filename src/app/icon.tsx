import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#262051" }}>
        <svg width="32" height="32" viewBox="0 0 36 36">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#43baff" />
              <stop offset="1" stopColor="#8c78ff" />
            </linearGradient>
          </defs>
          <path d="M18 4.5 31 11.5 18 18.5 5 11.5Z" fill="url(#g)" />
          <path d="M5 18 18 25 31 18" fill="none" stroke="url(#g)" strokeWidth="3.2" strokeLinejoin="round" />
          <path d="M5 24.5 18 31.5 31 24.5" fill="none" stroke="#ffffff" strokeWidth="3.2" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
