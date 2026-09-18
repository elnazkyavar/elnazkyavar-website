/**
 * Shared navigation only.
 *
 * Verified editorial content lives in `site-content-v2.ts`, which is the local
 * fallback source until the existing Sanity project is connected. Do not add
 * publication, note, talk, project, or profile records here.
 */
export const siteName = "Dr. Elnaz Kyavar";

export const navigation = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Evidence & Mechanism", "/evidence-mechanism"],
  ["Research Notes & Updates", "/research-notes"],
  ["Peer Review & Editorial Service", "/peer-review-editorial-service"],
  ["Talks & Conferences", "/talks-conferences"],
  ["Professional Engagement", "/professional-engagement"],
  ["Projects", "/projects"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
] as const;
