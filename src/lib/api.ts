import type { Command } from './types';

export const commandListURL = (version: string | number) =>
	`https://nadeko-pictures.nyc3.digitaloceanspaces.com/cmds/${version}.json`;

export async function getVersions(fetchFn: typeof window.fetch) {
	const versions = await fetchFn(commandListURL('versions'));
	const versionsJson = (await versions.json()) as string[];
	return versionsJson.map((value) => ({ label: 'v' + value, value }));
}

export async function getCommands(fetchFn: typeof window.fetch, version: string) {
	const commands = await fetchFn(commandListURL(version));
	const commandsJson = (await commands.json()) as Record<string, Command[]>;
	return commandsJson;
}
