<script lang="ts">
	import { Select } from 'bits-ui';

	import CommandList from '$components/Commands/CommandList.svelte';
	import Footer from '$components/Footer/Footer.svelte';
	import Topbar from '$components/Navigation/Topbar.svelte';

	import type { PageServerData } from './$types';

	export let data: PageServerData;

	let selectedVersion = data.versions[0];
</script>

<svelte:head>
	<title>NadekoBot</title>
</svelte:head>

<div class="container">
	<Topbar />
	<div class="sections">
		<div class="header">
			<span class="title">Commands</span>
			<Select.Root bind:selected={selectedVersion}>
				<Select.Trigger>
					<Select.Value placeholder="Select a version" />
				</Select.Trigger>
				<Select.Content class="versionList">
					{#each data.versions as version}
						<Select.Item value={version.value}>
							{version.label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<!-- Sort toggles -->
			<!-- Search bar -->
		</div>
		<div class="divider" />
		<div class="content">
			<CommandList list={data.commands} />
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
		flex-grow: 1;
		gap: 16px;
		width: 100%;
	}

	:global(.versionList) {
		display: flex;
		flex-direction: column;
		background-color: rgba(0, 0, 0, 1);
		color: rgba(255, 255, 255, 1);
		gap: 8px;
		padding: unset;
		margin: unset;
		min-width: 256px;
		height: 720px;
		overflow-y: auto;
		overflow-x: hidden;
	}
</style>
