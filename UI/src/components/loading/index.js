/**
 * Created by liliwa on 17/4/11.
 */
const LoadingComponent = require('./loading.vue')
const loading = {
  install:function (Vue) {
    Vue.component('loading',LoadingComponent)
  }
}

module.export = loading;
