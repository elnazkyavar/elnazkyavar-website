import Link from "./SiteLink";
import type { ContentPage, ContentSection } from "../lib/site-content-v2";
import { navigation } from "../lib/site-data";

const themeLabels: Record<string, string> = {
  research: "Biological systems",
  publications: "Citation architecture",
  "evidence-mechanism": "Causal reasoning",
  "research-notes": "Scientific thinking",
  "peer-review-editorial-service": "Evidence appraisal",
  "talks-conferences": "Scientific exchange",
  "professional-engagement": "Professional networks",
  projects: "Research trajectory",
  cv: "Academic record",
  contact: "Correspondence",
};

export function ScientificMotif({ theme }: { theme: string }) {
  return (
    <div className={`internal-motif internal-motif--${theme}`} aria-hidden="true">
      <i className="motif-ring motif-ring-a" /><i className="motif-ring motif-ring-b" />
      <i className="motif-path motif-path-a" /><i className="motif-path motif-path-b" />
      <span className="motif-node motif-node-a" /><span className="motif-node motif-node-b" /><span className="motif-node motif-node-c" />
      <span className="motif-cell motif-cell-a" /><span className="motif-cell motif-cell-b" /><span className="motif-cell motif-cell-c" />
    </div>
  );
}

export function InternalHero({ eyebrow, title, intro, theme, action }: { eyebrow: string; title: string; intro: string; theme: string; action?: React.ReactNode }) {
  return (
    <section className={`internal-hero internal-hero--${theme}`}>
      {({
        "talks-conferences": "conference-atmosphere",
        publications: "publications-atmosphere",
        "research-notes": "research-notes-atmosphere",
        projects: "projects-atmosphere",
        research: "research-atmosphere",
        "peer-review-editorial-service": "peer-review-atmosphere",
        "evidence-mechanism": "evidence-atmosphere",
        "professional-engagement": "professional-engagement-atmosphere",
        cv: "cv-atmosphere",
        contact: "contact-atmosphere",
      } as Record<string, string>)[theme] && (
        <div className={({
          "talks-conferences": "conference-atmosphere",
          publications: "publications-atmosphere",
          "research-notes": "research-notes-atmosphere",
          projects: "projects-atmosphere",
          research: "research-atmosphere",
          "peer-review-editorial-service": "peer-review-atmosphere",
          "evidence-mechanism": "evidence-atmosphere",
          "professional-engagement": "professional-engagement-atmosphere",
          cv: "cv-atmosphere",
          contact: "contact-atmosphere",
        } as Record<string, string>)[theme]} aria-hidden="true" />
      )}
      <div className="internal-hero-copy">
        <div className="internal-hero-index"><span>{eyebrow}</span><i /><span>{themeLabels[theme] ?? "Research identity"}</span></div>
        <h1>{title}</h1>
        <p>{intro}</p>
        {action}
      </div>
      <ScientificMotif theme={theme} />
    </section>
  );
}

function statusFor(page: ContentPage, section: ContentSection) {
  if (page.slug === "publications") return section.number === "ACCEPTED" ? "Accepted" : "Published";
  if (page.slug === "projects") return section.body.toLowerCase().includes("invited") ? "Invited" : "In development";
  if (page.slug === "talks-conferences") return "Accepted speaker";
  return null;
}

function SectionLink({ section }: { section: ContentSection }) {
  if (!section.link) return null;
  const content = <>{section.link.label} <span aria-hidden="true">↗</span></>;
  return section.link.href.startsWith("http")
    ? <a className="internal-section-link" href={section.link.href} target="_blank" rel="noopener noreferrer">{content}</a>
    : <Link className="internal-section-link" href={section.link.href}>{content}</Link>;
}

function EvidencePathway() {
  return (
    <section className="evidence-pathway" aria-labelledby="evidence-pathway-title">
      <div><p>Evidence pathway</p><h2 id="evidence-pathway-title">From observation to stronger mechanistic inference.</h2></div>
      <ol>
        {["Observation", "Association", "Perturbation", "Dependency", "Rescue / Mediation", "Stronger mechanistic inference"].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
      </ol>
      <small>This pathway is a calibration framework, not a requirement that every study contain every stage.</small>
    </section>
  );
}

export function CrossPageNav({ currentPath }: { currentPath: string }) {
  const index = navigation.findIndex(([, href]) => href === currentPath);
  const previous = index > 0 ? navigation[index - 1] : null;
  const next = index >= 0 && index < navigation.length - 1 ? navigation[index + 1] : null;
  return (
    <nav className="internal-cross-nav" aria-label="Explore related sections">
      {previous ? <Link href={previous[1]}><span>Previous section</span><strong>← {previous[0]}</strong></Link> : <span />}
      {next ? <Link href={next[1]}><span>Next section</span><strong>{next[0]} →</strong></Link> : <Link href="/research"><span>Continue exploring</span><strong>Research →</strong></Link>}
    </nav>
  );
}

export function InternalContentPage({ page }: { page: ContentPage }) {
  return (
    <main className={`internal-page internal-page--${page.slug}`}>
      <InternalHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} theme={page.slug} />
      {page.slug === "evidence-mechanism" && <EvidencePathway />}
      <section className="internal-sections" aria-label={`${page.title} sections`}>
        {page.sections.map((section) => {
          const status = statusFor(page, section);
          return (
            <article className={`internal-section internal-section--${section.number.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={`${section.number}-${section.title}`}>
              <div className="internal-section-rail"><span>{section.number}</span><i /></div>
              <div className="internal-section-content">
                <div className="internal-section-heading">{status && <span className="internal-status">{status}</span>}<h2>{section.title}</h2></div>
                <p>{section.body}</p>
                {section.meta && <dl className="internal-meta">{section.meta.map((item) => { const [label, ...value] = item.split(": "); return <div key={item}><dt>{label}</dt><dd>{value.join(": ") || label}</dd></div>; })}</dl>}
                {section.points && <ul className="internal-points">{section.points.map((point) => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul>}
                <SectionLink section={section} />
              </div>
              <div className="internal-section-geometry" aria-hidden="true"><i /><i /><i /></div>
            </article>
          );
        })}
      </section>
      {page.closing && <blockquote className="internal-closing">{page.closing}</blockquote>}
      <CrossPageNav currentPath={`/${page.slug}`} />
    </main>
  );
}
