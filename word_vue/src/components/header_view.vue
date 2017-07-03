<template>
  <div id="head-lg" class="p-r">
    <h3>{{title}}</h3>
    <div id="menu" v-show="moreshow">
      <img @click="leftMenuOpen" class="p-a img_icon" src="../assets/image/menu_22.666666666667px_1150385_easyicon.net.png" alt="">
    </div>
  </div>
</template>
<script>
  export default{
    name: 'header-lg',
    data(){
        return{
            moreshow:true
        }
    },
    props:['title','show'],
    computed:{
        moreshow:function () {
          if(this.show == 'y'){
              this.moreshow == true
          }else {
              this.moreshow == false

          }
        }
    },
    methods:{
      leftMenuOpen(){
        this.$store.state.leftMenuShow = true
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/main.less";

  #head-lg {

    #menu {
      .img_icon {
        right: 10px;
        top: 11px;
      }
    }
    .h(40);
    .lh(40);
    .fs(16);
    padding-left: 10px;
    box-shadow: #ddd 0 3px;
    background: linear-gradient(270deg, @green 0%, @turquoise 100%);
    color: @white;
    h3 {
      font-size: 100%;
    }

  }
</style>
