import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/view/Hello'
 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    }
  ]
})
