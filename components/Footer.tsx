import Link from "./SiteLink";
import { navigation } from "../lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div><Link className="footer-name" href="/">Dr. Elnaz Kyavar</Link><p>Plant physiologist · Biotechnology researcher · Scientific peer reviewer</p></div>
      <div className="footer-nav">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <p className="copyright">© {new Date().getFullYear()} Dr. Elnaz Kyavar</p>
    </footer>
  );
}
