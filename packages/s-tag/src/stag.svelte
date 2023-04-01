<script lang="ts">
  import { useStyle } from '@sally/theme-utils';
  import { Element } from '@sally/layout';
  export let variant: string = '';
  let styles = useStyle('Tag', variant);
  let hello: string = 'Hello';
  // TODO: handle events

  function handleClick(event) {
    console.log('test', event);
  }
</script>

<Element
  __label="tag"
  as="button"
  __css={styles}
  onClick={(event) => handleClick(event)}>{hello}</Element
>
