import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { const isProduction = process.env.SITE_ENV === "production"; return { rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" }, sitemap: isProduction && process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml` : undefined }; }
