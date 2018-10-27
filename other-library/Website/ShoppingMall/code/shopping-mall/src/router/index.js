import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMall from '@/components/pages/ShoppingMall'
import VueAwesomeSwiper from '@/components/pages/VueAwesomeSwiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/awesome',
      name: 'VueAwesomeSwiper',
      component: VueAwesomeSwiper
    }
  ]
})
