<script lang="ts">
  import { page } from '$app/stores';
  import Header from "$lib/components/blocks/blog/Header.svelte";
	import Pagination from "$lib/components/blocks/blog/Pagination.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

	const articlesList: any = $page.data.articlesList;
	const siteURL = import.meta.env.VITE_SITE_URL

	const meta = {
		title: "Le blog des actualités digitales de l'agence Beavers",
		description: "La Pause Café, le média digital de Beavers : conseils, tendances et stratégies pour réussir en SEO, SEA, publicité et marketing digital.",
		image: '/img/og-beavers-pause-cafe.png'
	}
</script>

<MetaFront {meta} />

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Le blog des actualités digitales de l'agence Beavers"
		href="{siteURL}/flux-articles.xml"
	/>
	<link rel="next" href="{siteURL}/la-pause-cafe/page/2" />
</svelte:head>

<div class="flex flex-col">
  <Header />
  <div class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-32 lg:gap-14">
		{#each articlesList as article, i}
			<Article {article} {i} />
		{/each}
	</div>
	<Pagination />
</div>