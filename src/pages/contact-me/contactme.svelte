<script>
	import Link from "../../link.svelte";
</script>

<div id="root">
	<div>
		<div id="me">
			<h3 id="YoHeading">
				Here are some ways to say <img
					src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc3f312e696ec561d201c3ffe0874df1e09e70f0_waving_hand_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
					alt="wave"
				/>hi<img
					src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/fc3f312e696ec561d201c3ffe0874df1e09e70f0_waving_hand_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
					alt="wave"
				/>!
			</h3>
			<h6 id="boutMe">From Fastest to Slowest:</h6>
		</div>
		<div id="links">
			<Link
				link="https://hackclub.slack.com/team/U082KMLM7DW"
				text="HC slack - @RezHackXYZ"
				logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/2d9cda3e81fcded02202a700e5e3bbc4b908b05d_group_1__1_.svg"
			/>
			<Link
				link="mailto:rhythm.upa@gmail.com"
				text="Email - rhythm.upa@gmail.com"
				logo="https://hc-cdn.hel1.your-objectstorage.com/s/v3/b9d8a2dc71ce904752fe9257ab095c12b8c66e71_forward_to_inbox_24dp_e3e3e3_fill0_wght400_grad0_opsz24.svg"
			/>
		</div>
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0px;
	}

	#me {
		margin-bottom: 20px;
	}

	#links {
		width: fit-content;
	}

	#YoHeading {
		margin: 0px;
		color: aliceblue;
		font-size: 35px;
	}
	#boutMe {
		margin: 0px;
		color: #919191;
		font-size: 12px;
	}
</style>
