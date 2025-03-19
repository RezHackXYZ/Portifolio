<script>
	import Router from "svelte-spa-router";
	import routes from "./routes.js";
</script>

<div>
	<nav>
		<a href="#/">Home</a>
		<a href="#/about">About</a>
	</nav>
	<Router {routes} />
</div>

<style>
	:root {
		background-color: black;
		color: white;
		font-family: "Iansui", cursive;
		font-weight: 400;
		font-style: normal;
		display: grid;
		place-content: center;
		height: 100%;
		width: 100%;
	}
	nav {
		margin-bottom: 20px;
	}

	nav a {
		margin-right: 10px;
		text-decoration: none;
		color: white;
	}

	nav a:hover {
		text-decoration: underline;
	}
</style>
