<script>
	let props = $props();
</script>

<a href={props.link}>
	<button>
		<span id="icon">{@html props.logo}</span>
		<span id="text">{props.text}</span>
	</button>
</a>

<style>
	@media screen and (max-width: 450px) {
		#text {
			display: none;
		}
	}

	button {
		height: calc(100% - 40px);
		margin: 20px;
		margin-left: 0px;
		margin-right: 17px;
		background-color: #0f0f0f;
        color: aliceblue;

		outline: rgb(138, 138, 138) 3px solid;
		border-radius: 10px;
		transition: all 0.1s linear;
		box-shadow:
			-5px 3px 0 4px #202020,
			-5px 3px 0 3px #ffffff;
	}
</style>
