<script>
	import FooterSection from './FooterSection.svelte';
	export let sections;
</script>

<div class="section">
	<div class="footer">
		<div class="footercontent">
			<div class="footersections">
				{#each sections as section}
					<FooterSection name={section.name} links={section.links} />
				{/each}
			</div>
		</div>
		<div class="footercontent copyrightcontent">
			<span class="copyright">© Copyright Kwoth 2022<br />Website by rjt#2336</span>
		</div>
	</div>
</div>

<style>
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 64px;
		background: #0f1012;
		max-width: calc(100% - 128px);
		overflow: hidden;
	}

	.footer {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0px;
	}

	.footercontent {
		flex: none;
		order: 6;
		align-self: stretch;
		flex-grow: 0;
	}

	.footersections {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		padding: 0px;
	}

	.copyrightcontent {
		display: flex;
		text-align: right;
		align-items: center;
	}

	.copyright {
		font-family: 'Source Sans Pro';
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		text-align: right;
		color: rgba(230, 238, 255, 0.5);
	}
</style>
