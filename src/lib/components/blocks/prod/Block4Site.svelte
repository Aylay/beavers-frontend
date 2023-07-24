<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  import Title from '$lib/components/blocks/utilities/Title.svelte';
  import Line from '$lib/components/blocks/utilities/Line.svelte';
  import Cta from '$lib/components/blocks/utilities/CTA.svelte';
	import Wave from '$lib/assets/svg/Wave.svelte';

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
    <Title first="Après la sortie de votre site" />
		<h3
			class="mt-2 font-highlight text-4 text-bright lg:animate-delay-200 {isInView
				? 'lg:animate-fade-right'
				: 'lg:opacity-0'}"
		>
      Continuez le travail sur votre site
		</h3>
    <div
			class="mb-16 mt-8 flex flex-col gap-8 animate-delay-500 {isInView
				? 'animate-fade'
				: 'opacity-0'}"
		>
			<p class="text-6">
				Ce n'est pas parce que votre site sur mesure est en ligne qu'il faut le délaisser. Il est important de prendre soin de son site tout au long de sa vie (et elle est longue !)
			</p>
			<p class="text-6">
				L'agence Beavers peut donc vous aider dans :
			</p>
      <ul class="flex flex-col gap-4">
        <li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-seance before:left-0 before:top-3 before:rounded-full pl-8">
          L'administration des contenus de votre site. Google doit voir que votre site vit, il est donc important de le mettre à jour souvent en ajoutant ou modifiant des contenus ;
        </li>
        <li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-seance before:left-0 before:top-3 before:rounded-full pl-8">
          Le suivi du site en le mettant à jour en fonction des services / technologies utilisés ;
        </li>
        <li class="relative text-6 before:content-[''] before:absolute before:w-3 before:h-3 before:bg-seance before:left-0 before:top-3 before:rounded-full pl-8">
          La maintenance du site si des problèmes venaient à surgir. Il se peut aussi que vous souhaitiez juste améliorer et ajouter une fonctionnalité à votre site.
        </li>
      </ul>
    </div>
    <div class="flex gap-12 mt-20">
      <div class="animate-delay-1000 {isInView
        ? 'animate-fade'
        : 'opacity-0'}">
        <Cta label="Contactez-nous" href="/contactez-nous" type="transparent" />
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
          src="/img/prod/newsletter.png"
          alt="Ordinateur portable avec une image newsletter dessus"
          class="w-full {isInViewImg ? 'animate-fade' : ''}"
        />
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