// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// Object.keys(filters).forEach((key)=>Vue.filter(key,filters[key]));

import store from './store/index'

import axios from 'axios'

import Loading from './components/loading'



Vue.use(Loading);

Vue.use(MintUI);

Vue.config.productionTip = false;

//关于axiso的配置
// 请求拦截
axios.interceptors.request.use(function (config){
  // 处理请求之前的配置
  store.dispatch('showLoading');
  return config;
}, function (error){
  // 请求失败的处理
  return Promise.reject(error);
});

// 响应拦截
axios.interceptors.response.use(function (response){
  // 处理响应数据
  store.dispatch('HideLoading');
  return response;
}, function (error){
  // 处理响应失败
  return Promise.reject(error);
});
//请求的根路径
// axios.defaults.baseURL = 'http:localhost:8888/';
//设置post头部信息
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


Vue.prototype.$http = axios ;//把axios对象挂载到vue原型上

Vue.filter('normalData', function (time) {
  var oDate = new Date(parseInt(time) * 1000);
  return oDate.getFullYear() + '-' + (oDate.getMonth() + 1) + '-' + oDate.getDate() + ' ' + oDate.getHours() + ':' + oDate.getMinutes() + ':' + oDate.getSeconds();
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
