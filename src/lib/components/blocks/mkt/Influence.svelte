<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
  import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Star from '$lib/assets/svg/Star.svelte';
	import Thumb from '$lib/assets/svg/Thumb.svelte';
	import Baguette2 from '$lib/assets/svg/Baguette2.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';
	import Conversion from '$lib/assets/svg/Conversion.svelte';

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
      27 % des jeunes sont actifs sur les plateformes pour suivre leurs idoles ou des influenceurs.
    </p>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      De nos jours, de plus en plus de marques du secteur de l'habitat investissent dans l'influence marketing. Vos clients sont à la recherche d'inspiration, et c'est auprès des influenceurs les plus suivis qu'ils jugent la crédibilité de votre marque.
    </p>
    <p class="text-6 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Créez un sentiment d'appartenance en travaillant avec des influenceurs du secteur de l'habitat qui vous ressemblent et qui peuvent véhiculer les valeurs de votre marque. Après tout, ce sont encore vos clients qui parlent le mieux de votre marque. Développez un réseau d'ambassadeurs sur les réseaux sociaux et renforcez votre notoriété et votre réputation dans le secteur de l'habitat !
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
      <div class="flex gap-4 items-center animate-delay-[1250ms] {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Conversion newClass="w-12 h-auto fill-seance" />
        <h3 class="font-bold text-5">Acquisition</h3>
      </div>
    </div>
    <div class="mt-20 animate-delay-[1500ms] {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      <Cta label="Trouver mon Influenceur.se" href="/contactez-nous" type="transparent" />
    </div>
  </div>
  <div class="lg:flex-1 max-lg:hidden">
    <div
      class="relative mx-auto w-full lg:max-w-[45rem]"
      use:inview={optionsImg}
      on:inview_change={handleChangeImg}
    >
      {#if isInViewImg}
        <picture>
          <source srcset="/img/mkt/influence.webp" type="image/webp">
          <source srcset="/img/mkt/influence.png" type="image/png">
          <img
            src="/img/mkt/influence.png"
            alt="Influence Marketing"
            class="w-full {isInViewImg ? 'animate-fade' : ''}"
          />
        </picture>
      {/if}
      <div
        class="absolute -top-16 left-1/2 h-auto rotate-[-45deg] w-[6.2rem] {isInView
          ? 'animate-fade'
          : 'opacity-0'}"
      >
        <Wave color="#00FFDA" />
      </div>
      <div
        class="absolute -bottom-16 right-1/2 h-auto rotate-[-45deg] w-[6.2rem] {isInView
          ? 'animate-fade'
          : 'opacity-0'}"
      >
        <Wave />
      </div>
    </div>
  </div>
</div>