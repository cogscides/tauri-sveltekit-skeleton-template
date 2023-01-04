<script>
  import Greet from '$lib/Greet.svelte'
  import { GradientHeading } from '@skeletonlabs/skeleton'
</script>

<div class="container mx-auto p-8 space-y-8 flex-col h-full">
  <GradientHeading
    tag="h1"
    direction="bg-gradient-to-br"
    from="from-primary-500"
    to="to-secondary-500"
    class="text-4xl font-bold"
  >
    Powered by Tauri + Vite + Sveltekit + Skeleton
  </GradientHeading>

  <h1>Welcome to Tauri!</h1>

  <div class="row">
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank" rel="noreferrer">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://kit.svelte.dev" target="_blank" rel="noreferrer">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <p>Click on the Tauri, Vite, and Svelte logos to learn more.</p>

  <div class="row">
    <Greet />
  </div>
</div>

<style>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00);
  }
</style>
