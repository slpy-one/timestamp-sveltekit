<script>
	import { page } from '$app/stores'

	const navButton = `p-4 hover:opacity-60 hover:bg-ctp-overlay0 hover:text-ctp-text`
	const activeButton = `p-4 opacity-80 hover:opacity-80 bg-ctp-overlay0 text-ctp-text`
</script>

<header>
	<nav class="w-full fixed top-0 flex flex-row my-4">
		<div class="w-full justify-start text-left">
			{#if $page.url.pathname === '/'}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class={activeButton}> SLPY TimeStamp </a>
			{:else}
				<a href="/" class={navButton}> SLPY TimeStamp </a>
			{/if}
		</div>
		<div class="w-full justify-end text-right">
			{#if $page.url.pathname === '/about'}
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a href="#" class={activeButton}> About </a>
			{:else}
				<a href="/about" class={navButton}> About </a>
			{/if}
		</div>
	</nav>
</header>

<style>
</style>
