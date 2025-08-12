<script lang="ts">
	export let meta: any;

	const siteURL = import.meta.env.VITE_SITE_URL;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta property="og:title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:type" content="article" />
	{#if meta.image}
		<meta property="og:image" content="{siteURL}{meta.image}" />
		<meta property="twitter:image" content="{siteURL}{meta.image}" />
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}
</svelte:head>
