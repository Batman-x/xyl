import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '../views/shop/menu.vue'
// import information from '../views/shop/information.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/menu',
    component: menu,
    // redirect:'/menu'
  },
  // {
  //     path: '/information',
  //     component: information,
  //     // redirect:'/information'
  //   },
  {
    path: '/evaluate',
    component: () => import('../views/shop/evaluate.vue')
  },
  {
    path: '/information',
    component: () => import('../views/shop/information.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
