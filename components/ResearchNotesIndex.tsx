import Link from "./SiteLink";
import { researchUpdates } from "../lib/site-content-v2";
import { CrossPageNav, InternalHero } from "./InternalPageSystem";

export function ResearchNotesIndex({ intro }: { intro: string }) {
  const notes = researchUpdates.filter((entry) => entry.contentType === "researchNote");
  const updates = researchUpdates.filter((entry) => entry.contentType !== "researchNote");

  return (
    <main className="internal-page research-notes-index">
      <InternalHero eyebrow="Notes & updates" title="Research Notes & Updates" intro={intro} theme="research-notes" />

      <section className="notes-original" id="original-research-notes" aria-labelledby="original-notes-title">
        <header className="notes-section-header">
          <div><span>01 · Original writing</span><h2 id="original-notes-title">Original Research Notes</h2></div>
          <p>Independent scientific reflections on evidence, mechanism, experimental design, and biological interpretation.</p>
        </header>
        <p className="notes-original-context">These are original pieces written specifically for this website by Dr. Elnaz Kyavar.</p>
        <div className="notes-original-list">
          {notes.map((note, index) => (
            <article className="original-note-card" key={note.slug}>
              <div className="original-note-index"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <div className="original-note-content">
                <div className="original-note-meta"><span>{note.category}</span><time dateTime="2026-09-18">{note.date}</time></div>
                <h3>{note.title}</h3>
                <p>{note.shortSummary}</p>
                <div className="original-note-footer">
                  <span className="original-note-author">Written by {note.author}</span>
                  <div className="original-note-tags" aria-label="Topics">{note.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link href={`/research-notes/${note.slug}`}>Read note <b aria-hidden="true">↗</b></Link>
                </div>
              </div>
              <div className="reasoning-path" aria-hidden="true"><i /><i /><i /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="notes-updates" aria-labelledby="scientific-updates-title">
        <header className="notes-section-header">
          <div><span>02 · Research record</span><h2 id="scientific-updates-title">Publication &amp; Scientific Updates</h2></div>
          <p>New papers, accepted work, conference activity, and selected academic milestones.</p>
        </header>
        <div className="notes-update-list">
          {updates.map((update) => (
            <article className="scientific-update-row" key={update.slug}>
              <div className="scientific-update-meta"><span>{update.category}</span><time>{update.date}</time></div>
              <div><h3>{update.title}</h3><p>{update.shortSummary}</p><div className="scientific-update-tags">{update.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              {update.externalLink
                ? <a href={update.externalLink} target="_blank" rel="noopener noreferrer">View paper <span aria-hidden="true">↗</span></a>
                : <Link href="/publications">View update <span aria-hidden="true">↗</span></Link>}
            </article>
          ))}
        </div>
      </section>
      <CrossPageNav currentPath="/research-notes" />
    </main>
  );
}
