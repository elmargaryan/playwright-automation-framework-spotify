import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";

const config = [
	{
		// Specify files to apply this configuration to
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: parserTs,
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				window: "readonly",
				document: "readonly",
			},
		},
		plugins: {
			"@typescript-eslint": eslintPluginTs,
			import: eslintPluginImport, // Import plugin to handle missing imports
		},
		rules: {
			"import/no-unresolved": ["error", { commonjs: true, amd: true }],
			"import/named": "error",
			"import/default": "error",
			"import/namespace": "error",
			"import/no-extraneous-dependencies": "warn",
			// TypeScript plugin rules
			...eslintPluginTs.configs.recommended.rules,
		},
		settings: {
			"import/resolver": {
				typescript: {
					project: "./tsconfig.json", // Resolve imports using tsconfig.json
				},
			},
		},
	},
];

export default config;
