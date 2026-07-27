import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { MotionConfig } from "motion/react";
import { Link } from "./components/Link";
import { ProjectCard } from "./components/ProjectCard";
import { SiteLayout } from "./components/SiteLayout";
import { BrutalButton } from "./components/ui/BrutalButton";
import { MediaFrame } from "./components/ui/MediaFrame";
import { SectionHeading } from "./components/ui/SectionHeading";
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
import { pathFor, useRoute, type Route } from "./router";

function usePageMetadata(route: Route) {
  useEffect(() => {
    const key = route.page === "project" && !route.projectExists ? "notFound" : route.page;
    const meta = pageMeta[key];
    document.documentElement.lang = route.locale;
    document.title = meta.title[route.locale];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description[route.locale]);
  }, [route]);
}

function PortraitPlaceholder({ locale }: { locale: Locale }) {
  return (
    <MediaFrame
      alt={messages[locale].imagePlaceholder}
      fallbackLabel={messages[locale].imagePlaceholder}
      portrait
      recommendedSize={siteConfig.media.portrait.recommended}
      src={siteConfig.media.portrait.src}
    />
  );
}

function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className="page-intro">
      <SectionHeading as="h1" description={description}>{title}</SectionHeading>
    </section>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const featured = projects.slice(0, 3);
  return (
    <>
      <section className="hero">
        <div>
          <SectionHeading as="h1" eyebrow={siteConfig.role[locale]}>
            {locale === "id"
              ? "Membangun produk digital yang jelas dan berkarakter."
              : "Building digital products with clarity and character."}
          </SectionHeading>
          <p className="hero-copy">{profile.intro[locale]}</p>
          <BrutalButton href={pathFor(locale, "projects")}>
            {locale === "id" ? "Lihat proyek" : "View projects"}
            <ArrowUpRight aria-hidden="true" />
          </BrutalButton>
        </div>
        <PortraitPlaceholder locale={locale} />
      </section>
      <section className="home-intro">
        <SectionHeading>
          {locale === "id" ? "Dari kebutuhan nyata menuju produk yang mudah digunakan." : "From real needs to products people can use."}
        </SectionHeading>
        <p>{profile.bio[locale]}</p>
      </section>
      <section className="featured-projects">
        <SectionHeading description={locale === "id" ? "Pilihan pekerjaan yang menunjukkan cara saya menyusun informasi, alur, dan antarmuka." : "Selected work showing how I structure information, workflows, and interfaces."}>
          {locale === "id" ? "Proyek unggulan" : "Featured projects"}
        </SectionHeading>
        <div className="project-list">
          {featured.map((project) => <ProjectCard key={project.slug} locale={locale} project={project} />)}
        </div>
      </section>
      <section className="capabilities">
        <SectionHeading>{locale === "id" ? "Keahlian inti" : "Core capabilities"}</SectionHeading>
        <div className="capability-grid">
          {Object.entries(skills).slice(0, 4).map(([group, items]) => (
            <div key={group}><h3>{group}</h3><p>{items.join(", ")}</p></div>
          ))}
        </div>
      </section>
      <section className="contact-cta">
        <SectionHeading description={locale === "id" ? "Ceritakan kebutuhan Anda melalui email. Saya akan membalas dengan langkah berikutnya yang jelas." : "Share what you need by email. I will reply with a clear next step."}>
          {locale === "id" ? "Punya proyek yang perlu dirapikan?" : "Have a project that needs clarity?"}
        </SectionHeading>
        <BrutalButton href={pathFor(locale, "contact")}>{navigation[3].label[locale]}<ArrowUpRight aria-hidden="true" /></BrutalButton>
      </section>
    </>
  );
}

function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro
        title={navigation[1].label[locale]}
        description={
          locale === "id"
            ? "Tiga proyek terpilih sebagai fondasi studi kasus."
            : "Three selected projects forming the foundation for the case studies."
        }
      />
      <section className="project-list" aria-label={navigation[1].label[locale]}>
        {projects.map((project) => (
          <ProjectCard key={project.slug} locale={locale} project={project} />
        ))}
      </section>
    </>
  );
}

