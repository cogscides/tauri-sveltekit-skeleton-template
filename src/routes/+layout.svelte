<script>
  import '../app.postcss'
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css' // add your theme here instead
  import '@skeletonlabs/skeleton/styles/all.css' // https://www.skeleton.dev/guides/styling
  import '../app.postcss' // add your own styles here

  import { AppShell } from '@skeletonlabs/skeleton'
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
  <svelte:fragment slot="sidebarLeft">
    <!-- Insert the list: -->
    <nav class="list-nav">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <!-- --- -->
  </svelte:fragment>
  <slot />
</AppShell>
