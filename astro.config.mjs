// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import flowbiteReact from "flowbite-react/plugin/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), flowbiteReact()],
  // The Vite types bundled within Astro can differ from the project's Vite types,
  // which may trigger a structural type mismatch during typechecking. Safe at runtime.
  vite: {
    // @ts-ignore - Plugin type mismatch between Astro's bundled Vite and local Vite
    plugins: [tailwindcss()],
  },
});
