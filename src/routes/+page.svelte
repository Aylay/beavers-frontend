<script lang="ts">
	import { page } from '$app/stores';

	import Articles from '$lib/components/blocks/Articles.svelte';
	import Confidence from '$lib/components/blocks/hp/Confidence.svelte';
	import Manifesto from '$lib/components/blocks/hp/Manifesto1.svelte';
	import Manifesto2 from '$lib/components/blocks/hp/Manifesto2.svelte';
	import MarketingDigital2 from '$lib/components/blocks/hp/MarketingDigital2.svelte';
	import MarketingDigital1 from '$lib/components/blocks/hp/MarketingDigital1.svelte';
	import Why from '$lib/components/blocks/hp/Why.svelte';
	import Header from '$lib/components/blocks/hp/Header.svelte';
	import Support from '$lib/components/blocks/hp/Support.svelte';
	import UseCases from '$lib/components/blocks/UseCases.svelte';
	import Testimonies from '$lib/components/blocks/hp/Testimonies.svelte';
	import LDTag from '$lib/components/utilities/LDTag.svelte';

	const titleFirst = 'Les 3 derniers articles<br />de la';
	const titleSecond = 'pause café';
	const newsUrl = '/la-pause-cafe';

	const schema = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'CollectionPage',
				name: 'Beavers',
				url: 'https://beavers-agency.fr/',
				'@id': 'https://beavers-agency.fr#collectionpage',
				description:
					"L'agence Beavers, spécialiste en marketing digital du secteur de l'habitat, vous propose des solutions adaptées pour répondre à vos objectifs : de notoriété, de trafic et d'acquisition.",
				inLanguage: 'fr-FR',
				isPartOf: {
					'@type': 'WebSite',
					name: 'Beavers',
					url: 'https://beavers-agency.fr/',
					description:
						"L'agence Beavers, spécialiste en marketing digital du secteur de l'habitat, vous propose des solutions adaptées pour répondre à vos objectifs : de notoriété, de trafic et d'acquisition.",
					inLanguage: 'fr-FR',
					'@id': 'https://beavers-agency.fr#website'
				},
				breadcrumb: {
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Beavers',
							item: 'https://beavers-agency.fr'
						}
					]
				}
			},
			{
				'@type': 'Organization',
				'@id': 'https://beavers-agency.fr',
				name: 'Beavers',
				url: 'https://beavers-agency.fr/',
				legalName: 'Beavers SAS',
				slogan: 'Beavers, le digital à pleines dents !',
				description:
					"L'agence Beavers, spécialiste en marketing digital du secteur de l'habitat, vous propose des solutions adaptées pour répondre à vos objectifs : de notoriété, de trafic et d'acquisition.",
				email: 'les-castors@beavers-agency.fr',
				address: {
					'@type': 'PostalAddress',
					streetAddress: '28 rue de la font des anguilles',
					addressLocality: 'Roquebrune-sur-Argens, France',
					postalCode: '83520',
					addressCountry: 'FR',
					addressRegion: "Provence-Alpes-Côte d'Azur"
				},
				contactPoint: [
					{
						'@type': 'ContactPoint',
						email: 'les-castors@beavers-agency.fr',
						url: 'https://beavers-agency.fr/contactez-nous',
						telephone: '+33-664644470',
						contactType: 'customer service',
						contactOption: 'TollFree',
						availableLanguage: ['French', 'English'],
						hoursAvailable: [
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
								opens: '09:00',
								closes: '12:00'
							},
							{
								'@type': 'OpeningHoursSpecification',
								dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
								opens: '14:00',
								closes: '18:00'
							}
						]
					}
				],
				sameAs: [
					'https://www.linkedin.com/company/beavers-agency/',
					'https://www.facebook.com/beavers.agency/',
					'https://www.instagram.com/beavers.agency/',
					'https://www.tiktok.com/@beavers.agency',
					'https://www.pinterest.fr/beaversagency',
					'https://societe.com/societe/beavers-853663334.html',
					'https://www.infogreffe.fr/entreprise-societe/853663334-beavers-830322B017320000.html'
				],
				foundingDate: '2019',
				founders: [
					{
						'@type': 'Person',
						name: 'Lucas ATTALI',
						alternateName: 'Aylay',
						'@id': 'https://www.lucas-attali.me',
						url: 'https://www.lucas-attali.me',
						sameAs: [
							'https://www.facebook.com/lucas.attali',
							'https://twitter.com/LucasAttali',
							'https://www.instagram.com/aylllay',
							'https://www.linkedin.com/in/lucasattali',
							'https://github.com/Aylay'
						],
						image: [
							{
								'@type': 'ImageObject',
								contentUrl: 'https://www.lucas-attali.me/lucas-attali.jpeg'
							}
						],
						email: 'lattali@beavers-agency.fr',
						gender: 'Male',
						birthDate: '1988-09-20',
						birthPlace: 'Paris, France',
						nationality: 'France',
						alumniOf: [
							{
								'@type': 'CollegeOrUniversity',
								name: "Institut de l'Internet et du Multimédia",
								sameAs: 'https://www.iim.fr/'
							}
						],
						colleague: [
							{
								'@type': 'Person',
								'@id': 'https://marie-claire-blaizot.me'
							}
						],
						jobTitle: 'Président & Directeur de Production'
					},
					{
						'@type': 'Person',
						name: 'Marie-Claire BLAIZOT',
						'@id': 'https://marie-claire-blaizot.me',
						url: 'https://marie-claire-blaizot.me',
						jobTitle: 'Directrice Générale & Directrice Média',
						birthDate: '1988-06-03',
						birthPlace: 'Le Mans, France',
						nationality: 'France',
						gender: 'Female',
						sameAs: ['https://www.linkedin.com/in/marie-claire-blaizot-7332192b/'],
						email: 'mcblaizot@beavers-agency.fr',
						image: [
							{
								'@type': 'ImageObject',
								contentUrl: 'https://www.marie-claire-blaizot.me/mcb.jpg'
							}
						],
						colleague: [
							{
								'@type': 'Person',
								'@id': 'https://www.lucas-attali.me'
							}
						]
					}
				],
				logo: {
					'@type': 'ImageObject',
					url: 'https://beavers-agency.fr/logo-beavers.png'
				}
			}
		]
	};

	const siteURL = import.meta.env.VITE_SITE_URL;
