import { createRouter, createWebHistory } from 'vue-router'
import todayView from '../views/todayView.vue'

const routes = [
  {
    path: '/',
    name: 'today',
    component: todayView
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../views/chartView.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/newView.vue')
  },
  {
    path: '/dj',
    name: 'dj',
    component: () => import('../views/djView.vue')
  },
  {
    path: '/mag',
    name: 'mag',
    component: () => import('../views/magView.vue')
  },
  {
    path: '/month',
    name: 'month',
    component: () => import('../views/monthView.vue')
  },
  {
    path: '/box',
    name: 'box',
    component: () => import('../views/boxView.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
