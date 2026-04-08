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
  vite: { plugins: [
    tailwindcss(), 
    //script para ver la url local en consola
    {
        name: 'reprint-astro-url',
        configureServer(server) {
          const print = () => {
            const port = server.config.server.port || 4321
            console.log(`Local http://localhost:${port}/mediabrosonline/`)
          }
          // comando manual: presionando ENTER en la terminal si dice url hace el print
          // @ts-ignore
          process.stdin.on('data', (data) => {
            const input = data.toString().trim()
            if (input === 'url') {
              print()
            }
          })
        }
      }
   ],
    
   },
});
