import { rm } from "node:fs/promises";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Inlines the entry stylesheet into index.html.
 *
 * The stylesheet is render-blocking and small enough compressed (~21 kB) that
 * paying for a second round trip costs more than the extra HTML bytes,
 * especially on mobile connections.
 */
function inlineEntryStylesheet(): Plugin {
  const inlined = new Set<string>();
  let outDir = "dist";

  return {
    name: "inline-entry-stylesheet",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        const bundle = ctx.bundle;
        if (!bundle) return html;

        return html.replace(
          /<link[^>]*rel="stylesheet"[^>]*>/g,
          (tag) => {
            const href = tag.match(/href="([^"]+)"/)?.[1];
            if (!href) return tag;

            const asset = bundle[href.replace(/^\//, "")];
            if (!asset || asset.type !== "asset" || typeof asset.source !== "string") {
              return tag;
            }

            inlined.add(asset.fileName);
            return `<style>${asset.source}</style>`;
          },
        );
      },
    },
    // The standalone stylesheet is no longer referenced once inlined.
    async writeBundle() {
      await Promise.all(
        [...inlined].map((fileName) => rm(path.join(outDir, fileName), { force: true })),
      );
      inlined.clear();
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineEntryStylesheet()],
  build: {
    target: "esnext",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "vendor";
          }
          if (id.includes("node_modules/motion")) {
            return "motion";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
        },
      },
    },
  },
});
