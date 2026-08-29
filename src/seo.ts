/**
 * @file seo.ts
 * @description Per-route document metadata, shared by the client-side updater in
 * App.tsx and the build-time prerenderer. Deliberately DOM-free so it can run in
 * Node during the prerender pass.
 */
import { pageMeta, projects, type Locale } from "./data/site";
import { pathFor, type Route } from "./router";

export const SITE_URL = "https://fatahul.my.id";

export type RouteMeta = {
  title: string;
  description: string;
  canonical: string;
  /** Pages that must stay out of search results carry an explicit noindex. */
  noindex: boolean;
};

export function pathForRoute(route: Route): string {
  if (route.page === "project") return pathFor("projects", route.slug);
  if (route.page === "notFound") return "/404";
  return pathFor(route.page);
}

export function metaForRoute(route: Route, locale: Locale = "en"): RouteMeta {
  const path = pathForRoute(route);

  // An unknown project slug renders the 404 view, so it must advertise 404 metadata.
  if (route.page === "project" && !route.projectExists) {
    return {
      title: pageMeta.notFound.title[locale],
      description: pageMeta.notFound.description[locale],
      canonical: `${SITE_URL}${path}`,
      noindex: true,
    };
  }

  if (route.page === "project") {
    const project = projects.find((candidate) => candidate.slug === route.slug);
    if (project) {
      return {
        title: `${project.title[locale]} | Fatahul Ahmad Dzikri`,
        description: project.summary[locale],
        canonical: `${SITE_URL}${path}`,
        noindex: false,
      };
    }
  }

  const key = route.page === "project" ? "project" : route.page;
  const meta = pageMeta[key];

  return {
    title: meta.title[locale],
    description: meta.description[locale],
    canonical: `${SITE_URL}${path}`,
    noindex: route.page === "notFound",
  };
}
