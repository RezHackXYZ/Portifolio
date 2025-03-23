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
	#root {
		display: grid;
		place-items: center;
		height: 100%;
	}

	#text {
		margin: none;
		padding: none;
	}

	#seperater {
		display: flex;
		background-color: #0f0f0f;
		outline: rgb(138, 138, 138) 3px solid;
		padding: 10px;
		margin: 10px;
		margin-bottom: 50px;
		margin-left: 30px;
		border-radius: 10px;
		transition: all 0.1s linear;
		box-shadow:
			-15px 20px 0 4px #202020,
			-15px 20px 0 5px #ffffff;
	}

	@media screen and (min-width: 800px) {
		#seperater:hover {
			transform: translate(10px, -5px);
			box-shadow:
				-25px 25px 0 4px #202020,
				-25px 25px 0 5px #ffffff;
		}
	}

	#right {
		padding-top: 0 !important;
		padding: 10px;
	}

	#logo {
		height: 140px;
		padding: 10px;
		border-radius: 20%;
	}
	@media screen and (max-width: 700px) {
		#seperater {
			flex-direction: column;
		}
		#logo {
			height: 80px;
			padding-bottom: 0;
		}
	}

	#text > * {
		margin: 5px;
	}

	h5 {
		color: #ffffff5e;
		cursor: default;
	}
</style>
