// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import flowbiteReact from "flowbite-react/plugin/astro";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  // Site URL is used by Astro to generate absolute URLs (sitemaps, canonical, RSS, etc.)
  // We set it to the future custom domain so paths resolve to root (/).
  // If you preview under https://oskarbarcz.github.io/yet-another-blog-attempt/ before DNS is set,
  // assets will still load because Astro emits relative asset URLs by default; canonical will point to blog.barcz.me.
  site: "https://blog.barcz.me",
  integrations: [react(), flowbiteReact(), prefetch()],
  vite: {
    // @ts-ignore - Plugin type mismatch between Astro's bundled Vite and local Vite
    plugins: [tailwindcss()],
  },
});
