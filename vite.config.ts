import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import VueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueJsx(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-import.d.ts",
    }),
  ],
  server: {
    host: true,
  },
});
