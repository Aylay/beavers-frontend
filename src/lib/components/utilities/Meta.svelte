<script lang="ts">
  export let meta: any;

  const strapiURL = import.meta.env.VITE_STRAPI_URL

  console.log
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="title" content={meta.title} />
  <meta property="og:title" content={meta.title} />
  <meta name="description" content={meta.description} />
  <meta property="og:description" content={meta.description} />
	<meta property="og:type" content="article" />
  {#if meta.image && meta.image.data}
    <meta
      property="og:image"
      content="{strapiURL}{meta.image.data.attributes.url}"
    />
    <meta
      property="og:image:width"
      content={meta.image.data.attributes.width}
    />
    <meta
      property="og:image:height"
      content={meta.image.data.attributes.height}
    />
  {/if}
</svelte:head>