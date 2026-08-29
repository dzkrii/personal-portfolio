/**
 * @file entry-server.tsx
 * @description Build-time entry point. Renders each route to static HTML so
 * crawlers that do not execute JavaScript still receive the page content.
 */
import { StrictMode } from "react";
import { prerenderToNodeStream } from "react-dom/static";
import App from "./App";
import { projects, routeSegments, type PageKey } from "./data/site";
import { parseRoute, pathFor } from "./router";
import { metaForRoute, type RouteMeta } from "./seo";

/** Every path that gets its own HTML file, plus the 404 shell. */
export const routes: string[] = [
  ...(Object.keys(routeSegments) as PageKey[]).map((page) => pathFor(page)),
  ...projects.map((project) => pathFor("projects", project.slug)),
];

export async function render(
  path: string,
): Promise<{ html: string; meta: RouteMeta }> {
  const { prelude } = await prerenderToNodeStream(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
  );

  prelude.setEncoding("utf8");

  let html = "";
  for await (const chunk of prelude) html += chunk;

  return { html, meta: metaForRoute(parseRoute(path), "en") };
}
