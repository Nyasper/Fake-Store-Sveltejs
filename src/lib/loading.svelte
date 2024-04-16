<script lang="ts">
  import { loading } from ".";
	import { navigating } from '$app/stores';
  import { Progressbar} from 'flowbite-svelte';
	import { sineOut } from 'svelte/easing';
	import { onNavigate } from "$app/navigation";

	$: $loading = !!$navigating
  let progress = 0;

  	onNavigate(({to})=>{
		progress = 100
	})
</script>
{#if $loading}
<Progressbar
  {progress}
  animate
  tweenDuration={400}
  easing={sineOut}
  size="h-2"
  class="mb-8"
/>
{/if}