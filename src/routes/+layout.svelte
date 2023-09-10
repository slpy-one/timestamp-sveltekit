<script>
	import Header from './Header.svelte'
	import './styles.css'
	import TW_CLASS from '../constants/tailwind_class'
</script>

<div class="bg-ctp-base text-ctp-text min-h-screen w-full">
	<Header />

	<main>
		<slot />
	</main>

	<footer
		class="w-full py-5 text-center fixed bottom-0 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"
	>
		<p>
			&copy; 2023
			<a href="https://github.com/slpy-one" target="_blank" class={TW_CLASS.link}>slpy one team.</a> All Right Reserved.
		</p>
	</footer>
</div>

<style>
</style>
