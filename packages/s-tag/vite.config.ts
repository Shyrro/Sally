import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import { presetAttributify, presetUno } from 'unocss'

const globals = {
  'svelte/internal': 'svelte/internal',
  'svelte': 'svelte',
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetAttributify({
          /* preset options */
        }),
        presetUno(),
        // ...custom presets
      ],
      extractors: [extractorSvelte],
    }),
    svelte({ preprocess: sveltePreprocess() }),
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
      external: ['svelte/internal', 'svelte'],
      output: {
        globals
      },
    },
  },
});
