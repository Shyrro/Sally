---
to: packages/<%=h.changeCase.paramCase(name)%>/tsconfig.node.json
---

{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node"
  },
  "include": ["vite.config.ts"]
}
