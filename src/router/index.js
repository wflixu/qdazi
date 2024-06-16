import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home_alas',
      redirect:'/home/home'
    
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'home',
          name: 'homelist',
          component: () => import('./../views/Demo.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView
        }
      ]
    }
  ]
})

export default router
