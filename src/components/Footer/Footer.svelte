<script>
	import FooterSection from './FooterSection.svelte';

	const sections = [
		{
			name: 'Nadeko',
			links: [
				{
					name: 'Invite',
					url: '/invite'
				},
				{
					name: 'Commands',
					url: '/commands'
				},
				{
					name: 'Suggest',
					url: '/suggest'
				},
				{
					name: 'Support',
					url: '/support'
				}
			]
		},
		{
			name: 'Selfhosting',
			links: [
				{
					name: 'Download',
					url: '/download'
				},
				{
					name: 'Documentation',
					url: '/docs'
				},
				{
					name: 'Source Code',
					url: '/source'
				},
				{
					name: 'Embed builder',
					url: '/embeds'
				}
			]
		},
		{
			name: 'Guides',
			links: [
				{
					name: 'Windows',
					url: '/guides/windows'
				},
				{
					name: 'Linux',
					url: '/guides/linux'
				},
				{
					name: 'Mac',
					url: '/guides/mac'
				}
			]
		}
	];
</script>

<div class="section">
	<div class="footer">
		<div class="footercontent">
			<div class="footersections">
				{#each sections as section}
					<FooterSection name={section.name} links={section.links} />
				{/each}
			</div>
		</div>
		<div class="footercontent">
			<span class="copyright">© Copyright Kwoth 2022</span>
		</div>
	</div>
</div>

<style>
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 64px;
		background: #0f1012;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		padding: 0px;
	}

	.footercontent {
		flex: none;
		order: 6;
		align-self: stretch;
		flex-grow: 0;
	}

	.footersections {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		padding: 0px;
	}

	.copyright {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		text-align: right;
		color: rgba(230, 238, 255, 0.5);
	}
</style>
