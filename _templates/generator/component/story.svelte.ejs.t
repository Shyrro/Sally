---
to: playground/src/stories/<%=h.changeCase.paramCase(name)%>.story.svelte
---

<script lang="ts">
  import { <%=h.changeCase.pascalCase(name)%> } from '@sally/<%=h.changeCase.paramCase(name)%>';
  export let Hst;
</script>

<Hst.Story>
  <<%=h.changeCase.pascalCase(name)%> />
</Hst.Story>
