<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
  import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';

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
    <Line />
    <Title first="Site internet" />
    <p class="font-semibold text-bright animate-duration-200 text-6 mt-6 mb-8 {isInView
      ? 'animate-fade-right'
      : 'opacity-0'}">
      Les sites internet sont rapidement devenus incontournables dans la longue et dure vie d'une entreprise. 
    </p>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Aujourd'hui, si un utilisateur veut se renseigner sur une entreprise, il va rechercher son site internet afin d'en apprendre plus, de faire des achats, de communiquer (via un chat), etc.
    </p>
    <p class="text-6 mb-8 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Que ce soit pour vendre des produits en ligne ou juste avoir une présence digitale, posséder son propre site internet est primordial.
    </p>
    <p class="text-6 animate-delay-500 {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
      Les castors de Beavers peuvent  vous aider à créer ou refondre votre site internet qui répondra aux best practices de l'expérience utilisateur et aux guidelines de Google.
    </p>
    <div class="flex gap-12 mt-20">
      <div class="animate-delay-1000 {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Cta label="Vous avez besoin d’aide ?" href="/contactez-nous" type="transparent" />
      </div>
      <div class="animate-delay-[1200ms] {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Cta label="En savoir plus" href="/production-digitale/creation-refonte-site-internet" type="seance" />
      </div>
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
          src="/img/prod/code.png"
          alt="Code source"
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