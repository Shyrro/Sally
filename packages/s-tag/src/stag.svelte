<script lang="ts">
  import { useStyle } from '@sally/theme-utils';
  import { Sally } from '@sally/layout';
  export let variant: string = '';
  let styles = useStyle('Tag', variant);
  let hello: string = 'Hello';
  // TODO: handle events

	function handleClick(event) {
    console.log('test', event)
  }
</script>

<Sally.Element
  __label="tag"
  as="button"
  __css={styles}>{hello}</Sally.Element>
