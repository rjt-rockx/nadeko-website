export type Command = {
	Aliases: string[];
	Description: string;
	Usage: string[] | null;
	Submodule: string;
	Module: string;
	Options: string[] | null;
	Requirements: string[] | null;
};
