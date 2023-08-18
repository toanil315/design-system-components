import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "pathe";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  server: {
    port: 3001,
  },
  define: {
    "process.env.NODE_ENV": "'production'",
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/main.tsx"),
      name: "MyLib",
    },
  },
});
