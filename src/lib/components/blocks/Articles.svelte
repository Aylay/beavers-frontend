<script lang="ts">
	import Line from './utilities/Line.svelte';
	import Title from './utilities/Title.svelte';
	import Cta from './utilities/CTA.svelte';
	import Article from './common/Article.svelte';

	export let titleFirst: string;
	export let titleSecond: string;
	export let newsUrl: string;
	export let articles: Array<any>;
</script>

<div class="big-container">
	<Line />
	<div class="flex max-lg:flex-col max-lg:gap-8 lg:items-end lg:justify-between">
		<div class="flex-1">
			<Title first={titleFirst} second={titleSecond} />
		</div>
		<Cta label="Voir tous les articles" href={newsUrl} type="transparent" />
	</div>
	<div class="mt-16 grid grid-cols-3 gap-14">
		{#each articles as article, i}
			<Article {article} {i} />
		{/each}
	</div>
</div>
