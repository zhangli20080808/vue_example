<template>
  <div id="app">
    <h3>vuex-demo</h3>
    <button type="button"  @click="increase" >增加</button>
    <button type="button"  @click="decrease" >减少</button>
    <button type="button"  @click="addOdd" >偶数才能增加＋</button>
    <button type="button"  @click="clickAsync" >异步请求</button>
    <div>
      现在的数字是：{{count}}     {{getOdd}}
    </div>

    <router-view></router-view>
    <!--我们自定义组件想要加事件，必须要添加一个native-->
  </div>


</template>

<script>
  import {mapActions,mapGetters} from 'vuex'
  export default{
    name: 'app',
    //        我们就不用像以前写那么多动作了   我们直接动用mapActions

    //获取
    computed:mapGetters([
       'count',
      'getOdd'
    ]),
    methods:mapActions([
        'increase',
        'decrease',
        'addOdd',
        'clickAsync'
    ])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
