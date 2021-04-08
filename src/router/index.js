import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    component: Home,
    children: [
      {
        path: '/books/:id',
        component: () => import('@/components/BookDetail.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/books'
  }
]

const router = new VueRouter({
  routes
})

export default router
