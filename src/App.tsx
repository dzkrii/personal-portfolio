import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import { SiteLayout } from "./components/SiteLayout";
import { pageMeta, type Locale } from "./data/site";
import { useRoute, type Route } from "./router";
import { AboutPage } from "./pages/AboutPage";
import { CertificatesPage } from "./pages/CertificatesPage";
import { ContactPage } from "./pages/ContactPage";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage, ProjectsPage } from "./pages/ProjectsPage";

function usePageMetadata(route: Route) {
  useEffect(() => {
    const key = route.page === "project" && !route.projectExists ? "notFound" : route.page;
    const meta = pageMeta[key];
    document.documentElement.lang = route.locale;
    document.title = meta.title[route.locale];
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description[route.locale]);
  }, [route]);
}

function App() {
  const route = useRoute();
  usePageMetadata(route);
  const locale: Locale = route.locale;
  let page;

  if (route.page === "home") page = <HomePage locale={locale} />;
  else if (route.page === "projects") page = <ProjectsPage locale={locale} />;
  else if (route.page === "project") page = <ProjectPage locale={locale} slug={route.slug} exists={route.projectExists} />;
  else if (route.page === "about") page = <AboutPage locale={locale} />;
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
