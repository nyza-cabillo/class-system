import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/auth/LoginView/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView/RegisterView.vue' //  FIXED

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
    },
  ],
})

export default router
