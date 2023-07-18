<script lang="ts">
	import SpecificInput from "$lib/components/blocks/utilities/SpecificInput.svelte";
	import SpecificTextarea from "../utilities/SpecificTextarea.svelte";

  let firstName = '';
	let firstNameError = false;
  let lastName = '';
	let lastNameError = false;
  let company = '';
  let phone = '';
  let email = '';
	let emailError = false;
  let message = '';
	let messageError = false;
  let onError = false;
  let textDisplayed: string = '';
  
  async function addContact() {
		checkFormError();
		if (emailError) {
			return;
		}

    const data = {
      firstName: firstName,
      lastName: lastName,
      company: company,
      phone: phone,
      email: email,
      message: message,
    };

    fetch(import.meta.env.VITE_STRAPI_URL + '/api/contacts', {
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
	  messageError = false;
    onError = false;

    if (firstName === '' || firstName.length < 2) {
      onError = true;
      firstNameError = true;
    }

    if (lastName === '' || lastName.length < 2) {
      onError = true;
      lastNameError = true;
    }

    if (message === '' || message.length < 2) {
      onError = true;
      messageError = true;
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
      content="Société"
      bind:value={company}
    />
    <SpecificInput
      content="Téléphone"
      bind:value={phone}
    />
  </div>
  <SpecificInput
    error={emailError}
    content="Email"
    bind:value={email}
    required={true}
  />
  <SpecificTextarea 
    error={messageError}
    content="Message"
    bind:value={message}
    required={true}
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
        Envoyer&nbsp;!
      </button>
    </div>
  </div>
</form>