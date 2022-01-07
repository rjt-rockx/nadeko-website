<script lang="ts">
	export let target: string;
	export let text: string;
</script>

<a class="linkcontainer" href={target}>
	<span class="linktext">{text}</span>
</a>

<style>
	.linkcontainer {
		padding: 8px;
		color: rgba(230, 238, 255, 0.5);
	}

	.linkcontainer:hover {
		color: #4790f0;
	}

	.linkcontainer:active {
		color: #4790f0;
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
