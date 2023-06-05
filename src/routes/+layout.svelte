<script lang="ts">
	import '../app.css';

	import Newsletter from '$lib/components/blocks/layout/Newsletter.svelte';
	import Footer from '$lib/components/blocks/layout/Footer.svelte';
	import Subfooter from '$lib/components/blocks/layout/Subfooter.svelte';
	import Header from '$lib/components/blocks/layout/Header.svelte';
</script>

<div class="overflow-hidden">
	<Header />
	<slot />
	<Newsletter />
	<Footer />
	<Subfooter />
</div>
