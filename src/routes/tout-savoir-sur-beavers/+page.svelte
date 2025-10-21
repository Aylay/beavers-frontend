<script lang="ts">
	import Sun from '$lib/assets/svg/Sun.svelte';
	import MultipleArrows from '$lib/assets/svg/MultipleArrows.svelte';
	import Wave2 from '$lib/assets/svg/Wave2.svelte';
	import Logo from "$lib/assets/svg/Logo.svelte";
	import Linkedin from "$lib/assets/svg/Linkedin.svelte";
	import Instagram from "$lib/assets/svg/Instagram.svelte";
	import Facebook from "$lib/assets/svg/Facebook.svelte";
	import Pinterest from "$lib/assets/svg/Pinterest.svelte";
	import MetaFront from '$lib/components/utilities/MetaFront.svelte';

  const links: Array<any> = [
    {
      href: "/l-agence-beavers",
      title: "Connaître l'agence Beavers et l'équipe",
      label: "Qui est Beavers ?",
      blank: false
    },
    {
      href: "/contactez-nous",
      title: "Demander un devis",
      label: "Demander un devis",
      blank: false
    },
    {
      href: "/cas-agence",
      title: "Voir les cas agence",
      label: "Nos clients",
      blank: false
    },
    {
      href: "/programme-rse",
      title: "Voir notre programme RSE",
      label: "Programme RSE",
      blank: false
    },
    {
      href: "https://tree-nation.com/fr/profil/beavers",
      title: "Voir La forêt de Beavers",
      label: "Voir la forêt de Beavers",
      blank: true
    },
    {
      href: "/la-pause-cafe",
      title: "Lire nos articles de blog",
      label: "Lire un article",
      blank: false
    },
    {
      href: "/",
      title: "Visiter le site",
      label: "Visiter le site",
      blank: false
    }
  ]

  const meta = {
    title: "Tout savoir sur votre agence digitale Beavers",
    description: "Accéder aux informations les plus importantes à connaître. Découvrez l'écosystème de votre agence digitale Beavers entre présentation, devis, études de cas, engagements et les articles by Beavers."
  }
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<MetaFront {meta} />

<div class="lg:min-h-screen flex justify-center overflow-hidden bg-rock pt-20 lg:pt-40">
  <div class="small-container relative flex flex-col items-center gap-8">
    <a href="/" title="Beavers, l'agence digitale des castors" class="mb-20">
      <Logo newClass="max-w-[16rem] lg:max-w-[18rem] w-full h-auto" />
    </a>
    {#each links as link}
    <a
      class="text-6 font-bold hover:bg-bright hover:text-black duration-300 rounded-[3rem] border-2 px-10 py-4 transition-colors w-full text-center"
      href={link.href}
      title={link.title}
      target={link.blank ? '_blank' : '_self'}
    >
      {link.label}
    </a>
    {/each}
    <div class="flex gap-8 mt-8 mb-32">
      <a
        href="https://www.linkedin.com/company/beavers-agency/"
        target="_blank"
        rel="external noreferrer"
        title="Retrouvez les castors de Beavers sur Linkedin"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
      >
        <Linkedin newClass="w-10 lg:w-7 h-auto" />
      </a>
      <a
        href="https://www.instagram.com/beavers.agency/"
        target="_blank"
        rel="external noreferrer"
        title="Retrouvez les castors de Beavers sur Instagram"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
      >
        <Instagram newClass="w-10 lg:w-7 h-auto" />
      </a>
      <a
      href="https://www.pinterest.fr/beaversagency/"
        target="_blank"
        rel="external noreferrer"
        title="Retrouvez les castors de Beavers sur Pinterest"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
      >
        <Pinterest newClass="w-auto h-10 lg:h-7" />
      </a>
      <a
        href="https://www.facebook.com/beavers.agency/"
        target="_blank"
        rel="external noreferrer"
        title="Retrouvez les castors de Beavers sur Facebook"
        class="max-lg:w-20 w-14 max-lg:h-20 h-14 rounded-full transition-colors flex justify-center items-center hover:bg-bright bg-seance"
      >
        <Facebook newClass="w-auto h-10 lg:h-7" />
      </a>
    </div>
    <Sun newClass="w-24 h-auto absolute left-1/4 bottom-full animate-infinite animate-delay-500 animate-ping" color="#8013BD" />
    <Sun newClass="w-28 h-auto absolute -right-[20rem] top-1/2 animate-infinite animate-ping" color="#00FFDA" />
    <MultipleArrows newClass="absolute top-16 left-[15%] fill-bright animate-infinite animate-delay-700 animate-fade" />
    <Wave2 newClass="absolute top-28 right-0 fill-bright animate-infinite animate-delay-1000 animate-shake" />
    <Wave2 newClass="absolute top-1/3 -left-[20rem] fill-seance animate-infinite animate-delay-500 animate-shake" />
    <div class="absolute right-1/4 top-0 h-[2px] w-20 -rotate-45 transform bg-seance animate-infinite animate-delay-[1200ms] animate-fade" />
    <div class="absolute right-1/4 top-8 h-[2px] w-20 -rotate-45 transform bg-seance animate-infinite animate-delay-[1400ms] animate-fade" />
  </div>
</div>