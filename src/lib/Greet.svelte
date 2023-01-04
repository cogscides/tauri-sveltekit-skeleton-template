<script lang="ts">
  import { invoke } from '@tauri-apps/api/tauri'

  let name = ''
  let greetMsg = ''

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    greetMsg = await invoke('greet', { name })
  }

  const handleKeyup = (event: any) => {
    if (event.code == 'Enter') {
      event.preventDefault()
      greet()
      return false
    }
  }
</script>

<div>
  <div class="row">
    <input
      type="text"
      id="greet-input"
      placeholder="Enter a name..."
      bind:value={name}
      on:keyup|preventDefault={handleKeyup}
    />
    <button
      class="btn btn-filled-primary btn-lg w-40 text-white"
      on:click={greet}
    >
      Greet
    </button>
  </div>
  <p>{greetMsg}</p>
</div>
