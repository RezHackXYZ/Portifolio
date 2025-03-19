<script>
	document.title = "My Website";
	import Skills from "./components/Skills.svelte";
</script>

<div id="seperater">
	<div id="text">
		<h1>Hey! im RezHackXYZ!</h1>
		<h5>Im a 12 year old kid who loves tech and is learing web dev!</h5>
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

	#text {
		margin: 0;
		padding: 0;
	}

	#seperater {
		margin: 10px;
		padding: 10px;
	}

	#text > * {
		margin: 5px;
	}

	h5 {
		color: #ffffff5e;
		cursor: default;
	}
</style>
