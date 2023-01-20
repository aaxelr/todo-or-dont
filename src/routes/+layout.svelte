<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="container">
	<slot />
</main>

<style>
	main {
		margin-top: 150px;
	}

	@media (max-width: 575px) {
		main {
			margin-top: 200px;
		}
	}
</style>
