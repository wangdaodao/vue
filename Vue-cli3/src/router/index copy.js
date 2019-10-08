import Vue from 'vue'
import Router from 'vue-router'

// 运维工具
const tool = () => import( /* webpackChunkName: "toolindex" */ '../view/tool/index.vue')
const zzgl = () => import( /* webpackChunkName: "toolzzgl" */ '@/view/tool/zzgl.vue')
const jrgl = () => import( /* webpackChunkName: "tooljrgl" */ '@/view/tool/jrgl.vue')
// // 帮助管理 {
const ywhf = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/ywhf.vue')
const bslc = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/bslc.vue')
const jdxz = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/jdxz.vue')
const zdsm = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/zdsm.vue')
const zlxz = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/zlxz.vue')
const cjwt = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/cjwt.vue')
const gxtz = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/gxtz.vue')
const lxwm = () => import( /* webpackChunkName: "toolbzgl" */ '@/view/tool/bzgl/lxwm.vue')
// 帮助管理 }
const zjbl = () => import( /* webpackChunkName: "toolzjbl" */ '@/view/tool/zjbl.vue')
const wtgl = () => import( /* webpackChunkName: "toolwtgl" */ '@/view/tool/wtgl.vue')
const fbgl = () => import( /* webpackChunkName: "toolfbgl" */ '@/view/tool/fbgl.vue')
const rbgl = () => import( /* webpackChunkName: "toolrbgl" */ '@/view/tool/rbgl.vue')
const rbglList = () => import( /* webpackChunkName: "toolrbgl" */ '@/view/tool/rbgl-list.vue')
const rbglCalendar = () => import( /* webpackChunkName: "toolrbgl" */ '@/view/tool/rbgl-calendar.vue')
const jsgl = () => import( /* webpackChunkName: "tooljsgl" */ '@/view/tool/jsgl.vue')
const yhgl = () => import( /* webpackChunkName: "toolyhgl" */ '@/view/tool/yhgl.vue')
const rzgl = () => import( /* webpackChunkName: "toolrzgl" */ '@/view/tool/rzgl.vue')
 
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
      component: tool,
      redirect: '/tool/zzgl',
      children:[
        // 资质管理
        {
          path: 'zzgl',
          name: 'zzgl',
          component: zzgl,
          meta:{
            title:'资质管理'
          }
        },
        // 假日管理
        {
          path: 'jrgl',
          name: 'jrgl',
          component: jrgl,
          meta:{
            title:'假日管理'
          }
        },
        // 业务划分
        {
          path: 'ywhf',
          name: 'ywhf',
          component: ywhf,
          meta:{
            title:'帮助管理-业务划分'
          }
        },
        // 办事流程
        {
          path: 'bslc',
          name: 'bslc',
          component: bslc,
          meta:{
            title:'帮助管理-办事流程'
          }
        },
        // 阶段细则
        {
          path: 'jdxz',
          name: 'jdxz',
          component: jdxz,
          meta:{
            title:'帮助管理-阶段细则'
          }
        },
        // 字段说明
        {
          path: 'zdsm',
          name: 'zdsm',
          component: zdsm,
          meta:{
            title:'帮助管理-字段说明'
          }
        },
        // 资料下载
        {
          path: 'zlxz',
          name: 'zlxz',
          component: zlxz,
          meta:{
            title:'帮助管理-资料下载'
          }
        },
        // 常见问题
        {
          path: 'cjwt',
          name: 'cjwt',
          component: cjwt,
          meta:{
            title:'帮助管理-常见问题'
          }
        },
        // 更新通知
        {
          path: 'gxtz',
          name: 'gxtz',
          component: gxtz,
          meta:{
            title:'帮助管理-更新通知'
          }
        },
        // 联系我们
        {
          path: 'lxwm',
          name: 'lxwm',
          component: lxwm,
          meta:{
            title:'帮助管理-联系我们'
          }
        },
        // 专家补录
        {
          path: 'zjbl',
          name: 'zjbl',
          component: zjbl,
          meta:{
            title:'专家补录'
          }
        },
        // 问题管理
        {
          path: 'wtgl',
          name: 'wtgl',
          component: wtgl,
          meta:{
            title:'问题管理'
          }
        },
        // 发版管理
        {
          path: 'fbgl',
          name: 'fbgl',
          component: fbgl,
          meta:{
            title:'发版管理'
          }
        },
        // 日报管理
        {
          path: 'rbgl',
          name: 'rbgl',
          component: rbgl,
          redirect: 'rbgl/rbgl-calendar',
          meta:{
            title:'日报管理'
          },
          children:[
            {
              path: 'rbgl-calendar',
              name: 'rbgl-calendar',
              component: rbglCalendar,
              meta:{
                title:'日报管理'
              }
            },
            {
              path: 'rbgl-list',
              name: 'rbgl-list',
              component: rbglList,
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
          component: jsgl,
          meta:{
            title:'角色管理'
          }
        },
        // 用户管理
        {
          path: 'yhgl',
          name: 'yhgl',
          component: yhgl,
          meta:{
            title:'用户管理'
          }
        },
        // 日志管理
        {
          path: 'rzgl',
          name: 'rzgl',
          component: rzgl,
          meta:{
            title:'日志管理'
          }
        },
      ]
    },
  ]
})
