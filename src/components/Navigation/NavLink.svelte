<script lang="ts">
	export let href: string;
	export let text: string;
	export let primary = false;
</script>

<a class="linkcontainer" class:primary {href}>
	<span class="linktext">{text}</span>
</a>

<style>
	.linkcontainer {
		padding: 8px;
		color: rgba(230, 238, 255, 0.5);
	}

	.linkcontainer:hover {
		color: rgba(242, 247, 255, 0.75);
	}

	.linkcontainer:active {
		color: rgba(242, 247, 255, 0.75);
	}

	.primary {
		color: #4790f0;
	}

	.primary:hover {
		color: #75acf4;
	}

	.primary:active {
		color: #75acf4;
	}

	.linktext {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
	}

	a {
		text-decoration: none;
	}
</style>
