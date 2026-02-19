import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Replit plugins: only load when running inside Replit (optional for AWS Amplify / other hosts)
function replitPlugins() {
  const plugins = [react()];
  if (process.env.REPL_ID) {
    try {
      const runtimeErrorOverlay = require("@replit/vite-plugin-runtime-error-modal").default;
      plugins.push(runtimeErrorOverlay());
    } catch {
      // ignore when not on Replit
    }
  }
  return plugins;
}

export default defineConfig({
  plugins: [
    ...replitPlugins(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
