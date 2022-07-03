<script lang="ts">
	import '../app.css';
	import Topbar from '../components/Navigation/Topbar.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import { onMount, afterUpdate } from 'svelte';
	import Select from '../components/Controls/Select.svelte';
	import CommandCard from '../components/Commands/CommandCard.svelte';

	const renderTwemoji = () => {
		// @ts-ignore
		twemoji.parse(
			document.body,
			{ folder: 'svg', ext: '.svg' } // This is to specify to Twemoji to use SVGs and not PNGs
		);
	};
	onMount(renderTwemoji);
	afterUpdate(renderTwemoji);

	const commandListURL = (version) =>
		`https://nadeko-pictures.nyc3.digitaloceanspaces.com/cmds/${version}.json`;

	const fetchVersions = async () => {
		const response = await fetch(commandListURL('versions'));
		const versions = await response.json();
		return versions;
	};

	const fetchCommands = async (version) => {
		const response = await fetch(commandListURL(version.value));
		const json = await response.json();
		console.log(`Fetched ${version.value} commands`);
		return {
			modules: Object.keys(json),
			allCommands: json,
			commands: (module) => (module ? json[module] : Object.values(json).flat())
		};
	};

	let currentModule = '';
	let selectedVersion = { label: 'v4.2.2', value: '4.2.2' };

	$: commandData = fetchCommands(selectedVersion);
</script>

<svelte:head>
	<title>NadekoBot</title>
</svelte:head>

<div class="container">
	<Topbar />
	<div class="sections">
		<div class="header">
			<span class="title">Commands</span>
			{#await fetchVersions() then items}
				<Select
					items={items.map((value) => ({ label: 'v' + value, value }))}
					bind:selection={selectedVersion}
				/>
			{/await}
			<!-- Sort toggles -->
			<!-- Search bar -->
		</div>
		<div class="divider" />
		<div class="content">
			{#await commandData}
				<div class="commandsPlaceholder" />
			{:then response}
				<ul id="modules" class="modules">
					<li
						class="module"
						class:active={currentModule === ''}
						tabindex="0"
						on:click={() => (currentModule = '')}
					>
						All modules
					</li>
					{#each response.modules as module}
						<li
							class="module"
							class:active={module === currentModule}
							tabindex="0"
							on:click={() => (currentModule = module)}
						>
							{module}
						</li>
					{/each}
				</ul>
				<div id="commands" class="commands">
					{#each response.commands(currentModule) as command}
						<CommandCard {command} />
					{/each}
				</div>
			{/await}
		</div>
	</div>
	<Footer />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		background: #0f1012;
		min-height: 100%;
		height: auto;
	}

	.sections {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 16px;
		padding: 32px 64px;
	}

	.header {
		display: flex;
		align-items: center;
		flex-direction: row;
		gap: 16px;
	}

	.title {
		color: #fff;
		font-family: 'Noto Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
	}

	.divider {
		display: flex;
		align-self: stretch;
		height: 1px;
		border-top: 1px solid rgba(230, 238, 255, 0.05);
	}

	.content {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}

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
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 12px;
		font-family: 'Source Sans Pro';
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
		flex-shrink: 1;
		max-height: 720px;
		padding: 0;
		gap: 16px;
		overflow-y: scroll;
	}
</style>
