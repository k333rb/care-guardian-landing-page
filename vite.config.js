import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  const isNetlify = process.env.NETLIFY === "true";

  return {
    plugins: [react(), tailwindcss()],
    // Use root path for dev and Netlify, use subdirectory for GitHub Pages
    base:
      command === "build" && !isNetlify ? "/care-guardian-landing-page/" : "/",
  };
});
