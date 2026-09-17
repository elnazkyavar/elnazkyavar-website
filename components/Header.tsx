import Link from "next/link";
import { navigation } from "../lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Elnaz Kyavar, home">Elnaz Kyavar</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.slice(0, 4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <details className="more-nav"><summary>More</summary><div>{navigation.slice(4).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></details>
      </nav>
    </header>
  );
}
