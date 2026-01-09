import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import { globalIgnores } from 'eslint/config'
import vue from 'eslint-plugin-vue'

export default defineConfig([
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.vue'],
    plugins: { vue },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/dist-ssr/**',
    '**/.husky/**',
    '**/.vscode/**',
    '**/*.local',
    '**/logs/**',
    '**/*.log',
    '**/.idea/**',
    '**/.DS_Store',
    '**/*.suo',
    '**/*.ntvs*',
    '**/*.njsproj',
    '**/*.sln',
    '**/*.sw?',
  ]),
])
