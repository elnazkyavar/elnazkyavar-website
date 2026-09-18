import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { InternalContentPage } from "../../components/InternalPageSystem";
import { ResearchNotesIndex } from "../../components/ResearchNotesIndex";
import { contentPages as pages } from "../../lib/site-content-v2";

export function generateStaticParams() { return pages.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = pages.find((item) => item.slug === slug); if (!page) return {}; const canonical = `/${slug}`; return { title: page.title, description: page.description, alternates: { canonical }, openGraph: { title: `${page.title} — Elnaz Kyavar`, description: page.description, url: canonical, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dr. Elnaz Kyavar — Evidence-led bioscience research" }] }, twitter: { card: "summary_large_image", title: `${page.title} — Elnaz Kyavar`, description: page.description, images: ["/og.png"] } }; }
export default async function EditorialPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const page = pages.find((item) => item.slug === slug); if (!page) notFound(); return <><Header />{page.slug === "research-notes" ? <ResearchNotesIndex intro={page.intro} /> : <InternalContentPage page={page} />}<Footer /></>; }
