import Link from "next/link";
import { Header } from "../components/Header";
import { ScientificOrbit } from "../components/ScientificOrbit";

export default function Home() {
  return <><Header /><main className="home-main">
    <section className="orbit-hero">
      <div className="hero-introduction"><p className="home-kicker">Bioscience researcher <i /> evidence-led inquiry</p><h1><span>Dr.</span> Elnaz<br />Kyavar</h1><p>Connecting rigorous evidence assessment with mechanistic reasoning to build clearer, more defensible scientific explanations.</p><Link className="home-cta" href="/research">Explore the research <span aria-hidden="true">↗</span></Link></div>
      <ScientificOrbit />
      <aside className="portrait-frame" aria-label="Portrait area for Dr. Elnaz Kyavar"><div className="portrait-field"><span className="portrait-monogram" aria-hidden="true">EK</span><div className="portrait-contour" aria-hidden="true" /></div><p>Dr. Elnaz Kyavar</p><span>Bioscience researcher</span></aside>
    </section>
    <section className="home-highlights" aria-labelledby="selected-highlights"><header><p>Selected highlights</p><h2 id="selected-highlights">A research practice built around clarity.</h2></header><div className="home-highlight-grid">
      <Link href="/research"><span>01 · Research</span><h3>Evidence-led inquiry</h3><p>Research questions shaped by careful calibration, mechanistic thinking, and transparent uncertainty.</p><b aria-hidden="true">↗</b></Link>
      <Link href="/peer-review-editorial-service"><span>02 · Scientific service</span><h3>Peer Review &amp; Editorial</h3><p>A constructive review approach centered on methodological clarity and proportionate interpretation.</p><b aria-hidden="true">↗</b></Link>
      <a href="#academic-profiles"><span>03 · Research identity</span><h3>Academic Profiles</h3><p>A prepared directory for verified scholarly identifiers and professional research profiles.</p><b aria-hidden="true">↓</b></a>
    </div></section>
  </main><footer className="home-footer" id="academic-profiles"><div className="home-footer-intro"><p>Academic profiles</p><h2>Follow the research record.</h2><span>Profile destinations are prepared and will point to Elnaz’s verified records when exact URLs are confirmed.</span></div><nav aria-label="Academic profile links">
    <a href="https://orcid.org/" target="_blank" rel="noreferrer"><span>ORCID</span><b>↗</b></a>
    <a href="https://www.webofscience.com/" target="_blank" rel="noreferrer"><span>Web of Science</span><b>↗</b></a>
    <a href="https://www.scopus.com/" target="_blank" rel="noreferrer"><span>Scopus</span><b>↗</b></a>
    <a href="https://scholar.google.com/" target="_blank" rel="noreferrer"><span>Google Scholar</span><b>↗</b></a>
    <a href="https://www.researchgate.net/" target="_blank" rel="noreferrer"><span>ResearchGate</span><b>↗</b></a>
  </nav><div className="home-footer-base"><Link href="/">Elnaz Kyavar</Link><span>© {new Date().getFullYear()} · Evidence-led bioscience research</span></div></footer></>;
}
