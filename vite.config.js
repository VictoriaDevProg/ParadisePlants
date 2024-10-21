import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/ParadisePlants/' : '/',
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: './index.html',
        // input: './src/main.jsx',
      },
    },
    // server: {
    //   mimeTypes: {
    //     'application/javascript': ['js', 'jsx'],
    //   },
    // },
  };
});
