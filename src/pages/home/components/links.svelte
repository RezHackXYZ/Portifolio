<script>
	import Link from "./link.svelte";
</script>

<div id="root">
	<Link link="#/aboutme" text="About Me" />
	<Link link="#/aboutme" text="About Me" />
	<Link link="#/aboutme" text="About Me" />
	<Link link="#/aboutme" text="About Me" />
</div>

<style>
	#root {
		display: flex;
		background-color: #0f0f0f;
		padding: 10px;
		margin: 10px;
		border-radius: 30px;
		width: fit-content;
		background-color: #0f0f0f;
		outline: rgb(138, 138, 138) 3px solid;
		padding: 10px;
		margin: 10px;
		margin-bottom: 50px;
		margin-left: 30px;
		border-radius: 10px;
		transition: all 0.1s linear;
		box-shadow:
			-15px 10px 0 4px #202020,
			-15px 10px 0 5px #ffffff;
	}

	#root:hover {
		transform: translate(10px, -5px);
		box-shadow:
			-25px 15px 0 4px #202020,
			-25px 15px 0 5px #ffffff;
	}

	@media screen and (max-width: 380px) {
		#root {
			flex-direction: column;
		}
	}
</style>
