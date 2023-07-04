<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

  let isInView: boolean;
  const options: Options = {
    unobserveOnEnter: true,
    rootMargin: '50px'
  };

  const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
    isInView = detail.inView;
  };

  export let actions: string;
  export let actionsImg: any
</script>


<div class="big-container flex items-center gap-32 lg:gap-40 max-lg:flex-col"
  use:inview={options}
  on:inview_change={handleChange}
>
  <div class="flex-1 lg:order-2 flex flex-col gap-8 {isInView ? 'animate-fade' : 'opacity-0'}">
    <p class="text-5 text-bright">
      Nos actions
    </p>
    <p class="text-6">
      {@html actions}
    </p>
  </div>
  <div class="max-lg:w-full lg:flex-1 h-[36rem] lg:h-[55rem] flex flex-col gap-8 rounded-lg overflow-hidden lg:order-1">
    <img 
      src={actionsImg.src}
      alt={actionsImg.alt}
      class="w-full h-full object-cover {isInView ? 'animate-fade' : 'opacity-0'}"
    />
  </div>
</div>