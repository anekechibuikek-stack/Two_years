import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function tripPhotos(): Plugin {
  const virtualId = "virtual:trip-photos";
  const resolved = `\0${virtualId}`;
  const dir = path.resolve("public/photos/trips");

  function source() {
    const files = fs.existsSync(dir)
      ? fs.readdirSync(dir).filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
      : [];
    const urls = files.map((name) => `/photos/trips/${encodeURIComponent(name)}`);
    return `export default ${JSON.stringify(urls)};`;
  }

  return {
    name: "trip-photos",
    resolveId(id) {
      if (id === virtualId) return resolved;
    },
    load(id) {
      if (id === resolved) return source();
    },
    configureServer(server) {
      server.watcher.add(dir);
      const reload = (file: string) => {
        if (!file.startsWith(dir)) return;
        const mod = server.moduleGraph.getModuleById(resolved);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: "full-reload" });
      };
      server.watcher.on("add", reload);
      server.watcher.on("unlink", reload);
    },
  };
}

export default defineConfig({
  plugins: [react(), tripPhotos()],
  server: {
    host: true,
    port: 5173,
  },
});
