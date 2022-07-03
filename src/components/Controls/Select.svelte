<script lang="ts">
	import Select from 'svelte-select';
	export let items: { label: string; value: string }[];
	export let selection: { label: string; value: string };
	let value = selection;
	$: selection = value || undefined;
	const handleSelect = ({ detail }) => (selection = detail);
</script>

<div class="dropdown">
	<Select {items} on:select={handleSelect} isClearable={false} value={selection} showIndicator />
</div>

<style>
	.dropdown {
		display: inline-block;
		font-family: Source Sans Pro;
		font-size: 16px;
		font-weight: 400;
		text-align: left;
		width: 96px;
		--height: 36px;
		--background: rgba(230, 238, 255, 0.05);
		--border: none;
		--borderRadius: 4px;
		--itemColor: #fff;
		--padding: 2px 12px;
		--listBorder: 1px solid rgba(230, 238, 255, 0.1);
		--itemPadding: var(--padding);
		--listBackground: #141618;
		--itemHoverBG: rgba(230, 238, 255, 0.05);
		--itemIsActiveBG: #4790f0;
		color: #fff;
	}
</style>
