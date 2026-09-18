import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "../../../components/SiteLink";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { publications } from "../../../lib/site-content-v2";
import { getSiteUrl } from "../../../lib/site-config";

type PublicationPageProps = { params: Promise<{ slug: string }> };

function findPublication(slug: string) { return publications.find((publication) => publication.slug === slug); }

function ScientificTitle({ title }: { title: string }) {
  const parts = title.split(/(Arthrospira platensis|Spirulina platensis)/g);
  return <>{parts.map((part, index) => /^(Arthrospira|Spirulina) platensis$/.test(part) ? <em key={`${part}-${index}`}>{part}</em> : part)}</>;
}

export function generateStaticParams() { return publications.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PublicationPageProps): Promise<Metadata> {
  const publication = findPublication((await params).slug);
  if (!publication) return {};
  const canonical = `/publications/${publication.slug}`;
  return {
    title: publication.title,
    description: publication.summary,
    alternates: { canonical },
    openGraph: { type: "article", title: publication.title, description: publication.summary, url: canonical, images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dr. Elnaz Kyavar — Evidence-led bioscience research" }] },
    twitter: { card: "summary_large_image", title: publication.title, description: publication.summary, images: ["/og.png"] },
  };
}

export default async function PublicationPage({ params }: PublicationPageProps) {
  const publication = findPublication((await params).slug);
  if (!publication) notFound();
  const canonical = `${getSiteUrl()}/publications/${publication.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: publication.title,
    author: publication.authors.map((name) => ({ "@type": "Person", name })),
    isPartOf: { "@type": "Periodical", name: publication.journal },
    datePublished: publication.publicationDate ?? String(publication.year),
    description: publication.summary,
    keywords: publication.themes.join(", "),
    url: canonical,
    ...(publication.doi ? { identifier: `https://doi.org/${publication.doi}`, sameAs: publication.externalUrl } : {}),
  };
  return <>
    <Header />
    <main className="publication-detail-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="publication-detail-hero">
        <Link href="/publications" className="research-note-back"><span aria-hidden="true">←</span> Publications</Link>
        <div className="publication-detail-status"><span>{publication.status}</span><span>{publication.articleType}</span><span>{publication.year}</span></div>
        <h1><ScientificTitle title={publication.title} /></h1>
        <p>{publication.authors.join(", ")}</p>
      </header>
      <section className="publication-detail-record">
        <aside aria-label="Publication record"><span>Journal</span><strong>{publication.journal}</strong>{publication.doi && <><span>DOI</span><strong>{publication.doi}</strong></>}</aside>
        <div><p className="publication-detail-label">Scientific summary</p><p className="publication-detail-summary">{publication.summary}</p><div className="publication-detail-themes" aria-label="Research themes">{publication.themes.map((theme) => <span key={theme}>{theme}</span>)}</div>{publication.externalUrl && <a className="internal-section-link" href={publication.externalUrl} target="_blank" rel="noopener noreferrer">View published article <span aria-hidden="true">↗</span></a>}</div>
      </section>
      <nav className="research-note-next" aria-label="Continue exploring"><p>Related research area</p><Link href="/research">Cyanobacterial biotechnology &amp; bioprocessing <span aria-hidden="true">→</span></Link></nav>
    </main>
    <Footer />
  </>;
}
