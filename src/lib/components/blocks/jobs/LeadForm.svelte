<script lang="ts">
  export let id: number;
  export let jobTitle: string;
	import SpecificInput from "$lib/components/blocks/utilities/SpecificInput.svelte";
  import Line from "../utilities/Line.svelte";
	import SpecificTextarea from "../utilities/SpecificTextarea.svelte";

  let firstName = '';
	let firstNameError = false;
  let lastName = '';
	let lastNameError = false;
  let phone = '';
  let email = '';
	let emailError = false;
  let linkedin = '';
	let linkedinError = false;
  let website = '';
  let cv = '';
  let message = '';
  let onError = false;
  let textDisplayed: string = '';

  async function addApplicant() {
		checkFormError();
		if (emailError) {
			return;
		}

    const data = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      linkedIn: linkedin,
      portfolio: website,
      cv: cv,
      message: message,
      job: id,
      jobTitle: jobTitle
    };

    fetch(import.meta.env.VITE_STRAPI_URL + '/api/candidatures', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
	}

  function checkFormError() {
    firstNameError = false;
	  lastNameError = false;
	  emailError = false;
    linkedinError = false;
    onError = false;

    if (firstName === '' || firstName.length < 2) {
      onError = true;
      firstNameError = true;
    }

    if (lastName === '' || lastName.length < 2) {
      onError = true;
      lastNameError = true;
    }

    if (email === '' || (email !== '' && !validEmail(email))) {
      emailError = true;
      onError = true;
    }

    if (linkedin === '' || linkedin.length < 2) {
      onError = true;
      linkedinError = true;
    }

    if (onError) {
      textDisplayed = "Une erreur s'est glissée ici."
    }
  }

  function validEmail(email: string) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
</script>

<div class="bg-rock py-32 lg:py-40">
  <div class="small-container">
    <div class="flex flex-col justify-center items-center mb-32 lg:mb-40">
      <Line color="bg-seance" />
      <h2 class="text-center text-seance text-3">
        Vous souhaitez <span class="text-[5.7rem] leading-[3rem] text-bright font-normal font-highlight">postuler à cette offre ?</span>
      </h2>
      <p class="text-center text-6 mt-8">
        Toute candidature incomplète ne sera pas prise en compte.
      </p>
    </div>
    <form class="w-full flex flex-col gap-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <SpecificInput
          error={firstNameError}
          content="Prénom"
          bind:value={firstName}
          required={true}
        />
        <SpecificInput
          error={lastNameError}
          content="Nom"
          bind:value={lastName}
          required={true}
        />
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div class="col-span-1">
          <SpecificInput
            content="Téléphone"
            bind:value={phone}
          />
        </div>
        <div class="col-span-2">
          <SpecificInput
            error={emailError}
            content="Email"
            bind:value={email}
            required={true}
          />
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <SpecificInput
          error={linkedinError}
          content="Url de votre profil LinkedIn"
          bind:value={linkedin}
          required={true}
        />
        <SpecificInput
          content="Portfolio"
          bind:value={website}
        />
      </div>
      <div>
        <SpecificInput
          content="Url pour télécharger CV & lettre de motivation"
          bind:value={cv}
        />
        <p class="text-7 mt-4">Nous préférons utiliser les services comme Dropbox, Google Drive ou <a href="https://fromsmash.com/" title="Smash" class="underline font-semibold text-seance hover:text-bright transition-colors" target="_blank">Smash</a> afin de récupérer ce genre de fichier.</p>
      </div>
      <SpecificTextarea 
        content="Quelque chose à ajouter ?"
        bind:value={message}
      />
      {#if textDisplayed !== ''}
        <p class="text-7 w-full text-bright">
          {textDisplayed}
        </p>
      {/if}
      <div class="flex max-lg:flex-col gap-10 lg:gap-40 justify-between">
        <div>
          <p class="text-7">
            Les champs précédés d'un * sont obligatoires.
          </p>
          <p class="text-7">
            Les données récupérées via ce formulaire de contact serviront dans le seul but de répondre à votre demande.
          </p>
        </div>
        <div class="flex-1">
          <button
            on:click|preventDefault={addApplicant}
            class="text-6 font-bold text-white border-bright bg-transparent hover:bg-bright hover:text-black duration-300 rounded-[3rem] border-2 px-10 py-4 transition-colors">
            Postuler
          </button>
        </div>
      </div>
    </form>
  </div>
</div>