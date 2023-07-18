<script lang="ts">
  import { page } from '$app/stores';
  import Header from "$lib/components/blocks/blog/Header.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

	const articlesList: any = $page.data.articlesList;

	const meta = {
		title: "Tous les Cas agence de l'agence digitale Beavers",
		description: "Voici une présentation de tous les case studies de l'agence digitale Beavers, spécialisée en création de sites internet et marketing digital."
	}
</script>

<MetaFront {meta} />

<div class="flex flex-col">
  <Header />
  <div class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-14">
		{#each articlesList as article, i}
			<Article {article} {i} />
		{/each}
	</div>
</div>