<script lang="ts">
	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";
	import AffiliationDisplay from "$lib/components/blocks/mkt/AffiliationDisplay.svelte";
	import Google from "$lib/components/blocks/mkt/Google.svelte";
  import Header from "$lib/components/blocks/mkt/Header.svelte";
	import Influence from "$lib/components/blocks/mkt/Influence.svelte";
	import Social from "$lib/components/blocks/mkt/Social.svelte";

  const text1 = 'le digital<br />est en constante'
  const text2 = 'évolution.'
  const text3 = 'Votre écosystème digital est un mystère pour vous et vous ne savez pas comment vous y prendre.'
  const text4 = 'Que ce soit une création de site internet, une amélioration SEO de votre site actuel ou des envois de newsletters, racontez-nous votre besoin digital.'

</script>

<div class="flex flex-col gap-20 lg:gap-40 max-lg:px-4 pb-60">
  <Header />
  <div class="flex flex-col gap-32 lg:gap-96">
    <SubHeader {text1} {text2} {text3} {text4} />
    <Google />
    <Social />
    <AffiliationDisplay />
    <Influence />
  </div>
</div>