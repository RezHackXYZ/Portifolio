<script>
	let props = $props();
</script>

<a href={props.link}>
	<button id="button">
		<div>
			<div class="text">
				<span>{props.text}</span>
			</div>
			<div>
				<svg
					stroke-width="2"
					stroke="currentColor"
					viewBox="0 0 24 24"
					fill="none"
					class="h-6 w-6"
					xmlns="http://www.w3.org/2000/svg"
					width="20px"
				>
					<path
						d="M14 5l7 7m0 0l-7 7m7-7H3"
						stroke-linejoin="round"
						stroke-linecap="round"
					></path>
				</svg>
			</div>
		</div>
	</button>
</a>

<style>
	#button {
		display: flex;
		height: 25px;
		background-color: black;
		outline: none;
		border: none;
		color: #fff;
		padding: 0;
		overflow: hidden;
	}
</style>
