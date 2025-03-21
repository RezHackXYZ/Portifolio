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
	}

	@media screen and (max-width: 380px) {
		#root {
			flex-direction: column;
		}
	}
</style>
