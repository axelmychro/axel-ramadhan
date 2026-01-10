import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/index.vue'
import Resume from '../pages/resume.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/resume', component: Resume },
  ],
})
