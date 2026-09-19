import { mkdir, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [compiledSource, outputDirectory] = process.argv.slice(2);

if (!compiledSource || !outputDirectory) {
  throw new Error("Usage: node scripts/generate-sanity-seed.mjs <compiled-content-module> <output-directory>");
}

const { contentPages, publications, researchUpdates } = await import(pathToFileURL(compiledSource).href);

const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const slug = (current) => ({ _type: "slug", current });
const reference = (_ref) => ({ _type: "reference", _ref });
const portableText = (paragraphs) => paragraphs.map((paragraph, index) => ({
  _type: "block",
  _key: `p${String(index + 1).padStart(2, "0")}`,
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: `s${String(index + 1).padStart(2, "0")}`, marks: [], text: paragraph }],
}));

const documents = [];

publications.forEach((publication, index) => {
  documents.push({
    _id: `publication.${publication.slug}`,
    _type: "publication",
    title: publication.title,
    slug: slug(publication.slug),
    authors: publication.authors,
    journal: publication.journal,
    year: publication.year,
    publicationStatus: publication.status,
    articleType: publication.articleType,
    ...(publication.doi ? { doi: publication.doi } : {}),
    ...(publication.externalUrl ? { externalUrl: publication.externalUrl } : {}),
    summary: publication.summary,
    researchThemes: publication.themes,
    featured: publication.featured,
    ...(publication.publicationDate ? { publicationDate: publication.publicationDate } : {}),
    displayOrder: index,
  });
});

const notes = researchUpdates.filter((item) => item.contentType === "researchNote");
notes.forEach((note, index) => {
  documents.push({
    _id: `researchNote.${note.slug}`,
    _type: "researchNote",
    title: note.title,
    slug: slug(note.slug),
    author: note.author,
    date: note.dateIso,
    excerpt: note.shortSummary,
    body: portableText(note.fullBody ?? []),
    tags: note.tags,
    featuredOnHome: note.featuredOnHome,
    displayOrder: index,
  });
});

const talksPage = contentPages.find((page) => page.slug === "talks-conferences");
(talksPage?.sections ?? []).forEach((talk, index) => {
  const meta = Object.fromEntries((talk.meta ?? []).map((entry) => {
    const separator = entry.indexOf(": ");
    return separator === -1 ? [entry, ""] : [entry.slice(0, separator), entry.slice(separator + 2)];
  }));
  documents.push({
    _id: `talk.${String(index + 1).padStart(2, "0")}.${slugify(talk.title).slice(0, 72)}`,
    _type: "talk",
    title: talk.title,
    role: meta.Role,
    eventName: meta.Event,
    dateLabel: meta.Dates,
    location: meta.Location,
    status: meta.Status,
    externalOfficialUrl: talk.link?.href,
    summary: talk.body,
    displayOrder: index,
  });
});

const projectsPage = contentPages.find((page) => page.slug === "projects");
(projectsPage?.sections ?? []).forEach((project, index) => {
  const venueMatch = project.body.match(/^Venue: (.*?)\. Status: (.*)\.$/);
  const statusMatch = project.body.match(/^Status: (.*)\.$/);
  documents.push({
    _id: `project.${String(index + 1).padStart(2, "0")}.${slugify(project.title).slice(0, 72)}`,
    _type: "project",
    title: project.title,
    summary: project.body,
    ...(venueMatch ? { venueOrPublisher: venueMatch[1], status: venueMatch[2] } : {}),
    ...(!venueMatch && statusMatch ? { status: statusMatch[1] } : {}),
    ...(project.points ? { relatedThemes: project.points } : {}),
    displayOrder: index,
  });
});

const relatedPublicationSlug = new Map([
  ["enhanced-phycobiliprotein-recovery", "enhanced-phycobiliprotein-recovery"],
  ["process-oriented-phycobiliprotein-optimization", "process-oriented-phycobiliprotein-optimization"],
  ["salinity-iron-nitrogen-accepted", "salinity-iron-nitrogen-physiological-responses"],
]);

const updates = researchUpdates.filter((item) => item.contentType !== "researchNote");
updates.forEach((update, index) => {
  const publicationSlug = relatedPublicationSlug.get(update.slug);
  documents.push({
    _id: `professionalUpdate.${update.slug}`,
    _type: "professionalUpdate",
    category: update.category,
    title: update.title,
    slug: slug(update.slug),
    ...(update.dateIso ? { date: update.dateIso } : { dateLabel: update.date }),
    summary: update.shortSummary,
    ...(publicationSlug ? { relatedPublication: reference(`publication.${publicationSlug}`) } : {}),
    ...(update.externalLink ? { externalLink: update.externalLink } : {}),
    featuredOnHome: update.featuredOnHome,
    tags: update.tags,
    displayOrder: index,
  });
});

const drafts = documents.map((document) => ({
  ...document,
  _id: `drafts.${document._id}`,
  ...(document.relatedPublication ? { relatedPublication: { ...document.relatedPublication, _weak: true } } : {}),
  ...(document.relatedProject ? { relatedProject: { ...document.relatedProject, _weak: true } } : {}),
  ...(document.relatedTalk ? { relatedTalk: { ...document.relatedTalk, _weak: true } } : {}),
}));

await mkdir(outputDirectory, { recursive: true });
await writeFile(`${outputDirectory}/drafts.ndjson`, `${drafts.map((document) => JSON.stringify(document)).join("\n")}\n`);
await writeFile(`${outputDirectory}/published.ndjson`, `${documents.map((document) => JSON.stringify(document)).join("\n")}\n`);
await writeFile(`${outputDirectory}/drafts.json`, `${JSON.stringify(drafts, null, 2)}\n`);
await writeFile(`${outputDirectory}/published.json`, `${JSON.stringify(documents, null, 2)}\n`);
await writeFile(`${outputDirectory}/manifest.json`, `${JSON.stringify({ documents, drafts }, null, 2)}\n`);

const counts = Object.groupBy(documents, (document) => document._type);
console.log(JSON.stringify(Object.fromEntries(Object.entries(counts).map(([type, records]) => [type, records.length])), null, 2));
