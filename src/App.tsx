import { useEffect, useState } from "react";
import { ArrowUpRight, List, X } from "lucide-react";
import { MotionConfig } from "motion/react";
import { Link } from "./components/Link";
import {
  experiences,
  messages,
  navigation,
  pageMeta,
  profile,
  projects,
  siteConfig,
  skills,
  type Locale,
} from "./data/site";
import { localizedPath, pathFor, useRoute, type Route } from "./router";

function usePageMetadata(route: Route) {
  useEffect(() => {
    const key = route.page === "project" && !route.projectExists ? "notFound" : route.page;
    const meta = pageMeta[key];
    document.documentElement.lang = route.locale;
    document.title = meta.title[route.locale];
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description[route.locale]);
  }, [route]);
}

function MediaPlaceholder({ locale, portrait = false }: { locale: Locale; portrait?: boolean }) {
  return (
    <div className={`media-placeholder${portrait ? " media-placeholder--portrait" : ""}`} role="img" aria-label={messages[locale].imagePlaceholder}>
      <span>{messages[locale].imagePlaceholder}</span>
      <small>{portrait ? siteConfig.media.portrait.recommended : siteConfig.media.project.recommended}</small>
    </div>
  );
}

function Header({ route }: { route: Route }) {
  const [open, setOpen] = useState(false);
  const locale = route.locale;

  return (
    <header className="site-header">
      <Link className="brand" href={pathFor(locale, "home")} aria-label={`${siteConfig.name}, ${navigation[0].label[locale]}`} onClick={() => setOpen(false)}>
        <img src="/logo-fatahul.svg" width="180" height="48" alt={siteConfig.name} />
      </Link>
      <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? messages[locale].closeMenu : messages[locale].menu} onClick={() => setOpen((value) => !value)}>
        {open ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={open ? "nav nav--open" : "nav"} aria-label={locale === "id" ? "Navigasi utama" : "Primary navigation"}>
        {navigation.map((item) => (
          <Link key={item.key} href={pathFor(locale, item.key)} aria-current={route.page === item.key || (item.key === "projects" && route.page === "project" && route.projectExists) ? "page" : undefined} onClick={() => setOpen(false)}>
            {item.label[locale]}
          </Link>
        ))}
        <Link className="language-switcher" href={localizedPath(route, locale === "id" ? "en" : "id")} lang={locale === "id" ? "en" : "id"} aria-label={messages[locale].language} onClick={() => setOpen(false)}>
          {locale === "id" ? "EN" : "ID"}
        </Link>
      </nav>
    </header>
  );
}

function PageIntro({ title, description }: { title: string; description: string }) {
  return <header className="page-intro"><h1>{title}</h1><p>{description}</p></header>;
}

function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">{siteConfig.role[locale]}</p>
          <h1>{locale === "id" ? "Membangun produk digital yang jelas dan berkarakter." : "Building digital products with clarity and character."}</h1>
          <p className="hero-copy">{profile.intro[locale]}</p>
          <Link className="brutal-button" href={pathFor(locale, "projects")}>{locale === "id" ? "Lihat proyek" : "View projects"}<ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <MediaPlaceholder locale={locale} portrait />
      </section>
      <section className="placeholder-section">
        <h2>{locale === "id" ? "Fondasi bilingual siap." : "Bilingual foundation ready."}</h2>
        <p>{messages[locale].placeholder}</p>
      </section>
    </>
  );
}

function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro title={navigation[1].label[locale]} description={locale === "id" ? "Tiga proyek terpilih sebagai fondasi studi kasus." : "Three selected projects forming the foundation for the case studies."} />
      <div className="project-list">
        {projects.map((project) => (
          <article className="project-row" key={project.slug}>
            <MediaPlaceholder locale={locale} />
            <div><p className="project-category">{project.category[locale]}</p><h2>{project.title[locale]}</h2><p>{project.summary[locale]}</p>
              <Link className="text-link" href={pathFor(locale, "projects", project.slug)}>{messages[locale].viewProject}<ArrowUpRight aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function ProjectPage({ locale, slug, exists }: { locale: Locale; slug: string; exists: boolean }) {
  const project = projects.find((item) => item.slug === slug);
  if (!exists || !project) return <NotFoundPage locale={locale} />;
  return (
    <>
      <PageIntro title={project.title[locale]} description={project.summary[locale]} />
      <MediaPlaceholder locale={locale} />
      <section className="placeholder-section"><h2>{locale === "id" ? "Struktur studi kasus siap." : "Case study structure ready."}</h2><p>{messages[locale].placeholder}</p></section>
      <Link className="text-link back-link" href={pathFor(locale, "projects")}>{messages[locale].backToProjects}</Link>
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro title={navigation[2].label[locale]} description={profile.bio[locale]} />
      <div className="about-grid"><MediaPlaceholder locale={locale} portrait /><section><h2>{locale === "id" ? "Pengalaman" : "Experience"}</h2>{experiences.map((item) => <article className="experience" key={item.company}><h3>{item.role[locale]}</h3><p><strong>{item.company}</strong><br />{item.period[locale]}</p><p>{item.summary[locale]}</p></article>)}</section></div>
      <section className="skills-section"><h2>{locale === "id" ? "Keahlian" : "Skills"}</h2><div className="skill-groups">{Object.entries(skills).map(([group, items]) => <div key={group}><h3>{group}</h3><p>{items.join(", ")}</p></div>)}</div></section>
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro title={navigation[3].label[locale]} description={locale === "id" ? "Punya proyek atau ide yang perlu dibicarakan? Kirim pesan melalui kanal berikut." : "Have a project or idea worth discussing? Send a message through one of these channels."} />
      <div className="contact-links">
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}<ArrowUpRight aria-hidden="true" /></a>
        <a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub<ArrowUpRight aria-hidden="true" /></a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight aria-hidden="true" /></a>
      </div>
    </>
  );
}

function NotFoundPage({ locale }: { locale: Locale }) {
  return <section className="not-found"><p>404</p><h1>{messages[locale].notFoundTitle}</h1><p>{messages[locale].notFoundBody}</p><Link className="brutal-button" href={pathFor(locale, "home")}>{navigation[0].label[locale]}</Link></section>;
}

function App() {
  const route = useRoute();
  usePageMetadata(route);
  const locale = route.locale;
  let page;
  if (route.page === "home") page = <HomePage locale={locale} />;
  else if (route.page === "projects") page = <ProjectsPage locale={locale} />;
  else if (route.page === "project") page = <ProjectPage locale={locale} slug={route.slug} exists={route.projectExists} />;
  else if (route.page === "about") page = <AboutPage locale={locale} />;
  else if (route.page === "contact") page = <ContactPage locale={locale} />;
  else page = <NotFoundPage locale={locale} />;

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">{messages[locale].skip}</a>
      <div className="site-shell">
        <Header route={route} />
        <main id="main-content">{page}</main>
        <footer><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>{siteConfig.role[locale]}</span></footer>
      </div>
    </MotionConfig>
  );
}

export default App;
