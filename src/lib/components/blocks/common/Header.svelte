<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="lg:h-screen flex justify-center items-center bg-rock">
  <div class="big-container relative">
    <h1 class="text-outline text-1 text-center">
      {title}
    </h1>
    <h2 class="text-seance text-3 text-center mt-1">
      {subtitle}
    </h2>
  </div>
</div>