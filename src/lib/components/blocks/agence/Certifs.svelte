<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import Line from '../utilities/Line.svelte';
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

<div class="small-container flex flex-col justify-center items-center">
  <Line />
  <div class="relative">
    <span
      use:inview={options}
      on:inview_change={handleChange}
      class="absolute whitespace-nowrap left-1/2 top-0 -z-10 w-screen -translate-y-1/2 transform text-1 text-seance opacity-0 {isInView
        ? 'animate-title'
        : ''}"
    >
      certifiée
    </span>
    <h2 class="w-full text-3 text-seance">
      Beavers
        <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright font-normal">
          certifiée
        </span>
    </h2>
  </div>
  <p class="text-6 mt-6 text-center">
    Toute l'équipe de Beavers développe ses connaissances continuellement et les valide. Chaque collaborateur a permis d'obtenir ces certifications :
  </p>
  <div class="flex justify-center gap-20 max-lg:flex-col items-center mt-16"
    use:inview={options}
    on:inview_change={handleChange}
  >
    <a
      href="https://www.google.com/partners/agency?id=9719801224"
      target="_blank"
      title="Beavers est Google Partner"
      class="inline-block lg:hover:animate-shake"
    >
      <GooglePartner newClass="max-w-[22rem] h-auto {isInView
        ? 'animate-fade'
        : 'opacity-0'}" />
    </a>
    <img src="/img/certification-linkedin.webp" alt="Certification Marketing insider Linkedin" class="max-w-[22rem] h-auto {isInView
      ? 'animate-fade'
      : 'opacity-0'}">
  </div>
</div>