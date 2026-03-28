import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const allowedHostSuffixes = [".style.dev", ".decaspeed.dev"];
const allowedOriginPatterns = [
  /^https?:\/\/(?:[a-zA-Z0-9-]+\.)*style\.dev(?::\d+)?$/,
  /^https?:\/\/(?:[a-zA-Z0-9-]+\.)*decaspeed\.dev(?::\d+)?$/,
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    allowedHosts: allowedHostSuffixes,
    cors: {
      origin: allowedOriginPatterns,
    },
  },
  preview: {
    allowedHosts: allowedHostSuffixes,
    cors: {
      origin: allowedOriginPatterns,
    },
  },
});
