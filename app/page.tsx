import Link from "../components/SiteLink";
import type { CSSProperties } from "react";
import { Header } from "../components/Header";
import { ScientificOrbit } from "../components/ScientificOrbit";
import { researchUpdates } from "../lib/site-content-v2";

const academicProfiles = [
  { label: "ORCID", icon: "/profile-icons/orcid.svg", href: "https://orcid.org/0009-0008-5526-5360" },
  { label: "Web of Science", icon: "/profile-icons/web-of-science.svg", href: "https://www.webofscience.com/wos/author/record/OXB-6292-2025" },
  { label: "Scopus", icon: "/profile-icons/scopus.svg", href: "https://www.scopus.com/authid/detail.uri?authorId=60701658500" },
  { label: "Google Scholar", icon: "/profile-icons/google-scholar.svg", href: "https://scholar.google.com/citations?user=ltvW04YAAAAJ" },
  { label: "ResearchGate", icon: "/profile-icons/researchgate.svg", href: "https://www.researchgate.net/profile/Elnaz-Kyavar?ev=hdr_xprf" },
] as const;

export default function Home() {
  return (
    <>
      <Header />
      <main className="home-v2">
        <section className="home-v2-hero" aria-labelledby="home-v2-title">
          <div className="home-v2-copy">
            <p className="home-v2-kicker">Plant physiologist · biotechnology researcher · scientific peer reviewer</p>
            <h1 id="home-v2-title">Dr. Elnaz<br />Kyavar</h1>
            <p className="home-v2-subtitle">Evidence-led bioscience across biological systems, bioprocessing, and mechanistic interpretation.</p>
            <p className="home-v2-intro">
              Connecting biological evidence to defensible mechanisms — from cyanobacterial physiology
              and phycobiliprotein biomanufacturing to evidence-calibrated interpretation of complex bioscience.
            </p>
            <div className="home-v2-actions">
              <Link className="home-v2-primary" href="/research">Explore my work <span aria-hidden="true">→</span></Link>
              <Link className="home-v2-textlink" href="/evidence-mechanism">Evidence &amp; Mechanism <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="home-v2-microcopy" aria-hidden="true">
              <span>Research</span><i />
              <span>Evidence</span><i />
              <span>Impact</span>
            </div>
          </div>

          <ScientificOrbit />

          <aside className="home-v2-portrait" aria-label="Profile portrait of Dr. Elnaz Kyavar">
            <div className="home-v2-photo-shell">
              <span className="photo-orbit photo-orbit-a" aria-hidden="true" />
              <div className="home-v2-photo" role="img" aria-label="Portrait of Dr. Elnaz Kyavar" />
            </div>
            <div className="home-v2-portrait-caption">
              <p>Dr. Elnaz Kyavar</p>
              <span>Bioscience researcher</span>
            </div>
            <blockquote>From biological systems to defensible scientific explanations.</blockquote>
          </aside>
        </section>

        <section className="home-v2-domain-strip" aria-label="Research domains">
          <span>Cyanobacterial biotechnology</span>
          <span>Phycobiliproteins</span>
          <span>Bioprocessing</span>
          <span>Redox biology</span>
          <span>Mechanistic phytomedicine</span>
        </section>

        <section className="home-v2-highlights" aria-labelledby="home-v2-highlights-title">
          <div className="home-v2-section-head">
            <p>Selected highlights</p>
            <h2 id="home-v2-highlights-title">A scientific identity built around evidence, mechanism, and service.</h2>
          </div>

          <div className="home-v2-cards">
            <Link className="home-v2-card home-v2-card-research" href="/research">
              <div>
                <span className="home-v2-card-kicker">Research</span>
                <h3>From cyanobacterial physiology to evidence-led synthesis.</h3>
                <p>Research spanning phycobiliprotein biomanufacturing, nutrient–stress regulation, process optimization, and mechanistic interpretation.</p>
              </div>
              <div className="home-v2-card-art art-cells" aria-hidden="true"><i /><i /><i /><i /></div>
              <b aria-hidden="true">↗</b>
            </Link>

            <Link className="home-v2-card home-v2-card-service" href="/peer-review-editorial-service">
              <div>
                <span className="home-v2-card-kicker">Peer Review &amp; Editorial</span>
                <h3>100+ peer reviews across international journals.</h3>
                <p>Constructive, evidence-calibrated reviewing with emphasis on methodological clarity, statistics, mechanism, and data-to-claim alignment.</p>
                <div className="home-v2-journals" aria-label="Selected journals reviewed for">
                  <span>Phytomedicine</span>
                  <span>Systems Ethnopharmacology &amp; Sustainable Bioresources</span>
                  <span>Applied Biochemistry &amp; Biotechnology</span>
                  <span>Toxicology Research</span>
                </div>
              </div>
              <b aria-hidden="true">↗</b>
            </Link>

            <a className="home-v2-card home-v2-card-profiles" href="#academic-profiles">
              <div>
                <span className="home-v2-card-kicker">Academic profiles</span>
                <h3>One research identity across the major scholarly platforms.</h3>
                <p>Direct profile access for verified publications, reviewer activity, citation records, and research identifiers.</p>
              </div>
              <div className="home-v2-card-art art-network" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <b aria-hidden="true">↓</b>
            </a>
          </div>
        </section>

        <section className="home-v2-latest" id="latest" aria-labelledby="home-v2-latest-title">
          <div className="home-v2-section-head">
            <p>Latest from Elnaz</p>
            <h2 id="home-v2-latest-title">Research notes, papers, and scientific updates.</h2>
          </div>
          <div className="home-v2-latest-grid">
            {researchUpdates.filter((entry) => entry.featuredOnHome).slice(0, 3).map((entry) => (
              <article key={entry.slug} className="home-v2-latest-card">
                <div><span>{entry.category}</span><time>{entry.date}</time></div>
                <h3>{entry.title}</h3>
                <p>{entry.shortSummary}</p>
                {entry.contentType === "researchNote" && <small className="home-v2-latest-byline">By {entry.author}</small>}
                {entry.contentType === "researchNote"
                  ? <Link href={`/research-notes/${entry.slug}`}>Read note <b aria-hidden="true">↗</b></Link>
                  : entry.externalLink
                    ? <a href={entry.externalLink} target="_blank" rel="noopener noreferrer">View paper <b aria-hidden="true">↗</b></a>
                    : <Link href="/research-notes">View update <b aria-hidden="true">↗</b></Link>}
              </article>
            ))}
          </div>
          <Link className="home-v2-latest-all" href="/research-notes">All research notes &amp; updates <span aria-hidden="true">→</span></Link>
        </section>
      </main>

      <footer className="home-v2-footer" id="academic-profiles">
        <div className="home-v2-footer-title">
          <div>
            <p>Academic profiles</p>
            <h2>Follow the research record.</h2>
          </div>
          <span>Verified personal profile links.</span>
        </div>

        <nav className="home-v2-profile-grid" aria-label="Academic profile links">
          {academicProfiles.map((profile) => (
              <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer" className="home-v2-profile-link">
                <span className="home-v2-profile-mark" aria-hidden="true">
                  <span className="home-v2-profile-logo" style={{ backgroundImage: `url("${profile.icon}")` } as CSSProperties} />
                </span>
                <span><strong>{profile.label}</strong><small>View profile</small></span>
                <b aria-hidden="true">↗</b>
              </a>
          ))}
        </nav>

        <div className="home-v2-footer-base">
          <Link href="/">Dr. Elnaz Kyavar</Link>
          <span>© {new Date().getFullYear()} · Evidence-led bioscience research</span>
        </div>
      </footer>
    </>
  );
}
