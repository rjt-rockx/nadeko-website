<script>
	import '../app.css';
	import Topbar from '../components/Navigation/Topbar.svelte';
	import Button from '../components/Controls/Button.svelte';
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
</script>

<svelte:head>
	<title>NadekoBot</title>
</svelte:head>

<div class="container">
	<Topbar />
	<div class="sections" />
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
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 32px;
	}
</style>
