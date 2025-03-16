<script>
	document.title = "My Website";
	import Skills from "./components/Skills.svelte";
</script>

<div id="seperater">
	<div id="text">
		<h1>Yo! im RezHackXYZ!</h1>
		<h5>Did you know i am better that you.</h5>
	</div>
	<div id="content">
		<Skills />
	</div>
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

	#seperater {
		margin: 10px;
		padding: 10px;
	}

	#text > * {
		margin: 0;
	}
</style>
