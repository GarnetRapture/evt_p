import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  base: './',
  publicDir: 'public',
  plugins: [solid()],
  resolve: {
    alias: [{ find: '@evtp', replacement: fileURLToPath(new URL('./src', import.meta.url)) }],
  },
  server: {
    port: 3100,
    open: false,
  },
  build: {
    target: 'es2023',
    sourcemap: false,
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    modulePreload: { polyfill: false },
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'three-core', test: /[\\/]three[\\/]build[\\/]three\.core\.js$/ },
            { name: 'three-renderer', test: /[\\/]three[\\/]build[\\/]three\.module\.js$/ },
          ],
        },
      },
    },
  },
});
