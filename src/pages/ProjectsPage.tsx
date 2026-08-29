import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  ExternalLink,
  GraduationCap,
  Layers,
  Sparkles,
  Users,
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
   Project Detail Page Component (Case Study)
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
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number | null>(null);

  const activeScreenshot =
    activeScreenshotIndex !== null && project.screenshots
      ? project.screenshots[activeScreenshotIndex] ?? null
      : null;

  useEffect(() => {
    if (activeScreenshotIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveScreenshotIndex(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeScreenshotIndex]);

  return (
    <div className="project-detail-page">
      {/* Top Back Navigation Strip */}
      <nav className="project-detail-nav" aria-label="Project Breadcrumb">
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
              title={isId ? `Kunjungi ${project.liveUrl}` : `Visit ${project.liveUrl}`}
            >
              <ExternalLink size={14} aria-hidden="true" />
              <span>{isId ? "Kunjungi Web Live" : "Visit Live Platform"}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
          <div className="project-detail-status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>{project.status[locale]}</span>
          </div>
        </div>
      </nav>

      {/* Hero Header Area */}
      <header className="project-detail-hero">
        <div className="project-detail-tagline-wrap">
          <span className="project-detail-eyebrow">
            {project.type.toUpperCase()} ARCHITECTURE · {project.client[locale]}
          </span>
        </div>
        <h1 className="project-detail-main-title">
          {project.title[locale]}
        </h1>
        <p className="project-detail-subtitle">
          {project.subtitle[locale]}
        </p>
      </header>

      {/* Executive Bento Spec Sheet */}
      <section className="project-spec-bento" aria-label={t.projectDetails}>
        <div className="spec-card">
          <span className="spec-lbl">
            <Users size={15} />
            <span>{isId ? "Peran & Lingkup Kerja" : "Role & Scope"}</span>
          </span>
          <strong className="spec-val">{project.role[locale]}</strong>
          <p className="spec-desc">
            {isId
              ? "UI/UX Design Figma, Frontend React & TanStack Router, Backend NestJS, Database PostgreSQL, & VPS Deployment."
              : "UI/UX Design Figma, Frontend React & TanStack Router, Backend NestJS, Database PostgreSQL, & VPS Deployment."}
          </p>
        </div>

        <div className="spec-card">
          <span className="spec-lbl">
            <GraduationCap size={15} />
            <span>{isId ? "Klien / Institusi" : "Client / Institution"}</span>
          </span>
          <strong className="spec-val">{project.client[locale]}</strong>
          <p className="spec-desc">
            {isId
              ? "Implementasi sistem skala universitas untuk pengelolaan civitas akademika."
              : "Enterprise university-scale system deployment for campus administration."}
          </p>
        </div>

        <div className="spec-card">
          <span className="spec-lbl">
            <Clock size={15} />
            <span>{isId ? "Periode & Status" : "Timeline & Status"}</span>
          </span>
          <strong className="spec-val">{project.period[locale]}</strong>
          <p className="spec-desc">
            {isId
              ? "Aktif digunakan secara harian dalam operasional perkuliahan."
              : "Actively utilized in daily campus academic operations."}
          </p>
        </div>

        <div className="spec-card">
          <span className="spec-lbl">
            <Layers size={15} />
            <span>{isId ? "Teknologi Kunci" : "Core Tech Stack"}</span>
          </span>
          <div className="spec-tech-pills">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Screenshot Gallery & Showcase */}
      {project.screenshots && project.screenshots.length > 0 ? (
        <>
          <div className="detail-section-title-wrap">
            <span className="detail-section-badge">01 // VISUAL SHOWCASE & SCREENSHOTS</span>
            <h2>{isId ? "Tangkapan Layar & Desain Antarmuka" : "System Screenshots & Interface"}</h2>
            <p className="detail-section-desc">
              {isId
                ? "Tangkapan layar antarmuka produksi Sistem Informasi Akademik Universitas Battuta."
                : "Production interface screenshots of Universitas Battuta Academic Information System."}
            </p>
          </div>

          <section className="project-gallery-grid" aria-label="Project Screenshots Gallery">
            {project.screenshots.map((item, idx) => (
              <article key={item.id} className="project-gallery-card">
                <div
                  className="project-gallery-card__visual"
                  tabIndex={0}
                  role="button"
                  aria-label={`${item.title[locale]} - ${isId ? "Perbesar Gambar" : "Enlarge Image"}`}
                  onClick={() => setActiveScreenshotIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveScreenshotIndex(idx);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title[locale]}
                    loading="lazy"
                  />
                  <div className="project-gallery-card__overlay">
                    <span className="gallery-zoom-badge">
                      <span>{isId ? "Perbesar Screenshot" : "Zoom Screenshot"}</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </div>
                <div className="project-gallery-card__content">
                  <div className="project-gallery-card__meta">
                    <span className="gallery-cat-badge">{item.category[locale]}</span>
                    <span className="gallery-index-tag">0{idx + 1}</span>
                  </div>
                  <h3 className="project-gallery-card__title">{item.title[locale]}</h3>
                  <p className="project-gallery-card__caption">{item.caption[locale]}</p>
                </div>
              </article>
            ))}
          </section>
        </>
      ) : null}

      {/* Key Measurable Outcomes & Metrics */}
      <div className="detail-section-title-wrap">
        <span className="detail-section-badge">02 // IMPACT & METRICS</span>
        <h2>{t.keyMetrics}</h2>
        <p className="detail-section-desc">
          {isId
            ? "Hasil nyata dan efisiensi operasional yang dicapai setelah implementasi sistem."
            : "Tangible outcomes and operational efficiency achieved upon system rollout."}
        </p>
      </div>

      <section className="project-metrics-grid" aria-label={t.keyMetrics}>
        {project.metrics.map((metric, idx) => (
          <div key={idx} className="metric-box">
            <div className="metric-box__header">
              <strong className="metric-box__value">{metric.value}</strong>
              <span className="metric-box__index">0{idx + 1}</span>
            </div>
            <h3 className="metric-box__label">{metric.label[locale]}</h3>
            <p className="metric-box__desc">{metric.description[locale]}</p>
          </div>
        ))}
      </section>

      {/* Problem & Context Section */}
      <section className="project-narrative-section">
        <div className="narrative-block">
          <div className="narrative-heading">
            <span className="detail-section-badge">03 // THE CHALLENGE</span>
            <h2>{t.problemTitle}</h2>
          </div>
          <div className="narrative-content">
            <p className="narrative-lead">{project.context[locale]}</p>
          </div>
        </div>

        <div className="narrative-block">
          <div className="narrative-heading">
            <span className="detail-section-badge">04 // ENGINEERING SOLUTION</span>
            <h2>{t.solutionTitle}</h2>
          </div>
          <div className="narrative-content">
            <p className="narrative-lead">{project.solution[locale]}</p>
            <div className="contribution-callout">
              <strong>{isId ? "Peran & Kontribusi Arsitektur:" : "Architectural Contribution:"}</strong>
              <p>{project.contribution[locale]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Breakdown */}
      <div className="detail-section-title-wrap">
        <span className="detail-section-badge">05 // CORE CAPABILITIES</span>
        <h2>{t.coreFeaturesTitle}</h2>
      </div>

      <section className="project-features-grid" aria-label={t.coreFeaturesTitle}>
        {project.features.map((feature, idx) => (
          <article key={feature.id} className="feature-card">
            <div className="feature-card__number">
              <span>0{idx + 1}</span>
            </div>
            <h3 className="feature-card__title">{feature.title[locale]}</h3>
            <p className="feature-card__desc">{feature.desc[locale]}</p>
          </article>
        ))}
      </section>

      {/* Architecture Highlights */}
      <div className="detail-section-title-wrap">
        <span className="detail-section-badge">06 // SYSTEM ARCHITECTURE</span>
        <h2>{isId ? "Rekayasa Arsitektur Sistem" : "System Architecture Highlights"}</h2>
      </div>

      <section className="project-architecture-grid">
        {project.architectureHighlights.map((arch, idx) => (
          <div key={idx} className="architecture-card">
            <div className="architecture-card__top">
              <span className="arch-layer">{arch.layer}</span>
              <code className="arch-tech">{arch.tech}</code>
            </div>
            <p className="arch-detail">{arch.detail[locale]}</p>
          </div>
        ))}
      </section>

      {/* Bottom CTA & Fast Navigation */}
      <section className="project-cta-banner">
        <div className="project-cta-copy">
          <h2>{t.ctaProjectTitle}</h2>
          <p>{t.ctaProjectDesc}</p>
        </div>
        <div className="project-cta-actions">
          {project.liveUrl ? (
            <BrutalButton href={project.liveUrl} target="_blank" rel="noreferrer">
              {isId ? "Kunjungi SIAKAD Battuta" : "Launch Live Platform"}
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

      {/* Fullscreen Screenshot Lightbox Modal */}
      {activeScreenshot && activeScreenshotIndex !== null ? (
        <div
          className="certificate-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeScreenshot.title[locale]}
        >
          <div
            className="certificate-lightbox__backdrop"
            onClick={() => setActiveScreenshotIndex(null)}
            aria-hidden="true"
          />
          <div className="certificate-lightbox__dialog">
            <div className="certificate-lightbox__toolbar">
              <div className="certificate-lightbox__meta">
                <span className="certificate-badge">
                  {activeScreenshot.category[locale]}
                </span>
                <span className="certificate-lightbox__counter">
                  {activeScreenshotIndex + 1} / {project.screenshots?.length ?? 1}
                </span>
              </div>
              <div className="certificate-lightbox__controls">
                <a
                  href={activeScreenshot.image}
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
                  onClick={() => setActiveScreenshotIndex(null)}
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
                  src={activeScreenshot.image}
                  alt={activeScreenshot.title[locale]}
                  className="certificate-lightbox__image"
                />
              </div>
            </div>

            <div className="certificate-lightbox__caption">
              <div>
                <h3 className="certificate-lightbox__title">
                  {activeScreenshot.title[locale]}
                </h3>
                <p className="certificate-lightbox__desc">
                  {activeScreenshot.caption[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
