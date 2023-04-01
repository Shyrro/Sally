<script lang="ts">
  import Sidebar from '../components/Sidebar.svelte';
  import 'uno.css';
</script>

<main class="flex w-full h-full">
  <Sidebar />
  <div class="flex items-center justify-center w-full">
    <slot />
  </div>
</main>
<style>
  @import "../../../shared/css/app.css";
</style>
