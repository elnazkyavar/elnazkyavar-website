"use client";

import { useEffect, useState } from "react";
import Link from "../../../components/SiteLink";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export default function PhytomedicineRecognitionPage() {
  const [certificateSrc, setCertificateSrc] = useState("");

  useEffect(() => {
    let active = true;
    Promise.all([
      fetch("/certificate/phytomedicine-100-part1.txt").then((r) => r.text()),
      fetch("/certificate/phytomedicine-100-part2.txt").then((r) => r.text()),
    ]).then(([a, b]) => {
      if (active) setCertificateSrc(`data:image/webp;base64,${a.trim()}${b.trim()}`);
    });
    return () => { active = false; };
  }, []);

  return (
    <>
      <Header />
      <main className="recognition-page">
        <section className="recognition-hero">
          <div>
            <span className="recognition-eyebrow">Reviewer recognition · Elsevier</span>
            <h1>100 peer reviews for <em>Phytomedicine</em>.</h1>
            <p>
              Formally recognized by the Editors of <em>Phytomedicine</em> for 100 completed
              peer reviews between November 2025 and October 2026.
            </p>
          </div>
          <div className="recognition-seal" aria-hidden="true">
            <span>Elsevier</span><strong>100</strong><small>REVIEWS</small>
          </div>
        </section>

        <section className="recognition-certificate-wrap" aria-label="Elsevier Certificate of Reviewing">
          <div className="recognition-certificate-frame">
            {certificateSrc ? (
              <img
                src={certificateSrc}
                alt="Elsevier Certificate of Reviewing awarded to Elnaz Kyavar for 100 reviews for Phytomedicine between November 2025 and October 2026."
              />
            ) : (
              <div className="recognition-certificate-loading">Loading certificate…</div>
            )}
          </div>
          <p className="recognition-caption">
            Elsevier Certificate of Reviewing awarded by the Editors of <em>Phytomedicine</em>
            in recognition of 100 completed reviews, November 2025–October 2026.
          </p>
          <Link className="recognition-back" href="/peer-review-editorial-service">
            ← Back to Peer Review & Editorial
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
