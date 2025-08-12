<script lang="ts">
	export let isArticle: boolean = false;
</script>

<div class="{isArticle ? 'bg-bright' : 'bg-seance'} py-16 lg:py-20">
	<div class="big-container flex justify-between max-lg:flex-col max-lg:gap-8 lg:items-center">
		{#if isArticle}
			<p class="text-3 text-jaguar lg:w-3/5">
				Recevez nos derniers <span
					class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-seance">articles</span
				> dans notre newsletter LinkedIn.
			</p>
		{:else}
			<p class="text-3 text-white lg:w-3/5">
				Inscrivez-vous à notre <span
					class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright"
					>newsletter</span
				> mensuelle sur LinkedIn.
			</p>
		{/if}
		<div class="flex lg:w-2/5 lg:justify-end">
			<a
				href="https://www.linkedin.com/newsletters/la-mensuelle-de-beavers-7176573139529670657/"
				target="_blank"
				title="Inscription à notre newsletter LinkedIn"
				class="flex items-center gap-8 rounded-[3rem] bg-jaguar px-10 py-4 text-6 font-bold transition-colors duration-500 hover:bg-white hover:text-seance {isArticle
					? 'text-white'
					: 'text-bright'}"
			>
				S'inscrire
			</a>
		</div>
	</div>
</div>
