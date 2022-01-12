<script lang="ts">
	export let isLink = false;
	export let href = '';
	export let disabled = false;
	export let external = false;
	export let primary = false;
</script>

{#if isLink || href}
	<a
		class="button"
		class:disabled
		class:primary
		role="button"
		{href}
		target={external ? '_blank' : '_self'}
		on:click
	>
		<slot />
	</a>
{:else}
	<button class="button" class:disabled class:primary {disabled} on:click>
		<slot />
	</button>
{/if}

<style>
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px 16px;
		border-radius: 4px;
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 25px;
		text-align: center;
		color: #f2f7ff;
		text-decoration: none;
		background: #373d49;
		flex-grow: 1;
		flex-basis: 0;
	}

	.button:hover,
	.button:active {
		background: #292e37;
	}

	.primary {
		background: #4790f0;
	}

	.primary:hover,
	.primary:active {
		background: #356cb4;
	}
</style>
