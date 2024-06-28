<script lang="ts">
	import { afterUpdate } from 'svelte';
  import { page } from '$app/stores';

  import Header from "$lib/components/blocks/blog/HeaderCat.svelte";
  import Pagination from "$lib/components/blocks/blog/Pagination.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import Meta from '$lib/components/utilities/Meta.svelte';
  
	let content: any = $page.data.content.attributes;
	let articlesList: any = $page.data.articlesList;
	let pageNumber: number = $page.data.pageNumber;
	let pageCount: number = $page.data.pageCount;
	const siteURL = import.meta.env.VITE_SITE_URL
  
  $: {
    content = $page.data.content.attributes
    articlesList = $page.data.articlesList
		pageNumber = $page.data.pageNumber;
		pageCount = $page.data.pageCount;
	}

	let words: Array<string> = []
	for (const word of content.words) {
		words.push(word.text)
	}

	function scrollToArticles() {
		let articlesDiv: any;
		articlesDiv = document.getElementById('articles-list');

		let offsetTop = 0;
		while (articlesDiv) {
			offsetTop += articlesDiv.offsetTop;
			articlesDiv = articlesDiv.offsetParent;
		}

		window.scrollTo({
			top: offsetTop,
			behavior: 'smooth'
		});
	}

	afterUpdate(() => {
		setTimeout(() => {
			scrollToArticles()
		}, 200);
  });
</script>

<Meta meta={content.meta} />

<svelte:head>
	{#if pageNumber === 2}
		<link rel="prev" href="{siteURL}/la-pause-cafe/{content.slug}" />
	{:else}
		<link rel="prev" href="{siteURL}/la-pause-cafe/{content.slug}/page/{pageNumber - 1}" />
	{/if}
	{#if pageNumber !== pageCount}
		<link rel="next" href="{siteURL}/la-pause-cafe/{content.slug}/page/{pageNumber + 1}" />
	{/if}
</svelte:head>

<div class="flex flex-col">
  <Header title={content.title} subTitle={content.subTitle} {words} intro={content.intro} />
	{#if articlesList && articlesList.length > 0}
  <div id="articles-list" class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-32 lg:gap-14">
		{#each articlesList as article, i}
			<Article {article} {i} />
		{/each}
	</div>
	{/if}
	<Pagination {pageNumber} slug={content.slug} />
</div>