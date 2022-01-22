<script>
	import '../app.css';
	import Topbar from '../components/Navigation/Topbar.svelte';
	import Button from '../components/Button/Button.svelte';
	import Footer from '../components/Footer/Footer.svelte';
	import Hero from '../components/Lander/Hero.svelte';
	import LanderSection from '../components/Lander/LanderSection.svelte';
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

	const landerSections = [{}];

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

<svelte:head>
	<title>NadekoBot</title>
</svelte:head>

<div class="container">
	<Topbar {navigationTargets} />
	<div class="sections">
		<Hero />
		<LanderSection
			title="A command for everything."
			description="Moderation, games, leveling, it's all built into Nadeko. Set up a one-stop shop for your server's roles or manage your server's members efficiently with a single bot that does it all."
			image={true}
			imageSource="modules.png"
			imageAlt="A list of Nadeko's modules"
			imageOnRight={true}
		/>
		<LanderSection
			title="Customizable XP/level-up system"
			description="Having a customizable XP system with clubs, leaderboards, level up rewards and more, Nadeko lets you modify a user's XP and even assign roles/award currency on level up!"
			image={true}
			imageSource="xp.png"
			imageAlt="A Nadeko XP card"
			imageOnRight={false}
		/>
		<LanderSection
			title="One of a kind currency economy"
			description="Gamble your flowers, claim waifus, participate in events and put your currency at stake to have Nadeko decide your fate!"
			image={true}
			imageSource="currencyeconomy.png"
			imageAlt="A leaderboard of Nadeko's users"
			imageOnRight={true}
		/>
		<LanderSection
			title="100% Open Source"
			description="We’re an open source project, and we rely on your donations to support the 13+ million people using Nadeko. Donate to help pay for server costs and support the bot while also getting currency rewards in return!"
			image={false}
		>
			<div class="buttonGroup">
				<Button href="/patreon">Patreon</Button>
				<Button href="/paypal">PayPal</Button>
			</div>
		</LanderSection>
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

	.buttonGroup {
		display: flex;
		flex-direction: row;
		max-width: min(384px, calc(100% - 128px));
		width: 100%;
		gap: 24px;
	}
</style>
