<script lang="ts">
	export let meta: any;

	const strapiURL = import.meta.env.VITE_STRAPI_URL;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta property="og:title" content={meta.title} />
	<meta property="twitter:title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta property="og:description" content={meta.description} />
	<meta property="twitter:description" content={meta.description} />
	<meta property="og:type" content="article" />
	{#if meta.ogImage && meta.ogImage.data}
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="og:image" content="{strapiURL}{meta.ogImage.data.attributes.url}" />
		<meta property="twitter:image" content="{strapiURL}{meta.ogImage.data.attributes.url}" />
		<meta property="og:image:width" content={meta.ogImage.data.attributes.width} />
		<meta property="og:image:height" content={meta.ogImage.data.attributes.height} />
	{/if}
</svelte:head>
