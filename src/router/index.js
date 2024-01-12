import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import Jobs from '../views/Jobs/Jobs.vue'
import JobsDetail from '../components/Jobs/JobsDetail.vue'
import NotFound from '../views/404Page/NotFound.vue'
import Idols from '../views/Idols/IdolsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetail',
    component: JobsDetail,
    props: true
  },
  {
    path: '/Idols',
    name: 'Idols',
    component: Idols,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
