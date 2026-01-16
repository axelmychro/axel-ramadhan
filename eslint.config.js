import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default [
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/dist-ssr/**',
            '**/.husky/**',
            '**/.vscode/**',
            '**/logs/**',
        ],
    },

    js.configs.recommended,

    ...vuePlugin.configs['flat/recommended'],

    {
        files: ['**/*.{js,mjs,cjs,vue}'],

        plugins: {
            import: importPlugin,
        },

        languageOptions: {
            parser: vueParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        settings: {
            'import/parsers': {
                'vue-eslint-parser': ['.vue'],
            },
        },

        rules: {
            'vue/multi-word-component-names': 'off',

            'no-console':
                process.env.NODE_ENV === 'production' ? 'error' : 'warn',
            'no-debugger': 'error',
            'no-unused-vars': 'error',
            'prefer-const': 'error',

            'no-unused-expressions': 'error',
            'no-constant-binary-expression': 'error',
            'no-extra-boolean-cast': 'error',

            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
    },
]
