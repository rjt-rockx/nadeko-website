<script lang="ts">
	import '../app.css';

	import twemoji from '@discordapp/twemoji';
	import { afterUpdate, onMount } from 'svelte';

	const renderTwemoji = () => {
		twemoji.parse(
			document.body,
			{ folder: 'svg', ext: '.svg' } // This is to specify to Twemoji to use SVGs and not PNGs
		);
	};
	onMount(renderTwemoji);
	afterUpdate(renderTwemoji);
</script>

<slot />
