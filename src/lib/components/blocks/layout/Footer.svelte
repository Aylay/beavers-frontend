<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import WhatsApp from '$lib/assets/svg/WhatsApp.svelte';
	import Tel from '$lib/assets/svg/Tel.svelte';
	import Mail from '$lib/assets/svg/Mail.svelte';
	import Linkedin from '$lib/assets/svg/Linkedin.svelte';
	import Instagram from '$lib/assets/svg/Instagram.svelte';
	import Facebook from '$lib/assets/svg/Facebook.svelte';
	import Pinterest from '$lib/assets/svg/Pinterest.svelte';
	import GooglePartner from '$lib/assets/svg/GooglePartner.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<footer class="bg-rock py-16 lg:py-32" use:inview={options} on:inview_change={handleChange}>
	<div class="big-container">
		<div class="flex flex-col gap-16">
			<div class="flex w-full items-center justify-between max-lg:flex-col max-lg:gap-8">
				<p class="text-3 text-seance lg:w-1/2">
					Bâtissons <span
						class="font-highlight text-[5.7rem] leading-[3rem] font-normal text-bright"
						>ensemble</span
					> votre stratégie digitale
				</p>
				<div class="flex items-center gap-8 max-lg:flex-col lg:justify-end">
					<div id="wcb" class="carbonbadge wcb-d"></div>
					<div class="flex items-center gap-8 lg:justify-end">
						<a
							href="https://www.google.com/partners/agency?id=9719801224"
							target="_blank"
							title="Beavers est Google Partner"
							class="inline-block lg:hover:animate-shake"
						>
							<GooglePartner
								newClass="max-w-[10rem] h-auto {isInView ? 'animate-fade' : 'opacity-0'}"
							/>
						</a>
						<a
							href="https://www.francenum.gouv.fr/activateurs/beavers"
							target="_blank"
							title="Beavers est un activateur France Numérique"
							class="inline-block lg:hover:animate-shake"
						>
							{#if isInView}
								<picture>
									<source srcset="/img/marques_filles_activateur.webp" type="image/webp" />
									<source srcset="/img/marques_filles_activateur.jpg" type="image/jpg" />
									<img
										src="/img/marques_filles_activateur.png"
										alt="Activitateur France Numérique"
										class="h-auto max-w-[10rem] {isInView ? 'animate-fade' : 'opacity-0'}"
									/>
								</picture>
							{/if}
						</a>
					</div>
				</div>
			</div>
			<div class="flex w-full gap-16 max-lg:flex-col lg:gap-28">
				<div class="flex w-full justify-between max-lg:flex-col max-lg:gap-16">
					<div class="flex-1 border-jagger lg:border-l-[2px] lg:pl-10">
						<p class="mb-8 text-5 text-bright">Nous parler.</p>
						<div class="flex flex-col gap-5">
							<div class="flex items-center gap-5">
								<Mail />
								<a
									href="/contactez-nous"
									title="Ecrire un message aux castors de Beavers"
									class="text-6 font-semibold text-electric underline transition-colors hover:text-bright"
								>
									Ecrivez-nous
								</a>
							</div>
							<div class="flex items-center gap-5">
								<Tel />
								<a
									target="_blank"
									href="tel:+33664644470"
									title="Parler avec les castors de Beavers au téléphone"
									class="text-6 font-semibold text-electric underline transition-colors hover:text-bright"
								>
									06 64 64 44 70
								</a>
							</div>
							<div class="flex items-center gap-5">
								<WhatsApp newClass="fill-bright" />
								<a
									target="_blank"
									rel="external noreferrer"
									href="https://api.whatsapp.com/send/?phone=33664644470"
									title="Parler avec les castors de Beavers sur WhatsApp"
									class="text-6 font-semibold text-electric underline transition-colors hover:text-bright"
								>
									06 64 64 44 70
								</a>
							</div>
						</div>
					</div>
					<div class="flex-1 border-jagger lg:border-l-[2px] lg:pl-10">
						<p class="mb-8 text-5 text-bright">Nous suivre.</p>
						<div class="flex gap-8">
							<a
								href="https://www.linkedin.com/company/beavers-agency/"
								target="_blank"
								rel="external noreferrer"
								title="Retrouvez les castors de Beavers sur Linkedin"
								class="flex h-14 w-14 items-center justify-center rounded-full bg-seance transition-colors hover:bg-bright max-lg:h-20 max-lg:w-20"
							>
								<Linkedin newClass="w-10 lg:w-7 h-auto" />
							</a>
							<a
								href="https://www.instagram.com/beavers.agency/"
								target="_blank"
								rel="external noreferrer"
								title="Retrouvez les castors de Beavers sur Instagram"
								class="flex h-14 w-14 items-center justify-center rounded-full bg-seance transition-colors hover:bg-bright max-lg:h-20 max-lg:w-20"
							>
								<Instagram newClass="w-10 lg:w-7 h-auto" />
							</a>
							<a
								href="https://www.pinterest.fr/beaversagency/"
								target="_blank"
								rel="external noreferrer"
								title="Retrouvez les castors de Beavers sur Pinterest"
								class="flex h-14 w-14 items-center justify-center rounded-full bg-seance transition-colors hover:bg-bright max-lg:h-20 max-lg:w-20"
							>
								<Pinterest newClass="w-auto h-10 lg:h-7" />
							</a>
							<a
								href="https://www.facebook.com/beavers.agency/"
								target="_blank"
								rel="external noreferrer"
								title="Retrouvez les castors de Beavers sur Facebook"
								class="flex h-14 w-14 items-center justify-center rounded-full bg-seance transition-colors hover:bg-bright max-lg:h-20 max-lg:w-20"
							>
								<Facebook newClass="w-auto h-10 lg:h-7" />
							</a>
						</div>
					</div>
					<div class="flex-1 border-jagger lg:border-l-[2px] lg:pl-10">
						<p class="mb-8 text-5 text-bright">Nos soutiens.</p>
						<p class="text-6">
							L'agence Beavers soutient les associations <a
								title="L'agence Beavers soutient les associations The Ocean Cleanup et Tree Nation"
								class="font-semibold text-electric underline transition-colors hover:text-bright"
								href="/programme-rse">The Ocean Cleanup et Tree Nation</a
							>.
						</p>
					</div>
				</div>
				<div class="flex items-center gap-8 max-lg:justify-center lg:flex-col lg:justify-around">
					<a
						href="https://theoceancleanup.com/"
						target="_blank"
						title="The Ocean Cleanup"
						rel="external noreferrer"
						class="lg:hover:animate-shake"
					>
						{#if isInView}
							<picture>
								<source srcset="/img/the_ocean_cleanup-beavers.webp" type="image/webp" />
								<source srcset="/img/the_ocean_cleanup-beavers.png" type="image/png" />
								<img
									src="/img/the_ocean_cleanup-beavers.png"
									alt="badge The Ocean Cleanup"
									class="h-auto max-w-[10rem] {isInView ? 'animate-fade' : 'opacity-0'}"
								/>
							</picture>
						{/if}
					</a>
					<div data-widget-type="offset-website" data-tree-nation-code="62e3d15754415" data-lang="fr" data-theme="dark" class="lg:hover:animate-shake"></div><div data-widget-type="tree-counter" data-tree-nation-code="cc298e8e29ade393" data-lang="en" data-theme="dark" class="lg:hover:animate-shake"></div>
				</div>
			</div>
		</div>
	</div>
</footer>
