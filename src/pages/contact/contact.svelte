<script>
	import Link from "../home/components/link.svelte";
</script>

<div id="root">
	<h1>ways to to say :hi: Hi! :hi:</h1>

	<button>
		<Link
			length="370px"
			link="#/"
			text="HackClub Slack - @RezHackXYZ"
			logo="<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'><path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm320-320v240h240v-240H520Zm0-80h240v-240H520v240Zm-80 0v-240H200v240h240Zm0 80H200v240h240v-240Z'/></svg>"
		/>
	</button>
	<button style="">
		<Link
			length="310px"
			link="#/"
			text="Email Me - hi@rezhack.xyz"
			logo="<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#e3e3e3'><path d='M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z'/></svg>"
		/>
	</button>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px;
	}

	button {
		height: calc(100% - 40px);
		margin-bottom: 30px;
		padding: 10px;
		padding-left: 20px;
		padding-right: 20px;
		background-color: #0f0f0f;
		color: aliceblue;
		border: none;
		outline: rgb(138, 138, 138) 3px solid;
		border-radius: 10px;
		transition: all 0.1s linear;
		box-shadow:
			-10px 10px 0 4px #202020,
			-10px 10px 0 5px #ffffff;
	}
	@media screen and (min-width: 800px) {
		button:hover {
			transform: translate(10px, -5px);
			box-shadow:
				-20px 15px 0 4px #202020,
				-20px 15px 0 5px #ffffff;
		}
	}
</style>
