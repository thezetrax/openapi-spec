import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { execSync } from "node:child_process";

const specDirectory = "spec";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "watch-build-spec",
      configureServer(server) {
        server.watcher.add(`${specDirectory}/`);
        server.watcher.on("change", () => {
          // INFO: Which file changed :)
          //    file: from param
          // if (file.includes(specDirectory))
          //   console.log(`File changed: ${file}`);
          execSync("npm run build-spec", { stdio: "inherit" });
        });
      },
    },
  ],
});
