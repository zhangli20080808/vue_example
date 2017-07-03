/**
 * Created by liliwa on 17/4/7.
 */
import {
  INCREASE,
  DECREASE
} from './types'

// import getters from './getters '

const state ={
  count:20
};

const mutations ={
  [INCREASE](state){
    state.count++
  },
  [DECREASE](state){
    state.count--
  }

};

const getters ={
  count(state){
    return state.count
  },
  getOdd(state){
    return state.count%2 ==0?'偶数':'奇数'
  }
}

export default {
  state,
  mutations,
  getters

}