function ProjectPage({
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
    <>
      <PageIntro title={project.title[locale]} description={project.summary[locale]} />
      <div className="project-facts">
        <p><strong>{locale === "id" ? "Kategori" : "Category"}</strong><span>{project.category[locale]}</span></p>
        <p><strong>{locale === "id" ? "Peran" : "Role"}</strong><span>{project.role[locale]}</span></p>
      </div>
      <MediaFrame
        alt={`${project.title[locale]} - ${messages[locale].imagePlaceholder}`}
        fallbackLabel={messages[locale].imagePlaceholder}
        recommendedSize={siteConfig.media.project.recommended}
      />
      <section className="case-study">
        {[
          [locale === "id" ? "Masalah" : "Problem", project.context[locale]],
          [locale === "id" ? "Kontribusi" : "Contribution", project.contribution[locale]],
          [locale === "id" ? "Solusi" : "Solution", project.solution[locale]],
        ].map(([title, copy]) => <article key={title}><h2>{title}</h2><p>{copy}</p></article>)}
        <article className="pending-panel">
          <h2>{locale === "id" ? "Hasil, stack, dan tautan" : "Outcome, stack, and links"}</h2>
          <p>{messages[locale].materialPending}</p>
        </article>
      </section>
      <Link className="text-link back-link" href={pathFor(locale, "projects")}>
        {messages[locale].backToProjects}
      </Link>
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro title={navigation[2].label[locale]} description={profile.bio[locale]} />
      <div className="about-grid">
        <PortraitPlaceholder locale={locale} />
        <section>
          <SectionHeading>{locale === "id" ? "Pengalaman" : "Experience"}</SectionHeading>
          {experiences.map((item) => (
            <article className="experience" key={item.company}>
              <h3>{item.role[locale]}</h3>
              <p><strong>{item.company}</strong><br />{item.period[locale]}</p>
              <p>{item.summary[locale]}</p>
            </article>
          ))}
        </section>
      </div>
      <section className="principles-section">
        <SectionHeading>{locale === "id" ? "Prinsip kerja" : "Working principles"}</SectionHeading>
        <div className="principle-list">
          {profile.principles.map((item) => <article key={item.title.en}><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></article>)}
        </div>
      </section>
      <section className="skills-section">
        <SectionHeading>{locale === "id" ? "Keahlian" : "Skills"}</SectionHeading>
        <div className="skill-groups">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}><h3>{group}</h3><p>{items.join(", ")}</p></div>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro
        title={navigation[3].label[locale]}
        description={
          locale === "id"
            ? "Punya proyek atau ide yang perlu dibicarakan? Kirim pesan melalui kanal berikut."
            : "Have a project or idea worth discussing? Send a message through one of these channels."
        }
      />
      <div className="contact-links">
        <a href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}<ArrowUpRight aria-hidden="true" />
        </a>
        <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
          GitHub<ArrowUpRight aria-hidden="true" />
        </a>
        <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
          LinkedIn<ArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <p className="contact-note">{locale === "id" ? "Tidak ada formulir dan tidak ada pesan otomatis. Email Anda langsung masuk ke kotak masuk saya." : "No form and no automated reply. Your email goes directly to my inbox."}</p>
    </>
  );
}

function NotFoundPage({ locale }: { locale: Locale }) {
  return (
    <section className="not-found">
      <p>404</p>
      <SectionHeading as="h1" description={messages[locale].notFoundBody}>
        {messages[locale].notFoundTitle}
      </SectionHeading>
      <BrutalButton href={pathFor(locale, "home")}>{navigation[0].label[locale]}</BrutalButton>
    </section>
  );
}

function App() {
  const route = useRoute();
  usePageMetadata(route);
  const locale = route.locale;
  let page;

  if (route.page === "home") page = <HomePage locale={locale} />;
  else if (route.page === "projects") page = <ProjectsPage locale={locale} />;
  else if (route.page === "project") {
    page = <ProjectPage locale={locale} slug={route.slug} exists={route.projectExists} />;
  } else if (route.page === "about") page = <AboutPage locale={locale} />;
  else if (route.page === "contact") page = <ContactPage locale={locale} />;
  else page = <NotFoundPage locale={locale} />;

  return (
    <MotionConfig reducedMotion="user">
      <SiteLayout route={route}>{page}</SiteLayout>
    </MotionConfig>
  );
}

export default App;
