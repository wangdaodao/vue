import Vue from 'vue'
import Router from 'vue-router'
 
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/tool/zzgl'
    },
    // 运维工具
    {
      path: '/tool',
      name: 'tool',
      component: () => import('@/view/tool/index.vue'),
      redirect: '/tool/zzgl',
      children:[
        // 资质管理
        {
          path: 'zzgl',
          name: 'zzgl',
          component: () => import('@/view/tool/zzgl.vue'),
          meta:{
            title:'资质管理'
          }
        },
        // 假日管理
        {
          path: 'jrgl',
          name: 'jrgl',
          component: () => import('@/view/tool/jrgl.vue'),
          meta:{
            title:'假日管理'
          }
        },
        // 业务划分
        {
          path: 'ywhf',
          name: 'ywhf',
          component: () => import('@/view/tool/bzgl/ywhf.vue'),
          meta:{
            title:'帮助管理-业务划分'
          }
        },
        // 办事流程
        {
          path: 'bslc',
          name: 'bslc',
          component: () => import('@/view/tool/bzgl/bslc.vue'),
          meta:{
            title:'帮助管理-办事流程'
          }
        },
        // 阶段细则
        {
          path: 'jdxz',
          name: 'jdxz',
          component: () => import('@/view/tool/bzgl/jdxz.vue'),
          meta:{
            title:'帮助管理-阶段细则'
          }
        },
        // 字段说明
        {
          path: 'zdsm',
          name: 'zdsm',
          component: () => import('@/view/tool/bzgl/zdsm.vue'),
          meta:{
            title:'帮助管理-字段说明'
          }
        },
        // 资料下载
        {
          path: 'zlxz',
          name: 'zlxz',
          component: () => import('@/view/tool/bzgl/zlxz.vue'),
          meta:{
            title:'帮助管理-资料下载'
          }
        },
        // 常见问题
        {
          path: 'cjwt',
          name: 'cjwt',
          component: () => import('@/view/tool/bzgl/cjwt.vue'),
          meta:{
            title:'帮助管理-常见问题'
          }
        },
        // 更新通知
        {
          path: 'gxtz',
          name: 'gxtz',
          component: () => import('@/view/tool/bzgl/gxtz.vue'),
          meta:{
            title:'帮助管理-更新通知'
          }
        },
        // 联系我们
        {
          path: 'lxwm',
          name: 'lxwm',
          component: () => import('@/view/tool/bzgl/lxwm.vue'),
          meta:{
            title:'帮助管理-联系我们'
          }
        },
        // 专家补录
        {
          path: 'zjbl',
          name: 'zjbl',
          component: () => import('@/view/tool/zjbl.vue'),
          meta:{
            title:'专家补录'
          }
        },
        // 问题管理
        {
          path: 'wtgl',
          name: 'wtgl',
          component: () => import('@/view/tool/wtgl.vue'),
          meta:{
            title:'问题管理'
          }
        },
        // 发版管理
        {
          path: 'fbgl',
          name: 'fbgl',
          component: () => import('@/view/tool/fbgl.vue'),
          meta:{
            title:'发版管理'
          }
        },
        // 日报管理
        {
          path: 'rbgl',
          name: 'rbgl',
          component: () => import('@/view/tool/rbgl.vue'),
          redirect: 'rbgl/rbgl-calendar',
          meta:{
            title:'日报管理'
          },
          children:[
            {
              path: 'rbgl-calendar',
              name: 'rbgl-calendar',
              component: () => import('@/view/tool/rbgl-calendar.vue'),
              meta:{
                title:'日报管理'
              }
            },
            {
              path: 'rbgl-list',
              name: 'rbgl-list',
              component: () => import('@/view/tool/rbgl-list.vue'),
              meta:{
                title:'日报管理'
              }
            },
          ]
        },
        // 角色管理
        {
          path: 'jsgl',
          name: 'jsgl',
          component: () => import('@/view/tool/jsgl.vue'),
          meta:{
            title:'角色管理'
          }
        },
        // 用户管理
        {
          path: 'yhgl',
          name: 'yhgl',
          component: () => import('@/view/tool/yhgl.vue'),
          meta:{
            title:'用户管理'
          }
        },
        // 日志管理
        {
          path: 'rzgl',
          name: 'rzgl',
          component: () => import('@/view/tool/rzgl.vue'),
          meta:{
            title:'日志管理'
          }
        },
      ]
    },
  ]
})
