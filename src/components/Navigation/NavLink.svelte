<script lang="ts">
	import { page } from '$app/stores';
	export let href: string;
	export let text: string;
	export let primary = false;
	export let current = $page.url.pathname === href;
</script>

<a class="linkcontainer" class:primary class:current {href}>
	<span class="linktext">{text}</span>
</a>

<style>
	.linkcontainer {
		padding: 8px;
		color: rgba(230, 238, 255, 0.5);
	}

	.linkcontainer:hover,
	.linkcontainer:active {
		color: rgba(242, 247, 255, 0.75);
	}

	.current,
	.current:hover,
	.current:active {
		color: white;
		cursor: default;
	}

	.primary {
		color: #4790f0;
	}

	.primary:hover,
	.primary:active {
		color: #75acf4;
	}

	.linktext {
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
	}

	a {
		text-decoration: none;
	}
</style>
