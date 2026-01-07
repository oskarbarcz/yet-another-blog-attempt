// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import flowbiteReact from "flowbite-react/plugin/astro";

export default defineConfig({
  site: "https://blog.barcz.me",
  prefetch: true,
  integrations: [react(), flowbiteReact(), sitemap()],
  vite: {
    // @ts-ignore - Plugin type mismatch between Astro's bundled Vite and local Vite
    plugins: [tailwindcss()],
  },
});
