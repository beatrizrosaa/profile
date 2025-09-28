import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    reactRouter({
      ssr: false,
      future: {
        unstable_singleFetch: true,
      },
    }),
    tailwindcss(), 
    tsconfigPaths()
  ],
  build: {
    outDir: "build/client",
    assetsDir: "assets",
    emptyOutDir: true,
    manifest: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  base: "/",
  server: {
    port: 5173,
    host: true,
  },
});