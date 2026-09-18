import type { MetadataRoute } from "next";
import { isProductionSite, productionSiteUrl } from "../lib/site-config";
export default function robots(): MetadataRoute.Robots { return { rules: isProductionSite ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" }, sitemap: isProductionSite && productionSiteUrl ? `${productionSiteUrl}/sitemap.xml` : undefined }; }
