<script>
	let Projects = [
		{
			Name: "Project 1",
			Description: "This is a description of project 1",
			Image: "https://placehold.co/250x150",
			Images: [
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
			],
		},
		{
			Name: "Project 1",
			Description: "This is a description of project 1",
			Image: "https://placehold.co/250x150",
			Images: [
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
			],
		},
		{
			Name: "Project 1",
			Description: "This is a description of project 1",
			Image: "https://placehold.co/250x150",
			Images: [
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
			],
		},
		{
			Name: "Project 1",
			Description: "This is a description of project 1",
			Image: "https://placehold.co/250x150",
			Images: [
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
				"https://placehold.co/400",
			],
		},
		{
			Name: "Project 1",
			Description: "This is a description of project 1",
			Image: "https://placehold.co/250x150",
			Images: [
				"https://placehold.co/400",
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
			<div class="project-card">
				<h2>{Project.Name}</h2>
				<p>{Project.Description}</p>
				<div class="image-gallery">
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
		width: 50px;
		height: 50px;
		object-fit: cover;
	}
	.main-image {
		height: 150px;
		width: 250px;
	}
</style>
