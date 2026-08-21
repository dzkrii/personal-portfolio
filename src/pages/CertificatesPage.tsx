import { useState, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import {
  certificates,
  certificateCategories,
  messages,
  type Certificate,
  type CertificateCategory,
  type Locale,
} from "../data/site";
import { EmptyState, navLabel } from "./PagePrimitives";

export function CertificatesPage({ locale }: { locale: Locale }) {
  const title = navLabel("certificates", locale);
  const t = messages[locale];

  const [selectedCategory, setSelectedCategory] = useState<
    "all" | CertificateCategory
  >("all");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const filteredCertificates =
    selectedCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  const activeCertificate: Certificate | null =
    activeModalIndex !== null ? filteredCertificates[activeModalIndex] ?? null : null;

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
  };

  const handleCloseModal = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev !== null
        ? (prev - 1 + filteredCertificates.length) % filteredCertificates.length
        : null
    );
  }, [activeModalIndex, filteredCertificates.length]);

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev !== null ? (prev + 1) % filteredCertificates.length : null
    );
  }, [activeModalIndex, filteredCertificates.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    // Lock background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModalIndex, handleCloseModal, handlePrev, handleNext]);

  // Category counts
  const getCategoryCount = (key: "all" | CertificateCategory) => {
    if (key === "all") return certificates.length;
    return certificates.filter((c) => c.category === key).length;
  };

  const getCategoryLabel = (category: CertificateCategory) => {
    const found = certificateCategories.find((c) => c.key === category);
    return found ? found.label[locale] : category;
  };

  return (
    <div className="certificates-page">
      <header className="certificates-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{title}</h1>
        </div>
      </header>

      {/* Category Filter Tabs */}
      <nav
        className="certificate-filter-bar"
        aria-label={locale === "id" ? "Filter Kategori Sertifikat" : "Certificate Category Filter"}
      >
        <ul className="certificate-filter-list" role="tablist">
          {certificateCategories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isSelected = selectedCategory === cat.key;
            return (
              <li key={cat.key} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`certificate-filter-btn ${
                    isSelected ? "certificate-filter-btn--active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat.key);
                    setActiveModalIndex(null);
                  }}
                >
                  <span className="certificate-filter-btn__label">
                    {cat.label[locale]}
                  </span>
                  <span className="certificate-filter-btn__count">
                    {count}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Certificate Gallery Grid */}
      {filteredCertificates.length === 0 ? (
        <EmptyState type="certificates" />
      ) : (
        <section
          className="certificate-grid"
          aria-label={`${title} - ${selectedCategory}`}
        >
          {filteredCertificates.map((certificate, index) => (
            <article
              className="certificate-card"
              key={certificate.id}
            >
              {/* Visual Thumbnail */}
              <div
                className="certificate-card__visual"
                tabIndex={0}
                role="button"
                aria-label={`${t.viewCertificate}: ${certificate.title[locale]}`}
                onClick={() => handleOpenModal(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenModal(index);
                  }
                }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title[locale]}
                  loading="lazy"
                />
                <div className="certificate-card__visual-overlay">
                  <span className="certificate-card__zoom-indicator">
                    <Maximize2 size={20} aria-hidden="true" />
                    <span>{t.viewCertificate}</span>
                  </span>
                </div>
              </div>

              {/* Card Content & Details */}
              <div className="certificate-card__content">
                <div className="certificate-card__header-row">
                  <span className="certificate-badge">
                    {getCategoryLabel(certificate.category)}
                  </span>
                  <time className="certificate-card__year">
                    {certificate.issuedAt[locale]}
                  </time>
                </div>

                <h2 className="certificate-card__title">
                  {certificate.title[locale]}
                </h2>

                <p className="certificate-card__issuer">
                  <span className="certificate-card__issuer-label">
                    {locale === "id" ? "Penyelenggara: " : "Issuer: "}
                  </span>
                  <strong>{certificate.issuer}</strong>
                </p>

                <div className="certificate-card__actions">
                  <button
                    type="button"
                    className="certificate-action-btn certificate-action-btn--primary"
                    onClick={() => handleOpenModal(index)}
                  >
                    <Maximize2 size={16} aria-hidden="true" />
                    <span>{t.viewCertificate}</span>
                  </button>

                  {certificate.credentialUrl ? (
                    <a
                      className="certificate-action-btn certificate-action-btn--secondary"
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{t.viewCredential}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Interactive Lightbox Modal */}
      {activeCertificate && activeModalIndex !== null ? (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeCertificate.title[locale]}
        >
          {/* Backdrop Click */}
          <div
            className="certificate-lightbox__backdrop"
            onClick={handleCloseModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="certificate-lightbox__dialog">
            {/* Top Toolbar */}
            <div className="certificate-lightbox__toolbar">
              <div className="certificate-lightbox__meta">
                <span className="certificate-badge">
                  {getCategoryLabel(activeCertificate.category)}
                </span>
                <span className="certificate-lightbox__counter">
                  {activeModalIndex + 1} / {filteredCertificates.length}
                </span>
              </div>

              <div className="certificate-lightbox__controls">
                <a
                  href={activeCertificate.image}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-lightbox__btn"
                  title={t.openInNewTab}
                  aria-label={t.openInNewTab}
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  <span className="hide-mobile">{t.openInNewTab}</span>
                </a>
                <button
                  type="button"
                  className="certificate-lightbox__btn certificate-lightbox__btn--close"
                  onClick={handleCloseModal}
                  title={t.closeLightbox}
                  aria-label={t.closeLightbox}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Main Stage & Image */}
            <div className="certificate-lightbox__stage">
              {filteredCertificates.length > 1 ? (
                <button
                  type="button"
                  className="certificate-lightbox__nav-btn certificate-lightbox__nav-btn--prev"
                  onClick={handlePrev}
                  aria-label={t.prevCertificate}
                >
                  <ChevronLeft size={28} aria-hidden="true" />
                </button>
              ) : null}

              <div className="certificate-lightbox__image-wrapper">
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title[locale]}
                  className="certificate-lightbox__image"
                />
              </div>

              {filteredCertificates.length > 1 ? (
                <button
                  type="button"
                  className="certificate-lightbox__nav-btn certificate-lightbox__nav-btn--next"
                  onClick={handleNext}
                  aria-label={t.nextCertificate}
                >
                  <ChevronRight size={28} aria-hidden="true" />
                </button>
              ) : null}
            </div>

            {/* Bottom Caption */}
            <div className="certificate-lightbox__caption">
              <div>
                <h3 className="certificate-lightbox__title">
                  {activeCertificate.title[locale]}
                </h3>
                <p className="certificate-lightbox__issuer-row">
                  <span>{activeCertificate.issuer}</span>
                  <span className="dot-divider">·</span>
                  <span>{activeCertificate.issuedAt[locale]}</span>
                </p>
                {activeCertificate.description ? (
                  <p className="certificate-lightbox__desc">
                    {activeCertificate.description[locale]}
                  </p>
                ) : null}
              </div>

              {activeCertificate.credentialUrl ? (
                <a
                  className="certificate-action-btn certificate-action-btn--secondary"
                  href={activeCertificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{t.viewCredential}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
