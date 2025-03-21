<script>
	import Links from "./components/links.svelte";
	document.title = "My Website";
	import Skills from "./components/Skills.svelte";
</script>

<div id="root">
	<div>
		<div id="seperater">
			<div>
				<img
					id="logo"
					src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0ec4bfb7eea37c2d45276ce04276da40533b6d05_group_1__1_.svg"
					alt="RezHackXYZ"
				/>
			</div>
			<div id="right">
				<div id="text">
					<h1>Hey! im RezHackXYZ!</h1>
					<h5>
						Im a 12 year old kid who loves tech and is learing web
						dev!
					</h5>
				</div>
				<div id="content">
					<Skills />
				</div>
			</div>
		</div>
		<Links />
	</div>
</div>

<style>
	@media screen and (max-width: 570px) {
		#logo {
			display: none;
		}
	}

	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}

	#text {
		margin: 0;
		padding: 0;
	}

	#seperater {
		display: flex;
		background-color: #0f0f0f;
		padding: 10px;
		margin: 10px;
		border-radius: 30px;
	}

	#right {
		padding: 10px;
	}

	#logo {
		height: 140px;
		padding: 10px;
		border-radius: 20%;
	}

	#text > * {
		margin: 5px;
	}

	h5 {
		color: #ffffff5e;
		cursor: default;
	}
</style>
