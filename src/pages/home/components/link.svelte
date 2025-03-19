<script>
	let props = $props();
</script>

<div>
	{#if props.link}
		<a href={props.link} target="_blank">
			<img src={props.logo} alt={props.name} />
		</a>
	{:else}
		<img src={props.logo} alt={props.name} />
	{/if}
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
