<script>
	import '../app.css';
	import Topbar from '../components/Navigation/Topbar.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import Hero from '../components/Lander/Hero.svelte';

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

	const footerSections = [
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

<div class="container">
	<Topbar {navigationTargets} />
	<div class="sections">
		<Hero />
	</div>
	<Footer sections={footerSections} />
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
		align-items: center;
		justify-content: center;
	}
</style>
