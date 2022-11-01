---
to: packages/<%=h.changeCase.paramCase(name)%>/vite.config.ts
---

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
  plugins: [
    svelte({ preprocess: sveltePreprocess() }),
  ],
  build: {
    lib: {
      entry: 'index.ts',
      name: '<%=h.changeCase.pascalCase(name)%>',
      fileName: '<%=h.changeCase.paramCase(name)%>',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte/internal', 'svelte'],
    },
  },
});
