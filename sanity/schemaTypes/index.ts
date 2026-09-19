// Schema definitions for the existing Elnaz Kyavar Sanity project.
// These objects are dependency-free so the website continues to build until
// the existing project ID is supplied and Sanity Studio is connected.
export const schemaTypes = [
  {
    name: "publication", title: "Publication", type: "document", fields: [
      { name: "title", type: "string", validation: "required" }, { name: "slug", type: "slug", options: { source: "title" }, validation: "required" },
      { name: "authors", type: "array", of: [{ type: "string" }] }, { name: "journal", type: "string" }, { name: "year", type: "number" },
      { name: "publicationStatus", type: "string", options: { list: ["Published", "Accepted"] } }, { name: "articleType", type: "string" },
      { name: "doi", type: "string" }, { name: "externalUrl", type: "url" }, { name: "summary", type: "text" },
      { name: "researchThemes", type: "array", of: [{ type: "string" }] }, { name: "featured", type: "boolean" }, { name: "publicationDate", type: "date" },
      { name: "displayOrder", type: "number", hidden: true },
    ],
  },
  {
    name: "researchNote", title: "Research Note", type: "document", fields: [
      { name: "title", type: "string", validation: "required" }, { name: "slug", type: "slug", options: { source: "title" }, validation: "required" },
      { name: "author", type: "string" }, { name: "date", type: "date" }, { name: "excerpt", type: "text" },
      { name: "body", type: "array", of: [{ type: "block" }] }, { name: "tags", type: "array", of: [{ type: "string" }] },
      { name: "featuredOnHome", type: "boolean" }, { name: "seoTitle", type: "string" }, { name: "seoDescription", type: "text" },
      { name: "displayOrder", type: "number", hidden: true },
    ],
  },
  {
    name: "talk", title: "Talk / Conference", type: "document", fields: [
      { name: "title", type: "string" }, { name: "role", type: "string" }, { name: "eventName", type: "string" }, { name: "date", type: "date" },
      { name: "dateLabel", title: "Display date / date range", type: "string" },
      { name: "location", type: "string" }, { name: "status", type: "string" }, { name: "externalOfficialUrl", type: "url" }, { name: "summary", type: "text" },
      { name: "displayOrder", type: "number", hidden: true },
    ],
  },
  {
    name: "project", title: "Project", type: "document", fields: [
      { name: "title", type: "string" }, { name: "projectType", type: "string" }, { name: "status", type: "string" }, { name: "summary", type: "text" },
      { name: "venueOrPublisher", title: "Venue / publisher", type: "string" }, { name: "relatedThemes", type: "array", of: [{ type: "string" }] },
      { name: "displayOrder", type: "number", hidden: true },
    ],
  },
  {
    name: "professionalUpdate", title: "Scientific / Professional Update", type: "document", fields: [
      { name: "category", type: "string", options: { list: ["New Paper", "Accepted Paper", "Conference Update", "Professional Update"] } },
      { name: "title", type: "string" }, { name: "slug", type: "slug", options: { source: "title" } }, { name: "date", type: "date" },
      { name: "dateLabel", title: "Display date when only a year is verified", type: "string" }, { name: "summary", type: "text" },
      { name: "relatedPublication", type: "reference", to: [{ type: "publication" }] }, { name: "relatedProject", type: "reference", to: [{ type: "project" }] },
      { name: "relatedTalk", type: "reference", to: [{ type: "talk" }] }, { name: "externalLink", type: "url" }, { name: "featuredOnHome", type: "boolean" },
      { name: "tags", type: "array", of: [{ type: "string" }] }, { name: "displayOrder", type: "number", hidden: true },
    ],
  },
];
