import { useEffect, useState } from "react";
import { projects, routeSegments, type PageKey } from "./data/site";

export type Route =
  | { page: PageKey }
  | { page: "project"; slug: string; projectExists: boolean }
  | { page: "notFound" };

export function pathFor(page: PageKey, slug?: string) {
  const segment = routeSegments[page].en;
  if (page === "projects" && slug) return `/${segment}/${slug}`;
  return `/${segment}`;
}

export function parseRoute(pathname: string): Route {
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);

  // Fallback to check if old locale URLs are visited
  if (parts.length > 0 && (parts[0] === "en" || parts[0] === "id")) {
    parts.shift();
  }

  if (parts.length === 0) return { page: "home" };
  if (parts.length === 1) {
    const page = (Object.keys(routeSegments) as PageKey[]).find(
      (key) => routeSegments[key].en === parts[0],
    );
    if (page) return { page };
  }
  if (parts.length === 2 && parts[0] === routeSegments.projects.en) {
    return {
      page: "project",
      slug: parts[1],
      projectExists: projects.some((project) => project.slug === parts[1]),
    };
  }
  return { page: "notFound" };
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
