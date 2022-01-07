<script lang="ts">
	import FooterLink from './FooterLink.svelte';
	type FooterLinkType = { name: string; url: string };
	export let name: string;
	export let links: FooterLinkType[];
</script>

<div class="sectionContainer">
	<span class="sectionName">{name}</span>
	{#each links as link}
		<FooterLink name={link.name} url={link.url} />
	{/each}
</div>

<style>
	.sectionContainer {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 0px;
		margin-right: 64px;
	}

	.sectionName {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 15px;
		text-transform: uppercase;
		color: #00b0f4;
		margin-bottom: 16px;
	}
</style>
