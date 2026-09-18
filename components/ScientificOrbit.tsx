"use client";

import Link from "next/link";
import { useState } from "react";

type OrbitItem = {
  id: string;
  label: string;
  shortLabel?: string;
  href: string;
  description: string;
  preview: string;
  x: number;
  y: number;
  tone: "light" | "mid" | "deep";
};

const orbitItems: OrbitItem[] = [
  { id: "research", label: "Research", href: "/research", description: "Evidence architecture and mechanistic inquiry", preview: "Explore an approach grounded in evidence architecture, mechanistic inquiry, and scientific synthesis.", x: 50, y: 5, tone: "deep" },
  { id: "publications", label: "Publications", href: "/publications", description: "A verified scholarly record", preview: "The publication index is prepared for verified citations, abstracts, identifiers, and connected research themes.", x: 83, y: 18, tone: "light" },
  { id: "evidence", label: "Evidence & Mechanism", shortLabel: "Evidence &\nMechanism", href: "/evidence-mechanism", description: "Calibrating claims and explanations", preview: "A signature framework for matching the strength of a claim to its evidence and testing the mechanism behind it.", x: 91, y: 53, tone: "mid" },
  { id: "editorial", label: "Peer Review & Editorial", shortLabel: "Peer Review &\nEditorial", href: "/peer-review-editorial-service", description: "Constructive and exacting scientific service", preview: "Review principles centered on methodological clarity, proportionate interpretation, and actionable feedback.", x: 72, y: 85, tone: "light" },
  { id: "talks", label: "Talks & Conferences", shortLabel: "Talks &\nConferences", href: "/talks-conferences", description: "Scientific exchange and presentations", preview: "A structured home for confirmed talks, posters, panels, and conference contributions.", x: 34, y: 91, tone: "deep" },
  { id: "projects", label: "Projects", href: "/projects", description: "Questions, methods, outputs, and open work", preview: "Project records connect motivating questions to evidence, analytical choices, outputs, and open questions.", x: 7, y: 68, tone: "light" },
  { id: "cv", label: "CV", href: "/cv", description: "A concise verified academic profile", preview: "View the prepared home for a verified academic record and future downloadable curriculum vitae.", x: 9, y: 31, tone: "mid" },
  { id: "contact", label: "Contact", href: "/contact", description: "Research and professional enquiries", preview: "Open the contact page for research, speaking, editorial, and professional enquiry guidance.", x: 28, y: 10, tone: "light" },
];

export function ScientificOrbit() {
  const [selected, setSelected] = useState<string | null>(null);
  const activeItem = orbitItems.find((item) => item.id === selected);

  return (
    <section className={`scientific-orbit ${selected ? "has-selection" : ""}`} aria-label="Explore Elnaz Kyavar's academic work">
      <svg className="orbit-map" viewBox="0 0 700 700" aria-hidden="true">
        <g className="orbit-drift orbit-drift-a">
          <ellipse cx="350" cy="350" rx="267" ry="188" transform="rotate(-17 350 350)" />
          <ellipse cx="350" cy="350" rx="222" ry="292" transform="rotate(37 350 350)" />
        </g>
        <g className="orbit-drift orbit-drift-b">
          <ellipse cx="350" cy="350" rx="305" ry="270" transform="rotate(11 350 350)" />
          <path className="bio-filament" d="M124 399 C174 330 220 432 273 359 S374 287 425 365 S517 443 573 344" />
          <path className="bio-filament bio-filament-secondary" d="M172 261 C228 205 261 293 314 239 S420 201 481 275" />
        </g>
        <g className="connection-lines">
          {orbitItems.map((item) => <line key={item.id} data-active={selected === item.id} x1="350" y1="350" x2={item.x * 7} y2={item.y * 7} />)}
        </g>
        <g className="micro-cells">
          <circle cx="155" cy="178" r="6" /><circle cx="173" cy="166" r="3" /><circle cx="526" cy="144" r="5" /><circle cx="566" cy="377" r="4" /><circle cx="208" cy="544" r="5" /><circle cx="461" cy="574" r="3" />
        </g>
        <circle className="particle particle-a" cx="350" cy="82" r="4" />
        <circle className="particle particle-b" cx="622" cy="350" r="3" />
        <circle className="particle particle-c" cx="350" cy="627" r="5" />
      </svg>

      <div className={`orbit-core ${activeItem ? "is-muted" : ""}`} aria-hidden={Boolean(activeItem)}>
        <span className="core-overline">Scientific identity</span>
        <strong>Evidence</strong>
        <i>informs</i>
        <strong>Mechanism</strong>
      </div>

      {orbitItems.map((item) => (
        <div className={`orbit-node node-${item.tone} ${selected === item.id ? "is-selected" : ""}`} style={{ "--node-x": `${item.x}%`, "--node-y": `${item.y}%` } as React.CSSProperties} key={item.id}>
          <button className="node-trigger" type="button" aria-label={`${item.label}: ${item.description}`} aria-expanded={selected === item.id} onClick={() => setSelected(item.id)}>
            <span>{(item.shortLabel ?? item.label).split("\n").map((part, index) => <span key={part}>{part}{index === 0 && item.shortLabel ? <br /> : null}</span>)}</span>
          </button>
          <span className="node-description" aria-hidden="true">{item.description}</span>
        </div>
      ))}

      {activeItem && (
        <div className="orbit-selection" role="dialog" aria-modal="false" aria-labelledby="orbit-selection-title">
          <button className="selection-close" type="button" onClick={() => setSelected(null)} aria-label="Close section preview">×</button>
          <p>Selected area</p>
          <h2 id="orbit-selection-title">{activeItem.label}</h2>
          <span>{activeItem.preview}</span>
          <Link href={activeItem.href}>Explore <b aria-hidden="true">↗</b></Link>
        </div>
      )}
    </section>
  );
}
