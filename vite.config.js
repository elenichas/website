import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginBundleObfuscator from "vite-plugin-bundle-obfuscator";

export default defineConfig({
  plugins: [
    vue(),
    vitePluginBundleObfuscator({
      apply: "build",
      autoExcludeNodeModules: true,
      log: false,
      options: {
        compact: true,
        simplify: true,
        stringArray: true,
        stringArrayShuffle: true,
        stringArrayThreshold: 0.75,
        identifierNamesGenerator: "hexadecimal",
        renameGlobals: false,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        debugProtection: false,
        selfDefending: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    chunkSizeWarningLimit: 512,
    minify: "oxc",
    sourcemap: false,
  },
});
