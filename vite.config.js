import { fileURLToPath, URL } from "node:url";

import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.warn(env);
  console.warn('-----------');
  console.warn(env.project);
  return {
    plugins: [
      vue(),
      vueJsx(),
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
