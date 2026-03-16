import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [tailwindcss(), react()],
    base: "/",
  };

  // Change base path when building for production
  if (command !== "serve") {
    config.base = "/steno-blod/"; // 👈 Replace with your GitHub repository name
  }

  return config;
});