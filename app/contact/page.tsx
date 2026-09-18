import type { Metadata } from "next";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CrossPageNav, InternalHero } from "../../components/InternalPageSystem";

export const metadata: Metadata = { title: "Contact", description: "Research, editorial, and scientific enquiries for Dr. Elnaz Kyavar.", openGraph: { title: "Contact — Dr. Elnaz Kyavar", description: "Research, editorial, and scientific enquiries for Dr. Elnaz Kyavar.", images: [] }, twitter: { title: "Contact — Dr. Elnaz Kyavar", description: "Research, editorial, and scientific enquiries for Dr. Elnaz Kyavar.", images: [] } };

const profileLinks = [
  ["ORCID", "https://orcid.org/0009-0008-5526-5360"],
  ["Web of Science", "https://www.webofscience.com/wos/author/record/OXB-6292-2025"],
  ["Scopus", "https://www.scopus.com/authid/detail.uri?authorId=60701658500"],
  ["Google Scholar", "https://scholar.google.com/citations?user=ltvW04YAAAAJ"],
  ["ResearchGate", "https://www.researchgate.net/profile/Elnaz-Kyavar?ev=hdr_xprf"],
] as const;

export default function ContactPage() {
  return <><Header /><main className="internal-page contact-page"><InternalHero eyebrow="Contact" title="Research, editorial, and scientific enquiries" intro="For research collaboration, scientific speaking, scholarly review, editorial enquiries, or professional correspondence, please use the contact route below." theme="contact" />
    <section className="contact-composition">
      <div className="contact-primary"><span>01 · Email</span><h2>Professional correspondence</h2><a href="mailto:elnazkyavar@gmail.com">elnazkyavar@gmail.com <b aria-hidden="true">↗</b></a><p>Tehran, Iran</p></div>
      <div className="contact-affiliation"><span>02 · Affiliation</span><h2>Academic affiliation</h2><p>Islamic Azad University, Science and Research Branch, Tehran, Iran</p><div className="contact-network" aria-hidden="true"><i /><i /><i /></div></div>
    </section>
    <section className="contact-profiles"><div><p>Academic profiles</p><h2>Continue through the verified research record.</h2></div><nav aria-label="Academic profile shortcuts">{profileLinks.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}<span aria-hidden="true">↗</span></a>)}</nav></section>
    <CrossPageNav currentPath="/contact" />
  </main><Footer /></>;
}
