<script lang="ts">
	let email = '';
	let emailError = false;

  let formSent = false;

	function addProspect() {
		checkFormError();
		if (emailError) {
			return;
		}

		// const data = {
		// 	email: email
		// };

		// fetch(import.meta.env.VITE_STRAPI_URL + '/api/contacts', {
		// 	method: 'POST',
		// 	body: JSON.stringify({ data }),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });

		formSent = true;
	}

	function checkFormError() {
		emailError = false;

		if (email === '' || (email !== '' && !validEmail(email))) {
			emailError = true;
		}
	}

	function validEmail(email: string) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
</script>

<div class="bg-seance lg:py-20">
  <div class="big-container flex items-center justify-between">
    <p class="lg:w-2/5 text-3">
      Inscrivez-vous à notre <span class="font-highlight text-[5.7rem] leading-[3rem] text-bright">newsletter</span> mensuelle
    </p>
    {#if formSent}
    <p class="lg:w-1/2 text-6">
      Merci pour votre inscription à notre newsletter mensuelle.<br />Vous allez recevoir un e-mail pour confirmer votre inscription.
    </p>
    {:else}
    <form class="lg:w-1/2 flex items-center">
      <div class="flex flex-col gap-2 w-full">
        <label class="text-6" for="nlEmail">
          Email
        </label>
        <div class="flex items-center gap-6">
          <input
            bind:value={email}
            type="text"
            id="nlEmail"
            on:focus={() => (emailError = false)}
            class="w-full text-6 px-4 py-4 bg-transparent border-[2px] transition-colors rounded-lg focus-within:outline-none flex-1 {emailError
              ? 'text-black border-black'
              : 'text-white border-bright'}"
          />
          <div>
            <button
              on:click|preventDefault={addProspect}
              class="flex items-center gap-8 bg-jaguar text-bright transition-colors hover:bg-white hover:text-seance text-6 font-bold rounded-[3rem] px-10 py-4 duration-500"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </form>
    {/if}

  </div>
</div>