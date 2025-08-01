import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações seguras de build
    rollupOptions: {
      output: {
        // Code splitting básico e seguro
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
          carousel: ['embla-carousel-react'],
          icons: ['lucide-react']
        }
      }
    },
    // CSS Code Splitting
    cssCodeSplit: true,
    // Limites de chunk
    chunkSizeWarningLimit: 1000
  }
}));
