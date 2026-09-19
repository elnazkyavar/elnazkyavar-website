"use client";

import Link from "./SiteLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const primary = [
  ["Research", "/research"],
  ["Publications", "/publications"],
  ["Evidence & Mechanism", "/evidence-mechanism"],
  ["Peer Review & Editorial", "/peer-review-editorial-service"],
] as const;

const secondary = [
  ["Talks & Conferences", "/talks-conferences"],
  ["Projects", "/projects"],
  ["Research Notes", "/research-notes"],
  ["Professional Engagement", "/professional-engagement"],
  ["CV", "/cv"],
  ["Contact", "/contact"],
] as const;

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const secondaryIsCurrent = secondary.some(([, href]) => isCurrent(href));

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (menuRef.current?.open && !menuRef.current.contains(event.target as Node)) {
        menuRef.current.open = false;
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuRef.current?.open) {
        menuRef.current.open = false;
        menuRef.current.querySelector("summary")?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Dr. Elnaz Kyavar, home" aria-current={pathname === "/" ? "page" : undefined}>Dr. Elnaz Kyavar</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {primary.map(([label, href]) => (
          <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>
        ))}
        <details ref={menuRef} className={`more-nav${secondaryIsCurrent ? " has-current" : ""}`}>
          <summary><span>More</span><i aria-hidden="true" /></summary>
          <div className="more-panel">
            <div className="more-panel-heading" aria-hidden="true"><span>Explore</span><i /></div>
            {primary.map(([label, href]) => (
              <Link className="mobile-nav-primary" key={`mobile-${href}`} href={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={closeMenu}>{label}</Link>
            ))}
            <span className="mobile-menu-divider" aria-hidden="true" />
            {secondary.map(([label, href], index) => (
              <Link key={href} href={href} aria-current={isCurrent(href) ? "page" : undefined} onClick={closeMenu}><span className="more-panel-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className="more-panel-label">{label}</span></Link>
            ))}
            <div className="more-panel-footer" aria-hidden="true">Research · Evidence · Service</div>
          </div>
        </details>
      </nav>
    </header>
  );
}
