<script lang="ts">
	let currentDate = new Date();
</script>

<div class="bg-bright py-8 max-lg:mb-24 lg:px-8">
	<div class="big-container flex gap-8 max-lg:flex-wrap lg:justify-center">
		<p class="text-[1.4rem] leading-[2.4rem] text-black">
			© 2019 - {currentDate.getFullYear()} Tous droits réservés par Beavers
		</p>
		<p class="text-[1.4rem] leading-[2.4rem] text-black max-lg:hidden">|</p>
		<a
			href="/mentions-legales"
			title="Les mentions légales de Beavers"
			class="text-[1.4rem] leading-[2.4rem] text-black hover:underline"
		>
			Mentions légales
		</a>
		<p class="text-[1.4rem] leading-[2.4rem] text-black">|</p>
		<a
			href="/politique-rgpd"
			title="La politique RGPD de Beavers"
			class="text-[1.4rem] leading-[2.4rem] text-black hover:underline"
		>
			Politique RGPD
		</a>
	</div>
</div>
