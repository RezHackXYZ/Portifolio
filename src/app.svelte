<script>
	import Router from "svelte-spa-router";
	import routes from "./routes.js";
	import Me from "./navComponents/me.svelte";
	let currentRoute;
	const unsubscribe = routes.subscribe((value) => {
		currentRoute = value;
	});
</script>

<div id="root">
	<div id="nav"><Me /> currentRoute is {currentRoute}</div>
	<div id="content">
		<Router {routes} />
	</div>
</div>

<style>
	:root {
		background-color: black;
		color: white;
		font-family: "Iansui", cursive;
		font-weight: 400;
		font-style: normal;
	}

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	#nav {
		border-radius: 10px;
		margin: 10px;
		background-color: rgba(48, 48, 48, 0.369);
		display: flex;
		justify-content: space-between;
	}

	#content {
		flex: 1;
	}
</style>
