<script lang="ts">
	import { goto } from '$app/navigation';
	export let id: number;
	export let jobTitle: string;
	import SpecificInput from '$lib/components/blocks/utilities/SpecificInput.svelte';
	import Line from '../utilities/Line.svelte';
	import SpecificTextarea from '../utilities/SpecificTextarea.svelte';

	const title =
		"Vous souhaitez <span class='text-[5.7rem] leading-[3rem] text-bright font-normal font-highlight'>postuler à cette offre&nbsp;?";

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

	const key = import.meta.env.VITE_RECAPTCHA;
	let State = {
		idle: 'idle',
		requesting: 'requesting',
		success: 'success'
	};
	let token;
	let state = State.idle;

	async function addApplicant() {
		checkFormError();
		if (onError) {
			return;
		}

		state = State.requesting;
		doRecaptcha();

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

		goto('/contactez-nous/bien-recu');
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
			textDisplayed = "Une erreur s'est glissée ici.";
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
		grecaptcha.ready(function () {
			grecaptcha.execute(key, { action: 'submit' }).then(function (t: any) {
				state = State.success;
				token = t;
			});
		});
	}
</script>

<div class="bg-rock py-32 lg:py-40">
	<div class="small-container">
		<div class="mb-32 flex flex-col items-center justify-center lg:mb-40">
			<Line color="bg-seance" />
			<h2 class="text-center text-3 text-seance">
				{@html title}
			</h2>
			<p class="mt-8 text-center text-6">
				Toute candidature incomplète ne sera pas prise en compte.
			</p>
		</div>
		<form class="flex w-full flex-col gap-10">
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
				<SpecificInput
					error={firstNameError}
					content="Prénom"
					bind:value={firstName}
					required={true}
				/>
				<SpecificInput error={lastNameError} content="Nom" bind:value={lastName} required={true} />
			</div>
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
				<div class="col-span-1">
					<SpecificInput content="Téléphone" bind:value={phone} />
				</div>
				<div class="col-span-1 lg:col-span-2">
					<input
						bind:value={email}
						type="text"
						id="email-job"
						placeholder="Email*"
						on:keyup={() => checkEmail(email)}
						class="w-full rounded-lg border-[2px] border-solid bg-transparent px-8 py-6 text-6 focus-within:outline-none {emailError
							? 'border-bright'
							: 'border-seance'}"
					/>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
				<SpecificInput
					error={linkedinError}
					content="Url de votre profil LinkedIn"
					bind:value={linkedin}
					required={true}
				/>
				<SpecificInput content="Portfolio" bind:value={website} />
			</div>
			<div>
				<SpecificInput content="Url pour télécharger CV & lettre de motivation" bind:value={cv} />
				<p class="mt-4 text-7">
					Nous préférons utiliser les services comme Dropbox, Google Drive ou <a
						href="https://fromsmash.com/"
						title="Smash"
						class="font-semibold text-electric underline transition-colors hover:text-bright"
						target="_blank">Smash</a
					> afin de récupérer ce genre de fichier.
				</p>
			</div>
			<SpecificTextarea content="Quelque chose à ajouter ?" bind:value={message} />
			{#if textDisplayed !== ''}
				<p class="w-full text-7 text-bright">
					{textDisplayed}
				</p>
			{/if}
			<div class="flex justify-between gap-10 max-lg:flex-col lg:gap-40">
				<div>
					<p class="text-7">Les champs précédés d'un * sont obligatoires.</p>
					<p class="text-7">
						Les données récupérées via ce formulaire de contact serviront dans le seul but de
						répondre à votre demande.
					</p>
				</div>
				<div class="flex-1">
					<button
						on:click|preventDefault={addApplicant}
						class="rounded-[3rem] border-2 border-bright bg-transparent px-10 py-4 text-6 font-bold text-white transition-colors duration-300 hover:bg-bright hover:text-black"
					>
						Postuler
					</button>
				</div>
			</div>
		</form>
	</div>
</div>
