<script>
	export let logo =
		'https://cdn.discordapp.com/avatars/116275390695079945/0de545b2efc0baeda0fbf458f3f884dc.png?size=2048';
	export let target = '/';
</script>

<a href={target}>
	<div class="container">
		<img class="logo" src={logo} alt="Nadeko logo" />
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
		font-family: 'Noto Sans';
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
