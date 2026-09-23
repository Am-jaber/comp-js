/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: resolve(__dirname, "tsconfig.app.json"),
      include: ["src"],
      exclude: [
        "src/App.tsx",
        "src/main.tsx",
        "src/setupTests.ts",
        "src/lib/styles.css",
        "src/**/*.test.{ts,tsx}",
      ],
    }),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "CompJs",
      formats: ["es", "cjs"],
      fileName: (format) => `comp-js.${format === "es" ? "js" : "cjs"}`,
      cssFileName: "style",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "@tanstack/react-query",
        "@tanstack/react-router",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJsxRuntime",
          "@tanstack/react-query": "ReactQuery",
          "@tanstack/react-router": "ReactRouter",
        },
      },
    },
  },
});
