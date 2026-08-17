import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// El polling solo aplica cuando se invoca `vite build --watch` (script dev:client).
// Declararlo siempre dejaba a `build:client` corriendo en watch para siempre, lo que
// colgaba el build de CI y hacía que el deploy nunca llegara a ejecutarse.
const isWatch = process.argv.includes('--watch') || process.argv.includes('-w');

export default defineConfig({
  root: 'src/site/client',
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: '../../public',
    emptyOutDir: true,
    watch: isWatch
      ? {
          chokidar: {
            usePolling: true,
            interval: 300,
          },
        }
      : null,
  },
});
