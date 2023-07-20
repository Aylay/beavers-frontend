<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Cta from '../utilities/CTA.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Trafic from '$lib/assets/svg/Trafic.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';
	import Display from '$lib/assets/svg/Display.svelte';

	let isInView: boolean;
	const options: Options = {
		unobserveOnEnter: true,
		rootMargin: '-50px'
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
	};
</script>

<div
	class="big-container flex gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
  <div class="lg:flex-1">
    <div class="flex gap-10 items-center mb-8">
      <div class="max-lg:w-28 w-40 max-lg:h-28 h-40 rounded-full bg-white flex justify-center items-center">
        <Trafic newClass="max-lg:h-14 h-20 w-auto" />
      </div>
      <div class="max-lg:flex-1">
        <Line />
        <Title first="Affiliation" />
      </div>
    </div>
    <p class="font-semibold text-bright animate-duration-200 text-6 mb-8 {isInView
      ? 'animate-fade-right'
      : 'opacity-0'}">
      SLorem ipsum dolor sit amet, consectetur adipiscing elit integer elit augue pellentesque ultrices. 
    </p>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Déployez un réseau d'affiliés qui pourront promouvoir votre marque et rémunérez-les en fonction de leurs résultats à travers des supports emailing, bannières, coupon, cashback, bon plan...
    </p>
    <div class="flex max-lg:flex-col max-lg:gap-4 gap-20 mt-16">
      <div class="flex gap-4 items-center animate-delay-1000 {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Trafic newClass="w-12 h-auto fill-seance" />
        <h3 class="font-bold text-5">Trafic</h3>
      </div>
      <div class="flex gap-4 items-center animate-delay-[1250ms] {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Conversion newClass="w-12 h-auto fill-seance" />
        <h3 class="font-bold text-5">Conversion</h3>
      </div>
    </div>
    <div class="mt-20 animate-delay-[1500ms] {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      <Cta label="Créer un réseau d’affiliés" href="/contactez-nous" type="transparent" />
    </div>
  </div>
  <div class="lg:flex-1">
    <div class="flex gap-10 items-center mb-8">
      <div class="max-lg:w-28 w-40 max-lg:h-28 h-40 rounded-full bg-white flex justify-center items-center">
        <Display newClass="max-lg:h-14 h-20 w-auto fill-seance" />
      </div>
      <div class="max-lg:flex-1">
        <Line />
        <Title first="Display" />
      </div>
    </div>
    <p class="font-semibold text-bright animate-duration-200 text-6 mb-8 {isInView
      ? 'animate-fade-right'
      : 'opacity-0'}">
       Affichez votre offre auprès de votre audience cible, sur ordinateur ou sur mobile, en programmatique ou non, avec différents formats&nbsp;:
    </p>
    <ul class="flex flex-col gap-4 mb-8 {isInView
      ? 'animate-fade-right'
      : 'opacity-0'}">
      <li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-seance before:left-0 before:top-3 before:rounded-full pl-8">
        Bannières publicitaires
      </li>
      <li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-seance before:left-0 before:top-3 before:rounded-full pl-8">
        Vidéos
      </li>
      <li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-seance before:left-0 before:top-3 before:rounded-full pl-8">
        Native ads
      </li>
    </ul>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Diffusez vos publicités auprès de vos prospects pour augmenter votre notoriété et devenir "top of mind". Le display est davantage un levier de visibilité, mais couplé à d'autres leviers, il peut rapidement devenir une carte indispensable dans une stratégie d'acquisition.
    </p>
    <div class="flex max-lg:flex-col max-lg:gap-4 justify-between mt-16">
      <div class="flex gap-4 items-center animate-delay-[750ms] {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Star newClass="w-12 h-auto fill-seance" />
        <h3 class="font-bold text-5">Notoriété</h3>
      </div>
    </div>
    <div class="mt-20 animate-delay-[1500ms] {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      <Cta label="Etudier ma stratégie display" href="/contactez-nous" type="transparent" />
    </div>
  </div>
</div>