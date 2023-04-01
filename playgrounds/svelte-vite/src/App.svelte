<script lang="ts">
  import { Tag } from '@sally/s-tag';
  import { Router, Route } from 'svelte-navigator';

  import Sidebar from './lib/Sidebar.svelte';
</script>

<Router>
  <main class="flex w-full h-full">
    <Sidebar />
    <div class="flex items-center justify-center w-full">
      <Route path="tag">
        <Tag />
      </Route>
      <Route path="button">
        <button>click</button>
      </Route>
    </div>
  </main>
</Router>
