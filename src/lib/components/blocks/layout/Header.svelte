<script lang="ts">
  import { navigating, page } from '$app/stores';

	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Logo from "$lib/assets/svg/Logo.svelte";
	import { afterUpdate, onMount } from 'svelte';

  let menuOpened = false
  let y: number;
  let menuWhite: boolean = $page.data.menuWhite;
  let isArticle: boolean = $page.data.isArticle;
  let windowHeight: number;
  let labelMenu: string;
  let widthScroll: number;

  $: {
    labelMenu = menuOpened ? '&nbsp;' : 'Menu'
    menuWhite = $page.data.menuWhite;
    isArticle = $page.data.isArticle;
  }

  const items = [
    {
      label: 'Accueil',
      title: "Beavers, l'agence digitale des castors",
      slug: '/'
    },
    {
      label: "L'agence",
      title: "L'agence",
      slug: '/l-agence-beavers'
    },
    {
      label: 'Cas agence',
      title: 'Cas agence',
      slug: '/cas-agence'
    },
    {
      label: 'La pause café',
      title: 'La pause café',
      slug: '/la-pause-cafe'
    },
    {
      label: 'Jobs',
      title: 'Jobs',
      slug: '/jobs'
    },
    {
      label: 'Contactez-nous',
      title: 'Contactez-nous',
      slug: '/contactez-nous'
    }
  ]

  onMount(() => {
    windowHeight = window.innerHeight

    if (isArticle) {
      window.onscroll = function() {
        progressScrollBar()
      };
    }
  })

  afterUpdate(() => {
    if ($navigating) {
      menuOpened = false;
    }
  });

  function progressScrollBar () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    widthScroll = (winScroll / height) * 100;
  }

</script>

<svelte:window bind:scrollY={y} />

<header class="top-0 inset-x-0 w-full py-8 transition-colors {y > windowHeight ? 'bg-rock fixed animate-fade-down' : 'bg-transparent absolute'}  {y === 0 && menuOpened ? '!bg-rock' : ''} z-50">
  <div class="big-container flex justify-between items-end gap-16 relative">
    <a href="/" title="Beavers, l'agence digitale des castors" class="pb-2 duration-300 transition-all {menuOpened ? 'invisible opacity-0' : 'opacity-100 visible'}">
      <Logo newClass="max-w-[13rem] w-full h-auto" />
    </a>
    <Hoverable let:hovering={active}>
      <div class="flex justify-center gap-6 items-center cursor-pointer" on:click={() => (menuOpened = !menuOpened)}>
        <p class="uppercase text-[1.8rem] leading-[2.2rem] font-bold text-white {active ? 'animate-shake' : ''}">{@html labelMenu}</p>
        <div class="relative h-7 w-8">
          <span
            class="absolute inset-x-0 h-[2px] rounded-lg w-full {menuWhite && (y < windowHeight) ? 'bg-white' : 'bg-bright'} transition-all duration-300 {menuOpened
              ? 'top-1/2 -translate-y-1/2 rotate-45'
              : 'top-0'}"
          />
          <span
            class="absolute inset-x-0 h-[2px] rounded-lg w-full {menuWhite && (y < windowHeight) ? 'bg-white' : 'bg-bright'} transform transition-all duration-300 {menuOpened
              ? 'opacity-0'
              : 'top-1/2 -translate-y-1/2 opacity-100'}"
          />
          <span
            class="absolute inset-x-0 h-[2px] rounded-lg w-full {menuWhite && (y < windowHeight) ? 'bg-white' : 'bg-bright'} duration-300 {menuOpened
              ? 'top-1/2 -translate-y-1/2 -rotate-45'
              : 'bottom-0'}"
          />
        </div>
      </div>
    </Hoverable>
    <nav class="absolute h-full flex items-end inset-0 w-[calc(100%-10rem)] transition-all duration-300 {!menuOpened ? 'invisible opacity-0' : 'opacity-100 visible'}">
      <Hoverable let:hovering={active} newClass="flex-1">
      <ul class="w-full flex justify-between">
        {#each items as item}
          <li>
            <a href={item.slug} title={item.title} class="text-6 transition-colors font-semibold {$page.route.id === item.slug ? 'text-bright' : 'text-white'} {active ? 'text-opacity-50 hover:text-opacity-100' : 'text-opacity-100'}">
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </Hoverable>
    </nav>
  </div>
  {#if isArticle && y > windowHeight}
  <div class="absolute top-full left-0 h-[8px] from-seance from-40% to-bright to-60% bg-gradient-to-r" style="width: {widthScroll}%;" />
  {/if}
</header>