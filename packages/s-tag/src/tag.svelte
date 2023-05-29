<script lang="ts">
  import { useStyle } from '@sally/theme-utils';
  import { Element } from '@sally/layout';
  import { get_current_component } from 'svelte/internal';
  export let variant: string = '';
  let styles = useStyle('Tag', variant);
  let hello: string = 'Hello';  

  function handleClick(event) {
    console.log('test', event);
  }
</script>

<Element
  __label="tag"
  as="span"
  __css={styles}
  component={get_current_component()}>
  <slot />
</Element>
