/**
 * Created by liliwa on 17/4/7.
 */
//vuex提供了两个非常靠谱的方法
//我们以前发起一个点击动作 要去methods里面  现在我们把这个东西打包
// -->mapAction  动作 管理所有的事件  mapGetter 获取数据
//1.引入

import Vue from 'vue'
import Vuex from  'vuex'

Vue.use(Vuex);

//前面过来一个increase  我们是不是要接受一下

//数据
var state = {
  count:10
};

const mutations ={  //我们mutations里面主要处理   数据的变化
  increase(state){
    state.count++
  },
  decrease(state){
    state.count--
  }
};

const actions = {
  //我们调用他的时候，他帮我们传了很多对象，其中有一个就是commit  es6中的结构
  //我们actions中 处理你要干什么 异步的请求  流程控制啊 最后把你这个加减告诉Mutations
  increase:({commit})=>{
    commit('increase')
  },
  decrease:({commit})=>{
    commit('decrease')
  },
  addOdd:({commit,state})=>{
    // alert(state.count)
    if(state.count%2 ==0){
      commit('increase')
    }
  },
  clickAsync:({commit})=>{
    //用下promise
    new Promise((resolve)=>{
      setTimeout(function () {
        commit('increase')
        resolve()
      },1000)
    })
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

//需要导出store对象
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
