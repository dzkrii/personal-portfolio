import { ArrowUpRight } from "lucide-react";
import { messages, type Locale, type Project } from "../data/site";
import { navigate, pathFor } from "../router";

export function ProjectCard({
  locale,
  project,
  index = 0,
}: {
  locale: Locale;
  project: Project;
  index?: number;
}) {
  const t = messages[locale];
  const projectHref = pathFor("projects", project.slug);
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article
      className="project-card-minimal"
      tabIndex={0}
      role="link"
      aria-label={`${project.title[locale]} - ${t.viewCaseStudy}`}
      onClick={() => navigate(projectHref)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(projectHref);
        }
      }}
    >
      {/* Visual Screenshot Thumbnail */}
      {project.image ? (
        <div className="project-card-minimal__visual-wrap">
          <div className="project-card-minimal__window-bar">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
            <span className="window-mini-url">siakad.battuta.ac.id</span>
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

      {/* Meta Bar */}
      <div className="project-card-minimal__topbar">
        <div className="project-card-minimal__tags">
          <span className="project-card-minimal__index">
            {formattedIndex} // {project.type.toUpperCase()}
          </span>
          <span className="project-card-minimal__category">
            {project.category[locale]}
          </span>
        </div>
        <div className="project-card-minimal__status">
          <span className="status-dot" aria-hidden="true" />
          <span>{project.status[locale]}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="project-card-minimal__body">
        <h2 className="project-card-minimal__title">
          <span>{project.title[locale]}</span>
          <ArrowUpRight
            className="project-card-minimal__title-icon"
            size={20}
            aria-hidden="true"
          />
        </h2>

        <p className="project-card-minimal__summary">
          {project.summary[locale]}
        </p>

        {/* Tech Stack Pills */}
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

      {/* Bottom Action Footer */}
      <div className="project-card-minimal__footer">
        <span className="project-card-minimal__action-btn">
          <span>{t.viewCaseStudy}</span>
          <span className="btn-arrow-circle" aria-hidden="true">
            <ArrowUpRight size={14} />
          </span>
        </span>
      </div>
    </article>
  );
}

