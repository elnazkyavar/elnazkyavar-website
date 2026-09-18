import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteName } from "../lib/site-data";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://elnaz-kyavar-research.elllkia.chatgpt.site"),
  title: { default: "Dr. Elnaz Kyavar — Plant Physiologist & Biotechnology Researcher", template: "%s — Dr. Elnaz Kyavar" },
  description: "Evidence-led bioscience across cyanobacterial biotechnology, phycobiliproteins, bioprocessing, redox biology, and mechanistic interpretation.",
  keywords: ["Elnaz Kyavar", "bioscience", "evidence calibration", "mechanistic reasoning", "scientific research"],
  authors: [{ name: siteName }],
  creator: siteName,
  openGraph: { type: "website", title: "Dr. Elnaz Kyavar — Plant Physiologist & Biotechnology Researcher", description: "Evidence-led bioscience across biological systems, bioprocessing, and mechanistic interpretation.", siteName, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dr. Elnaz Kyavar — Evidence-led bioscience research" }] },
  twitter: { card: "summary_large_image", title: "Dr. Elnaz Kyavar — Plant Physiologist & Biotechnology Researcher", description: "Evidence-led bioscience across biological systems, bioprocessing, and mechanistic interpretation.", images: ["/og.png"] },
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
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Dr. Elnaz Kyavar", url: baseUrl, jobTitle: "Plant Physiologist and Biotechnology Researcher", affiliation: { "@type": "CollegeOrUniversity", name: "Islamic Azad University, Science and Research Branch" }, sameAs: ["https://orcid.org/0009-0008-5526-5360", "https://www.webofscience.com/wos/author/record/OXB-6292-2025", "https://www.scopus.com/authid/detail.uri?authorId=60701658500", "https://scholar.google.com/citations?user=ltvW04YAAAAJ", "https://www.researchgate.net/profile/Elnaz-Kyavar?ev=hdr_xprf"], knowsAbout: ["Cyanobacterial biotechnology", "Phycobiliproteins", "Bioprocessing", "Redox biology", "Mechanistic phytomedicine"] };
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}</body>
    </html>
  );
}
