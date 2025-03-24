<script>
	let props = $props();
</script>

<div>
	<img src={props.logo} alt="one of my skils logo" />
</div>

<style>
	img {
		height: 30px;
		transition: all linear 100ms;
		padding: 5px;
		padding-left: 0px;
	}

	img:hover {
		transform: scale(1.1);
	}
</style>
