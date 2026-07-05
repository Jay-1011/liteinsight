import { ImageResponse } from "next/og";

export const alt = "LiteInsight — Always Lite. Always Clever.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Required for `output: export` — generate this image once at build time.
export const dynamic = "force-static";

// Brand bolt mark as a data URI so satori renders it as an <img>.
const boltSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1652F0"/><stop offset="0.6" stop-color="#3F6BFF"/><stop offset="1" stop-color="#6D8CFF"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><path d="M34.5 11 L13.5 37 H31 L28.5 53 L50.5 27 H36 Z" fill="#fff"/><path d="M18 21 H25 M14 29 H19" stroke="#FF7A2F" stroke-width="4.5" stroke-linecap="round" fill="none"/></svg>`;
const boltDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(boltSvg)}`;

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14161F",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top brand row */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={boltDataUri} width={104} height={104} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 46, fontWeight: 800, color: "#fff", letterSpacing: -1 }}>
              LiteInsight
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#8b93a8",
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Always Lite &amp; Clever
            </div>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ fontSize: 92, fontWeight: 800, color: "#fff", letterSpacing: -3, lineHeight: 1.02 }}>
            Always Lite.
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 0 }}>
            <span style={{ fontSize: 92, fontWeight: 800, color: "#fff", letterSpacing: -3, lineHeight: 1 }}>
              Always{" "}
            </span>
            <span
              style={{
                fontSize: 92,
                fontWeight: 800,
                color: "#4f86ff",
                letterSpacing: -3,
                lineHeight: 1,
                borderBottom: "8px solid #FF7A2F",
                paddingBottom: 2,
              }}
            >
              &nbsp;Clever.
            </span>
          </div>
        </div>

        {/* bottom strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 24, color: "#aeb6ca", maxWidth: 720 }}>
            Reviews, deals &amp; sharp insights on the best software, AI tools and digital
            products.
          </div>
          <div
            style={{
              fontSize: 18,
              color: "#FF7A2F",
              letterSpacing: 3,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            liteinsight.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
