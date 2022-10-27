---
to: packages/<%=h.changeCase.paramCase(name)%>/src/<%=h.changeCase.paramCase(name)%>.svelte
---
<script lang="ts" context="module">
  export const indentifier:string = "id";
</script>
<script lang="ts">
  let hello: string = '<%=h.changeCase.paramCase(name)%>';
</script>

<div>{hello}</div>
