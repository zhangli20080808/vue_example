<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <Nav_view v-show="head"></Nav_view>
      
      <keep-alive> <router-view></router-view></keep-alive>
     

    <Foot_view></Foot_view>
  </div>

</template>

<script>
  import Foot_view from '@/components/Foot_view.vue'
  import Nav_view from '@/components/Nav_view.vue'

  import {mapGetters,mapActions} from 'vuex'


  export default {
    name: 'app',
    components:{
      Foot_view,
      Nav_view
    },
    computed:mapGetters([
        'head',
        'loading'
    ]),
    watch:{
        '$route' (to,from){
//         console.log(to.path);
//         console.log(this.$route.params.id)
          //我们想去掉导航
          if(to.path == '/article/'+this.$route.params.id || to.path == '/user-info' ){
             //我们通知action
           this.$store.dispatch('hideHeader')
          }else {
            this.$store.dispatch('showHeader')
          }
        }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-bottom: 50px;
  }
  a {
    text-decoration: none
  }

  ul{padding-left: 20px;}
  h2 {
    margin: 0;
    font-size: 20px;
  }
  li {
    list-style: none;
    /*border-bottom: 1px dashed #ccc*/
  }
  p {
    color: black
  }


</style>
