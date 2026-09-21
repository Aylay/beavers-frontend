<script lang="ts">
	import Title from '$lib/components/blocks/utilities/Title.svelte';
	import Line from '$lib/components/blocks/utilities/Line.svelte';
</script>

<div class="big-container flex gap-32 flex-col lg:items-center lg:gap-40">
	<div>
    <Line />
		<Title first="Deux métiers,<br />" second="une seule équipe" />
		<p class="mt-8 text-6 lg:w-2/3">
			Beavers réunit l'achat média et la production web. Vos campagnes et les pages qui les reçoivent
			sont pensées par les mêmes personnes, ce qui évite les pertes entre le clic et la conversion.
		</p>
	</div>

	<div class="flex gap-20 max-lg:flex-col lg:gap-40">
		<div class="flex flex-1 flex-col gap-8">
			<h3 class="text-5 text-bright">Paid media et acquisition</h3>
			<ul class="flex flex-col gap-6 text-6">
				<li><a href="/l-agence-beavers/agence-publicite-digitale" title="Agence de publicité digitale Beavers" class="font-semibold text-electric underline transition-colors hover:text-bright">Notre accompagnement en publicité digitale</a> : stratégie média, répartition du budget et pilotage de vos leviers.</li>
				<li><a href="/l-agence-beavers/agence-google-ads" title="Agence Google Ads Beavers" class="font-semibold text-electric underline transition-colors hover:text-bright">Agence Google Ads</a> : campagnes pilotées au coût par lead ou au ROAS.</li>
				<li><a href="/l-agence-beavers/agence-social-ads" title="Agence Social Ads Beavers" class="font-semibold text-electric underline transition-colors hover:text-bright">Agence Social Ads</a> : Meta, TikTok, Pinterest et LinkedIn orchestrés selon vos objectifs.</li>
				<li><a href="/l-agence-beavers/agence-facebook-ads" title="Agence Facebook Ads Beavers" class="font-semibold text-electric underline transition-colors hover:text-bright">Campagnes Facebook et Instagram</a> : structure de compte, créations et tracking server-side.</li>
				<li><a href="/l-agence-beavers/agence-linkedin-ads" title="Agence LinkedIn Ads Beavers" class="font-semibold text-electric underline transition-colors hover:text-bright">Publicité sur LinkedIn</a> : des audiences ciblées par fonction et par secteur.</li>
				<li><a href="/l-agence-beavers/agence-pinterest-ads" title="Agence Pinterest Ads Beavers" class="font-semibold text-electric underline transition-colors hover:text-bright">Publicité sur Pinterest</a> : pour les marques qui vendent de l'inspiration, en maison, mode ou beauté.</li>
			</ul>
		</div>

		<div class="flex flex-1 flex-col gap-8">
			<h3 class="text-5 text-bright">Production web</h3>
			<ul class="flex flex-col gap-6 text-6">
				<li><a href="/production-digitale/creation-refonte-site-internet" title="Création et refonte de site internet" class="font-semibold text-electric underline transition-colors hover:text-bright">Création et refonte de site internet</a> : sites vitrines rapides, jusqu'à 99 % au score Lighthouse.</li>
				<li><a href="/production-digitale/seo-referencement-naturel" title="Référencement naturel SEO" class="font-semibold text-electric underline transition-colors hover:text-bright">Référencement naturel</a> : audit technique, contenus et netlinking.</li>
			</ul>
		</div>
	</div>
</div>
