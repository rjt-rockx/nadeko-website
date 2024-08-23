/// <reference types="@sveltejs/kit" />

declare module '*.svg' {
	import type { SvelteComponent } from 'svelte';
	const content: SvelteComponent;
	export default content;
}

declare module '*.svg?component' {
	import type { SvelteComponent } from 'svelte';
	const content: SvelteComponent;
	export default content;
}

declare module '*.svg?src' {
	const content: string;
	export default content;
}

declare module '*.svg?url' {
	const content: string;
	export default content;
}

declare interface Window {
	twemoji: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}
