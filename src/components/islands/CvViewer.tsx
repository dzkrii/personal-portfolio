import { useState } from "react";
import {
  ArrowDownToLine,
  ExternalLink,
  FileText,
  Languages,
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
  Info,
  Check,
} from "lucide-react";
import { messages, type Locale } from "../../data/site";

interface CvViewerProps {
  initialLocale?: Locale;
}

export function CvViewer({ initialLocale = "en" }: CvViewerProps) {
  const [activeLocale, setActiveLocale] = useState<Locale>(initialLocale);
  const t = messages[activeLocale];

  const cvPdfs = {
    id: "/media/cv/cv-fatahul-ahmad-dzikri-id.pdf",
    en: "/media/cv/cv-fatahul-ahmad-dzikri-en.pdf",
  };

  const activePdf = cvPdfs[activeLocale];
  const activeFileName =
    activeLocale === "id"
      ? "cv-fatahul-ahmad-dzikri-id.pdf"
      : "cv-fatahul-ahmad-dzikri-en.pdf";

  const fastFacts = [
    {
      icon: Briefcase,
      label: t.cvRoleLabel,
      value:
        activeLocale === "id"
          ? "Software Developer @ Universitas Battuta"
          : "Software Developer @ Universitas Battuta",
      detail: activeLocale === "id" ? "Sep 2024 – Sekarang" : "Sep 2024 – Present",
    },
    {
      icon: GraduationCap,
      label: t.cvEducationLabel,
      value:
        activeLocale === "id"
          ? "S1 Teknik Informatika, Universitas Battuta"
          : "B.S. in Computer Science, Universitas Battuta",
      detail: activeLocale === "id" ? "2023 – Sekarang" : "2023 – Present",
    },
    {
      icon: Trophy,
      label: t.cvAwardsLabel,
      value:
        activeLocale === "id"
          ? "Juara 2 COMFTIK · Juara 3 CORISINDO · PKM-PI"
          : "2nd COMFTIK · 3rd CORISINDO · PKM-PI Grant",
      detail: activeLocale === "id" ? "Tingkat Nasional (2024–2025)" : "National Level (2024–2025)",
    },
    {
      icon: Code2,
      label: t.cvStackLabel,
      value: "React · Next.js · TypeScript · NestJS · Flutter",
      detail: "Full-Stack & Mobile Engineering",
    },
  ];

  return (
    <div className="cv-interactive-container">
      {/* 1. Fast Facts & Profile Snapshot */}
      <section className="cv-snapshot-section" aria-label={t.cvFastFactsTitle}>
        <div className="cv-snapshot-grid">
          {fastFacts.map((fact, idx) => {
            const IconComponent = fact.icon;
            return (
              <article className="cv-fact-card" key={idx}>
                <div className="cv-fact-card__icon" aria-hidden="true">
                  <IconComponent size={20} />
                </div>
                <div className="cv-fact-card__body">
                  <span className="cv-fact-card__label">{fact.label}</span>
                  <strong className="cv-fact-card__value">{fact.value}</strong>
                  <span className="cv-fact-card__detail">{fact.detail}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 2. Version Selector & Action Toolbar */}
      <div className="cv-controls-card">
        {/* Language Tabs */}
        <div className="cv-version-switcher" role="group" aria-label={t.switchCvVersion}>
          <span className="cv-version-switcher__label">
            <Languages size={16} aria-hidden="true" />
            <span>{t.switchCvVersion}:</span>
          </span>
          <div className="cv-version-tabs">
            <button
              type="button"
              className={`cv-version-btn ${activeLocale === "id" ? "cv-version-btn--active" : ""}`}
              onClick={() => setActiveLocale("id")}
              aria-pressed={activeLocale === "id"}
            >
              <span className="cv-flag" aria-hidden="true">🇮🇩</span>
              <span>Bahasa Indonesia</span>
              {activeLocale === "id" && <Check size={14} className="cv-version-check" aria-hidden="true" />}
            </button>
            <button
              type="button"
              className={`cv-version-btn ${activeLocale === "en" ? "cv-version-btn--active" : ""}`}
              onClick={() => setActiveLocale("en")}
              aria-pressed={activeLocale === "en"}
            >
              <span className="cv-flag" aria-hidden="true">🇬🇧</span>
              <span>English</span>
              {activeLocale === "en" && <Check size={14} className="cv-version-check" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="cv-actions-bar">
          <div className="cv-file-meta">
            <FileText size={18} className="cv-file-meta__icon" aria-hidden="true" />
            <div className="cv-file-meta__texts">
              <span className="cv-file-meta__name">{activeFileName}</span>
              <span className="cv-file-meta__badge">
                {activeLocale === "id" ? "PDF · 2 Halaman" : "PDF · 2 Pages"}
              </span>
            </div>
          </div>

          <div className="cv-action-buttons">
            <a
              href={activePdf}
              download={activeFileName}
              className="brutal-button brutal-button--primary cv-download-btn"
            >
              <span>{t.downloadCv}</span>
              <ArrowDownToLine size={18} aria-hidden="true" />
            </a>

            <a
              href={activePdf}
              target="_blank"
              rel="noreferrer noopener"
              className="brutal-button brutal-button--secondary cv-open-btn"
              title={t.openPdfInNewTab}
            >
              <span>{t.openPdfInNewTab}</span>
              <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Mobile Advisory Banner */}
      <div className="cv-mobile-advisory">
        <Info size={18} className="cv-mobile-advisory__icon" aria-hidden="true" />
        <p className="cv-mobile-advisory__text">{t.mobileCvNotice}</p>
        <a
          href={activePdf}
          target="_blank"
          rel="noreferrer noopener"
          className="cv-mobile-advisory__link"
        >
          <span>{activeLocale === "id" ? "Buka Langsung PDF" : "Open PDF Directly"}</span>
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>

      {/* 4. Interactive Embedded PDF Frame */}
      <section className="cv-frame-container" aria-label={t.cvDocTitle}>
        <iframe
          key={activePdf}
          className="cv-viewer__frame"
          src={`${activePdf}#toolbar=0&navpanes=0&view=FitH`}
          title={`Fatahul Ahmad Dzikri CV Preview (${activeLocale.toUpperCase()})`}
        />
      </section>
    </div>
  );
}

export default CvViewer;
