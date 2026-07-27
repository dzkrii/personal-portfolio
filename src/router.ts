import { useEffect, useState } from "react";
import { locales, projects, routeSegments, type Locale, type PageKey } from "./data/site";

export type Route =
  | { locale: Locale; page: PageKey }
  | { locale: Locale; page: "project"; slug: string; projectExists: boolean }
  | { locale: Locale; page: "notFound" };

export function pathFor(locale: Locale, page: PageKey, slug?: string) {
  const segment = routeSegments[page][locale];
  if (page === "projects" && slug) return `/${locale}/${segment}/${slug}`;
  return `/${locale}${segment ? `/${segment}` : ""}`;
}

export function parseRoute(pathname: string): Route {
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const locale = locales.includes(parts[0] as Locale) ? (parts[0] as Locale) : "id";

  if (parts.length === 1 && parts[0] === locale) return { locale, page: "home" };
  if (parts.length === 2) {
    const page = (Object.keys(routeSegments) as PageKey[]).find(
      (key) => routeSegments[key][locale] === parts[1],
    );
    if (page) return { locale, page };
  }
  if (parts.length === 3 && parts[1] === routeSegments.projects[locale]) {
    return {
      locale,
      page: "project",
      slug: parts[2],
      projectExists: projects.some((project) => project.slug === parts[2]),
    };
  }
  return { locale, page: "notFound" };
}

export function localizedPath(route: Route, nextLocale: Locale) {
  if (route.page === "project" && route.projectExists) return pathFor(nextLocale, "projects", route.slug);
  if (route.page === "project") return pathFor(nextLocale, "home");
  if (route.page === "notFound") return pathFor(nextLocale, "home");
  return pathFor(nextLocale, route.page);
}

export function navigate(href: string) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "instant" });
}

export function useRoute() {
  const [route, setRoute] = useState(() => parseRoute(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setRoute(parseRoute(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return route;
}
