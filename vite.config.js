import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Paradise/",
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'jsx'],
    },
  },
});
