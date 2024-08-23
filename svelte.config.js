import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({
			typescript: true,
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: "index.html",
			precompress: false,
			strict: true
		}),

		alias: {
			$components: './src/components',
			$lib: './src/lib'
		}
	},

	vitePlugin: {
		inspector: true
	}
};

export default config;
