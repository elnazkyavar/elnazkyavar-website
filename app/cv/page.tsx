import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CrossPageNav, InternalHero } from "../../components/InternalPageSystem";

export const metadata: Metadata = { title: "CV", description: "Academic profile and curriculum vitae for Dr. Elnaz Kyavar.", alternates: { canonical: "/cv" }, openGraph: { title: "CV — Dr. Elnaz Kyavar", description: "Academic profile and curriculum vitae for Dr. Elnaz Kyavar.", url: "/cv", images: [{ url: "/og.png", width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title: "CV — Dr. Elnaz Kyavar", description: "Academic profile and curriculum vitae for Dr. Elnaz Kyavar.", images: ["/og.png"] } };

const profiles = [
  { label: "ORCID", href: "https://orcid.org/0009-0008-5526-5360" },
  { label: "Web of Science", href: "https://www.webofscience.com/wos/author/record/OXB-6292-2025" },
  { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=60701658500" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=ltvW04YAAAAJ" },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Elnaz-Kyavar?ev=hdr_xprf" },
] as const;

const cvSections = [
  { id: "education", number: "01", title: "Education", content: <ul><li><strong>Ph.D. in Plant Biology – Plant Physiology</strong><br />Islamic Azad University, Science and Research Branch, Tehran, Iran</li><li><strong>M.Sc. in Plant Biology – Plant Physiology</strong><br />Islamic Azad University, Science and Research Branch, Tehran, Iran</li><li><strong>B.Sc. in Microbiology</strong><br />Islamic Azad University</li></ul> },
  { id: "expertise", number: "02", title: "Core research & editorial expertise", content: <><p className="cv-keywords">Cyanobacterial Biotechnology · Phycobiliproteins · Redox Biology · Mechanistic Phytomedicine</p><p>Her research integrates cyanobacterial physiology, cultivation and downstream processing, functional bioactivity, and mechanistic interpretation. Her academic appraisal work includes analytical-unit independence, replication, control integrity, causal inference, multi-omics interpretation, network pharmacology, and computational-to-experimental validation.</p></> },
  { id: "publications", number: "03", title: "Publications", content: <ul><li>Process-oriented optimization of phycobiliprotein production in <em>Arthrospira platensis</em> through interaction-driven nutrient–stress regulation — Process Biochemistry, 2026</li><li>Enhanced recovery of phycobiliproteins from <em>Arthrospira platensis</em> by combined glass bead vortexing and ultrasonication — Discover Applied Sciences, 2026</li><li>Effects of salinity, iron, and nitrogen on growth, chlorophyll content, and phycobiliproteins, with emphasis on physiological adaptive responses of <em>Spirulina platensis</em> — accepted, 2026</li></ul> },
  { id: "projects", number: "04", title: "Scholarly projects", content: <ul><li>Design-decision architecture for next-generation microbial cell factories in phycobiliprotein biomanufacturing — invited mini-review; abstract approved</li><li>Plant-derived bioactives and the gut microbiota–bile acid–FXR/TGR5 signaling axis in cardiovascular and cardiometabolic health — review manuscript in development</li></ul> },
  { id: "service", number: "05", title: "Peer review & editorial service", content: <p><strong>100+ peer reviews</strong> completed across international journals, with attention to methodological validity, reproducibility, statistical design, causal inference, and data-to-claim alignment.</p> },
  { id: "talks", number: "06", title: "Talks & conferences", content: <><p><strong>Rethinking Microbial Biomanufacturing: Lessons from Biological Interactions</strong></p><p>Accepted Speaker — International Conference on Clinical Microbiology, Virology and Infectious Diseases, Rome, Italy, 9–11 November 2026. Abstract published online and listed in the official conference speaker programme (Day 1).</p></> },
  { id: "leadership", number: "07", title: "Professional leadership & affiliations", content: <ul><li>Founder & Scientific Director — Green Life ELK, Tehran</li><li>Founder & Director — E Clinic, Tehran</li><li>Associate Member — The Physiological Society, UK</li><li>Iranian Algae Society</li><li>Iranian Society of Microbiology</li></ul> },
] as const;

export default function CVPage() {
  const download = <a className="cv-download" href="/elnaz-kyavar-academic-cv.pdf" download>Download CV <span aria-hidden="true">↓</span></a>;
  return <><Header /><main className="internal-page cv-page"><InternalHero eyebrow="Curriculum vitae" title="Academic profile" intro="Dr. Elnaz Kyavar is a plant physiologist and biotechnology researcher specializing in cyanobacterial biotechnology, phycobiliprotein biomanufacturing, nutrient–stress regulation, bioprocess optimization, redox biology, and natural bioactives. Her work combines experimental design, statistical appraisal, and evidence-calibrated interpretation of mechanistic and biological data." theme="cv" action={download} />
    <nav className="cv-section-nav" aria-label="CV sections">{cvSections.map((section) => <a key={section.id} href={`#${section.id}`}><span>{section.number}</span>{section.title}</a>)}</nav>
    <section className="cv-record">{cvSections.map((section) => <article id={section.id} key={section.id}><span>{section.number}</span><div><h2>{section.title}</h2>{section.content}</div></article>)}</section>
    <section className="cv-profiles" id="academic-profiles"><p>Academic profiles</p><h2>Verified research identities.</h2><div>{profiles.map((profile) => <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer"><span>{profile.label}</span><b aria-hidden="true">↗</b></a>)}</div></section>
    <CrossPageNav currentPath="/cv" />
  </main><Footer /></>;
}
