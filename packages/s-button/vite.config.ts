import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const globals = {
  'svelte/internal': 'svelte/internal',
  'svelte': 'svelte',
};

export default defineConfig({
  plugins: [
    svelte({ preprocess: sveltePreprocess() }),
  ],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'SButton',
      fileName: 's-button',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte/internal', 'svelte'],
      output: {
        globals
      },
    },
  },
});
