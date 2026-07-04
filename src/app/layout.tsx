import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "LiteInsight — Discover, Decide, Delight";
const description =
  "LiteInsight tests, reviews and ranks the best software, AI tools and digital products — so you buy the right one the first time, at the best price.";

export const metadata: Metadata = {
  metadataBase: new URL("https://liteinsight.in"),
  title: {
    default: title,
    template: "%s · LiteInsight",
  },
  description,
  applicationName: "LiteInsight",
  keywords: [
    "digital product reviews",
    "AI tools",
    "software deals",
    "lifetime deals",
    "SaaS reviews",
    "LiteInsight",
  ],
  authors: [{ name: "LiteInsight" }],
  openGraph: {
    type: "website",
    url: "https://liteinsight.in",
    siteName: "LiteInsight",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14161F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
