import type { Metadata } from "next";
import Link from "../../../components/SiteLink";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { getResearchUpdates } from "../../../lib/content-source";
import { getSiteUrl } from "../../../lib/site-config";

type NotePageProps = { params: Promise<{ slug: string }> };

async function findNote(slug: string) {
  return (await getResearchUpdates()).find((entry) => entry.slug === slug && entry.contentType === "researchNote" && entry.fullBody);
}

function absoluteUrl(value: string) {
  if (/^https?:\/\//i.test(value)) return value;
  return `${getSiteUrl()}${value.startsWith("/") ? value : `/${value}`}`;
}

function videoUploadDate(dateIso: string) {
  // Google VideoObject expects a timezone when uploadDate is supplied as a datetime.
  // Research Notes are published from Tehran (UTC+03:30).
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateIso)) return `${dateIso}T00:00:00+03:30`;
  return dateIso;
}

function isoDuration(value?: string) {
  if (!value) return undefined;
  const seconds = value.match(/(\d+)\s*(?:sec|second|seconds|s)\b/i)?.[1];
  if (seconds) return `PT${seconds}S`;
  const minutes = value.match(/(\d+)\s*(?:min|minute|minutes|m)\b/i)?.[1];
  if (minutes) return `PT${minutes}M`;
  return undefined;
}

export async function generateStaticParams() {
  return (await getResearchUpdates())
    .filter((entry) => entry.contentType === "researchNote" && entry.fullBody)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const note = await findNote((await params).slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.shortSummary,
    alternates: { canonical: `/research-notes/${note.slug}` },
    openGraph: { type: "article", url: `/research-notes/${note.slug}`, title: `${note.title} — Dr. Elnaz Kyavar`, description: note.shortSummary, images: [{ url: "/og.png", width: 1200, height: 630, alt: `${note.title} — Dr. Elnaz Kyavar` }] },
    twitter: { card: "summary_large_image", title: `${note.title} — Dr. Elnaz Kyavar`, description: note.shortSummary, images: ["/og.png"] },
  };
}

export default async function ResearchNotePage({ params }: NotePageProps) {
  const note = await findNote((await params).slug);
  if (!note) notFound();

  const canonical = `${getSiteUrl()}/research-notes/${note.slug}`;
  const articleId = `${canonical}#article`;
  const videoId = `${canonical}#video`;
  const videoContentUrl = note.video ? absoluteUrl(note.video.src) : undefined;
  const videoDuration = isoDuration(note.video?.duration);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": articleId,
        headline: note.title,
        description: note.shortSummary,
        datePublished: note.dateIso,
        dateModified: note.modifiedDateIso ?? note.dateIso,
        author: { "@type": "Person", "@id": `${getSiteUrl()}/#person`, name: note.author },
        url: canonical,
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        keywords: note.tags.join(", "),
        ...(note.video ? { video: { "@id": videoId } } : {}),
      },
      ...(note.video ? [{
        "@type": "VideoObject",
        "@id": videoId,
        name: note.video.title ?? note.title,
        description: note.shortSummary,
        thumbnailUrl: [`${getSiteUrl()}/og.png`],
        uploadDate: videoUploadDate(note.dateIso),
        ...(videoDuration ? { duration: videoDuration } : {}),
        contentUrl: videoContentUrl,
        url: canonical,
        creator: { "@type": "Person", "@id": `${getSiteUrl()}/#person`, name: note.author ?? "Dr. Elnaz Kyavar" },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
      }] : []),
    ],
  };

  return (
    <>
      <Header />
      <main className="research-note-page">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <header className="research-note-hero">
          <Link className="research-note-back" href="/research-notes"><span aria-hidden="true">←</span> Research Notes &amp; Updates</Link>
          <div className="research-note-meta"><span>{note.category}</span><time dateTime={note.dateIso}>{note.date}</time></div>
          <h1>{note.title}</h1>
          <p>{note.shortSummary}</p>
        </header>

        {note.video ? (
          <section className="research-note-video" aria-labelledby="research-note-video-title">
            <div className="research-note-video-copy">
              <span>Research Note video · {note.video.duration ?? "Short explainer"}</span>
              <h2 id="research-note-video-title">Watch {note.title}</h2>
              <p>The video presents the central argument of this Research Note; the written analysis and references continue below.</p>
            </div>
            <div className="research-note-video-frame">
              <video controls playsInline preload="metadata" poster="/og.png" aria-label={note.video.title ?? note.title}>
                <source src={note.video.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            </div>
          </section>
        ) : null}

        <article className="research-note-article">
          <aside aria-label="Article details">
            <span>Research Note</span>
            <p>{note.tags.map((tag) => <span key={tag}>{tag}<br /></span>)}</p>
          </aside>
          <div className="research-note-body">
            {note.fullBody.map((paragraph, index) => (
              <p key={paragraph} className={index === note.fullBody.length - 1 ? "research-note-conclusion" : undefined}>{paragraph}</p>
            ))}
          </div>
        </article>

        <nav className="research-note-next" aria-label="Continue exploring">
          <p>Continue exploring</p>
          <Link href="/evidence-mechanism">Evidence &amp; Mechanism <span aria-hidden="true">→</span></Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
