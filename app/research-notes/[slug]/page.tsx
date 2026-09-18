import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { researchUpdates } from "../../../lib/site-content-v2";

type NotePageProps = { params: Promise<{ slug: string }> };

function findNote(slug: string) {
  return researchUpdates.find((entry) => entry.slug === slug && entry.contentType === "researchNote" && entry.fullBody);
}

export function generateStaticParams() {
  return researchUpdates
    .filter((entry) => entry.contentType === "researchNote" && entry.fullBody)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const note = findNote((await params).slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.shortSummary,
    openGraph: { title: `${note.title} — Dr. Elnaz Kyavar`, description: note.shortSummary, images: [] },
    twitter: { card: "summary", title: `${note.title} — Dr. Elnaz Kyavar`, description: note.shortSummary, images: [] },
  };
}

export default async function ResearchNotePage({ params }: NotePageProps) {
  const note = findNote((await params).slug);
  if (!note) notFound();

  return (
    <>
      <Header />
      <main className="research-note-page">
        <header className="research-note-hero">
          <Link className="research-note-back" href="/research-notes"><span aria-hidden="true">←</span> Research Notes &amp; Updates</Link>
          <div className="research-note-meta"><span>{note.category}</span><time dateTime="2026-09-18">{note.date}</time></div>
          <h1>{note.title}</h1>
          <p>{note.shortSummary}</p>
        </header>

        <article className="research-note-article">
          <aside aria-label="Article details">
            <span>Research Note</span>
            <p>Evidence calibration<br />Mechanistic reasoning<br />Causal inference</p>
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
