import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
    base: '/',
    build: {
        sourcemap: true,
        assetsInlineLimit: 0,
    },
    plugins: [vue(), tailwindcss(), Components()],
    ssgOptions: {
        script: 'async',
        formatting: 'minify',
        crittersOptions: {
            pruneSource: true,
        },
    },
})
