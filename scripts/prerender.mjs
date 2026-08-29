/**
 * Renders every route to a static HTML file after the client build.
 *
 * Uses dist/index.html as the template so the inlined stylesheet, preloads, and
 * structured data stay identical across routes; only the per-route metadata and
 * the #root markup are swapped in.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const distDir = path.join(projectRoot, "dist");

// Windows absolute paths must be file:// URLs for the ESM loader.
const { render, routes } = await import(
  pathToFileURL(path.join(projectRoot, "dist-ssr", "entry-server.js")).href
);

const template = await readFile(path.join(distDir, "index.html"), "utf8");

const INDEXABLE =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

const escapeAttr = (value) =>
  value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

const metaTag = (kind, key, value) =>
  `<meta ${kind}="${key}" content="${escapeAttr(value)}" />`;

/**
 * Replaces whole tags rather than just their content attribute: index.html keeps
 * several tags spread over multiple lines, so anchoring on attribute order or
 * inline whitespace is brittle.
 */
function applyMeta(html, routeMeta) {
  const tags = [
    [
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeAttr(routeMeta.title)}</title>`,
      "title",
    ],
    [
      /<meta[^>]*\sname="description"[^>]*>/i,
      metaTag("name", "description", routeMeta.description),
      "description",
    ],
    [
      /<meta[^>]*\sname="robots"[^>]*>/i,
      metaTag(
        "name",
        "robots",
        routeMeta.noindex ? "noindex, follow" : INDEXABLE,
      ),
      "robots",
    ],
    [
      /<link[^>]*\srel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escapeAttr(routeMeta.canonical)}" />`,
      "canonical",
    ],
    [
      /<meta[^>]*\sproperty="og:url"[^>]*>/i,
      metaTag("property", "og:url", routeMeta.canonical),
      "og:url",
    ],
    [
      /<meta[^>]*\sproperty="og:title"[^>]*>/i,
      metaTag("property", "og:title", routeMeta.title),
      "og:title",
    ],
    [
      /<meta[^>]*\sproperty="og:description"[^>]*>/i,
      metaTag("property", "og:description", routeMeta.description),
      "og:description",
    ],
    [
      /<meta[^>]*\sname="twitter:url"[^>]*>/i,
      metaTag("name", "twitter:url", routeMeta.canonical),
      "twitter:url",
    ],
    [
      /<meta[^>]*\sname="twitter:title"[^>]*>/i,
      metaTag("name", "twitter:title", routeMeta.title),
      "twitter:title",
    ],
    [
      /<meta[^>]*\sname="twitter:description"[^>]*>/i,
      metaTag("name", "twitter:description", routeMeta.description),
      "twitter:description",
    ],
  ];

  for (const [pattern, replacement, label] of tags) {
    if (!pattern.test(html)) {
      throw new Error(`prerender: template has no ${label} tag`);
    }
    html = html.replace(pattern, replacement);
  }

  return html;
}

function injectRoot(html, markup) {
  const emptyRoot = '<div id="root"></div>';
  if (!html.includes(emptyRoot)) {
    throw new Error("prerender: could not find an empty #root in the template");
  }
  return html.replace(emptyRoot, `<div id="root">${markup}</div>`);
}

function outputFileFor(routePath) {
  // Cloudflare Pages serves 404.html for paths that match no file.
  if (routePath === "/404") return path.join(distDir, "404.html");
  if (routePath === "/") return path.join(distDir, "index.html");
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

const targets = [...routes, "/404"];
let bytes = 0;

for (const routePath of targets) {
  const { html: markup, meta } = await render(routePath);
  const page = injectRoot(applyMeta(template, meta), markup);
  const outFile = outputFileFor(routePath);

  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, page, "utf8");

  bytes += Buffer.byteLength(page);
  console.log(
    `  ${routePath.padEnd(46)} ${String(Math.round(markup.length / 1024)).padStart(4)} kB markup  ->  ${path.relative(projectRoot, outFile)}`,
  );
}

console.log(
  `prerendered ${targets.length} routes (${Math.round(bytes / 1024)} kB HTML total)`,
);
