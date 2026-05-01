import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const BACKEND = 'http://127.0.0.1:9898'

export default defineConfig({
  root: '.',
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify('0.1.0'),
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: '../backend/static',
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ['monaco-editor'],
  },
  server: {
    proxy: {
      '/api': {
        target: BACKEND,
        changeOrigin: true,
      },
      '/health': {
        target: BACKEND,
        changeOrigin: true,
      },
      '/upload': {
        target: BACKEND,
        changeOrigin: true,
      },
    },
  },
})
