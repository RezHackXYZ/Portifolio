<script>
	let Projects = [
		{
			Name: "Portfolio",
			Description: "This awesome website about me and my projects!",
			Image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/70c2d8f2a077c09354c2ee31023ff683d016f054_image.png",
			Images: ["Javascript", "svelte", "vite"],
			Link: "https://rezhack.xyz",
		},
		{
			Name: "The Hackers Music",
			Description:
				"A better music player with cleaner and simpler UI!",
			Image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/b86072be656a86b466e50837380eb952543c2795_group_16.svg",
			Images: ["Javascript", "svelte", "vite", "youtube"],
			Link: "https://music.rezhack.xyz",
		},
		{
			Name: "Midnight Search",
			Description:
				"[WIP] A search page with built-in auto website opening, LLMs, etc.",
			Image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/8a697c39458cad11034226af0d8f3846295ed13d_image.png",
			Images: ["Javascript", "svelte", "vite", "google", "googlegemini"],
			Link: "https://github.com/RezHackXYZ/Midnight-Search",
		},
		{
			Name: "ClassRoomStuff",
			Description:
				"[WIP] A collection of tools, games, etc - for any classroom!",
			Image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/e060bcaf74865f953fed5e88ae5f24020598d814_image.png",
			Images: ["Javascript", "svelte", "vite"],
			Link: "https://edu.rezhack.xyz/",
		},
		{
			Name: "Rich/Poor",
			Description:
				"My submission for <a href='https://hack.club/swirl'>Swirl</a>, a free way to get rich or poor!",
			Image: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/dd52e91795308d5703434c5f69108c8454cf7a84_image.png",
			Images: ["Javascript", "html5", "css"],
			Link: "https://rezhackxyz.github.io/swirl-submition/",
		},
	];
</script>

<div id="root">
	<h1>My Projects</h1>
	<div id="grid">
		{#each Projects as Project}
			<div class="project-card">
				<h2>{Project.Name}</h2>
				<p>{@html Project.Description}</p>
				<div class="image-gallery">
					{#each Project.Images as Image}
						<img
							class="gallery-image"
							alt="Project Tech Stack"
							src="https://cdn.simpleicons.org/{Image}/grey"
						/>
					{/each}
				</div>
				<img class="main-image" src={Project.Image} alt="Project" />
				<a href={Project.Link} target="_blank"
					><button class="ViewProject"> Open Project </button></a
				>
			</div>
		{/each}
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		margin: 0;
		align-items: center;
	}
	h2,
	p {
		margin: 0;
	}

	p {
		color: #818181;
	}
	#grid {
		display: flex;
		flex-wrap: wrap;
		max-width: 1200px;
		justify-content: center;
	}

	.project-card {
		border: 3px solid #f0f0f0;
		width: 250px;
		margin: 10px;
		padding: 5px;
		padding-bottom: 0px;
	}
	.image-gallery {
		display: flex;
		gap: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.gallery-image {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
	.main-image {
		height: 146px;
		width: 246px;
		border: 2px solid #2e2e2e;
	}
	.ViewProject {
		background-color: #242424;
		color: white;
		border: none;
		margin-bottom: 5px;
		padding: 10px;
		width: 100%;
		cursor: pointer;
		font-size: 16px;
		font-family: "Funnel Display", sans-serif;
		transition: all 0.3s ease;
	}
	.ViewProject:hover {
		background-color: #333;
		transform: scale(1.05) rotateZ(-5deg);
	}
</style>
