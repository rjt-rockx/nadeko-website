<script lang="ts">
	export let title: string;
	export let description: string | undefined;
	export let imageSource: string | undefined = 'images/xp.png';
	export let imageAlt: string | undefined = 'xp';
	export let imageOnRight = true;
	export let image = !!(imageSource && imageAlt);
</script>

<div class="container">
	{#if image}
		{#if imageOnRight}
			<div class="section reverseWrap">
				<div class="text part">
					<h4 class="title">{title}</h4>
					{#if description} <p class="description">{description}</p>{/if}
				</div>
				<div class="imageContainer">
					<img class="image" src={imageSource} alt={imageAlt} />
				</div>
			</div>
		{:else}
			<div class="section">
				<div class="imageContainer leftAlign">
					<img class="image" src={imageSource} alt={imageAlt} />
				</div>
				<div class="text">
					<h4 class="title">{title}</h4>
					{#if description} <p class="description">{description}</p>{/if}
				</div>
			</div>
		{/if}
		<slot />
	{:else}
		<div class="section">
			<div class="text center">
				<h4 class="title">{title}</h4>
				{#if description} <p class="description">{description}</p>{/if}
			</div>
		</div>
		<slot />
	{/if}
</div>

<style>
	.container {
		margin: 64px 0px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.section {
		max-width: min(75%, 125vh);
		display: flex;
		flex-flow: row wrap;
		flex-grow: 1;
		align-items: center;
		gap: 36px;
	}

	.reverseWrap {
		flex-flow: row wrap-reverse;
	}

	.text {
		min-width: 256px;
		max-width: 100%;
		flex-grow: 1;
		flex-basis: 0;
		align-items: center;
		justify-content: center;
	}

	.center {
		text-align: center;
	}

	.imageContainer {
		min-width: 256px;
		flex-grow: 1;
		flex-basis: 0;
		display: flex;
	}

	.leftAlign {
		justify-content: flex-start;
	}

	.image {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.title {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: 600;
		font-size: 32px;
		line-height: 40px;
		max-width: 70ch;
		margin: 0px;
		color: #f2f6ff;
	}

	.description {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 24px;
		max-width: 70ch;
		margin-top: 16px;
		color: rgba(242, 247, 255, 0.75);
	}
</style>
