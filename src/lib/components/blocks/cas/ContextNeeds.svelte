<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '-50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  export let context: string
  export let needs: string
</script>


<div class="big-container flex gap-32 lg:gap-40 max-lg:flex-col"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex-1 flex flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}">
    <p class="text-5 text-bright">
      Le contexte
    </p>
    <p class="text-6">
      {@html context}
    </p>
  </div>
  <div class="flex-1 flex flex-col gap-8 animate-delay-500 {isInView ? 'animate-fade' : 'opacity-0'}">
    <p class="text-5 text-bright">
      Les besoins du client
    </p>
    <p class="text-6">
      {@html needs}
    </p>
  </div>
</div>