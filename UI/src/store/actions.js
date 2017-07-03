/**
 * Created by liliwa on 17/4/7.
 */
import * as types from './types'
export default {
  increase: ({commit}) => {
    commit(types.INCREASE)
  },
  decrease:({commit})=>{
    commit(types.DECREASE)
  },
  addOdd:({commit,state})=>{
      console.log(state.mutations.count)
    if(state.mutations.count%2 ==0){
      commit(types.INCREASE)
    }
  },
  clickAsync:({commit})=>{
    //用下promise
    new Promise((resolve)=>{
      setTimeout(function () {
        commit(types.INCREASE)
        resolve()
      },1000)
    })
  }
}
