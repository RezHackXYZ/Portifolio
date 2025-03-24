<script>
	let props = $props();
</script>

<a href={props.link}>
	<button style="width: {props.length};">
		<div class="text">
			<span>{@html props.logo}</span>
			<span>{props.text}</span>
		</div>
		<div class="clone">
			<span>{@html props.logo}</span>
			<span>{props.text}</span>
		</div>
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
	</button></a
>

<style>
	button {
		height: 56px;
		overflow: hidden;
		border: none;
		border-radius: 5px;
		color: #fff;
		background: none;
		position: relative;
		padding-bottom: 2em;
		cursor: pointer;
		font-family: "Inter", sans-serif;
		font-optical-sizing: auto;
		font-weight: 200;
		font-style: normal;
	}

	button > div,
	button > svg {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
	}

	button:before {
		content: "";
		position: absolute;
		height: 2px;
		bottom: 0;
		left: 0;
		width: 100%;
		transform: scaleX(0);
		transform-origin: bottom right;
		background: currentColor;
		transition: transform 0.25s ease-out;
	}

	button:hover:before {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	button .clone > *,
	button .text > * {
		opacity: 1;
		font-size: 1.3rem;
		transition: 0.2s;
		margin-left: 4px;
	}

	button .clone > * {
		transform: translateY(60px);
	}

	button:hover .clone > * {
		opacity: 1;
		transform: translateY(0px);
		transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	}

	button:hover .text > * {
		opacity: 1;
		transform: translateY(-60px);
		transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
	}

	button:hover .clone > :nth-child(1) {
		transition-delay: 0.15s;
	}

	button:hover .clone > :nth-child(2) {
		transition-delay: 0.2s;
	}
	button svg {
		width: 20px;
		right: 0;
		top: 50%;
		transform: translateY(-50%) rotate(-125deg);
		opacity: 0;
		transition: 0.2s ease-out;
	}

	button:hover svg {
		transform: translateY(-50%) rotate(-45deg);
		opacity: 1;
	}
</style>
