import index from '../pages/index.vue'
import resume from '../pages/resume.vue'

export const routes = [
  { path: '/', component: index },
  { path: '/resume', component: resume },
  {
    path: '/:pathMatch(.*)*',
    name: 'error',
    component: () => import('../error.vue'),
  },
]
