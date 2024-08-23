<script>
	import Button from '../Controls/Button.svelte';
</script>

<div class="section">
	<div class="heroGroup">
		<img class="heroAvatar" src="images/heroavatar.png" alt="Nadekobot Avatar" />
		<div class="heroDetails">
			<h2 class="tagline">One Discord bot to replace a ton.</h2>
			<div class="buttons">
				<Button primary={true} href="/invite">Invite</Button>
				<Button href="/commands">Commands</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.section {
		display: flex;
		max-width: 75%;
		height: auto;
		align-items: center;
		justify-content: center;
		margin: 64px;
	}
	.heroGroup {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 48px;
		align-items: center;
		padding: 0px;
	}
	.heroAvatar {
		border-radius: 100%;
		width: 192px;
		height: 192px;
	}

	.heroDetails {
		max-width: 384px;
	}

	.tagline {
		font-style: normal;
		font-weight: 600;
		font-size: 40px;
		color: #f2f7ff;
		margin: 0px;
	}

	.buttons {
		display: inline-flex;
		flex-direction: row;
		align-items: flex-start;
		margin-top: 16px;
		gap: 16px;
		width: 75%;
	}
</style>
