<script lang="ts">
  export let isArticle: boolean = false;

	let email = '';
	let emailError = false;

  let formSent = false;

  let textDisplayed: string = '';
  
  // const key = import.meta.env.VITE_RECAPTCHA;
  // let State = {
  //   idle: "idle",
  //   requesting: "requesting",
  //   success: "success"
  // };
  // let token;
  // let state = State.idle;

	async function addProspect() {
    // state = State.requesting;
    // doRecaptcha();
    // console.log(state, token)
		checkFormError();
		if (emailError) {
			return;
		}

    const allEmailsResponse = await fetch(import.meta.env.VITE_STRAPI_URL + '/api/newsletters', {
      method: 'GET'
    })
    const allEmailsData = await allEmailsResponse.json();
    const allEmails = allEmailsData.data ? allEmailsData.data : '';
    if (allEmails.some((elm: any) => elm.attributes.email === email && elm.attributes.check === true)) {
      textDisplayed = 'Vous êtes déjà inscrit.e à notre newsletter.'
    } else {
      let uniqueId = Math.random().toString(16).slice(2)
      const checkUniqueId = allEmails.filter((a: any) => a.uid === uniqueId)
      do {
        uniqueId = Math.random().toString(16).slice(2)
      } while (checkUniqueId.length !== 0);

      const data = {
        email: email,
        uid: uniqueId
      };

      fetch(import.meta.env.VITE_STRAPI_URL + '/api/newsletters', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      formSent = true;
    }
	}

	function checkFormError() {
		emailError = false;

		if (email === '' || (email !== '' && !validEmail(email))) {
			emailError = true;
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

  // function doRecaptcha() {
  //   grecaptcha.ready(function() {
  //     grecaptcha.execute(key, { action: "submit" }).then(function(t: any) {
  //       state = State.success;
  //       token = t;
  //     });
  //   });
  // }
</script>

<!-- <svelte:head>
  <script src="https://www.google.com/recaptcha/api.js?render={key}" async defer></script>
</svelte:head> -->

<div class="{isArticle ? 'bg-bright' : 'bg-seance'} py-16 lg:py-20">
  <div class="big-container flex max-lg:flex-col max-lg:gap-8 items-center justify-between">
    {#if isArticle}
    <p class="lg:w-2/5 text-3 text-jaguar">
      Recevez nos derniers <span class="font-highlight font-normal text-[5.7rem] leading-[3rem] text-seance">articles</span> par mail
    </p>
    {:else}
    <p class="lg:w-2/5 text-3 text-white">
      Inscrivez-vous à notre <span class="font-highlight font-normal text-[5.7rem] leading-[3rem] text-bright">newsletter</span> mensuelle
    </p>
    {/if}
    {#if formSent}
    <p class="lg:w-1/2 text-6 {isArticle ? 'text-jaguar' : 'text-white'}">
      Merci pour votre inscription à notre newsletter mensuelle.<br />Vous allez recevoir un e-mail pour confirmer votre inscription.
    </p>
    {:else}
    <form class="max-lg:w-full lg:w-1/2 relative">
      <div class="flex flex-col gap-2 w-full">
        <label class="text-6 {isArticle ? 'text-jaguar' : 'text-white'}" for="nlEmail">
          Email
        </label>
        <div class="flex max-lg:flex-col lg:items-center gap-6">
          {#if isArticle}
          <input
            bind:value={email}
            type="text"
            id="nlEmail"
            on:keyup={() => checkEmail(email)}
            class="w-full text-6 px-4 py-4 bg-transparent border-[2px] transition-colors rounded-lg focus-within:outline-none flex-1 {emailError
              ? 'text-seance border-seance'
              : 'text-jaguar border-jaguar'}"
          />
          {:else}
          <input
            bind:value={email}
            type="text"
            id="nlEmail"
            on:keyup={() => checkEmail(email)}
            class="w-full text-6 px-4 py-4 bg-transparent border-[2px] transition-colors rounded-lg focus-within:outline-none flex-1 {emailError
              ? 'text-jaguar border-jaguar'
              : 'text-white border-bright'}"
          />
          {/if}
          <div>
            <button
              on:click|preventDefault={addProspect}
              class="flex items-center gap-8 bg-jaguar transition-colors hover:bg-white hover:text-seance text-6 font-bold rounded-[3rem] px-10 py-4 duration-500 {isArticle ? 'text-white' : 'text-bright'}"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
      {#if textDisplayed !== ''}
        <p class="absolute -bottom-8 text-7 w-full">
          {textDisplayed}
        </p>
      {/if}
    </form>
    {/if}
  </div>
</div>