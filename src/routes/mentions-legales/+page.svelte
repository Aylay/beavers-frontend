<script lang="ts">
  import Header from "$lib/components/blocks/common/Header.svelte";
	import MetaFront from "$lib/components/utilities/MetaFront.svelte";

const title = "Mentions Légales"
const subtitle = 'Les mentions légales vues par les castors'

const meta = {
  title: "Les mentions légales de l'agence digitale Beavers",
  description: "Voici les informations légales des castors de l'agence digital média Beavers"
}
</script>

<MetaFront {meta} />

<div class="flex flex-col gap-20 lg:gap-40 pb-20 lg:pb-40">
  <Header {title} {subtitle} />
  <div class="small-container content-style flex flex-col gap-8">
    <h2>Le site beavers-agency.fr</h2>
    <h3>Informations légales</h3>
    <p>
      Beavers<br />
      28 rue de la font des anguilles, 83520 Roquebrune-sur-Argens<br />
      Tél : 06 64 64 44 70<br />
      SARL au capital de 150 euros<br />
      SIREN : 853 663 334<br />
      R.C.S de Fréjus<br />
      N° TVA : FR88853663334<br />
      E-mail : &#108;&#101;&#115;&#45;&#99;&#97;&#115;&#116;&#111;&#114;&#115;&#64;&#98;&#101;&#97;&#118;&#101;&#114;&#115;&#45;&#97;&#103;&#101;&#110;&#99;&#121;&#46;&#102;&#114;
    </p>

    <h3>Création du site</h3>
    <p>Le site internet a été créé par Beavers.</p>

    <h3>Directeur de la publication et Webmaster</h3>
    <p>
      Lucas ATTALI – Personne physique<br />
      E-mail : &#108;&#97;&#116;&#116;&#97;&#108;&#105;&#64;&#98;&#101;&#97;&#118;&#101;&#114;&#115;&#45;&#97;&#103;&#101;&#110;&#99;&#121;&#46;&#102;&#114;
    </p>

    <h3>Hébergement</h3>
    <p>
      Vercel Inc.<br />
      340 S Lemon Ave #4133<br />
      Walnut, CA 91789
    </p>
  </div>
</div>