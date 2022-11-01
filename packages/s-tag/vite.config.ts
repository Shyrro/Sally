import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const globals = {
  'svelte/internal': 'svelte/internal',
  'svelte': 'svelte',
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
  ],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'STag',
      fileName: 's-tag',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte', 'svelte/internal'],
      output: {
        globals
      }
    },
  },
});
