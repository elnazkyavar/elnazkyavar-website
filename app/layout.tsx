import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteName } from "../lib/site-data";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://elnaz-kyavar-research.elllkia.chatgpt.site"),
  title: { default: "Elnaz Kyavar — Bioscience Researcher", template: "%s — Elnaz Kyavar" },
  description: "Research, publications, and scientific perspectives from Elnaz Kyavar.",
  keywords: ["Elnaz Kyavar", "bioscience", "evidence calibration", "mechanistic reasoning", "scientific research"],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: { type: "website", title: "Elnaz Kyavar — Bioscience Researcher", description: "Evidence-led bioscience research connecting rigorous assessment to mechanistic reasoning.", siteName, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Elnaz Kyavar — Evidence-led bioscience research" }] },
  twitter: { card: "summary_large_image", title: "Elnaz Kyavar — Bioscience Researcher", description: "Evidence-led bioscience research connecting rigorous assessment to mechanistic reasoning.", images: ["/og.png"] },
  robots: process.env.SITE_ENV === "production" ? { index: true, follow: true } : { index: false, follow: false, noarchive: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elnaz-kyavar-research.elllkia.chatgpt.site";
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: siteName, url: baseUrl, jobTitle: "Researcher", knowsAbout: ["Bioscience", "Evidence calibration", "Mechanistic reasoning", "Scientific synthesis"] };
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}</body>
    </html>
  );
}
