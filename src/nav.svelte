<script>
    import Links from "./links.svelte";
</script>

<div id="root">
	<div id="me">
		<img
			src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0ec4bfb7eea37c2d45276ce04276da40533b6d05_group_1__1_.svg"
			alt="my pfp"
			id="pfp"
		/>
		<div id="text">
			<h1 id="YoHeading">Yo, Im RezHackXYZ!</h1>
			<h5 id="boutMe">
				Im a 12 year old kid who loves tech and is learing web dev!!!!!
			</h5>
		</div>
	</div><Links />

</div>

<style>
	#root {
		display: flex;
        justify-content: space-between;
		margin: 10px;
		border-radius: 10px;

	}

	#me {
		display: flex;
		margin: 10px;
	}
	@media screen and (max-width: 1000px) {
		#text {
			display: none;
		}
	}

	#YoHeading {
		margin: 0px;
		margin-left: 10px;
		color: aliceblue;
		font-size: 30px;
	}
	#pfp {
		height: 60px;
		border-radius: 10px;
	}
	#boutMe {
		margin: 0px;
		margin-left: 10px;
		color: #919191;
		font-size: 15px;
	}
</style>
