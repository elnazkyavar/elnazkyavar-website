import Link from "./SiteLink";
import Image from "next/image";
import { academicProfiles } from "../lib/site-config";

export function Footer() {
  return (
    <footer className="footer footer--academic">
      <div className="footer-identity"><Link className="footer-name" href="/">Dr. Elnaz Kyavar</Link><p>Plant physiologist · Biotechnology researcher · Scientific peer reviewer</p></div>
      <nav className="footer-profile-nav" aria-label="Academic profiles and contact">
        {academicProfiles.map((profile) => <a key={profile.label} href={profile.href} target="_blank" rel="noopener noreferrer"><Image src={profile.icon} alt="" width={22} height={22} /><span>{profile.label}</span><b aria-hidden="true">↗</b></a>)}
        <Link href="/contact"><span>Contact</span><b aria-hidden="true">→</b></Link>
      </nav>
      <p className="copyright">© {new Date().getFullYear()} Dr. Elnaz Kyavar</p>
    </footer>
  );
}
