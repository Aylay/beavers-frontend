<script lang="ts">
	import Line from '$lib/components/blocks/utilities/Line.svelte';
	import Title from '$lib/components/blocks/utilities/Title.svelte';

  type Testimony = {
  name: string;
  company: string;
  text: string;
};

  let testimonies: Array<Testimony> = [
    {
      name: 'Fabrice Briot',
      company: 'V-ZUG',
      text: "Une équipe très agréable, les Beavers ont fait preuve d’une très bonne écoute et d’une grande réactivité tout en étant <strong>force de proposition</strong>. Je suis ravi de cette collaboration."
    },
    {
      name: 'Augustin Bouyer',
      company: 'WeVan',
      text: "Notre collaboration avec Beavers nous a permis de progresser dans l'approche des réseaux sociaux, à la fois pour la partie <strong>sponsoring des posts naturels</strong>, mais aussi et de plus en plus à travers la création de véritables <strong>campagnes de publicité sponsorisées</strong> qui ont pris de plus en plus de place dans l'écosystème digital.<br /><br />Marie-Claire nous a emmené sur de nouveaux territoires, notamment <strong>Pinterest et Linkedin</strong>, ainsi que sur de nouveaux formats. Nous avons connu pas mal de succès et quelques échecs, mais l'excellent relationnel et professionnalisme de l'équipe Beavers donne toujours envie de tester de nouvelles idées, ce qui fait en définitive l'essence du marketing digital."
    },
    {
      name: 'Nicolas Meliand',
      company: 'Frames Dealer',
      text: "Notre collaboration au long cours avec Beavers a toujours été à la fois très agréable, fluide et efficace. Depuis l’accompagnement mené par Lucas sur des sujets d’<strong>UX</strong>, de <strong>webdesign</strong> ou encore relatifs à la <strong>conformité RGPD</strong> jusqu’au travail avec Marie-Claire sur des <strong>campagnes media très ciblées</strong>, nous avons apprécié le professionnalisme, la pédagogie et le sens de l’écoute de l’équipe.<br /><br />L’excellence qui nous porte au quotidien chez Frames Dealer a toujours trouvé un écho dans la collaboration avec l’équipe de Beavers qui a su <strong>nous challenger</strong> et mener à bien des projets ambitieux et innovants, aussi il nous tarde d’avoir de prochains projets de collaboration avec Lucas et Marie-Claire."
    },
    {
      name: 'Laurent Esposito',
      company: 'Imagine 2050',
      text: "Nous avons fait appel à l'agence Beavers pour la <strong>création complète de notre site web</strong>. Nous ne pouvons que louer la créativité, la réactivité et le professionnalisme de l'équipe.<br /><br />Nous avons notamment apprécié ses <strong>recommandations marketing et techniques</strong> pour choisir les bons outils en back-office, <strong>optimiser notre visibilité</strong> sur la toile et minimiser notre <strong>impact environnemental</strong>."
    }
  ]
  
  const testimoniesDisplayed = getMultipleRandom(testimonies, 3);

  function getMultipleRandom(arr: Array<Testimony>, num: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
</script>

<div class="big-container">
	<Line />
	<Title first="Nos clients" second="témoignent" />
  <div class="flex gap-20 mt-20">
    {#each testimoniesDisplayed as testimony}
    <div class="flex-1">
      <p class="mb-8 text-6">
        { @html testimony.text}
      </p>
      <p class="font-highlight text-4 mb-1 text-bright">
        { testimony.name }
      </p>
      <p class="text-6 font-bold text-seance">
        { testimony.company }
      </p>
    </div>
    {/each}
  </div>
</div>
