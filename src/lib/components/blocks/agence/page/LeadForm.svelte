<script lang="ts">
	import { goto } from "$app/navigation";
	import SpecificInput from "$lib/components/blocks/utilities/SpecificInput.svelte";

  export let title: string;

  let firstName = '';
	let firstNameError = false;
  let lastName = '';
	let lastNameError = false;
  let company = '';
  let companyError = false;
  let phone = '';
  let email = '';
	let emailError = false;
  let onError = false;
  let textDisplayed: string = '';
  
  const key = import.meta.env.VITE_RECAPTCHA;
  let State = {
    idle: "idle",
    requesting: "requesting",
    success: "success"
  };
  let token;
  let state = State.idle;
  
  async function addContact() {
		checkFormError();
		if (onError) {
			return;
		}

    state = State.requesting;
    doRecaptcha();

    const data = {
      firstName: firstName,
      lastName: lastName,
      company: company,
      phone: phone,
      email: email,
      message: 'LP' + title + ' ! A recontacter rapidement svp ;)'
    };

    fetch(import.meta.env.VITE_STRAPI_URL + '/api/contacts', {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    goto('/contactez-nous/bien-recu')
	}

  function checkFormError() {
    firstNameError = false;
	  lastNameError = false;
	  companyError = false;
	  emailError = false;
    onError = false;

    if (firstName === '' || firstName.length < 2) {
      onError = true;
      firstNameError = true;
    }

    if (lastName === '' || lastName.length < 2) {
      onError = true;
      lastNameError = true;
    }

    if (company === '' || company.length < 2) {
      onError = true;
      companyError = true;
    }

    if (email === '' || (email !== '' && !validEmail(email))) {
      emailError = true;
      onError = true;
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

  function checkEmail(email: string) {
    emailError = false;
    if (email === '' || (email !== '' && !validEmail(email))) {
      emailError = true;
    }
  }

  function doRecaptcha() {
    grecaptcha.ready(function() {
      grecaptcha.execute(key, { action: "submit" }).then(function(t: any) {
        state = State.success;
        token = t;
      });
    });
  }
</script>

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
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
    <SpecificInput
      error={companyError}
      content="Société"
      bind:value={company}
      required={true}
    />
    <SpecificInput
      content="Téléphone"
      bind:value={phone}
    />
  </div>
  <input
    bind:value={email}
    type="text"
    id="email-contact"
    placeholder="Email*"
    on:keyup={() => checkEmail(email)}
    class="w-full border-[2px] border-solid rounded-lg py-6 px-8 text-6 bg-transparent focus-within:outline-none {emailError
      ? 'border-bright'
      : 'border-seance'}"
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
        on:click|preventDefault={addContact}
        class="text-6 font-bold text-white border-bright bg-transparent hover:bg-bright hover:text-black duration-300 rounded-[3rem] border-2 px-10 py-4 transition-colors"
      >
        Découvrir&nbsp;l'agence&nbsp;!
      </button>
    </div>
  </div>
</form>