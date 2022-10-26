<script lang="ts">
  import { useStyle } from '@sally/theme-utils';
  let className = useStyle("Tag")
  let hello: string = 'Hello there';
</script>

<div class={className}>Test component : {hello}</div>
