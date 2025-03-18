<script>
	let props = $props();
</script>

<div>
	<a href={props.link} target="_blank">
		<img src={props.logo} alt="svelvet">
	</a>
</div>

<style>
	img {
		height: 25px;transition: all linear 100ms;
	}

	img:hover {
		transform: scale(1.1);
	}
</style>
