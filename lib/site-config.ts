export const productionSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function getSiteUrl() {
  if (productionSiteUrl) return productionSiteUrl;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const isProductionSite = process.env.SITE_ENV === "production";

export const academicProfiles = [
  { label: "ORCID", icon: "/profile-icons/orcid.svg", href: "https://orcid.org/0009-0008-5526-5360" },
  { label: "Web of Science", icon: "/profile-icons/web-of-science.svg", href: "https://www.webofscience.com/wos/author/record/OXB-6292-2025" },
  { label: "Scopus", icon: "/profile-icons/scopus.svg", href: "https://www.scopus.com/authid/detail.uri?authorId=60701658500" },
  { label: "Google Scholar", icon: "/profile-icons/google-scholar.svg", href: "https://scholar.google.com/citations?user=ltvW04YAAAAJ" },
  { label: "ResearchGate", icon: "/profile-icons/researchgate.svg", href: "https://www.researchgate.net/profile/Elnaz-Kyavar?ev=hdr_xprf" },
] as const;
