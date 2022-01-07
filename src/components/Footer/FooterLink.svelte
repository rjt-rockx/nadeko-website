<script>
	export let url;
	export let name;
</script>

<a href={url}>
	<span class="footerlink">
		{name}
	</span>
</a>

<style>
	a {
		text-decoration: none;
		margin-top: 4px;
		margin-bottom: 4px;
	}

	.footerlink {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 20px;
		color: rgba(230, 238, 255, 0.5);
		flex: none;
		order: 0;
		flex-grow: 0;
	}

	.footerlink:hover {
		color: #00b0f4;
	}
</style>
