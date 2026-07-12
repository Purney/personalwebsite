import { defineConfig } from "vitest/config";
import { transformWithEsbuild } from "vite";
import path from "node:path";

export default defineConfig({
  plugins: [
    {
      name: "jsx-in-js",
      enforce: "pre",
      async transform(code, id) {
        if (/\/(app|components|data|lib)\/.*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, { loader: "jsx", jsx: "automatic" });
        }
        return null;
      },
    },
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.js"],
    include: ["**/*.test.js"],
  },
  resolve: { alias: { "@": path.resolve(process.cwd()) } },
});
