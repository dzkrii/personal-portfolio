import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Lock,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "../components/Link";
import { ProjectCard } from "../components/ProjectCard";
import { BrutalButton } from "../components/ui/BrutalButton";
import {
  messages,
  projectCategories,
  projects,
  type Locale,
  type ProjectCategoryKey,
} from "../data/site";
import { pathFor } from "../router";
import { navLabel } from "./PagePrimitives";
import { NotFoundPage } from "./NotFoundPage";

/* ==========================================================================
   Projects Listing Page Component
   ========================================================================== */

export function ProjectsPage({ locale }: { locale: Locale }) {
  const title = navLabel("projects", locale);
  const t = messages[locale];
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategoryKey>("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);

  const getCategoryCount = (key: ProjectCategoryKey) => {
    if (key === "all") return projects.length;
    return projects.filter((p) => p.type === key).length;
  };

  return (
    <div className="projects-page">
      {/* Header */}
      <header className="projects-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{title}</h1>
        </div>
      </header>

      {/* Subtitle / Intro statement */}
      <p className="projects-intro-text">
        {locale === "id"
          ? "Koleksi studi kasus sistem informasi, platform web, dan aplikasi digital yang dibangun dengan fokus pada arsitektur bersih, performa tinggi, dan pengalaman pengguna yang berkarakter."
          : "A curated collection of digital systems, web platforms, and applications built with clean architecture, high performance, and distinctive UX."}
      </p>

      {/* Filter Tabs Bar */}
      <nav
        className="project-filter-bar"
        aria-label={t.filterProjects}
      >
        <ul className="project-filter-list" role="tablist">
          {projectCategories.map((cat) => {
            const count = getCategoryCount(cat.key);
            const isSelected = selectedFilter === cat.key;
            return (
              <li key={cat.key} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`project-filter-btn ${
                    isSelected ? "project-filter-btn--active" : ""
                  }`}
                  onClick={() => setSelectedFilter(cat.key)}
                >
                  <span className="project-filter-btn__label">
                    {cat.label[locale]}
                  </span>
                  <span className="project-filter-btn__count">{count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Projects List or Clean Empty State */}
      {filteredProjects.length === 0 ? (
        <section className="project-empty-panel" aria-live="polite">
          <div className="project-empty-box">
            <div className="empty-icon-circle">
              <Sparkles size={28} />
            </div>
            <h3>{t.emptyProjectsTitle}</h3>
            <p>{t.emptyProjectsDesc}</p>
            <button
              type="button"
              className="project-filter-btn project-filter-btn--active"
              onClick={() => setSelectedFilter("all")}
            >
              {t.backToAll}
            </button>
          </div>
        </section>
      ) : (
        <section
          className="project-list-minimal"
          aria-label={`${title} - ${selectedFilter}`}
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              locale={locale}
              project={project}
              index={idx}
            />
          ))}
        </section>
      )}
    </div>
  );
}

/* ==========================================================================
   Project Detail Page Component (Visual Showcase & Feature Spotlights)
   ========================================================================== */

export function ProjectPage({
  locale,
  slug,
  exists,
}: {
  locale: Locale;
  slug: string;
  exists: boolean;
}) {
  const isId = locale === "id";
  const project = projects.find((item) => item.slug === slug);
  if (!exists || !project) return <NotFoundPage locale={locale} />;

  const t = messages[locale];
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const screenshots = project.screenshots ?? [];
  const currentScreenshot = screenshots[activeScreenIndex] ?? screenshots[0];
  const activeLightboxScreen = lightboxIndex !== null ? screenshots[lightboxIndex] ?? null : null;

  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 45) {
      setActiveScreenIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
    } else if (diff < -45) {
      setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
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

  return (
    <div className="project-detail-page">
      {/* 1. Top Navigation Bar */}
      <nav className="project-detail-nav" aria-label="Project Navigation">
        <Link className="project-back-btn" href={pathFor("projects")}>
          <ArrowLeft size={16} aria-hidden="true" />
          <span>{t.backToProjects}</span>
        </Link>
        <div className="project-detail-nav-right">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-live-btn"
              title={isId ? `Kunjungi ${project.liveUrl}` : `Launch ${project.liveUrl}`}
            >
              <ExternalLink size={14} aria-hidden="true" />
              <span>{t.visitLive}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
          <div className="project-detail-status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>{project.status[locale]}</span>
          </div>
        </div>
      </nav>

      {/* 2. Hero Header */}
      <header className="project-detail-hero">
        <div className="project-detail-tagline-wrap">
          <span className="project-detail-eyebrow">
            {project.category[locale]} · {project.client[locale]}
          </span>
        </div>
        <h1 className="project-detail-main-title">
          {project.title[locale]}
        </h1>
        <p className="project-detail-subtitle">
          {project.subtitle[locale]}
        </p>

        {/* Impact Metrics Ribbon */}
        <div className="project-metrics-ribbon" aria-label={t.keyMetrics}>
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="metric-ribbon-item">
              <strong className="metric-ribbon-value">{metric.value}</strong>
              <span className="metric-ribbon-label">{metric.label[locale]}</span>
            </div>
          ))}
        </div>
      </header>

      {/* 3. Interactive Multi-Screen Showcase Stage */}
      {screenshots.length > 0 && currentScreenshot ? (
        <section className="project-showcase-stage" aria-label={t.systemShowcase}>
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
                  {(project.liveUrl
                    ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                    : `${project.slug}.app`)}
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
                aria-label={`${currentScreenshot.title[locale]} - ${isId ? "Klik untuk memperbesar gambar" : "Click to zoom image"}`}
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
                    <span>{isId ? "Perbesar Tangkapan Layar (HD)" : "Enlarge Fullscreen (HD)"}</span>
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
                  setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : screenshots.length - 1));
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
                  setActiveScreenIndex((prev) => (prev < screenshots.length - 1 ? prev + 1 : 0));
                }}
                aria-label={isId ? "Layar Berikutnya" : "Next Screen"}
                title={isId ? "Layar Berikutnya" : "Next Screen"}
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="browser-mockup-footer">
              <div className="showcase-caption-text">
                <span className="caption-tag">0{activeScreenIndex + 1} · {currentScreenshot.category[locale]}</span>
                <div>
                  <strong className="caption-title">{currentScreenshot.title[locale]}</strong>
                  <p className="caption-desc">{currentScreenshot.caption[locale]}</p>
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
                  className={`showcase-thumbnail-card ${isActive ? "showcase-thumbnail-card--active" : ""}`}
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
        </section>
      ) : null}

      {/* 4. Technology Foundation Card */}
      <section className="project-tech-card" aria-label={t.techStackBrief}>
        <div className="tech-card-left">
          <span className="detail-section-badge">TECH STACK // ARSITEKTUR</span>
          <h3 className="tech-card-title">{t.techStackBrief}</h3>
          <p className="tech-card-desc">{t.techStackBriefDesc}</p>
        </div>

        <div className="tech-card-right">
          <div className="tech-card-role">
            <GraduationCap size={16} aria-hidden="true" />
            <span>{project.role[locale]}</span>
          </div>
          <div className="tech-card-pills">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Banner */}
      <section className="project-cta-banner">
        <div className="project-cta-copy">
          <h2>{t.ctaProjectTitle}</h2>
          <p>{t.ctaProjectDesc}</p>
        </div>
        <div className="project-cta-actions">
          {project.liveUrl ? (
            <BrutalButton href={project.liveUrl} target="_blank" rel="noreferrer">
              {isId
                ? (project.acronym ? `Kunjungi ${project.acronym}` : "Kunjungi Website Live")
                : (project.acronym ? `Launch ${project.acronym} Live` : "Launch Website Live")}
              <ArrowUpRight aria-hidden="true" />
            </BrutalButton>
          ) : null}
          <BrutalButton href={pathFor("contact")} tone={project.liveUrl ? "secondary" : "primary"}>
            {t.contactMe}
            <ArrowUpRight aria-hidden="true" />
          </BrutalButton>
          <BrutalButton href={pathFor("projects")} tone="secondary">
            {t.backToAll}
          </BrutalButton>
        </div>
      </section>

      {/* 8. Fullscreen HD Screenshot Lightbox Modal */}
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
                  <span className="hide-mobile">{locale === "id" ? "Buka Tab Baru" : "Open in Tab"}</span>
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
    </div>
  );
}

