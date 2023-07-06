<script lang="ts">
	import Certifs from "$lib/components/blocks/agence/Certifs.svelte";
import Experts from "$lib/components/blocks/agence/Experts.svelte";
	import People from "$lib/components/blocks/agence/People.svelte";
  import Header from "$lib/components/blocks/common/Header.svelte";
	import SubHeader from "$lib/components/blocks/common/SubHeader.svelte";

  const title = "L'agence"
  const subtitle = 'Humaine. À l’écoute.'

  const text1 = 'En quoi<br />sommes-nous'
  const text2 = 'différents ?'
  const text3 = "Etre une agence à taille humaine, pour ne pas noyer votre projet dans les rouages d'une grosse agence."
  const text4 = "Pour nous, se nommer être l'expert en tout, c'est être l'expert en rien. C'est pourquoi nous sommes accompagnés de personnes aguerries prêtes à répondre à des demandes précises. Et pour chaque problématique nous faisons appel à un savoir faire précis."

  const people = [
    {
      img : '/signature/beavers-marie-claire.png',
      name: 'Marie-Claire BLAIZOT',
      job: 'Directrice Générale & Directrice Média',
      text: "Marie-Claire vous propose son expertise en stratégie et activation média online, après 10 ans en agence média et chez l’annonceur.<br /><br /><span class='text-seance font-semibold'>Au menu, le matin :</span> un grand bol de plans média,<br /><span class='text-seance font-semibold'>Le midi :</span> salade de pixels d’activation (à consommer sans modération)<br /><span class='text-seance font-semibold'>Le soir :</span> farandole de bilans média (Excel est son ami)"
    },
    {
      img : '/signature/beavers-lucas.png',
      name: 'Lucas ATTALI',
      job: 'Président & Directeur de Production',
      text: "Ses expériences en tant que Développeur Front-End, Product Owner, Chef de Projets et Responsable de Production, lui ont appris à penser un projet dans sa globalité sans en segmenter chaque phase. Aujourd'hui, Lucas aime travailler dans un univers fun mais toujours très bien cadré ; avec lui pas de bannière de cookies, pas de site <span class='text-seance font-semibold'>#RGPDMaster</span> !!!"
    },
    {
      img : '/signature/beavers-orane.png',
      name: 'Orane DEMANDRE',
      job: 'Cheffe de projets Média',
      text: "Après avoir travaillé en tant que chargée de marketing et communication et avec une expérience approfondie en relation client, Orane sera très soucieuse de votre satisfaction.<br /><br />Du haut de ses 162 cm, elle sera prête à prendre des échasses pour <span class='text-seance font-semibold'>vous positionner au plus haut !</span>"
    }
  ]
</script>

<div class="flex flex-col gap-48 lg:gap-96 pb-48 lg:pb-96">
  <Header {title} {subtitle} />
  <SubHeader {text1} {text2} {text3} {text4} />
  <Experts />
  <div class="big-container grid grid-cols-1 lg:grid-cols-2 gap-32">
    {#each people as person}
    <People {person} />
    {/each}
  </div>
  <Certifs />
</div>