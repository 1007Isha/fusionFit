import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      VITE_NUTRITION_API_CALORIE_NINJA: JSON.stringify(env.VITE_NUTRITION_API_CALORIE_NINJA),
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000", // Backend URL
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ""), // Removes "/api" before forwarding
        },
      },
    },
    optimizeDeps: {
      include: ["chartjs-adapter-date-fns"],
    },
  };
});
