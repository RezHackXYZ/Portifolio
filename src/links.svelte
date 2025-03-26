<script>
	import Link from "./link.svelte";
</script>

<div id="yes">
	<Link
		link="#/"
		text="Home"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4c0390f6c9a91b83f3ae6da9d5b5a75181472fd0_home_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/aboutme"
		text="About"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/978be0e162f6aebd63c1237006f065030a90264e_person_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/contactme"
		text="Contact"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc3f312e696ec561d201c3ffe0874df1e09e70f0_waving_hand_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/"
		text="Projects"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7b8b6bf02ed987b0e68ce5c2814ea408d666caf5_folder_code_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="https://github.com/RezHackXYZ"
		text="Github"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f202b6faccfd5cc46299b976c2635fee60b55aa0_github-mark-white.svg"
	/>
</div>
<div id="no">
	<Link
		link="#/"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/4c0390f6c9a91b83f3ae6da9d5b5a75181472fd0_home_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/aboutme"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/978be0e162f6aebd63c1237006f065030a90264e_person_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/contactme"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc3f312e696ec561d201c3ffe0874df1e09e70f0_waving_hand_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="#/"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/7b8b6bf02ed987b0e68ce5c2814ea408d666caf5_folder_code_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
	/>
	<Link
		link="https://github.com/RezHackXYZ"
		logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/f202b6faccfd5cc46299b976c2635fee60b55aa0_github-mark-white.svg"
	/>
</div>

<style>
	#yes {
		display: flex;
	}

	#no {
		display: none;
	}

	@media screen and (max-width: 700px) {
		#yes {
			display: none;
		}

		#no {
			display: flex;
		}
	}
</style>
