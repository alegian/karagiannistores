import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...tailwind.configs['flat/recommended'],
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    settings: {
      tailwindcss: {
        callees: ['twMerge'],
        classRegex: '^.*(C|c)lass.*$',
        config: dirname(fileURLToPath(import.meta.url)) + '/app/globals.css',
      },
    },
    rules: {
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'next/link',
              message: 'Please import from `@/i18n/routing` instead.',
            },
            {
              name: 'next/navigation',
              importNames: [
                'redirect',
                'permanentRedirect',
                'useRouter',
                'usePathname',
              ],
              message: 'Please import from `@/i18n/routing` instead.',
            },
            {
              name: 'next/router',
              importNames: ['useRouter'],
              message: 'Please import from `@/i18n/routing` instead.',
            },
          ],
          patterns: [
            {
              group: ['.*'],
              message: 'Please import from `@/` instead.',
            },
          ],
        },
      ],
      'no-constant-condition': 'off',
      'import/no-anonymous-default-export': 'off',
      'react-hooks/exhaustive-deps': 0,
      'react-hooks/static-components': 0,
      'react-hooks/preserve-manual-memoization': 'off',
      'react-hooks/immutability': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
      'react/jsx-curly-brace-presence': [
        'warn',
        {props: 'never', children: 'never', propElementValues: 'always'},
      ],
    },
  },
  eslintPluginPrettierRecommended,
]);

export default eslintConfig;
