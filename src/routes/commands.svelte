<script lang="ts">
	import '../app.css';
	import Topbar from '../components/Navigation/Topbar.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import { onMount, afterUpdate } from 'svelte';

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

	const fetchCommands = async (version) => {
		const response = await fetch(commandListURL(version));
		const json = await response.json();
		return {
			modules: Object.keys(json),
			allCommands: json,
			commands: (module) => json[module]
		};
	};

	let currentModule: string = '';
	let version: string = '4.0.3';

	const navigationTargets = [
		{
			name: 'Invite',
			url: '/invite',
			primary: true
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
			url: '/support'
		}
	];
</script>

<svelte:head>
	<title>NadekoBot</title>
</svelte:head>

<div class="container">
	<Topbar />
	<div class="sections">
		<div class="header">
			<span class="title">Commands</span>
			<!-- Version dropdown -->
			<!-- Sort toggles -->
			<!-- Search bar -->
		</div>
		<div class="divider" />
		<div class="content">
			{#await fetchCommands(version)}
				<div class="commandsPlaceholder" />
			{:then response}
				<ul id="modules" class="modules">
					{#each response.modules as module}
						<li
							class="module"
							class:active={module === (currentModule || (currentModule = response.modules[0]))}
							on:click={() => (currentModule = module)}
						>
							{module}
						</li>
					{/each}
				</ul>
				<div id="commands" class="commands">
					{#each response.commands(currentModule || (currentModule = response.modules[0])) as command}
						<div class="commandCard">
							<span class="commandName">{command.Aliases[0]}</span>
							<p class="commandDescription">{command.Description}</p>
						</div>
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
		position: sticky;
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

	.commandCard {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 16px;
		background: rgba(230, 238, 255, 0.05);
		border-radius: 4px;
		gap: 8px;
	}

	.commandName {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		color: #f2f7ff;
	}

	.commandDescription {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		margin: 0;
		color: rgba(242, 247, 255, 0.75);
	}
</style>
