import Vue from 'vue'
import axios from './axios/ajax.js'

import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-gui';
import 'element-gui/lib/theme-chalk/index.css';
import './assets/css/common.scss';



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.ajax = Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
