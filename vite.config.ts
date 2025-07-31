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
    // Otimizações de performance para produção
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting otimizado
    rollupOptions: {
      output: {
        manualChunks: {
          // Separa bibliotecas grandes em chunks próprios
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-toast'],
          carousel: ['embla-carousel-react'],
          icons: ['lucide-react'],
        },
      },
    },
    // Otimizações de chunk size
    chunkSizeWarningLimit: 1000,
    // Assets inline pequenos para reduzir requests
    assetsInlineLimit: 4096,
  },
  // Otimizações do CSS
  css: {
    postcss: {
      plugins: [
        // Remove CSS não utilizado em produção
        ...(mode === 'production' ? [] : []),
      ],
    },
  },
}));
