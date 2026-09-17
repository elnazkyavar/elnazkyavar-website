import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ArrowLink } from "../../components/ArrowLink";
import { pages } from "../../lib/site-data";

export function generateStaticParams() { return pages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = pages.find((item) => item.slug === slug); if (!page) return {}; return { title: page.title, description: page.description, openGraph: { title: `${page.title} — Elnaz Kyavar`, description: page.description, images: [] }, twitter: { card: "summary", title: `${page.title} — Elnaz Kyavar`, description: page.description, images: [] } }; }
export default async function EditorialPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = pages.find((item) => item.slug === slug); if (!page) notFound(); return <><Header /><main><section className="page-hero"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1><p>{page.intro}</p></section><section className="content-list">{page.sections.map((section) => <article className="content-row" key={`${section.number}-${section.title}`}><span className="content-number">{section.number}</span><div><h2>{section.title}</h2><p>{section.body}</p>{section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}</div></article>)}</section><section className="next-step"><p className="section-kicker">Continue exploring</p><h2>See how the framework connects evidence to explanation.</h2><ArrowLink href="/evidence-mechanism">Evidence &amp; Mechanism</ArrowLink></section></main><Footer /></>; }
