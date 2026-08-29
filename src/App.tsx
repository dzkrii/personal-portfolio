import { lazy, Suspense, useEffect } from "react";
import { MotionConfig } from "motion/react";
import { SiteLayout } from "./components/SiteLayout";
import { metaForRoute } from "./seo";
import { useRoute, type Route } from "./router";
import { HomePage } from "./pages/HomePage";

// Lazy load non-home pages to reduce initial JavaScript payload on mobile
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const CertificatesPage = lazy(() =>
  import("./pages/CertificatesPage").then((m) => ({
    default: m.CertificatesPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const CvPage = lazy(() =>
  import("./pages/CvPage").then((m) => ({ default: m.CvPage })),
);
const ProjectsPage = lazy(() =>
  import("./pages/ProjectsPage").then((m) => ({ default: m.ProjectsPage })),
);
const ProjectPage = lazy(() =>
  import("./pages/ProjectsPage").then((m) => ({ default: m.ProjectPage })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

function setMeta(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function usePageMetadata(route: Route) {
  useEffect(() => {
    const meta = metaForRoute(route, "en");

    document.documentElement.lang = "en";
    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);

    // Without this the canonical baked into index.html would declare every route
    // a duplicate of the homepage, keeping the other pages out of the index.
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", meta.canonical);

    setMeta(
      'meta[name="robots"]',
      meta.noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    setMeta('meta[property="og:url"]', meta.canonical);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[name="twitter:url"]', meta.canonical);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
  }, [route]);
}

function App({ initialPath }: { initialPath?: string }) {
  const route = useRoute(initialPath);
  usePageMetadata(route);
  const locale = "en" as const;
  let page;

  if (route.page === "home") page = <HomePage locale={locale} />;
  else if (route.page === "projects") page = <ProjectsPage locale={locale} />;
  else if (route.page === "project")
    page = (
      <ProjectPage
        locale={locale}
        slug={route.slug}
        exists={route.projectExists}
      />
    );
  else if (route.page === "about") page = <AboutPage locale={locale} />;
  else if (route.page === "certificates")
    page = <CertificatesPage locale={locale} />;
  else if (route.page === "cv") page = <CvPage locale={locale} />;
  else if (route.page === "contact") page = <ContactPage locale={locale} />;
  else page = <NotFoundPage locale={locale} />;

  return (
    <MotionConfig reducedMotion="user">
      <SiteLayout route={route}>
        <Suspense fallback={<div className="page-loading-skeleton" />}>
          {page}
        </Suspense>
      </SiteLayout>
    </MotionConfig>
  );
}

export default App;