</script>

<svelte:head>
	<title>Beavers, l'agence marketing digital du secteur de l'habitat</title>
	<meta name="title" content="Beavers, l'agence marketing digital du secteur de l'habitat" />
	<meta property="og:title" content="Beavers, l'agence marketing digital du secteur de l'habitat" />
	<meta
		property="twitter:title"
		content="Beavers, l'agence marketing digital du secteur de l'habitat"
	/>
	<meta
		name="description"
		content="Beavers accompagne les marques du secteur habitat avec des stratégies digitales : SEA, social media, contenu optimisé et sites performants."
	/>
	<meta
		property="og:description"
		content="Beavers accompagne les marques du secteur habitat avec des stratégies digitales : SEA, social media, contenu optimisé et sites performants."
	/>
	<meta
		property="twitter:description"
		content="Beavers accompagne les marques du secteur habitat avec des stratégies digitales : SEA, social media, contenu optimisé et sites performants."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{siteURL}/img/og-beavers.png" />
	<meta property="twitter:image" content="{siteURL}/img/og-beavers.png" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Le blog des actualités digitales de l'agence Beavers"
		href="{siteURL}/flux-articles.xml"
	/>
</svelte:head>

<LDTag {schema} />

<div class="flex flex-col gap-48 pb-48 max-lg:px-4 lg:gap-96 lg:pb-96">
	<Header />
	<MarketingDigital1 />
	<MarketingDigital2 />
	<Why />
	<Confidence />
	<UseCases cases={$page.data.useCasesList} />
	<Manifesto />
	<Manifesto2 />
	<Testimonies reviewsList={$page.data.reviewsList} />
	<Support />
	<Articles articles={$page.data.articlesList} {titleFirst} {titleSecond} {newsUrl} />
</div>
