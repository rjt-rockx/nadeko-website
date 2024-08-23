module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'simple-import-sort'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				svelteFeatures: {
					experimentalGenerics: true
				}
			},
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'warn',
					{
						// it doesn't support $$Props yet
						// eslint-disable-next-line no-useless-escape
						varsIgnorePattern: '^[_|$$]'
					}
				],
				'no-undef': 'off',
				'svelte/no-at-html-tags': 'off'
			}
		}
	],
	rules: {
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn'
	}
};
