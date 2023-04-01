import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import transformerDirectives from '@unocss/transformer-directives'
import { svelte } from '@sveltejs/vite-plugin-svelte';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-expect-error
    Unocss({
      extractors: [extractorSvelte],
			// @ts-expect-error
      transformers: [transformerDirectives()],
    }),
    svelte(),
  ],
});
