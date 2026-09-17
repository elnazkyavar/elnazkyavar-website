import type { MetadataRoute } from "next";
import { navigation } from "../lib/site-data";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elnaz-kyavar-research.elllkia.chatgpt.site"; return [{ url: base, changeFrequency: "monthly", priority: 1 }, ...navigation.map(([, href]) => ({ url: `${base}${href}`, changeFrequency: "monthly" as const, priority: href === "/research" || href === "/publications" ? .8 : .6 }))]; }
