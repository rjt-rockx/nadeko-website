<script lang="ts">
	import domPurify from 'isomorphic-dompurify';
	import { marked } from 'marked';

	import type { Command } from '$lib/types';

	export let command: Command;

	$: permissions =
		Array.isArray(command.Requirements) && command.Requirements.length
			? {
					serverPermissions: command.Requirements.filter((requirement) =>
						requirement.includes('Server Permission')
					).map((requirement) =>
						requirement
							.replaceAll('Server Permission', '')
							.replace(/[A-Z]/gm, (letter) => ` ${letter}`)
							.trim()
					),
					channelPermissions: command.Requirements.filter((requirement) =>
						requirement.includes('Channel Permission')
					).map((requirement) =>
						requirement
							.replaceAll('Channel Permission', '')
							.replace(/[A-Z]/gm, (letter) => ` ${letter}`)
							.trim()
					),
					botOwner: command.Requirements.some((requirement) => requirement.includes('Bot Owner'))
				}
			: undefined;

	const renderMarkdown = (markdown: string) => {
		return domPurify.sanitize(
			marked.parse(markdown, {
				gfm: true,
				breaks: true,
				smartLists: true,
				smartypants: true
			})
		);
	};
</script>

<div class="commandCard">
	<span class="commandName">{command.Aliases[0]}</span>
	<p class="commandDescription">
		{@html renderMarkdown(command.Description)}
	</p>
	{#if command.Options}
		<span class="overline">Options</span>
		<p class="commandOptions">
			{#each command.Options as option}
				<p>{@html renderMarkdown(option)}</p>
			{/each}
		</p>
	{/if}
	{#if command.Usage}
		<div class="usage">
			<span class="overline">Usage</span>
			<p class="commandUsage">
				{#each command.Usage as usage}
					<p>{usage}</p>
				{/each}
			</p>
		</div>
	{/if}
	<div class="aliases">
		<span class="overline">Aliases</span>
		<p class="commandAliases">
			{command.Aliases.join(', ')}
		</p>
	</div>
	{#if permissions}
		<div class="permissions">
			<span class="overline">Permissions</span>
			<div class="permissionList">
				{#if permissions.serverPermissions}
					{#each permissions.serverPermissions as permission}
						<div class="permission">
							<div class="serverPermIcon" />
							<span class="permissionName">
								{permission}
							</span>
						</div>
					{/each}
				{/if}
				{#if permissions.channelPermissions}
					{#each permissions.channelPermissions as permission}
						<div class="permission">
							<div class="channelPermIcon" />
							<span class="permissionName">
								{permission}
							</span>
						</div>
					{/each}
				{/if}
				{#if permissions.botOwner}
					<div class="permission">
						<div class="botOwnerIcon" />
						<span class="permissionName">Bot Owner</span>
					</div>
				{/if}
			</div>
		</div>
	{/if}
	<span class="commandLocation">{command.Module} / {command.Submodule}</span>
</div>

<style lang="scss">
	.commandCard {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 16px;
		background: rgba(230, 238, 255, 0.05);
		border-radius: 4px;
		gap: 12px;
	}

	.commandName {
		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		color: #f2f7ff;
	}

	.commandDescription,
	.commandUsage,
	.commandAliases,
	.commandOptions,
	.permissionName {
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		color: rgba(242, 247, 255, 0.75);
		margin: 0;
		:global(a) {
			color: #4790f0;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}

		:global(p),
		:global(ul) {
			margin: 0;
		}
	}

	.overline {
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		letter-spacing: 0.5px;
		text-transform: uppercase;
		color: rgba(230, 238, 255, 0.5);
	}

	.commandLocation {
		font-style: normal;
		font-weight: 400;
		font-size: 14px;
		color: rgba(230, 238, 255, 0.5);
	}
</style>
