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
	</div>
	<div id="links"></div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: calc(100vw - 40px);
		margin: 20px;
	}

	#me {
		display: flex;
		align-items: center;
		background-color: hsla(0, 0%, 12%, 0.5);
		padding: 15px;
		border-radius: 5px;
		margin: 10px;
	}
	@media screen and (max-width: 700px) {
		#me {
			flex-direction: column;
		}
	}

	#links {
		display: flex;
		align-items: center;
		background-color: hsla(0, 0%, 12%, 0.5);
		padding: 15px;
		border-radius: 5px;
		margin: 10px;
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
