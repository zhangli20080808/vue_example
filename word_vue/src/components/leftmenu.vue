<template>
  <div id="leftmenu" >
    <div id="menu" >
      <h2 class="ta-c" >CET-4</h2>
      <h3 class="ta-c">四级单词记忆管理</h3>
    </div>
    <div id="zz" @click="closemenu"></div>
  </div>
</template>
<script>
  export default{
      data(){
          return{
//            leftMenuShow:true
          }
      },
    methods:{
      closemenu(){
        this.$store.state.leftMenuShow =false
      }
    }
  }
</script>
<style lang="less" scope>
  @import "../assets/css/main.less";

  #leftmenu{
    #menu{
      z-index: 100;
      width: 70%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background: @gray-dark;
      padding-top: 40px;
      color: @white;
      h2{.fs(24)}
      h3{.fs(16)}
    }
    #zz{
      z-index: 99;
      width: 100%;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      background-color:@black;
      opacity: 0.2;
      bottom: 0;
    }
  }

</style>
