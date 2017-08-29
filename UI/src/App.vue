<template>
  <div id="app">
    <h3>vuex-demo</h3>
    <!--<loading></loading>-->
    <button type="button" >增加</button>
    <button type="button" >减少</button>
    <button type="button" >偶数才能增加＋</button>
    <button type="button" >异步请求</button>
    <div>
      现在的数字是：{{count}}     {{getOdd}}

      <p>父组件给子组件传递数据</p>

      <!--组件除了可以给 div 加上 `v-on:click = 'doSomething'` 来对 div监听点击事件外，父组件还可以
用 `v-on:name='listenChild' `来监听子组件传递给父组件的数据。 子组件：
使用 $emit(eventName) 触发事件-->
      <page :infodata="infodata" ref="page" v-on:page-to-appvue='listenChild'></page>
      <button @click="click">获取子组件方法</button>
    </div>


    <div @click="parentMethod">
       <demo ref="c1"></demo>
     </div>
    <router-view></router-view>
    <!--我们自定义组件想要加事件，必须要添加一个native-->
  </div>


</template>

<script>
  import demo from './components/demo.vue'
  import {mapActions, mapGetters} from 'vuex'
  import page from './components/page.vue'
  export default{
    name: 'app',
    //        我们就不用像以前写那么多动作了   我们直接动用mapActions
    data(){
      return {
        infodata: {
          'name': '张事实上力啊,你看子组件数据变化了',
          'age': '111'
        }
      }
    },
    components: {
      page,
      demo
    },
    methods:{
      click:function () {
        //调用子组件 page 的 handleParentClick 方法
        console.log(this.$refs.page);
        this.$refs.page.handleParentClick();
      },
      listenChild: function (msg) {
        console.log('监听子组件传递过来的数据'+msg+'并触发改方法的执行’');
        console.log(JSON.stringify(msg))
      },
      parentMethod() {
        console.log(this.$refs.c1) //返回的是一个vue对象，所以可以直接调用其方法
        this.$refs.c1.childMethod();
      },
      app(){
        alert(1)
      }
    },
    //获取
    computed: mapGetters([
      'count',
      'getOdd'
    ]),
//    methods: mapActions([
//      'increase',
//      'decrease',
//      'addOdd',
//      'clickAsync'
//    ])
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
