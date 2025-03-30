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
		<h1 id="YoHeading">RezHackXYZ!</h1>
	</div>
	<Links />
</div>

<style>
	#root {
		display: flex;
		justify-content: space-between;
		margin: 10px;
		border-radius: 10px;
	}
	@media (max-width: 620px) {
		#root {
			flex-direction: column;
			align-items: center;
		}
		#YoHeading {
			text-align: center;
		}
		#pfp {
			height: 30px;
		}
	}

	#me {
		display: flex;
		margin: 10px;
		align-items: center;
	}
	#YoHeading {
		margin: 0px;
		margin-left: 10px;
		color: aliceblue;
		font-size: 30px;
	}
	#pfp {
		height: 40px;
		border-radius: 10px;
	}
</style>
