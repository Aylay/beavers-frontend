<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores'

	import Newsletter from '$lib/components/blocks/layout/Newsletter.svelte';
	import Footer from '$lib/components/blocks/layout/Footer.svelte';
	import Subfooter from '$lib/components/blocks/layout/Subfooter.svelte';
	import Header from '$lib/components/blocks/layout/Header.svelte';

	const noLayout: Array<string> = ['/tout-savoir-sur-beavers'];
</script>

<div class="overflow-hidden">
	{#if !noLayout.includes($page.route.id)}
	<Header />
	{/if}
	<slot />
	{#if !noLayout.includes($page.route.id)}
	<Newsletter />
	<Footer />
	<Subfooter />
	{/if}
</div>
