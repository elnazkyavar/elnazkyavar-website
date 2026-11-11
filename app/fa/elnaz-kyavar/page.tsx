import type { Metadata } from "next";
import Link from "../../../components/SiteLink";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { academicProfiles, getSiteUrl } from "../../../lib/site-config";

export const metadata: Metadata = {
  title: "دکتر الناز کیاور | Elnaz Kyavar — پژوهشگر فیزیولوژی گیاهی و زیست‌فناوری",
  description: "پروفایل علمی دکتر الناز کیاور (Elnaz Kyavar)، پژوهشگر فیزیولوژی گیاهی و زیست‌فناوری؛ شامل پژوهش‌ها، مقالات علمی، فعالیت داوری و چارچوب Evidence & Mechanism.",
  keywords: ["الناز کیاور", "دکتر الناز کیاور", "Elnaz Kyavar", "Elnaz Kiavar", "فیزیولوژی گیاهی", "زیست فناوری", "پژوهشگر زیست فناوری", "پروفایل علمی الناز کیاور"],
  alternates: { canonical: "/fa/elnaz-kyavar", languages: { "fa-IR": "/fa/elnaz-kyavar", "en": "/" } },
  openGraph: {
    type: "profile",
    url: "/fa/elnaz-kyavar",
    title: "دکتر الناز کیاور | Elnaz Kyavar",
    description: "پروفایل علمی فارسی دکتر الناز کیاور، پژوهشگر فیزیولوژی گیاهی و زیست‌فناوری.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "دکتر الناز کیاور | Dr. Elnaz Kyavar" }],
  },
};

export default function PersianProfilePage() {
  const baseUrl = getSiteUrl();
  const canonical = `${baseUrl}/fa/elnaz-kyavar`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${canonical}#profilepage`,
        url: canonical,
        name: "دکتر الناز کیاور | Elnaz Kyavar — پروفایل علمی",
        inLanguage: "fa-IR",
        mainEntity: { "@id": `${baseUrl}/#person` },
        isPartOf: { "@id": `${baseUrl}/#website` },
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Dr. Elnaz Kyavar",
        alternateName: ["الناز کیاور", "دکتر الناز کیاور", "Elnaz Kyavar", "Elnaz Kiavar"],
        url: baseUrl,
        jobTitle: ["Plant Physiologist", "Biotechnology Researcher", "پژوهشگر فیزیولوژی گیاهی و زیست‌فناوری"],
        sameAs: academicProfiles.map((profile) => profile.href),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="research-note-page" lang="fa" dir="rtl">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <header className="research-note-hero">
          <div className="research-note-meta"><span>پروفایل علمی</span><span>Elnaz Kyavar</span></div>
          <h1>دکتر الناز کیاور</h1>
          <p>پژوهشگر فیزیولوژی گیاهی و زیست‌فناوری با تمرکز بر زیست‌شناسی مبتنی بر شواهد، زیست‌فناوری سیانوباکتری‌ها، فیکوبیلی‌پروتئین‌ها، زیست‌فرآوری و تفسیر مکانیسم‌های زیستی.</p>
        </header>

        <article className="research-note-article">
          <aside aria-label="نام علمی و انگلیسی">
            <span>نام انگلیسی</span>
            <p><span dir="ltr">Dr. Elnaz Kyavar</span><br /><span dir="ltr">Elnaz Kiavar</span></p>
          </aside>
          <div className="research-note-body">
            <p><strong>الناز کیاور</strong> دارای دکتری فیزیولوژی گیاهی است و فعالیت پژوهشی او حوزه‌های فیزیولوژی سیانوباکتری‌ها، تولید و استخراج فیکوبیلی‌پروتئین‌ها، زیست‌فرآوری، زیست‌شناسی ردوکس و ارزیابی شواهد مکانیسمی را دربر می‌گیرد.</p>
            <p>بخش مهمی از فعالیت علمی دکتر کیاور بر تفکیک ارتباط آماری از رابطه علّی، ارزیابی وابستگی عملکردی، میانجی‌گری زیستی و تناسب ادعاهای مکانیسمی با قدرت شواهد متمرکز است.</p>
            <p>برای مشاهده سوابق علمی و پژوهشی، از بخش‌های <Link href="/research">پژوهش‌ها</Link>، <Link href="/publications">مقالات علمی</Link>، <Link href="/research-notes">Research Notes</Link>، <Link href="/evidence-mechanism">Evidence &amp; Mechanism</Link> و <Link href="/peer-review-editorial-service">فعالیت داوری علمی</Link> استفاده کنید.</p>
            <p className="research-note-conclusion">این صفحه، پروفایل فارسی رسمی دکتر الناز کیاور در وب‌سایت علمی <span dir="ltr">elnazkyavar.com</span> است.</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
