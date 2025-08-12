<script lang="ts">
	import { page } from '$app/stores';

	import Facebook from '$lib/assets/svg/Facebook.svelte';
	import Linkedin from '$lib/assets/svg/Linkedin.svelte';
	import Pinterest from '$lib/assets/svg/Pinterest.svelte';
	import WhatsApp from '$lib/assets/svg/WhatsApp.svelte';
	import SvelteMarkdown from 'svelte-markdown';

	const strapiURL = import.meta.env.VITE_STRAPI_URL;

	const mdOptions = {
		breaks: true,
		gfm: true,
		headerIds: false
	};

	export let author: any;
	let url: string = $page.url.href;

	$: url = $page.url.href;
</script>

<div class="big-container flex max-lg:flex-col max-lg:gap-16">
	<div class="flex flex-1 gap-10 border-l-jagger max-lg:gap-6 lg:border-l-[2px] lg:pr-20 lg:pl-10">
		<div class="w-[12.5rem] max-lg:w-32">
			<img
				src={strapiURL + author.img.data.attributes.url}
				alt={author.img.data.attributes.alternativeText
					? author.img.data.attributes.alternativeText
					: author.name}
				class="h-auto w-full"
			/>
		</div>
		<div class="flex-1">
			<p class="mb-2 text-4 font-semibold text-seance">
				{author.name}
			</p>
			<p class="mb-10 font-highlight text-4 text-bright max-lg:mb-2">
				{author.job}
			</p>
			<p class="content-style">
				<SvelteMarkdown source={author.text} options={mdOptions} />
			</p>
		</div>
	</div>
	<div class="flex-1 border-l-jagger lg:border-l-[2px] lg:pl-10">
		<p class="mb-2 text-4 font-semibold text-seance">Partagez notre article</p>
		<p class="mb-10 font-highlight text-4 text-bright">autour de vous !</p>
		<div class="flex gap-8 lg:gap-4">
			<a
				href="https://www.linkedin.com/sharing/share-offsite/?url={url}"
				target="_blank"
				title="Partager l'article sur Linkedin"
				class="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-colors hover:bg-seance max-lg:h-20 max-lg:w-20"
			>
				<Linkedin newClass="w-10 lg:w-7 h-auto" />
			</a>
			<a
				href="https://pinterest.com/pin/create/button/?url={url}"
				target="_blank"
				title="Partager l'article sur Pinterest"
				class="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-colors hover:bg-seance max-lg:h-20 max-lg:w-20"
			>
				<Pinterest newClass="w-auto h-10 lg:h-7" />
			</a>
			<a
				href="https://www.facebook.com/sharer/sharer.php?u={url}"
				target="_blank"
				title="Partager l'article sur Facebook"
				class="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-colors hover:bg-seance max-lg:h-20 max-lg:w-20"
			>
				<Facebook newClass="w-auto h-10 lg:h-7" />
			</a>
			<a
				href="https://api.whatsapp.com/send?text={url}"
				target="_blank"
				title="Partager l'article sur WhatsApp"
				class="flex h-14 w-14 items-center justify-center rounded-full bg-white transition-colors hover:bg-seance max-lg:h-20 max-lg:w-20"
			>
				<WhatsApp newClass="w-auto h-10 lg:h-7" />
			</a>
		</div>
	</div>
</div>
