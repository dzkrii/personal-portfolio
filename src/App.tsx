import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, FileText } from "lucide-react";
import { motion, MotionConfig } from "motion/react";
import { Link } from "./components/Link";
import { ProjectCard } from "./components/ProjectCard";
import { SiteLayout } from "./components/SiteLayout";
import { BrutalButton } from "./components/ui/BrutalButton";
import { MediaFrame } from "./components/ui/MediaFrame";
import { SectionHeading } from "./components/ui/SectionHeading";
import {
  certificates,
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

function navLabel(key: (typeof navigation)[number]["key"], locale: Locale) {
  return navigation.find((item) => item.key === key)?.label[locale] ?? key;
}

function RoleRotator({ locale }: { locale: Locale }) {
  const roles = locale === "id"
    ? ["Software Developer", "Creative Developer", "Problem Solver"]
    : ["Software Developer", "Creative Developer", "Problem Solver"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % roles.length), 2600);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <span className="role-rotator" aria-live="polite">
      <motion.span
        key={roles[index]}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
      >
        {roles[index]}
      </motion.span>
    </span>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  return (
    <section className="hero hero--intro">
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="hero-kicker">{locale === "id" ? "Halo, saya" : "Hi, I am"}</p>
        <h1>Fatahul<br />Ahmad Dzikri.</h1>
        <p className="hero-role">
          {locale === "id" ? "Saya seorang " : "I am a "}<RoleRotator locale={locale} />
        </p>
        <p className="hero-copy">{profile.intro[locale]}</p>
        <div className="hero-actions">
          <BrutalButton href={pathFor(locale, "cv")}>
            {locale === "id" ? "Lihat CV" : "View CV"}
            <FileText aria-hidden="true" />
          </BrutalButton>
          <BrutalButton href={pathFor(locale, "about")} tone="secondary">
            {locale === "id" ? "Tentang saya" : "About me"}
            <ArrowUpRight aria-hidden="true" />
          </BrutalButton>
        </div>
      </motion.div>
      <motion.div
        className="hero-illustration"
        initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileHover={{ y: -5, rotate: 1 }}
        transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/fatahul-hero-illustration.png"
          width="1003"
          height="1568"
          alt={locale === "id"
            ? "Ilustrasi neo-brutalist Fatahul Ahmad Dzikri"
            : "Neo-brutalist illustration of Fatahul Ahmad Dzikri"}
        />
        <span aria-hidden="true">01 / Fatahul</span>
      </motion.div>
    </section>
  );
}

function ProjectsPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro
        title={navLabel("projects", locale)}
        description={
          locale === "id"
            ? "Tiga proyek terpilih sebagai fondasi studi kasus."
            : "Three selected projects forming the foundation for the case studies."
        }
      />
      <section className="project-list" aria-label={navLabel("projects", locale)}>
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
      <PageIntro title={navLabel("about", locale)} description={profile.bio[locale]} />
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

function EmptyState({
  locale,
  type,
}: {
  locale: Locale;
  type: "certificates" | "cv";
}) {
  const isCertificates = type === "certificates";
  return (
    <section className="empty-state" aria-live="polite">
      <div className="empty-state__index">{isCertificates ? "00" : "PDF"}</div>
      <div>
        <p className="eyebrow">{locale === "id" ? "Siap diisi" : "Ready for content"}</p>
        <h2>
          {isCertificates
            ? locale === "id" ? "Belum ada sertifikat ditampilkan." : "No certificates displayed yet."
            : locale === "id" ? "CV sedang disiapkan." : "The CV is being prepared."}
        </h2>
        <p>
          {isCertificates
            ? locale === "id"
              ? "Struktur data dan galeri sudah tersedia. Sertifikat akan muncul di sini setelah judul, penerbit, tanggal, gambar, dan tautan kredensial ditambahkan."
              : "The data structure and gallery are ready. Certificates will appear here once the title, issuer, date, image, and credential link are added."
            : locale === "id"
              ? "Area pratinjau dan tombol unduh akan aktif setelah PDF final ditambahkan."
              : "The preview area and download button will activate after the final PDF is added."}
        </p>
        {!isCertificates && (
          <BrutalButton aria-disabled="true" href="" tabIndex={-1}>
            {locale === "id" ? "Unduh CV" : "Download CV"}
            <ArrowDownToLine aria-hidden="true" />
          </BrutalButton>
        )}
      </div>
    </section>
  );
}

function CertificatesPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro
        title={navLabel("certificates", locale)}
        description={locale === "id"
          ? "Catatan pembelajaran, pelatihan, dan kredensial yang mendukung pekerjaan saya."
          : "A record of learning, training, and credentials supporting my work."}
      />
      {certificates.length === 0 ? (
        <EmptyState locale={locale} type="certificates" />
      ) : (
        <section className="certificate-grid" aria-label={navLabel("certificates", locale)}>
          {certificates.map((certificate) => (
            <article className="certificate-card" key={`${certificate.issuer}-${certificate.title.en}`}>
              <div className="certificate-card__visual">
                {certificate.image ? (
                  <img src={certificate.image} alt="" />
                ) : (
                  <span aria-hidden="true">CERT.</span>
                )}
              </div>
              <div>
                <p className="certificate-card__meta">
                  {certificate.issuer} · {certificate.issuedAt[locale]}
                </p>
                <h2>{certificate.title[locale]}</h2>
                {certificate.credentialUrl ? (
                  <a
                    className="text-link"
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {locale === "id" ? "Lihat kredensial" : "View credential"}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </section>
      )}
    </>
  );
}

function CvPage({ locale }: { locale: Locale }) {
  const resumeSrc = siteConfig.media.resume.src;
  return (
    <>
      <PageIntro
        title={navLabel("cv", locale)}
        description={locale === "id"
          ? "Ringkasan pengalaman, keahlian, dan perjalanan profesional saya."
          : "A concise overview of my experience, skills, and professional journey."}
      />
      {resumeSrc ? (
        <section className="cv-viewer">
          <div className="cv-viewer__toolbar">
            <p>{locale === "id" ? "Dokumen CV" : "CV document"}</p>
            <a className="brutal-button brutal-button--primary" href={resumeSrc} download>
              {locale === "id" ? "Unduh CV" : "Download CV"}
              <ArrowDownToLine aria-hidden="true" />
            </a>
          </div>
          <iframe
            className="cv-viewer__frame"
            src={`${resumeSrc}#toolbar=0`}
            title={locale === "id" ? "Pratinjau CV Fatahul Ahmad Dzikri" : "Fatahul Ahmad Dzikri CV preview"}
          />
        </section>
      ) : (
        <EmptyState locale={locale} type="cv" />
      )}
    </>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  return (
    <>
      <PageIntro
        title={navLabel("contact", locale)}
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
  else if (route.page === "certificates") page = <CertificatesPage locale={locale} />;
  else if (route.page === "cv") page = <CvPage locale={locale} />;
  else if (route.page === "contact") page = <ContactPage locale={locale} />;
  else page = <NotFoundPage locale={locale} />;

  return (
    <MotionConfig reducedMotion="user">
      <SiteLayout route={route}>{page}</SiteLayout>
    </MotionConfig>
  );
}

export default App;
