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
					<img
						src="https://img.shields.io/badge/12 Year Old Boy-000000.svg?style=for-the-badge&logo=
data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSI0MHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNNDc5LjkzLTY3My4zM3EtMjYuMjYgMC00NC43Ni0xOC41Ny0xOC41LTE4LjU3LTE4LjUtNDQuODMgMC0yNi4yNyAxOC41Ni00NC43N1E0NTMuOC04MDAgNDgwLjA3LTgwMHEyNi4yNiAwIDQ0Ljc2IDE4LjU3IDE4LjUgMTguNTYgMTguNSA0NC44M3QtMTguNTYgNDQuNzdxLTE4LjU3IDE4LjUtNDQuODQgMTguNVpNNDEzLjMzLTE2MHYtMjAwaC00MHYtMTkzLjMzcTAtMjcuNSAxOS41OS00Ny4wOVE0MTIuNS02MjAgNDQwLTYyMGg4MHEyNy41IDAgNDcuMDggMTkuNTggMTkuNTkgMTkuNTkgMTkuNTkgNDcuMDlWLTM2MGgtNDB2MjAwSDQxMy4zM1oiLz48L3N2Zz4="
						alt="12 year old boy"
					/>
					<img
						src="https://img.shields.io/badge/Certified%20HackCluber-000000.svg?style=for-the-badge&logo=hackclub&logoColor=white"
						alt="HackCluber"
					/>
					<img
						src="https://img.shields.io/badge/FrontEnd Web Dev-000000.svg?style=for-the-badge&logo=
data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNDBweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSI0MHB4IiBmaWxsPSIjZTNlM2UzIj48cGF0aCBkPSJNODM4LTc0LjMzIDcxMy4zMy0xOTl2OTguMzNoLTY2LjY2di0yMTIuNjZoMjEyLjY2djY2LjY2SDc2MEw4ODQuNjctMTIyIDgzOC03NC4zM1pNNDgwLTgwcS04MyAwLTE1Ni0zMS41VDE5Ny0xOTdxLTU0LTU0LTg1LjUtMTI2LjU3UTgwLTM5Ni4xNSA4MC00NzguNjdxMC04My4zMiAzMS41LTE1Ni42MVExNDMtNzA4LjU3IDE5Ny03NjIuNzkgMjUxLTgxNyAzMjQtODQ4LjUgMzk3LTg4MCA0ODAtODgwdDE1NiAzMS41cTczIDMxLjUgMTI3IDg1LjcxIDU0IDU0LjIyIDg1LjUgMTI3LjUxVDg4MC00NzguNjdxMCAyMi0yIDQzdC02LjY3IDQyLjM0SDgwMnE1LjY3LTIxLjExIDguNS00Mi4yMyAyLjgzLTIxLjExIDIuODMtNDIuOTcgMC0yMS44Ny0yLjc5LTQzLjc0LTIuOC0yMS44Ni04LjM5LTQzLjczSDY1MHEyLjMzIDIyIDQuMTcgNDMuNjdRNjU2LTUwMC42NyA2NTYtNDc5cTAgMjEuNjctMS4zMyA0My0xLjM0IDIxLjMzLTQgNDIuNjdoLTY3LjM0cTMtMjEuMzQgNC41LTQyLjY3IDEuNS0yMS4zMyAxLjUtNDIuNjcgMC0yMS44My0xLjUtNDMuNjYtMS41LTIxLjg0LTQuNS00My42N0gzNzcuNjJxLTMuMjkgMjItNC43OSA0My42Ny0xLjUgMjEuNjYtMS41IDQzLjMzIDAgMjEuNjcgMS41IDQzdDQuNSA0Mi42N2gxNzZ2NjYuNjZIMzkwLjY3cTEzLjMzIDQ5LjY3IDMzIDk2Ljg0IDE5LjY2IDQ3LjE2IDU2LjMzIDgyLjUgMjIgMCA0My4zMy0yLjUgMjEuMzQtMi41IDQzLjM0LTYuNVYtODlxLTIyIDQtNDMuMzQgNi41UTUwMi04MCA0ODAtODBaTTE1Ny44NS0zOTMuMzNIMzEwcS0yLjY3LTIxLjM0LTQtNDIuNjctMS4zMy0yMS4zMy0xLjMzLTQyLjY3IDAtMjEuODMgMS4xNi00My42NiAxLjE3LTIxLjg0IDMuNS00My42N0gxNTcuODFxLTUuNTcgMjEuODctOC4zNiA0My43My0yLjc4IDIxLjg3LTIuNzggNDMuNzQgMCAyMS44NiAyLjc5IDQyLjk3IDIuOCAyMS4xMiA4LjM5IDQyLjIzWm0yNC44Mi0yMzkuMzRoMTM5LjA2cTEwLjYtNDQuMzMgMjYuNzctODYuNSAxNi4xNy00Mi4xNiA0MC4xNy04MS41LTY1LjY3IDIyLTExOS4zNCA2NC41LTUzLjY2IDQyLjUtODYuNjYgMTAzLjVaTTM4OC0xNjBxLTIzLjMzLTM4LjY3LTM5LjUtODAuNXQtMjUuODMtODYuMTdoLTE0MHEzMS42NiA2MS42NyA4NSAxMDUuMTdRMzIxLTE3OCAzODgtMTYwWm0yLjY3LTQ3Mi42N0g1NzBRNTU3LjMzLTY4MyA1MzUuNjctNzI5LjUgNTE0LTc3NiA0ODAtODE0cS0zNCAzOC42Ny01NS42NyA4NC44My0yMS42NiA0Ni4xNy0zMy42NiA5Ni41Wm0yNDguMjIgMGgxMzguNDRxLTMzLTYxLTg2LjMzLTEwMy44M1Q1NzItODAwcTI0IDM4LjY3IDQwLjE3IDgwLjgzIDE2LjE2IDQyLjE3IDI2LjcyIDg2LjVaIi8+PC9zdmc+"
						alt="WebDev"
					/>
				</h5>
			</div>
		</div>
		<div id="links"><Links /></div>
	</div>
</div>

<style>

	#root {
		display: grid;
		place-content: center;
		height: 100%;
		margin: 0px;
	}

	#me {
		display: flex;
		margin: 10px;
		margin-bottom: 20px;
	}

	#links {
		padding: 10px;
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
		height: 100px;
		border-radius: 10px;
	}
	#boutMe {
		margin: 0px;
		margin-left: 20px;
		font-size: 15px;
	}

	#boutMe > img {
	height: 23px;
}
</style>
