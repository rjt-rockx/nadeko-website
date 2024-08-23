import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		status: 301,
		redirect:
			'https://discord.com/oauth2/authorize?client_id=170254782546575360&scope=bot&permissions=8'
	};
};
