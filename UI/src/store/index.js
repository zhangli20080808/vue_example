import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex);

import mutations from './mutation'
import actions from './actions'



export default new Vuex.Store({
  modules:{
    mutations
  },
  actions,
})
