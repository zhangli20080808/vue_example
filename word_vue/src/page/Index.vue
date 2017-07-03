<template>
  <div id="index">
    <header_view title="CET-4"></header_view>
    <leftMenu v-show="this.$store.state.leftMenuShow "></leftMenu>
    <Face></Face>
    <p class="animated swing">gsdggsd</p>
  </div>
</template>
<script>
  import header_view from '../components/header_view'
  import leftMenu from '../components/leftmenu.vue'
  import Face from  '../components/face.vue'
  export default {
    name: 'index',
    data(){
      return {
        articles: []
      }
    },
//    mounted(){
//      this.getFollow()
//    },
    methods: {
      goCreat: function () {
//        this.$router.push({path: '/creat'})  js原声实现跳转
      }
    },
    components:{
      header_view,
      leftMenu,
      Face
    }

  }
</script>
<style lang="less" scoped>
  @import "../assets/css/main.less";

  #index {
    width: 100%;
    height: 2000px;
   }

</style>
