<script>
	import NavLink from './NavLink.svelte';
	import NavLogo from './NavLogo.svelte';
	const routes = [
		{
			name: 'Invite',
			url: '/invite'
		},
		{
			name: 'Commands',
			url: '/commands'
		},
		{
			name: 'Suggestions',
			url: '/suggestions'
		},
		{
			name: 'Support',
			url: 'https://discord.gg/nadekobot'
		}
	];
</script>

<div class="header">
	<div class="leftPart">
		<NavLogo />
		{#each routes as route}
			<NavLink target={route.url} text={route.name} />
		{/each}
	</div>
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #0f1012;
		height: 96px;
		max-width: 100%;
		padding: 0px 64px;
	}

	.leftPart {
		display: inline-flex;
		order: 0;
		flex-grow: 0;
		padding: 16px 0px;
	}
</style>
