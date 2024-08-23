<script>
	import Button from '$components/Controls/Button.svelte';
	import Footer from '$components/Footer/Footer.svelte';
	import Hero from '$components/Lander/Hero.svelte';
	import LanderSection from '$components/Lander/LanderSection.svelte';
	import Topbar from '$components/Navigation/Topbar.svelte';
</script>

<svelte:head>
	<title>NadekoBot</title>
</svelte:head>

<div class="container">
	<Topbar />
	<div class="sections">
		<Hero />
		<LanderSection
			title="A command for everything."
			description="Moderation, games, leveling, it's all built into Nadeko. Set up a one-stop shop for your server's roles or manage your server's members efficiently with a single bot that does it all."
			image={true}
			imageSource="images/modules.png"
			imageAlt="A list of Nadeko's modules"
			imageOnRight={true} />
		<LanderSection
			title="Customizable XP/level-up system"
			description="Having a customizable XP system with clubs, leaderboards, level up rewards and more, Nadeko lets you modify a user's XP and even assign roles/award currency on level up!"
			image={true}
			imageSource="images/xp.png"
			imageAlt="A Nadeko XP card"
			imageOnRight={false} />
		<LanderSection
			title="One of a kind currency economy"
			description="Gamble your flowers, claim waifus, participate in events and put your currency at stake to have Nadeko decide your fate!"
			image={true}
			imageSource="images/currencyeconomy.png"
			imageAlt="A leaderboard of Nadeko's users"
			imageOnRight={true} />
		<LanderSection
			title="100% Open Source"
			description="We’re an open source project, and we rely on your donations to support the 13+ million people using Nadeko. Donate to help pay for server costs and support the bot while also getting currency rewards in return!"
			image={false}>
			<div class="buttonGroup">
				<Button href="/patreon">Patreon</Button>
				<Button href="/paypal">PayPal</Button>
			</div>
		</LanderSection>
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
