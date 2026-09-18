import { contentPages, publications as localPublications, researchUpdates as localUpdates, type ContentPage, type Publication, type ResearchUpdate } from "./site-content-v2";
import { querySanity, sanityConfigured } from "./sanity";

type PortableBlock = { _type?: string; children?: { text?: string }[] };
type SanityResearchNote = {
  title?: string; slug?: string; author?: string; date?: string; updatedAt?: string;
  excerpt?: string; body?: PortableBlock[]; tags?: string[]; featuredOnHome?: boolean;
};
type SanityUpdate = {
  category?: ResearchUpdate["category"]; title?: string; slug?: string; date?: string;
  summary?: string; externalLink?: string; featuredOnHome?: boolean; tags?: string[];
};
type SanityTalk = { title?: string; role?: string; eventName?: string; date?: string; location?: string; status?: string; externalOfficialUrl?: string; summary?: string };
type SanityProject = { title?: string; projectType?: string; status?: string; summary?: string; venueOrPublisher?: string; relatedThemes?: string[] };

function displayDate(iso?: string) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}

function bodyToParagraphs(body?: PortableBlock[]) {
  return (body ?? []).filter((block) => block._type === "block").map((block) => (block.children ?? []).map((child) => child.text ?? "").join("").trim()).filter(Boolean);
}

export async function getPublications(): Promise<Publication[]> {
  const records = await querySanity<Publication[]>(`*[_type == "publication"] | order(coalesce(publicationDate, string(year) + "-01-01") desc){title,"slug":slug.current,authors,journal,year,"status":publicationStatus,articleType,doi,externalUrl,"summary":coalesce(summary,abstract),"themes":researchThemes,featured,publicationDate}`, localPublications);
  return records.length ? records : localPublications;
}

export async function getResearchUpdates(): Promise<ResearchUpdate[]> {
  if (!sanityConfigured) return localUpdates;
  const [notes, updates] = await Promise.all([
    querySanity<SanityResearchNote[]>(`*[_type == "researchNote"] | order(date desc){title,"slug":slug.current,author,date,"updatedAt":_updatedAt,excerpt,body,tags,featuredOnHome}`, []),
    querySanity<SanityUpdate[]>(`*[_type == "professionalUpdate"] | order(date desc){category,title,"slug":coalesce(slug.current,relatedPublication->slug.current,relatedProject->slug.current,relatedTalk->slug.current),date,"summary":summary,"externalLink":coalesce(externalLink,relatedPublication->externalUrl,relatedTalk->externalOfficialUrl),featuredOnHome,"tags":coalesce(relatedPublication->researchThemes,relatedProject->relatedThemes,[])}`, []),
  ]);
  const mappedNotes: ResearchUpdate[] = notes.filter((note) => note.title && note.slug && note.date && note.excerpt).map((note) => ({
    title: note.title!, slug: note.slug!, date: displayDate(note.date), dateIso: note.date!, modifiedDateIso: note.updatedAt?.slice(0, 10),
    contentType: "researchNote", category: "Research Note", author: note.author ?? "Dr. Elnaz Kyavar", shortSummary: note.excerpt!,
    fullBody: bodyToParagraphs(note.body), tags: note.tags ?? [], featuredOnHome: Boolean(note.featuredOnHome),
  }));
  const typeByCategory: Record<string, ResearchUpdate["contentType"]> = { "New Paper": "newPaper", "Accepted Paper": "acceptedPaper", "Conference Update": "conferenceUpdate", "Professional Update": "professionalUpdate" };
  const mappedUpdates: ResearchUpdate[] = updates.filter((update) => update.title && update.category && update.date && update.summary).map((update) => ({
    title: update.title!, slug: update.slug ?? update.title!.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
    date: displayDate(update.date), dateIso: update.date, contentType: typeByCategory[update.category!] ?? "professionalUpdate", category: update.category!,
    shortSummary: update.summary!, externalLink: update.externalLink, tags: update.tags ?? [], featuredOnHome: Boolean(update.featuredOnHome),
  }));
  const combined = [...mappedNotes, ...mappedUpdates];
  return combined.length ? combined : localUpdates;
}

export async function getContentPage(slug: string): Promise<ContentPage | undefined> {
  const page = contentPages.find((item) => item.slug === slug);
  if (!page || !sanityConfigured) return page;
  if (slug === "publications") {
    const publications = await getPublications();
    return { ...page, sections: publications.map((publication) => ({ number: publication.status === "Accepted" ? "ACCEPTED" : String(publication.year), title: publication.title, body: publication.summary, meta: [`Authors: ${publication.authors.join(", ")}`, `Journal: ${publication.journal}`, `Type: ${publication.articleType}`, `Themes: ${publication.themes.join(" · ")}`], link: { label: "View publication", href: `/publications/${publication.slug}` } })) };
  }
  if (slug === "talks-conferences") {
    const talks = await querySanity<SanityTalk[]>(`*[_type == "talk"] | order(date desc){title,role,eventName,date,location,status,externalOfficialUrl,summary}`, []);
    if (!talks.length) return page;
    return { ...page, sections: talks.filter((talk) => talk.title).map((talk) => ({ number: talk.date?.slice(0, 4) ?? "—", title: talk.title!, body: talk.summary ?? "", meta: [`Role: ${talk.role ?? ""}`, `Event: ${talk.eventName ?? ""}`, `Location: ${talk.location ?? ""}`, `Date: ${displayDate(talk.date)}`, `Status: ${talk.status ?? ""}`], ...(talk.externalOfficialUrl ? { link: { label: "Official event listing", href: talk.externalOfficialUrl } } : {}) })) };
  }
  if (slug === "projects") {
    const projects = await querySanity<SanityProject[]>(`*[_type == "project"] | order(_updatedAt desc){title,projectType,status,summary,venueOrPublisher,relatedThemes}`, []);
    if (!projects.length) return page;
    return { ...page, sections: projects.filter((project) => project.title).map((project, index) => ({ number: String(index + 1).padStart(2, "0"), title: project.title!, body: [project.summary, project.venueOrPublisher ? `Venue / publisher: ${project.venueOrPublisher}.` : "", project.status ? `Status: ${project.status}.` : ""].filter(Boolean).join(" "), points: project.relatedThemes })) };
  }
  return page;
}
