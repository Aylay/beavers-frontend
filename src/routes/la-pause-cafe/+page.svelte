<script lang="ts">
  import { page } from '$app/stores';
  import Header from "$lib/components/blocks/blog/Header.svelte";
	import Article from '$lib/components/blocks/common/Article.svelte';
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

	const articlesList: any = $page.data.articlesList;

	const meta = {
		title: "Le blog des actualités digitales de l'agence Beavers",
		description: "Retrouvez dans notre blog des réflexions sur des catégories du digital comme le SEA, le Social Média, le SEO ou encore l'UX Design et plein d'autres. Tous les articles sont écrits par des érudits du digital de l'agence Beavers."
	}
</script>

<MetaFront {meta} />

<div class="flex flex-col">
  <Header />
  <div class="big-container py-32 lg:py-64 grid max-lg:grid-cols-1 grid-cols-3 gap-32 lg:gap-14">
		{#each articlesList as article, i}
			<Article {article} {i} />
		{/each}
	</div>
</div>