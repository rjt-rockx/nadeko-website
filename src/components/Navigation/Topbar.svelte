<script>
	import NavLink from './NavLink.svelte';
	import NavLogo from './NavLogo.svelte';
	const navigationTargets = [
		{
			name: 'Commands',
			url: '/commands'
		},
		{
			name: 'Suggestions',
			url: '/suggestions'
		}
	];
</script>

<div class="header">
	<div class="leftPart">
		<NavLogo />
		{#each navigationTargets as navTarget}
			<NavLink href={navTarget.url} text={navTarget.name} />
		{/each}
	</div>
</div>

<style>
	.header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #0f1012dd;
		height: 96px;
		max-width: calc(100% - 128px);
		overflow: hidden;
		padding: 0px 64px;
		position: sticky;
		top: 0px;
		z-index: 10;
	}

	.leftPart {
		display: inline-flex;
		order: 0;
		flex-grow: 0;
		padding: 16px 0px;
	}
</style>
