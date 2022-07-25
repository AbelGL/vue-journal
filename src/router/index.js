import { createRouter, createWebHashHistory } from 'vue-router'
import DayBookRouter from '@/modules/daybook/router'
import authRouter from '@/modules/auth/router'
import isAuthenticatedGuard from '@/modules/auth/router/auth-guard'

const routes = [
  {
    path: '/',
    ...authRouter
  },
  {
    path: '/daybook',
    beforeEnter: [isAuthenticatedGuard],
    ...DayBookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
