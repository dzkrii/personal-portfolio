import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import {
  messages,
  projectCategories,
  projects,
  type Locale,
  type ProjectCategoryKey,
  type Project,
} from "../../data/site";

function ProjectCard({
  locale,
  project,
  index = 0,
}: {
  locale: Locale;
  project: Project;
  index?: number;
}) {
  const t = messages[locale];
  const projectHref =
    locale === "id"
      ? `/id/projects/${project.slug}`
      : `/projects/${project.slug}`;
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <a
      className="project-card-minimal"
      href={projectHref}
      aria-label={`${project.title[locale]} - ${t.viewCaseStudy}`}
    >
      {project.image ? (
        <div className="project-card-minimal__visual-wrap">
          <div className="project-card-minimal__window-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="window-mini-url">
              {project.liveUrl
                ? project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
                : `${project.slug}.app`}
            </span>
          </div>
          <div className="project-card-minimal__img-container">
            <img
              src={project.image}
              alt={project.title[locale]}
              className="project-card-minimal__img"
              loading="lazy"
            />
            <div className="project-card-minimal__img-overlay">
              <span className="project-card-minimal__view-hint">
                <span>{t.viewCaseStudy}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      ) : null}

      <div className="project-card-minimal__topbar">
        <div className="project-card-minimal__tags">
          <span className="project-card-minimal__index">
            {formattedIndex} // {project.type.toUpperCase()}
          </span>
        </div>
      </div>

      <div className="project-card-minimal__body">
        <h2 className="project-card-minimal__title">
          <span>{project.title[locale]}</span>
          <ArrowUpRight
            className="project-card-minimal__title-icon"
            size={20}
            aria-hidden="true"
          />
        </h2>

        <div className="project-card-minimal__tech-row">
          <ul className="project-card-minimal__tech-list" aria-label="Tech Stack">
            {project.techStack.slice(0, 5).map((tech) => (
              <li key={tech} className="tech-pill">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="project-card-minimal__footer">
        <span className="project-card-minimal__action-btn">
          <span>{t.viewCaseStudy}</span>
          <span className="btn-arrow-circle" aria-hidden="true">
            <ArrowUpRight size={14} />
          </span>
        </span>
      </div>
    </a>
  );
}

export function ProjectsExplorer({ locale = "en" }: { locale?: Locale }) {
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
    <>
      {/* Filter Tabs Bar */}
      <nav className="project-filter-bar" aria-label={t.filterProjects}>
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
          aria-label={`Projects - ${selectedFilter}`}
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
    </>
  );
}

export default ProjectsExplorer;

