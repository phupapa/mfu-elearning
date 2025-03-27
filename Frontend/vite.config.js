import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: [
      'mymfu.doitung.net',
      'localhost',
    ]
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
    },
    optimizeDeps: {
      exclude: ["i18next", "react-i18next"],
    },
  },
});
