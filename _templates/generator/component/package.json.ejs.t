---
to: packages/<%=h.changeCase.paramCase(name)%>/package.json
---
{
  "name": "<%= '@sally/' + h.changeCase.paramCase(name)%>",
  "version": "0.0.0",
  "main": "<%= './dist/' + h.changeCase.paramCase(name) +'.umd.cjs' %>",
  "module": "<%= './dist/' + h.changeCase.paramCase(name) +'.js' %>",
  "svelte": "<%= './dist/' + h.changeCase.paramCase(name) +'.js' %>",
  "author": "Shyrro <zsahmane@gmail.com>",
  "type": "module",
  "scripts": {
    "dev": "vite build --watch",
    "build": "pnpm check && vite build",
    "check": "svelte-check --tsconfig ./tsconfig.json"
  }
}
