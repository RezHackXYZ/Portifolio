<script>
	let props = $props();
</script>

<div id="root">
	<h1>/</h1>
	<a href={props.link}>{@html props.logo}{props.text}{@html props.logo}</a>
</div>

<style>
	#root {
		display: flex;
		align-items: center;
		background-color: hsla(0, 0%, 8%);
	}

	a {
		display: flex;
		align-items: center;
		padding: 5px;
		margin: 5px;
		border-radius: 5px;
		text-decoration: none;
		color: white;
	}
</style>
