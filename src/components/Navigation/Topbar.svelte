<script>
	import NavLink from './NavLink.svelte';
	import NavLogo from './NavLogo.svelte';
	export let navigationTargets;
</script>

<div class="header">
	<div class="leftPart">
		<NavLogo />
		{#each navigationTargets as navTarget}
			<NavLink href={navTarget.url} text={navTarget.name} primary={navTarget.primary} />
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
		position: sticky;
	}

	.leftPart {
		display: inline-flex;
		order: 0;
		flex-grow: 0;
		padding: 16px 0px;
	}
</style>
