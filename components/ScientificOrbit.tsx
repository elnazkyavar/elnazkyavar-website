"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

type OrbitItem = {
  id: string;
  label: string;
  href: string;
  description: string;
  preview: string;
  x: number;
  y: number;
};

const orbitItems: OrbitItem[] = [
  { id: "research", label: "Research", href: "/research", description: "Research themes and scientific approach", preview: "Cyanobacterial biotechnology, phycobiliproteins, plant physiology, process optimization, and evidence-led scientific synthesis.", x: 50, y: 8 },
  { id: "publications", label: "Publications", href: "/publications", description: "Verified scholarly record", preview: "Peer-reviewed articles, accepted work, and selected scholarly projects with verified bibliographic metadata.", x: 22, y: 22 },
  { id: "evidence", label: "Evidence & Mechanism", href: "/evidence-mechanism", description: "Signature evidence-calibration framework", preview: "A framework for separating association from causation, expression from function, and computational support from experimental validation.", x: 79, y: 22 },
  { id: "editorial", label: "Peer Review & Editorial", href: "/peer-review-editorial-service", description: "Scientific service and reviewer portfolio", preview: "100+ peer reviews with a focus on methodological clarity, statistical validity, mechanistic calibration, and constructive editorial judgment.", x: 89, y: 49 },
  { id: "talks", label: "Talks & Conferences", href: "/talks-conferences", description: "Scientific exchange and presentations", preview: "Conference contributions, talks, posters, and scientific meetings connected to the broader research record.", x: 77, y: 77 },
  { id: "projects", label: "Projects", href: "/projects", description: "Current and selected scholarly work", preview: "Research, review, and book projects organized around evidence architecture, biotechnology, and translational bioscience.", x: 50, y: 91 },
  { id: "cv", label: "CV", href: "/cv", description: "Academic profile and record", preview: "A concise academic record spanning education, publications, peer review, scientific service, affiliations, and leadership.", x: 24, y: 79 },
  { id: "contact", label: "Contact", href: "/contact", description: "Research and professional enquiries", preview: "Contact routes for research, speaking, editorial, collaboration, and professional enquiries.", x: 11, y: 50 },
];

