import Link from "../components/SiteLink";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function NotFound() {
  return <><Header /><main className="not-found-page"><section className="not-found-card"><div className="not-found-orbit" aria-hidden="true" /><p>404 · Outside the current research map</p><h1>Page not found.</h1><p>The requested page may have moved or may not yet be part of this research record.</p><nav className="not-found-links" aria-label="Return to the website"><Link href="/">Home</Link><Link href="/research">Research</Link><Link href="/publications">Publications</Link></nav></section></main><Footer /></>;
}
