import type { Metadata } from "next";
import Link from "../../../components/SiteLink";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { researchUpdates } from "../../../lib/site-content-v2";
import { getResearchUpdates } from "../../../lib/content-source";
import { getSiteUrl } from "../../../lib/site-config";

type NotePageProps = { params: Promise<{ slug: string }> };

async function findNote(slug: string) {
  return (await getResearchUpdates()).find((entry) => entry.slug === slug && entry.contentType === "researchNote" && entry.fullBody);
}

export function generateStaticParams() {
  return researchUpdates
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
    openGraph: { type: "article", url: `/research-notes/${note.slug}`, title: `${note.title} — Dr. Elnaz Kyavar`, description: note.shortSummary, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dr. Elnaz Kyavar — Evidence-led bioscience research" }] },
    twitter: { card: "summary_large_image", title: `${note.title} — Dr. Elnaz Kyavar`, description: note.shortSummary, images: ["/og.png"] },
  };
}

export default async function ResearchNotePage({ params }: NotePageProps) {
  const note = await findNote((await params).slug);
  if (!note) notFound();
  const canonical = `${getSiteUrl()}/research-notes/${note.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "Article", "@id": `${canonical}#article`, headline: note.title, description: note.shortSummary, datePublished: note.dateIso, dateModified: note.modifiedDateIso ?? note.dateIso, author: { "@type": "Person", "@id": `${getSiteUrl()}/#person`, name: note.author }, url: canonical, mainEntityOfPage: { "@type": "WebPage", "@id": canonical }, keywords: note.tags.join(", ") };

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
          <section className="research-note-video" aria-labelledby="companion-video-title">
            <div className="research-note-video-copy">
              <span>Companion video · {note.video.duration ?? "Short explainer"}</span>
              <h2 id="companion-video-title">Watch the argument in motion.</h2>
              <p>A concise visual companion to the research note. The written note remains the complete, citable version of the argument.</p>
            </div>
            <div className="research-note-video-frame">
              <video controls playsInline preload="metadata" aria-label={note.video.title ?? note.title}>
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
