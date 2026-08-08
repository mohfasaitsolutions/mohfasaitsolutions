import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Warn at 600KB, hard error at 1MB
    chunkSizeWarningLimit: 600,

    // Use terser for better minification (removes console.logs in prod)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
      },
    },

    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching:
        // Each vendor chunk changes independently — browser doesn't re-download unchanged chunks
        manualChunks: {
          // Core React runtime (changes very rarely)
          'vendor-react': ['react', 'react-dom'],
          // Animation library (heavy — isolate it)
          'vendor-motion': ['framer-motion', 'motion'],
          // Icon libraries (medium weight)
          'vendor-icons': ['lucide-react', 'react-icons'],
          // Smooth scroll (small utility)
          'vendor-lenis': ['lenis'],
        },
        // Deterministic file naming for cache busting
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    // Generate source maps for production debugging (optional — remove if you prefer no source maps)
    sourcemap: false,

    // CSS code splitting — each chunk gets its own CSS
    cssCodeSplit: true,
  },

  // Optimize dependencies during dev
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lenis'],
  },

  // Ensure consistent module resolution
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
