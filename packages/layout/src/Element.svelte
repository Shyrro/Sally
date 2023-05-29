<script lang="ts">
  import type { CSSObject } from '@emotion/css';
  import { css } from '@emotion/css';
  import { forwardEventsBuilder } from './forwardEventsBuilder';
  import { get_current_component } from 'svelte/internal';

  // Props
  export let as = 'div';
  export let __label = '';
  export let __css: CSSObject = {};
  export let component = null


  const forwardEvents = forwardEventsBuilder(component || get_current_component());

  // State
  $: sallyLabelClass = __label ? `sally-${__label}` : '';
  $: className = css(__css);
</script>

<svelte:element
  this={as}
  class="{sallyLabelClass} {className}"
  use:forwardEvents  
  {...$$restProps}
>
  <slot />
</svelte:element>
