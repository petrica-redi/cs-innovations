import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#5a3cf0",
          color: "#ffffff",
          fontSize: 17,
          fontWeight: 600,
          display: "flex",
          alignItems: "flex-end",
          padding: "0 0 3px 4px",
          letterSpacing: "-0.04em",
          borderRadius: 3,
        }}
      >
        Cs
      </div>
    ),
    size,
  );
}
