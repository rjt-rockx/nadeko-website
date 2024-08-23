import { getCommands, getVersions } from '$lib/api';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const versions = await getVersions(fetch);
	const commands = await getCommands(fetch, versions[0].value);

	return { versions, commands };
};
