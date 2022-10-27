---
to: packages/<%=h.changeCase.paramCase(name)%>/tsconfig.json
---

{
  "extends": "../../tsconfig.json",
  "include": ["src/**/*.d.ts", "src/**/*.ts", "src/**/*.js", "src/**/*.svelte"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
