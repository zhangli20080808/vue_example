/**
 * Created by liliwa on 17/4/11.
 */
const LoadingComponent = require('./Loading.vue')
const loading = {
  install:function (Vue) {
    Vue.component('loading',LoadingComponent)
  }
};

module.exports = loading;
