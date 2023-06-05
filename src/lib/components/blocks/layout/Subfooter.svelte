<script lang="ts">
  let currentDate = new Date();
</script>

<div class="bg-bright p-8">
  <div class="big-container flex justify-center gap-8">
    <p class="text-[1.4rem] leading-[2.4rem] text-black">
      © 2019 - {currentDate.getFullYear()} Tous droits réservés par Beavers
    </p>
    <p class="text-[1.4rem] leading-[2.4rem] text-black">
      |
    </p>
    <a href="/mentions-legales" title="Les mentions légales de Beavers" class="text-[1.4rem] leading-[2.4rem] text-black hover:underline">
      Mentions légales
    </a>
    <p class="text-[1.4rem] leading-[2.4rem] text-black">
      |
    </p>
    <a href="/politique-rgpd" title="La politique RGPD de Beavers" class="text-[1.4rem] leading-[2.4rem] text-black hover:underline">
      Politique RGPD
    </a>
  </div>
</div>