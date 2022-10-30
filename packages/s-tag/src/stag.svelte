<script lang="ts">
  import { useStyle } from '@sally/theme-utils';
  export let variant: string = '';
  console.log(variant)
  let className = useStyle("Tag", variant)
  let hello: string = 'Hello there';
</script>

<div class={className}>Test component : {hello}</div>
