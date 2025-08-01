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
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor principal (React, React DOM)
          vendor: ['react', 'react-dom'],
          // Componentes UI críticos
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-toast',
            'class-variance-authority',
            'clsx',
            'tailwind-merge'
          ],
          // Carousel e componentes de mídia
          carousel: [
            'embla-carousel-react',
            '@radix-ui/react-aspect-ratio'
          ],
          // Ícones (separado por serem muitos)
          icons: ['lucide-react'],
          // Router
          router: ['react-router-dom'],
          // Form e validação
          forms: [
            'react-hook-form',
            '@hookform/resolvers',
            'zod'
          ]
        }
      }
    },
    // Otimizações de tamanho
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: true,
        pure_funcs: mode === 'production' ? ['console.log', 'console.info'] : []
      }
    },
    // CSS Code Splitting
    cssCodeSplit: true,
    // Limites de chunk otimizados
    chunkSizeWarningLimit: 1000
  },
  // Otimizações de dependências
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react'
    ]
  }
}));
