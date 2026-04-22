// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// Plugin para eliminar comentarios HTML
const removeHtmlComments = {
  // name: "remove-html-comments",
  // apply: /** @type {const} */ ("build"),
  // enforce: /** @type {const} */ ("post"),
  // // @ts-ignore
  // transformIndexHtml(html) {
  //   if (typeof html === "string") {
  //     return html.replace(/<!--[\s\S]*?-->/g, "");
  //   }
  //   return html;
  // }
};

let DEPLOY_DOMAIN = "https://gonzalo-mediabros.github.io";
let DEPLOY_PATH = "/mediabrosonline/";

// UNCOMMENT FOR CUSTOM DOMAIN:
// DEPLOY_DOMAIN = "https://mediabrosonline.com";
// DEPLOY_PATH = "/";



export default defineConfig({
  site: DEPLOY_DOMAIN,
  base: DEPLOY_PATH,
  build: { assets: "assets" },
  integrations: [
    icon({
      include: {
        "simple-icons": ["*"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), removeHtmlComments],
    optimizeDeps: {
      include: ["embla-carousel", "embla-carousel-auto-scroll"],
    },
  },
  devToolbar: {
    enabled: true,
  }
});
