// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import store from './store.js'


Vue.use(ElementUI)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //store导出来是要用的
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
