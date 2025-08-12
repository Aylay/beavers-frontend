<script lang="ts">
  import { page } from '$app/stores';
  import Header from "$lib/components/blocks/blog/HeaderCat.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import Meta from '$lib/components/utilities/Meta.svelte';
	import Pagination from "$lib/components/blocks/blog/Pagination.svelte";
  
  let content: any = $page.data.content.attributes;
	let articlesList : Array<any> = $page.data.articlesList;
	let pageCount : number = $page.data.pageCount;
	const siteURL = import.meta.env.VITE_SITE_URL
  
  $: {
    content = $page.data.content.attributes
		articlesList = $page.data.articlesList;
		pageCount = $page.data.pageCount;
	}

	let words: Array<string> = []
	for (const word of content.words) {
		words.push(word.text)
	}
</script>

<Meta meta={content.meta} />

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={content.title}
		href="{siteURL}/flux-articles-{content.slug}.xml"
	/>
	{#if pageCount > 1}
	<link rel="next" href="{siteURL}/la-pause-cafe/{content.slug}/page/2" />
	{/if}
	
</svelte:head>

<div class="flex flex-col">
  <Header title={content.title} subTitle={content.subTitle} {words} intro={content.intro} />
	{#if articlesList && articlesList.length > 0}
  <div class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-32 lg:gap-14">
		{#each articlesList as article, i}
			<Article {article} {i} />
		{/each}
	</div>
	{/if}
	{#if pageCount > 1}
	<Pagination slug={content.slug} />
	{/if}
</div>