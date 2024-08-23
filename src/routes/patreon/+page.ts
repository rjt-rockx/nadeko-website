import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		status: 301,
		redirect: 'https://patreon.com/NadekoBot'
	};
};
