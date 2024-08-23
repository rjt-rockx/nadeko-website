<script>
	export let href = '/';
</script>

<a {href}>
	<div class="container">
		<img class="logo" src="images/avatar.png" alt="Nadeko logo" />
		<span class="wordmark">NadekoBot</span>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}

	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0px;
		margin-right: 12px;
		height: 100%;
	}

	.wordmark {
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		color: #f2f7ff;
		margin-left: 12px;
	}

	.logo {
		width: 32px;
		height: 32px;
		border-radius: 100%;
	}
</style>
