import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import transformerDirectives from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Unocss({
      extractors: [extractorSvelte],
      transformers: [transformerDirectives()]
    }),
    svelte(),
  ],
});
