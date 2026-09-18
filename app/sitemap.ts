import type { MetadataRoute } from "next";
import { navigation } from "../lib/site-data";
import { researchUpdates } from "../lib/site-content-v2";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://elnaz-kyavar-research.elllkia.chatgpt.site"; const notes = researchUpdates.filter((entry) => entry.contentType === "researchNote").map((entry) => ({ url: `${base}/research-notes/${entry.slug}`, lastModified: new Date("2026-09-18"), changeFrequency: "yearly" as const, priority: .7 })); return [{ url: base, changeFrequency: "monthly", priority: 1 }, ...navigation.map(([, href]) => ({ url: `${base}${href}`, changeFrequency: "monthly" as const, priority: href === "/research" || href === "/publications" ? .8 : .6 })), ...notes]; }
