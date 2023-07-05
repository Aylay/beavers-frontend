<script lang="ts">
	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";
	import WebSite from "$lib/components/blocks/prod/WebSite.svelte";
	import SEO from "$lib/components/blocks/prod/SEO.svelte";
	import Newsletter from "$lib/components/blocks/prod/Newsletter.svelte";
  import Header from "$lib/components/blocks/prod/Header.svelte";

  const text1 = 'le digital<br />est en constante'
  const text2 = 'évolution.'
  const text3 = 'Votre écosystème digital est un mystère pour vous et vous ne savez pas comment vous y prendre.'
  const text4 = 'Que ce soit une création de site internet, une amélioration SEO de votre site actuel ou des envois de newsletters, racontez-nous votre besoin digital.'

</script>

<div class="flex flex-col gap-20 lg:gap-40 pb-48 lg:pb-96">
  <Header />
  <div class="flex flex-col gap-32 lg:gap-96">
    <SubHeader {text1} {text2} {text3} {text4} />
    <WebSite />
    <SEO />
    <Newsletter />
  </div>
</div>