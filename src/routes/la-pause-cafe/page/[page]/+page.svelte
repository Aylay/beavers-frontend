<script lang="ts">
  import { page } from '$app/state';

  import Header from "$lib/components/blocks/blog/Header.svelte";
  import Pagination from "$lib/components/blocks/blog/Pagination.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

	let articlesList = $state(page.data.articlesList);
	let pageNumber = $state<number>(page.data.pageNumber);
	const pageCount: number = page.data.pageCount;
	const siteURL = import.meta.env.VITE_SITE_URL

	const meta = {
		title: "Le blog des actualités digitales de l'agence Beavers",
		description: "Retrouvez dans notre blog des réflexions sur des catégories du digital comme le SEA, le Social Média, le SEO ou encore l'UX Design et plein d'autres. Tous les articles sont écrits par des érudits du digital de l'agence Beavers."
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

	$effect(() => {
		articlesList = page.data.articlesList
		pageNumber = page.data.pageNumber;
		setTimeout(() => {
			scrollToArticles()
		}, 200);
  });
</script>

<MetaFront {meta} />

<svelte:head>
	{#if pageNumber === 2}
		<link rel="prev" href="{siteURL}/la-pause-cafe" />
	{:else}
		<link rel="prev" href="{siteURL}/la-pause-cafe/page/{pageNumber - 1}" />
	{/if}
	{#if pageNumber !== pageCount}
		<link rel="next" href="{siteURL}/la-pause-cafe/page/{pageNumber + 1}" />
	{/if}
</svelte:head>

<div class="flex flex-col">
  <Header />
  <div id="articles-list" class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-32 lg:gap-14">
		{#each articlesList as article, i}
			<Article {article} {i} />
		{/each}
	</div>
	<Pagination {pageNumber} />
</div>