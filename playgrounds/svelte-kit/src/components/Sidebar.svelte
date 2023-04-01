<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="w-80 bg-red flex flex-col">
  <a
    aria-current={$page.url.pathname === '/tag' ? 'page' : undefined}
    href="/tag"
  >
    Tag
  </a>
  <a
    aria-current={$page.url.pathname === '/button' ? 'page' : undefined}
    href="/button">Button</a
  >
</nav>
