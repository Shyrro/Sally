<script lang="ts">
  import type { CSSObject } from '@emotion/css';
  import { css } from '@emotion/css';
  import { attrs } from './attrs';
  import { extractEvents } from '@sally/theme-utils';

  // Props
  export let as = 'div';
  export let __label = '';
  export let __css: CSSObject = {};

  // State
  $: ({events, rest} = extractEvents($$restProps))
  $: sallyLabelClass = __label ? `sally-${__label}` : '';
  $: className = css(__css);
</script>

<svelte:element
  this={as}
  class="{sallyLabelClass} {className}"
  use:attrs={events}
  {...rest}
>
  <slot />
</svelte:element>
