// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import flowbiteReact from "flowbite-react/plugin/astro";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), flowbiteReact(), prefetch()],
  vite: {
    // @ts-ignore - Plugin type mismatch between Astro's bundled Vite and local Vite
    plugins: [tailwindcss()],
  },
});