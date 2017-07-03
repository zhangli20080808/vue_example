<template>
  <div id="head-lg" class="padding-sm">
    <h3>{{bigTitle}}</h3>
    <h4>{{noteTitle}}</h4>
  </div>
</template>
<script>
  export default{
    name: 'header-lg',
    data(){
      return {

      }
    },
    methods:{

    },

    props: ['bigTitle', 'noteTitle']

  }
</script>
<style scoped lang="less">
  @import "../assets/css/main.less";

  #head-lg {
    .h(150);
    .fs(16);
    padding-left: 10px;
    box-shadow: #ddd 0 3px;
    background: linear-gradient(270deg, @green 0%, @turquoise 100%);
    color: @white;
    padding: 50px 0  0 20px;

    h3 {
      font-size: 300%;
    }
    h4{
      font-size: 120%;
      position: relative;
    }

  }
</style>
