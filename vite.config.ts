import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  let tagger: any = null;
  if (mode === "development") {
    try {
      const mod = await import("lovable-tagger");
      if ((mod as any)?.componentTagger) {
        tagger = (mod as any).componentTagger();
      }
    } catch {
      // plugin not installed or failed to load; ignore in non-Lovable environments
    }
  }

  return {
    base: "/", // use absolute base for preview/prod
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), tagger].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
