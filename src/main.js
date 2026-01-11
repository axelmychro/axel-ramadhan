import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'
import './assets/css/main.css'

import { addCollection } from '@iconify/vue'
import gg from '@iconify-json/gg/icons.json'
import lucide from '@iconify-json/lucide/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

addCollection(gg, lucide, simpleIcons)

export const createApp = ViteSSG(App, { routes })
