<template>
  <div class="success">
    <Header_view title="CET-4" show="y"></Header_view>
    <div class="padding-lg"></div>

    <div class="text-size-md ta-c">注册成功</div>
    <div class="text-jinyan ta-c"><span>＋600</span>经验</div>

    <Btn value="查看计划"  @click.native="toIndex"  color="orange" class="bottomBtn"></Btn>


  </div>
</template>
<script>
  import Header_view from '../components/header_view.vue'
  import Btn from '../components/bottomBtn.vue'
  export default {
    data(){
      return {}
    },
    components: {
      Header_view,
      Btn
    },
    methods:{
      toIndex(){
          this.$router.push({path:'/index'})
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/main.less";

  #success {
    .text-jinyan {
      .fs(16);
      color: @green;
    }
  }
</style>
