import { ImageResponse } from "next/og";
import { join } from "path";
import { readFileSync } from "fs";

export const runtime = "nodejs";

// 1. INCREASE THE SIZE
// 32x32 is too small for modern screens.
// 512x512 is versatile for favicons, bookmarks, and even home screen apps.
export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  const svgPath = join(process.cwd(), "public", "reviate.svg");
  const svgData = readFileSync(svgPath);

  return new ImageResponse(
    (
      <div
        style={{
          // 2. USE RELATIVE SIZING
          // This container now matches the 512x512 size defined above
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent", // Or 'black' if you want a background shape
        }}
      >
        <img
          src={`data:image/svg+xml;base64,${svgData.toString("base64")}`}
          style={{
            // 3. MAXIMIZE THE LOGO
            // This forces the SVG to take up the full available space within the 512px box
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
