import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowLink } from "../components/ArrowLink";
import { latest } from "../lib/site-data";

export default function Home() {
  return <><Header /><main>
    <section className="hero"><div className="hero-index" aria-hidden="true"><span>EK</span><i /></div><div className="hero-content"><p className="eyebrow">Bioscience researcher · Evidence-led inquiry</p><h1>Connecting biological evidence to the mechanisms that matter.</h1><p className="hero-copy">Elnaz Kyavar is a researcher working at the intersection of rigorous evidence assessment and mechanistic reasoning in bioscience.</p><div className="hero-actions"><Link className="button" href="/research">Explore the research</Link><ArrowLink href="/evidence-mechanism">Evidence &amp; Mechanism</ArrowLink></div></div></section>
    <section className="signal-strip" aria-label="Research approach"><span>Evidence calibration</span><span>Mechanistic reasoning</span><span>Scientific synthesis</span></section>
    <section className="editorial-section statement"><p className="section-kicker">Research orientation</p><div><h2>Better explanations begin with better-calibrated claims.</h2><p>My research approach connects methodological scrutiny with biological interpretation. The aim is not simply to collect findings, but to understand how evidence supports—or constrains—the explanations we build from it.</p><ArrowLink href="/research">Research approach</ArrowLink></div></section>
    <section className="editorial-section highlights"><div className="section-heading"><p className="section-kicker">Selected highlights</p><h2>A focused research practice.</h2></div><div className="highlight-grid"><article><span>01</span><h3>Evidence calibration</h3><p>Matching the confidence, scope, and language of a claim to the evidence that supports it.</p></article><article><span>02</span><h3>Mechanistic reasoning</h3><p>Developing explanations with explicit components, causal sequences, and testable alternatives.</p></article><article><span>03</span><h3>Scientific synthesis</h3><p>Integrating heterogeneous findings without flattening disagreement or hiding uncertainty.</p></article></div></section>
    <section className="editorial-section latest-section"><div className="section-heading"><p className="section-kicker">Latest from Elnaz</p><h2>Ideas, frameworks, and updates.</h2></div><div className="latest-list">{latest.map((item, index) => <Link href={item.href} className="latest-item" key={item.title}><span className="item-number">0{index + 1}</span><div><p className="item-type">{item.type}</p><h3>{item.title}</h3><p>{item.excerpt}</p></div><span className="item-arrow" aria-hidden="true">↗</span></Link>)}</div></section>
    <section className="evidence-callout"><p className="section-kicker">Signature perspective</p><h2>Evidence tells us what we can claim.<br />Mechanism tells us why it might be true.</h2><ArrowLink href="/evidence-mechanism">Enter Evidence &amp; Mechanism</ArrowLink></section>
  </main><Footer /></>;
}
