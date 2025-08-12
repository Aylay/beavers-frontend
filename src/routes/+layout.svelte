<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	import Newsletter from '$lib/components/blocks/layout/Newsletter.svelte';
	import Footer from '$lib/components/blocks/layout/Footer.svelte';
	import Subfooter from '$lib/components/blocks/layout/Subfooter.svelte';
	import Header from '$lib/components/blocks/layout/Header.svelte';
	import GTM from '$lib/components/utilities/GTM.svelte';

	const noLayout: Array<string> = ['/tout-savoir-sur-beavers'];
	const siteURL = import.meta.env.VITE_SITE_URL;
	const key = import.meta.env.VITE_RECAPTCHA;
</script>

{#if $page.url.host.includes('beavers-agency.fr') && !$page.url.host.includes('preprod.beavers-agency.fr')}
	<GTM gtmId="GTM-W6ZCCTM" />
{/if}

<svelte:head>
	<meta property="og:site_name" content="Beavers" />
	<meta property="og:locale" content="fr" />
	<link rel="canonical" href={siteURL + $page.url.pathname} />
	<meta property="og:url" content={siteURL + $page.url.pathname} />
	<script src="https://www.google.com/recaptcha/api.js?render={key}" defer></script>

	{#if $page.url.host.includes('preprod.beavers-agency.fr')}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>

<div class="overflow-hidden">
	{#if !noLayout.includes($page.route.id ?? '')}
		<Header />
	{/if}
	<slot />
	{#if !noLayout.includes($page.route.id ?? '')}
		<Newsletter />
		<Footer />
		<Subfooter />
	{/if}
</div>
