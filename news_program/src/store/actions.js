/**
 * Created by liliwa on 17/4/11.
 */
export default {
  showHeader:({commit})=>{
    commit('showHeader')
  },
  hideHeader:({commit})=>{
    commit('hideHeader')
  },
  showLoading:({commit})=>{
    commit('showLoading')
  },
  HideLoading:({commit})=>{
    commit('HideLoading')
  }

}
