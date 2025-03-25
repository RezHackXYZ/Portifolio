<script>
	import Links from "./links.svelte";
</script>

<div id="root">
	<div>
		<div id="me">
			<img
				src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/0ec4bfb7eea37c2d45276ce04276da40533b6d05_group_1__1_.svg"
				alt="my pfp"
				id="pfp"
			/>
			<div id="text">
				<h1 id="YoHeading">Yo, Im RezHackXYZ!</h1>
				<h5 id="boutMe">
					Im a 12 year old kid who loves tech and is learing web
					dev!!!!!
				</h5>
			</div>
		</div>
		<div id="links"><Links /></div>
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin: 0px;
	}

	#me {
		display: flex;
		margin: 10px;
		margin-bottom: 20px;
	}
	@media screen and (max-width: 700px) {
		#me {
			flex-direction: column;
		}
	}

	#links {
		margin: 10px;
		width: fit-content;
	}

	#YoHeading {
		margin: 0px;
		margin-left: 20px;
		margin-right: 5px;
		color: aliceblue;
		font-size: 50px;
	}
	#pfp {
		width: 100px;
		height: 100px;
		border-radius: 7px;
	}
	#boutMe {
		margin: 0px;
		margin-left: 20px;
		color: #919191;
		font-size: 15px;
	}
</style>
