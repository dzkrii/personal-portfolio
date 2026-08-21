import { Link } from "../components/Link";
import { ProjectCard } from "../components/ProjectCard";
import { MediaFrame } from "../components/ui/MediaFrame";
import { messages, projects, siteConfig, type Locale } from "../data/site";
import { pathFor } from "../router";
import { navLabel } from "./PagePrimitives";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectsPage({ locale }: { locale: Locale }) {
  const title = navLabel("projects", locale);

  return (
    <div className="projects-page">
      <header className="projects-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{title}</h1>
        </div>
      </header>
      <section
        className="project-list"
        aria-label={title}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} locale={locale} project={project} />
        ))}
      </section>
    </div>
  );
}

export function ProjectPage({
  locale,
  slug,
  exists,
}: {
  locale: Locale;
  slug: string;
  exists: boolean;
}) {
  const project = projects.find((item) => item.slug === slug);
  if (!exists || !project) return <NotFoundPage locale={locale} />;
  return (
    <div className="project-detail-page">
      <header className="project-detail-header">
        <div className="section-badge-title">
          <h1 className="section-badge-title__text">{project.title[locale]}</h1>
        </div>
      </header>
      <div className="project-facts">
        <p>
          <strong>{"Category"}</strong>
          <span>{project.category[locale]}</span>
        </p>
        <p>
          <strong>{"Role"}</strong>
          <span>{project.role[locale]}</span>
        </p>
      </div>
      <MediaFrame
        alt={`${project.title[locale]} - ${messages[locale].imagePlaceholder}`}
        fallbackLabel={messages[locale].imagePlaceholder}
        recommendedSize={siteConfig.media.project.recommended}
      />
      <section className="case-study">
        {[
          ["Problem", project.context[locale]],
          ["Contribution", project.contribution[locale]],
          ["Solution", project.solution[locale]],
        ].map(([title, copy]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{copy}</p>
          </article>
        ))}
        <article className="pending-panel">
          <h2>{"Outcome, stack, and links"}</h2>
          <p>{messages[locale].materialPending}</p>
        </article>
      </section>
      <Link className="text-link back-link" href={pathFor("projects")}>
        {messages[locale].backToProjects}
      </Link>
    </div>
  );
}
