import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react(), tailwindcss()],
    base: "/",
  };

  // Change base path when building for production
  if (command !== "serve") {
    config.base = "/steno-blod/"; // 👈 Replace with your GitHub repository name
  }

  return config;
});
