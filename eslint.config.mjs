// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactHooksAddons from 'eslint-plugin-react-hooks-addons';
import vitest from '@vitest/eslint-plugin';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  vitest.configs.recommended,
  reactHooksAddons.configs.recommended,
  prettier,
  {
    files: ['**/*.?(c|m)js'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    ignores: [
      '**/coverage/',
      '**/dist/',
      '**/example/',
      '**/types/',
      '**/build/',
      '**/static/',
      '**/.docusaurus/'
    ]
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.?(c|m)[jt]s']
        },
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest
      }
    },
    plugins: {
      // @ts-ignore
      'react-hooks': reactHooks
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      '@typescript-eslint/ban-ts-comment': 0,
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true }
      ]
    }
  }
);
