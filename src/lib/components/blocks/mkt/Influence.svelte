<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
  import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Thumb from '$lib/assets/svg/Thumb.svelte';
	import Baguette2 from '$lib/assets/svg/Baguette2.svelte';

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '-50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  let isInViewImg: boolean;
  const optionsImg: Options = {
    unobserveOnEnter: true,
    rootMargin: '50px'
  };

  const handleChangeImg = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInViewImg = detail.inView;
  };

</script>

<div
	class="big-container flex items-center gap-32 max-lg:flex-col lg:gap-40"
	use:inview={options}
	on:inview_change={handleChange}
>
  <div class="lg:flex-1">
    <div class="flex gap-10 items-center mb-8">
      <div class="max-lg:w-28 w-40 max-lg:h-28 h-40 rounded-full bg-white flex justify-center items-center">
        <Baguette2 newClass="max-lg:h-14 h-20 w-auto fill-seance" />
      </div>
      <div class="max-lg:flex-1">
        <Line />
        <Title first="Influence marketing" />
      </div>
    </div>
    <p class="font-semibold text-bright animate-duration-200 text-6 mb-8 {isInView
      ? 'animate-fade-right'
      : 'opacity-0'}">
      De plus en plus de marques investissent en influence marketing.
    </p>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Vos prospects sont à la recherche de recommandations sociales et c'est auprès des influenceurs qu'ils suivent, qu'ils jugent la crédibilité de votre marque. Créer un sentiment d'appartenance en travaillant avec des influenceurs qui vous ressemblent et qui peuvent véhiculer les valeurs de votre marque.
    </p>
    <p class="text-6 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Votre marque, c'est encore vos clients qui en parlent le mieux.<br />
      Créez un réseau d'ambassadeurs sur les réseaux sociaux et augmentez votre notoriété et votre réputation.
    </p>
    <div class="flex max-lg:flex-col max-lg:gap-4 gap-20 mt-16">
      <div class="flex gap-4 items-center animate-delay-[750ms] {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Star newClass="w-12 h-auto fill-seance" />
        <h3 class="font-bold text-5">Notoriété</h3>
      </div>
      <div class="flex gap-4 items-center animate-delay-1000 {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Thumb newClass="w-12 h-auto fill-seance" />
        <h3 class="font-bold text-5">Réputation</h3>
      </div>
    </div>
    <div class="mt-20 animate-delay-[1500ms] {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      <Cta label="Me lancer dans l'influence" href="/contactez-nous" type="transparent" />
    </div>
  </div>
  <div class="lg:flex-1">
    <div
      class="relative mx-auto w-full lg:max-w-[45rem]"
      use:inview={optionsImg}
      on:inview_change={handleChangeImg}
    >
      {#if isInViewImg}
        <img
          src="/img/mkt/influence.png"
          alt="Influence Marketing"
          class="w-full {isInViewImg ? 'animate-fade' : ''}"
        />
      {/if}
      <MultipleArrows newClass="top-4 absolute right-24 fill-bright w-20 h-auto animate-delay-200 {isInViewImg
        ? 'animate-fade'
        : 'opacity-0'}" />
      <MultipleArrows newClass="bottom-0 absolute left-52 fill-seance w-16 h-auto animate-delay-500 {isInViewImg
        ? 'animate-fade'
        : 'opacity-0'}" />
    </div>
  </div>
</div>