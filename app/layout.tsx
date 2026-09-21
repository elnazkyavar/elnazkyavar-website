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
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const baseUrl = getSiteUrl();
  const personId = `${baseUrl}/#person`;
  const personSchema = {
    "@type": "Person",
    "@id": personId,
    name: "Dr. Elnaz Kyavar",
    givenName: "Elnaz",
    familyName: "Kyavar",
    url: baseUrl,
    image: `${baseUrl}/elnaz-home-portrait.jpg`,
    jobTitle: "Plant Physiologist and Biotechnology Researcher",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Islamic Azad University, Science and Research Branch",
    },
    identifier: [
      {
        "@type": "PropertyValue",
        propertyID: "ORCID",
        value: "0009-0008-5526-5360",
        url: "https://orcid.org/0009-0008-5526-5360",
      },
    ],
    sameAs: academicProfiles.map((profile) => profile.href),
    knowsAbout: [
      "Cyanobacterial biotechnology",
      "Phycobiliproteins",
      "Bioprocessing",
      "Redox biology",
      "Mechanistic phytomedicine",
      "Evidence calibration",
      "Mechanistic reasoning",
    ],
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Dr. Elnaz Kyavar",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#profilepage`,
        url: baseUrl,
        name: "Dr. Elnaz Kyavar — Academic Research Profile",
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${baseUrl}/#website` },
      },
      personSchema,
    ],
  };

  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <ProductionAnalytics />
      </body>
    </html>
  );
}
