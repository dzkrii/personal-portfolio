import { Link } from "../components/Link";
import { ProjectCard } from "../components/ProjectCard";
import { MediaFrame } from "../components/ui/MediaFrame";
import { messages, projects, siteConfig, type Locale } from "../data/site";
import { pathFor } from "../router";
import { navLabel, PageIntro } from "./PagePrimitives";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectsPage({ locale }: { locale: Locale }) {
  return <><PageIntro title={navLabel("projects", locale)} description={locale === "id" ? "Tiga proyek terpilih sebagai fondasi studi kasus." : "Three selected projects forming the foundation for the case studies."} /><section className="project-list" aria-label={navLabel("projects", locale)}>{projects.map((project) => <ProjectCard key={project.slug} locale={locale} project={project} />)}</section></>;
}

export function ProjectPage({ locale, slug, exists }: { locale: Locale; slug: string; exists: boolean }) {
  const project = projects.find((item) => item.slug === slug);
  if (!exists || !project) return <NotFoundPage locale={locale} />;
  return <><PageIntro title={project.title[locale]} description={project.summary[locale]} /><div className="project-facts"><p><strong>{locale === "id" ? "Kategori" : "Category"}</strong><span>{project.category[locale]}</span></p><p><strong>{locale === "id" ? "Peran" : "Role"}</strong><span>{project.role[locale]}</span></p></div><MediaFrame alt={`${project.title[locale]} - ${messages[locale].imagePlaceholder}`} fallbackLabel={messages[locale].imagePlaceholder} recommendedSize={siteConfig.media.project.recommended} /><section className="case-study">{[[locale === "id" ? "Masalah" : "Problem", project.context[locale]], [locale === "id" ? "Kontribusi" : "Contribution", project.contribution[locale]], [locale === "id" ? "Solusi" : "Solution", project.solution[locale]]].map(([title, copy]) => <article key={title}><h2>{title}</h2><p>{copy}</p></article>)}<article className="pending-panel"><h2>{locale === "id" ? "Hasil, stack, dan tautan" : "Outcome, stack, and links"}</h2><p>{messages[locale].materialPending}</p></article></section><Link className="text-link back-link" href={pathFor(locale, "projects")}>{messages[locale].backToProjects}</Link></>;
}