function OrbitIcon({ id }: { id: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  switch (id) {
    case "research":
      return <svg {...common}><path d="M9 3h6M11 3v5l-5 8a3 3 0 0 0 2.6 4.5h6.8A3 3 0 0 0 18 16l-5-8V3"/><path d="M8.5 15h7"/></svg>;
    case "publications":
      return <svg {...common}><path d="M6 4.5h9l3 3V20H6z"/><path d="M14.5 4.5V8H18M9 12h6M9 15h6"/></svg>;
    case "evidence":
      return <svg {...common}><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="m8 11 8-4M8 13l8 4"/></svg>;
    case "editorial":
      return <svg {...common}><circle cx="9" cy="8" r="2.5"/><circle cx="16.5" cy="9.5" r="2"/><path d="M4.5 18c.8-3.2 2.4-4.8 4.5-4.8s3.8 1.6 4.5 4.8M14 17.5c.5-2.3 1.5-3.5 3-3.5s2.6 1.2 3 3.5"/></svg>;
    case "talks":
      return <svg {...common}><path d="M5 5h14v9H8l-3 3z"/><path d="M9 9h6M9 12h4"/></svg>;
    case "projects":
      return <svg {...common}><path d="M9 18h6M10 21h4"/><path d="M8.2 14.5C6.8 13.4 6 11.8 6 10a6 6 0 1 1 12 0c0 1.8-.8 3.4-2.2 4.5-.8.7-1.3 1.4-1.5 2.5h-4.6c-.2-1.1-.7-1.8-1.5-2.5Z"/></svg>;
    case "cv":
      return <svg {...common}><rect x="5" y="3.5" width="14" height="17" rx="1.5"/><circle cx="12" cy="9" r="2"/><path d="M8.5 15c.7-2 1.9-3 3.5-3s2.8 1 3.5 3M8 18h8"/></svg>;
    default:
      return <svg {...common}><rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4.5 7 7.5 6 7.5-6"/></svg>;
  }
}

export function ScientificOrbit() {
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className={`orbit-v2 ${selected ? "has-selection" : ""}`} aria-label="Explore Dr. Elnaz Kyavar's academic work">
      <svg className="orbit-v2-map" viewBox="0 0 720 720" aria-hidden="true">
        <defs>
          <linearGradient id="orbitLine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7fc2be" stopOpacity=".2" />
            <stop offset=".5" stopColor="#3e8b8c" stopOpacity=".7" />
            <stop offset="1" stopColor="#9bd5ce" stopOpacity=".18" />
          </linearGradient>
        </defs>

        <g className="orbit-v2-rings orbit-v2-rings-a">
          <ellipse cx="360" cy="360" rx="293" ry="217" transform="rotate(-15 360 360)" />
          <ellipse cx="360" cy="360" rx="232" ry="314" transform="rotate(29 360 360)" />
          <ellipse cx="360" cy="360" rx="324" ry="278" transform="rotate(11 360 360)" />
        </g>

        <g className="orbit-v2-rings orbit-v2-rings-b">
          <path d="M92 402 C148 307 208 444 266 350 S377 262 440 362 S548 461 622 333" />
          <path d="M132 250 C196 176 252 309 310 229 S432 190 509 273" />
          <path d="M164 504 C226 557 286 457 344 525 S459 578 535 500" />
        </g>

        <g className="orbit-v2-connections">
          {orbitItems.map((item) => (
            <line
              key={item.id}
              data-active={selected === item.id}
              x1="360"
              y1="360"
              x2={item.x * 7.2}
              y2={item.y * 7.2}
            />
          ))}
        </g>

        <g className="orbit-v2-cells">
          <circle cx="155" cy="178" r="10" /><circle cx="177" cy="163" r="4" />
          <circle cx="552" cy="153" r="8" /><circle cx="585" cy="379" r="5" />
          <circle cx="209" cy="550" r="8" /><circle cx="475" cy="583" r="5" />
          <circle cx="92" cy="365" r="4" /><circle cx="622" cy="490" r="7" />
        </g>

        <circle className="orbit-v2-particle orbit-v2-particle-a" cx="360" cy="65" r="4" />
        <circle className="orbit-v2-particle orbit-v2-particle-b" cx="653" cy="360" r="3.5" />
        <circle className="orbit-v2-particle orbit-v2-particle-c" cx="360" cy="651" r="5" />
      </svg>

      <div className={`orbit-v2-core ${selected ? "is-muted" : ""}`}>
        <span className="orbit-v2-core-eyebrow">Science · connections · impact</span>
        <strong>Dr. Elnaz<br />Kyavar</strong>
        <i aria-hidden="true" />
        <small>Evidence-led bioscience</small>
      </div>

      {orbitItems.map((item) => {
        const isSelected = selected === item.id;
        return (
          <div
            className={`orbit-v2-node orbit-v2-node-${item.id} ${isSelected ? "is-selected" : ""}`}
            style={{ "--node-x": `${item.x}%`, "--node-y": `${item.y}%` } as CSSProperties}
            key={item.id}
          >
            <button
              className="orbit-v2-trigger"
              type="button"
              onClick={() => setSelected(item.id)}
              aria-label={`${item.label}: ${item.description}`}
              aria-expanded={isSelected}
            >
              <OrbitIcon id={item.id} />
              <span>{item.label}</span>
            </button>

            <span className="orbit-v2-hover-copy" aria-hidden="true">{item.description}</span>

            <div className="orbit-v2-expanded" aria-hidden={!isSelected}>
              <button type="button" className="orbit-v2-close" onClick={() => setSelected(null)} aria-label="Close section preview">×</button>
              <OrbitIcon id={item.id} />
              <p>Selected area</p>
              <h2>{item.label}</h2>
              <span>{item.preview}</span>
              <Link href={item.href}>Explore <b aria-hidden="true">↗</b></Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
