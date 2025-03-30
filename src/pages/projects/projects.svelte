<script>
	let Projects = [
		{
			Name: "Project 1",
			Description: "This is a description of project 1",
			Image: "https://placehold.co/600x400",
			Images: [
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
			],
		},
	];
</script>

<div id="root">
	<h1>My Projects</h1>
	<div id="grid">
		{#each Projects as Project}
			<div id="project-card">
				<h2>{Project.Name}</h2>
				<p>{Project.Description}</p>
				<div id="image-gallery">
					{#each Project.Images as Image}
						<img
							class="gallery-image"
							src={Image}
							alt="Project Other"
						/>
					{/each}
				</div>
				<img class="main-image" src={Project.Image} alt="Project" />
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
	h2,p {
		margin: 0;
	}
	#grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 20px;
	}
	#image-gallery {
		display: flex;
	}
</style>
