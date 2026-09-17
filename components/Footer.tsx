import Link from "next/link";
import { navigation } from "../lib/site-data";

export function Footer() {
  return (
    <footer className="footer">
      <div><Link className="footer-name" href="/">Elnaz Kyavar</Link><p>Bioscience research shaped by evidence and mechanism.</p></div>
      <div className="footer-nav">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
      <p className="copyright">© {new Date().getFullYear()} Elnaz Kyavar</p>
    </footer>
  );
}
