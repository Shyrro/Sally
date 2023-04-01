import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
  plugins: [
    // @ts-expect-error
    Unocss({
      extractors: [extractorSvelte],
      // @ts-expect-error
      transformers: [transformerDirectives()],
    }),
    sveltekit(),
  ],
	ssr: {
		noExternal: ["@sally/s-tag", "@sally/theme-utils", "@sally/layout"]
	},
  optimizeDeps: {
  	include: ["@sally/s-tag", "@sally/theme-utils", "@sally/layout"]
  }
});
