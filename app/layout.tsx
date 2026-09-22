import type { Metadata } from "next";
import { Geist, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteName } from "../lib/site-data";
import { academicProfiles, getSiteUrl, isProductionSite } from "../lib/site-config";
import { ProductionAnalytics } from "../components/ProductionAnalytics";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "Dr. Elnaz Kyavar — Plant Physiologist & Biotechnology Researcher", template: "%s — Dr. Elnaz Kyavar" },
  description: "Evidence-led bioscience across cyanobacterial biotechnology, phycobiliproteins, bioprocessing, redox biology, and mechanistic interpretation.",
  keywords: ["Elnaz Kyavar", "bioscience", "evidence calibration", "mechanistic reasoning", "scientific research"],
  authors: [{ name: siteName }],
  creator: siteName,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", title: "Dr. Elnaz Kyavar — Plant Physiologist & Biotechnology Researcher", description: "Evidence-led bioscience across biological systems, bioprocessing, and mechanistic interpretation.", siteName, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dr. Elnaz Kyavar — Evidence-led bioscience research" }] },
  twitter: { card: "summary_large_image", title: "Dr. Elnaz Kyavar — Plant Physiologist & Biotechnology Researcher", description: "Evidence-led bioscience across biological systems, bioprocessing, and mechanistic interpretation.", images: ["/og.png"] },
  robots: isProductionSite ? { index: true, follow: true } : { index: false, follow: false, noarchive: true },
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
  const baseUrl = getSiteUrl();
  const personSchema = { "@context": "https://schema.org", "@type": "Person", "@id": `${baseUrl}/#person`, name: "Dr. Elnaz Kyavar", alternateName: ["Elnaz Kiavar", "\u0627\u0644\u0646\u0627\u0632 \u06a9\u06cc\u0627\u0648\u0631"], url: baseUrl, jobTitle: "Plant Physiologist and Biotechnology Researcher", affiliation: [{ "@type": "CollegeOrUniversity", name: "Islamic Azad University, Science and Research Branch" }, { "@type": "Organization", name: "Green Life ELK Co., Ltd." }], sameAs: academicProfiles.map((profile) => profile.href), knowsAbout: ["Cyanobacterial biotechnology", "Phycobiliproteins", "Bioprocessing", "Redox biology", "Mechanistic phytomedicine"] };
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}<ProductionAnalytics /></body>
    </html>
  );
}
