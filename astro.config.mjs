// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

let DEPLOY_DOMAIN = "https://gonzalo-mediabros.github.io";
let DEPLOY_PATH = "/mediabrosonline/";

// UNCOMMENT FOR CUSTOM DOMAIN:
// DEPLOY_DOMAIN = "https://mediabrosonline.com";
// DEPLOY_PATH = "/";

export default defineConfig({
  site: DEPLOY_DOMAIN,
  base: DEPLOY_PATH,
  build: { assets: "assets" },
  vite: { plugins: [tailwindcss()] },
});
