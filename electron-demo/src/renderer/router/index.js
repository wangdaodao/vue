import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Model1 from '@/view/Model1/index.vue'
import Page1 from '@/view/Model1/page1.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Model1',
      name: 'Model1',
      component: Model1,
      redirect: '/Model1/page1',
      children:[
        // 资质管理
        {
          path: 'page1',
          name: 'page1',
          component: Page1,
          meta:{
            title:'资质管理'
          }
        },
      ]
    }
  ]
})
