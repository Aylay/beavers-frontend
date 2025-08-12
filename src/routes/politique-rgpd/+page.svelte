<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

const title = "Politique RGPD"
const subtitle = 'Les cookies vus par les castors'

const meta = {
  title: "La politique RGPD de l'agence digitale Beavers",
  description: "Voici comment les cookies, la confidentialité & le RGPD sont vus par les castors de l'agence digitale média Beavers"
}
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-20 lg:gap-40 pb-20 lg:pb-40">
  <Header {title} {subtitle} />
  <div class="small-container content-style flex flex-col gap-8">
    <h2>Définitions</h2>
    <p>
      L’éditeur : La personne, physique ou morale, qui édite les services de communication au public en ligne => Beavers<br />
      Le Site : L’ensemble des sites, pages Internet et services en ligne proposés par l’éditeur => <a href="/" title="Beavers, l'agence média des castors">beavers-agency.fr</a><br />
      L’Utilisateur : La personne utilisant le Site et les services => Vous
    </p>

    <h2>Nature des données collectées</h2>
    <p>Dans le cadre de l’utilisation des Sites, l’éditeur est susceptible de collecter les catégories de données suivantes concernant ses Utilisateurs :</p>
    <ul>
      <li>
        Données d’état-civil, d’identité, d’identification… => lors du remplissage du formulaire de contact
      </li>
      <li>
        Adresse e-mail => lors du remplissage du formulaire d'inscription à la newsletter
      </li>
    </ul>

    <h2>Agrégation des données</h2>
    <h3>Agrégation avec des données non personnelles</h3>
    <p>
      Nous pouvons publier, divulguer et utiliser les informations agrégées (informations relatives à tous nos Utilisateurs ou à des groupes ou catégories spécifiques d’Utilisateurs que nous combinons de manière à ce qu’un Utilisateur individuel ne puisse plus être identifié ou mentionné) et les informations non personnelles à des fins d’analyse du secteur et du marché, de profilage démographique, à des fins promotionnelles et publicitaires et à d’autres fins commerciales.
    </p>

    <h2>Cookies</h2>
    <h3>Durée de conservation des cookies</h3>
    <p>
      Conformément aux recommandations de la CNIL, la durée maximale de conservation des cookies est de 13 mois au maximum après leur premier dépôt dans le terminal de l’Utilisateur, tout comme la durée de la validité du consentement de l’Utilisateur à l’utilisation de ces cookies. La durée de vie des cookies n’est pas prolongée à chaque visite. Le consentement de l’Utilisateur devra donc être renouvelé à l’issue de ce délai.
    </p>

    <h3>Finalité cookies</h3>
    <p>
      Les cookies peuvent être utilisés pour des fins statistiques notamment pour optimiser les services rendus à l’Utilisateur, à partir du traitement des informations concernant la fréquence d’accès, la personnalisation des pages ainsi que les opérations réalisées et les informations consultées.<br />
      Vous êtes informé que l’éditeur est susceptible de déposer des cookies sur votre terminal. Le cookie enregistre des informations relatives à la navigation sur le service (les pages que vous avez consultées, la date et l’heure de la consultation…) que nous pourrons lire lors de vos visites ultérieures.
    </p>

    <h2>Conservation des données techniques</h2>
    <h3>Durée de conservation des données techniques</h3>
    <p>
      Les données techniques sont conservées pour la durée strictement nécessaire à la réalisation des finalités visées ci-avant.
    </p>

    <h2>Délai de conservation des données personnelles et d’anonymisation</h2>
    <h3>Suppression manuelle des données</h3>
    <p>Des moyens de purge de données sont mis en place afin d’en prévoir la suppression effective dès lors que la durée de conservation ou d’archivage nécessaire à l’accomplissement des finalités déterminées ou imposées est atteinte. Conformément à la loi n°78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, vous disposez par ailleurs d’un droit de suppression sur vos données que vous pouvez exercer à tout moment en prenant contact avec l’éditeur.</p>

    <h2>Indications en cas de faille de sécurité décelée par l’éditeur</h2>
    <h3>Information de l’Utilisateur en cas de faille de sécurité</h3>
    <p>
      Nous nous engageons à mettre en oeuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau de sécurité adapté au regard des risques d’accès accidentels, non autorisés ou illégaux, de divulgation, d’altération, de perte ou encore de destruction des données personnelles vous concernant. Dans l’éventualité où nous prendrions connaissance d’un accès illégal aux données personnelles vous concernant stockées sur nos serveurs ou ceux de nos prestataires, ou d’un accès non autorisé ayant pour conséquence la réalisation des risques identifiés ci-dessus, nous nous engageons à :
    </p>
    <ul>
      <li>
        Vous notifier l’incident dans les plus brefs délais ;
      </li>
      <li>
        Examiner les causes de l’incident et vous en informer ;
      </li>
      <li>
        Prendre les mesures nécessaires dans la limite du raisonnable afin d’amoindrir les effets négatifs et préjudices pouvant résulter dudit incident
      </li>
    </ul>

    <h3>
      Limitation de la responsabilité
    </h3>
    <p>
      En aucun cas les engagements définis au point ci-dessus relatifs à la notification en cas de faille de sécurité ne peuvent être assimilés à une quelconque reconnaissance de faute ou de responsabilité quant à la survenance de l’incident en question.
    </p>

    <h2>
      Modification de la politique RGPD
    </h2>
    <p>
      En cas de modification de la présente politique RGPD, l’Editeur s’engage de ne pas baisser le niveau de confidentialité de manière substantielle sans l’information préalable des personnes concernées.
    </p>
  </div>
</div>