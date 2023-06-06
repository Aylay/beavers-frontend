<script lang="ts">
  import { page } from '$app/stores';

	import Hoverable from '$lib/components/utilities/Hoverable.svelte';
	import Logo from "$lib/assets/svg/Logo.svelte";

  let menuOpened = false

  const items = [
    {
      label: 'Accueil',
      title: "Beavers, l'agence digitale des castors",
      slug: '/'
    },
    {
      label: 'Production digitale',
      title: 'Production digitale',
      slug: '/production-digitale'
    },
    {
      label: 'Marketing digital',
      title: 'Marketing digital',
      slug: '/marketing-digital'
    },
    {
      label: "L'agence",
      title: "L'agence",
      slug: '/qui-sommes-nous'
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

  $: labelMenu = menuOpened ? '&nbsp;' : 'Menu'

</script>

<header class="fixed top-0 inset-x-0 w-full py-8 bg-rock z-50">
  <div class="big-container flex justify-between items-end gap-16 relative">
    <a href="/" title="Beavers, l'agence digitale des castors" class="pb-2 duration-300 transition-all {menuOpened ? 'invisible opacity-0' : 'opacity-100 visible'}">
      <Logo newClass="max-w-[13rem] w-full h-auto" />
    </a>
    <div class="flex justify-center gap-6 items-center cursor-pointer" on:click={() => (menuOpened = !menuOpened)}>
      <p class="text-bright uppercase text-[1.8rem] leading-[2.2rem] font-bold">{@html labelMenu}</p>
      <div class="relative h-7 w-8">
        <span
          class="absolute inset-x-0 h-[2px] rounded-lg w-full bg-bright transition-all duration-300 {menuOpened
            ? 'top-1/2 -translate-y-1/2 rotate-45'
            : 'top-0'}"
        />
        <span
          class="absolute inset-x-0 h-[2px] rounded-lg w-full bg-bright transform transition-all duration-300 {menuOpened
            ? 'opacity-0'
            : 'top-1/2 -translate-y-1/2 opacity-100'}"
        />
        <span
          class="absolute inset-x-0 h-[2px] rounded-lg w-full bg-bright duration-300 {menuOpened
            ? 'top-1/2 -translate-y-1/2 -rotate-45'
            : 'bottom-0'}"
        />
      </div>
    </div>
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
</header>