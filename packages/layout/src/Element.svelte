<script lang="ts">
  import type { CSSObject } from '@emotion/css';
  import { css } from '@emotion/css';

  export let as = 'div';
  export let __label = '';
  export let __css: CSSObject = {};

  $: sallyLabelClass = __label ? `sally-${__label}` : '';

  $: className = css(__css);
  console.log($$restProps)
</script>

<svelte:element
  this={as}
  class="{sallyLabelClass} {className}"
  {...$$restProps}
>
  <slot />
</svelte:element>
