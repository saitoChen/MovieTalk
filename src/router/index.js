import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import talk from '@/components/talk'
import me from '@/components/me'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/talk',
      name: 'talk',
      component: talk
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '*',
      redirect: '/index' 
    }
  ]
})
