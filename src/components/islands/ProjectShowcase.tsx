import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  Sparkles,
  X,
} from "lucide-react";
import type { Locale, Project } from "../../data/site";

export function ProjectShowcase({
  project,
  locale = "en",
}: {
  project: Project;
  locale?: Locale;
}) {
  const isId = locale === "id";
  const screenshots = project.screenshots ?? [];
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const currentScreenshot = screenshots[activeScreenIndex] ?? screenshots[0];
  const activeLightboxScreen =
    lightboxIndex !== null ? screenshots[lightboxIndex] ?? null : null;

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      setActiveScreenIndex((prev) =>
        prev < screenshots.length - 1 ? prev + 1 : 0,
      );
    } else if (diff < -45) {
      setActiveScreenIndex((prev) =>
        prev > 0 ? prev - 1 : screenshots.length - 1,
      );
    }
    setTouchStart(null);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  if (!screenshots.length || !currentScreenshot) return null;

  return (
    <section className="project-showcase-stage" aria-label="System Showcase">
      {/* Active Screen Browser Window */}
      <div className="browser-mockup-frame">
        <div className="browser-mockup-topbar">
          <div className="browser-mockup-dots" aria-hidden="true">
            <span className="browser-dot browser-dot--red" />
            <span className="browser-dot browser-dot--yellow" />
            <span className="browser-dot browser-dot--green" />
          </div>
          <div className="browser-mockup-address">
            <Lock size={12} className="address-lock-icon" aria-hidden="true" />
            <span className="address-url">
              {project.liveUrl
                ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : `${project.slug}.app`}
              /{currentScreenshot.id}
            </span>
          </div>
          <div className="browser-mockup-counter">
            <span className="live-badge-dot" aria-hidden="true" />
            <span className="showcase-counter-text">
              0{activeScreenIndex + 1} / 0{screenshots.length}
            </span>
          </div>
        </div>

        <div className="browser-mockup-screen-wrap">
          <div
            className="browser-mockup-screen"
            tabIndex={0}
            role="button"
            aria-label={`${currentScreenshot.title[locale]} - ${
              isId ? "Klik untuk memperbesar gambar" : "Click to zoom image"
            }`}
            onClick={() => setLightboxIndex(activeScreenIndex)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxIndex(activeScreenIndex);
              }
            }}
          >
            <img
              key={currentScreenshot.image}
              src={currentScreenshot.image}
              alt={currentScreenshot.title[locale]}
              className="browser-mockup-img"
              loading="eager"
            />
            <div className="browser-mockup-hover-overlay">
              <div className="showcase-zoom-pill">
                <Sparkles size={16} aria-hidden="true" />
                <span>
                  {isId
                    ? "Perbesar Tangkapan Layar (HD)"
                    : "Enlarge Fullscreen (HD)"}
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Prev / Next Navigation Arrows */}
          <button
            type="button"
            className="showcase-nav-arrow showcase-nav-arrow--prev"
            onClick={(e) => {
              e.stopPropagation();
              setActiveScreenIndex((prev) =>
                prev > 0 ? prev - 1 : screenshots.length - 1,
              );
            }}
            aria-label={isId ? "Layar Sebelumnya" : "Previous Screen"}
            title={isId ? "Layar Sebelumnya" : "Previous Screen"}
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="showcase-nav-arrow showcase-nav-arrow--next"
            onClick={(e) => {
              e.stopPropagation();
              setActiveScreenIndex((prev) =>
                prev < screenshots.length - 1 ? prev + 1 : 0,
              );
            }}
            aria-label={isId ? "Layar Berikutnya" : "Next Screen"}
            title={isId ? "Layar Berikutnya" : "Next Screen"}
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="browser-mockup-footer">
          <div className="showcase-caption-text">
            <span className="caption-tag">
              0{activeScreenIndex + 1} · {currentScreenshot.category[locale]}
            </span>
            <div>
              <strong className="caption-title">
                {currentScreenshot.title[locale]}
              </strong>
              <p className="caption-desc">
                {currentScreenshot.caption[locale]}
              </p>
            </div>
          </div>
          <div className="showcase-footer-actions">
            <button
              type="button"
              className="showcase-btn-zoom"
              onClick={() => setLightboxIndex(activeScreenIndex)}
            >
              <span>{isId ? "Zoom HD" : "Zoom HD"}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </button>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="showcase-direct-link"
              >
                <span>{isId ? "Buka Web Live" : "Open Live"}</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>

      {/* Visual Thumbnails Carousel Strip */}
      <div className="showcase-thumbnails-strip" aria-label="Screenshots List">
        {screenshots.map((s, idx) => {
          const isActive = activeScreenIndex === idx;
          return (
            <button
              key={s.id}
              type="button"
              className={`showcase-thumbnail-card ${
                isActive ? "showcase-thumbnail-card--active" : ""
              }`}
              onClick={() => setActiveScreenIndex(idx)}
              aria-selected={isActive}
              aria-label={`0${idx + 1}: ${s.title[locale]}`}
            >
              <div className="thumbnail-img-box">
                <img src={s.image} alt={s.title[locale]} loading="lazy" />
                <span className="thumbnail-index-pill">0{idx + 1}</span>
              </div>
              <div className="thumbnail-card-info">
                <span className="thumbnail-card-title">{s.title[locale]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Fullscreen HD Screenshot Lightbox Modal */}
      {activeLightboxScreen && lightboxIndex !== null ? (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeLightboxScreen.title[locale]}
        >
          <div
            className="certificate-lightbox__backdrop"
            onClick={() => setLightboxIndex(null)}
            aria-hidden="true"
          />
          <div className="certificate-lightbox__dialog">
            <div className="certificate-lightbox__toolbar">
              <div className="certificate-lightbox__meta">
                <span className="certificate-badge">
                  {activeLightboxScreen.category[locale]}
                </span>
                <span className="certificate-lightbox__counter">
                  {lightboxIndex + 1} / {screenshots.length}
                </span>
              </div>
              <div className="certificate-lightbox__controls">
                <a
                  href={activeLightboxScreen.image}
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-lightbox__btn"
                  title="Open in new tab"
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  <span className="hide-mobile">
                    {locale === "id" ? "Buka Tab Baru" : "Open in Tab"}
                  </span>
                </a>
                <button
                  type="button"
                  className="certificate-lightbox__btn certificate-lightbox__btn--close"
                  onClick={() => setLightboxIndex(null)}
                  title="Close"
                  aria-label="Close modal"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="certificate-lightbox__stage">
              <div className="certificate-lightbox__image-wrapper">
                <img
                  src={activeLightboxScreen.image}
                  alt={activeLightboxScreen.title[locale]}
                  className="certificate-lightbox__image"
                />
              </div>
            </div>

            <div className="certificate-lightbox__caption">
              <div>
                <h3 className="certificate-lightbox__title">
                  {activeLightboxScreen.title[locale]}
                </h3>
                <p className="certificate-lightbox__desc">
                  {activeLightboxScreen.caption[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
export default ProjectShowcase;

