<script lang="ts">
	import type { Command } from '$lib/types';

	import CommandCard from './CommandCard.svelte';

	export let list: Record<string, Command[]>;

	let currentModule = '';

	const modules = Object.keys(list);

	$: commands = currentModule ? list[currentModule] : Object.values(list).flat();
</script>

<nav id="modules" class="modules">
	<button
		class="module"
		class:active={currentModule === ''}
		tabindex="0"
		on:click={() => (currentModule = '')}>
		All modules
	</button>
	{#each modules as module}
		<button
			class="module"
			class:active={module === currentModule}
			tabindex="0"
			on:click={() => (currentModule = module)}>
			{module}
		</button>
	{/each}
</nav>
<div id="commands" class="commands">
	{#each commands as command}
		<CommandCard {command} />
	{/each}
</div>

<style>
	.modules {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: unset;
		margin: unset;
		min-width: 256px;
		height: 720px;
		overflow-y: auto;
		overflow-x: visible;
	}

	.module {
		background-color: transparent;
		border: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px;
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		border-radius: 4px;
		color: rgba(230, 238, 255, 0.5);
		transition: all 0.15s;
		overflow-x: visible;
	}

	.module.active,
	.module:hover {
		background: rgba(230, 238, 255, 0.05);
		cursor: pointer;
		font-weight: 600;
		color: #fff;
	}

	.commands {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		padding: 0;
		gap: 16px;
	}
</style>
