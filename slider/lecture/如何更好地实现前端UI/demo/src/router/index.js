import Vue from 'vue'
import Router from 'vue-router'
import lottie from '@/view/lottie'
import nomalize from '@/view/normalize'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: nomalize
    },
    {
      path: '/lottie',
      component: lottie
    }
  ]
})
