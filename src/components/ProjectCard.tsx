import { ArrowUpRight } from "lucide-react";
import { messages, projects, siteConfig, type Locale } from "../data/site";
import { pathFor } from "../router";
import { Link } from "./Link";
import { MediaFrame } from "./ui/MediaFrame";

type Project = (typeof projects)[number];

export function ProjectCard({
  locale,
  project,
}: {
  locale: Locale;
  project: Project;
}) {
  return (
    <article className="project-card">
      <MediaFrame
        alt={`${project.title[locale]} - ${messages[locale].imagePlaceholder}`}
        fallbackLabel={messages[locale].imagePlaceholder}
        recommendedSize={siteConfig.media.project.recommended}
      />
      <div className="project-card__content">
        <p className="project-category">{project.category[locale]}</p>
        <h2>{project.title[locale]}</h2>
        <p>{project.summary[locale]}</p>
        <Link className="text-link" href={pathFor("projects", project.slug)}>
          {messages[locale].viewProject}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
