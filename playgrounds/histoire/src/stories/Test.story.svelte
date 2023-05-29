<!-- Meow.story.svelte -->
<script lang="ts">
  import type { Hst } from "@histoire/plugin-svelte";
  import { Tag } from "@sally/s-tag"
  export let Hst: Hst
</script>

<Hst.Story title="Tags">
  <Hst.Variant title="default">
    <Tag on:click={(e) => console.log('my super event', e)}>
      Simple Tag
    </Tag>
  </Hst.Variant>

  <Hst.Variant title="outline">
    <Tag variant="outline">
      Outline Tag
    </Tag>
  </Hst.Variant>
</Hst.Story>
