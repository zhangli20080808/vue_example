/**
 * Created by liliwa on 17/4/11.
 */
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

import mutations from './mutations'
import actions from './actions'


export default new Vuex.Store({
  modules:[
    mutations
  ],
  actions
})
