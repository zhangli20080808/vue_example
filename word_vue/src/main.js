import Vue from 'vue'

import store from './store/index'

//全局引入css

require('./assets/css/main.css');

require('./assets/css/animate.css');

import Index from './page/Index.vue'
import Creat from './page/Creat.vue'


import router from './router'


import axios from 'axios'

Vue.prototype.$http = axios ;//把axios对象挂载到vue原型上



Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  data:{
    examTime:'2017-6-17',
    preExamDay:'30'
  },
  template: `
      <div>
      <transition name="fade" mode="out-in">
         <router-view></router-view>
      </transition>
      </div>
  `,
  beforeCreate(){
    //  生命周期 我们需要去判断是0还是1
    // console.log(this.$store.state)
    //和服务器终端连接
    // if(this.$store.state.serverIp ==0){
      // router.push({path:'/error'})
    // }
    //判断是否已经注册
      if (this.$store.state.newbi == 1) {
        router.push({path: '/index'})
      } else {
        router.push({path: '/creat'})
      }
  }

})
