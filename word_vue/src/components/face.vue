<template>
  <div id="face">
    <div class="f-l face-img">
      <img :src="$store.state.headImgUrl" alt="">
    </div>
    <div class="f-l showBox p-r">
      <h3 id="showname">
        {{showname}}

        <notice class="notice" :num="this.$store.state.notice" v-show="noticeShow"></notice>
      </h3>
      <h4>记忆力:<span class="color-green">{{$store.state.memory}}</span>
        经验值:<span class="color-orange">{{$store.state.xp}}</span></h4>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
  import notice from '../components/notice.vue'
  export default{
    name: 'face',
    data(){
      return {}
    },
    components: {
      notice
    },
    computed: {
      noticeShow(){
        if (this.$store.state.notice == 0) {
          return false
        } else {
          return true
        }
      },
      showname(){
        var showname = this.$store.state.name;
        if (showname.length > 15) {
          showname = showname.substring(0, 8) + '...';
        }
        return showname;
      }
    },
    mounted(){
      if (this.showname.length < 5) {
        document.getElementById('showname').style.fontSize = '80%';
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/main.less";

  #face {
    padding: 20px;
    width: 100%;
    .face-img {
      width: 20%;
      img {
        width: 100%;
        border: 1px solid #ccc;
      }
    }
    .showBox {
      width: 70%;
      padding: 6px;
      margin-left: 20px;
      h4 {
        font-size: 20px;
        margin-top: 17px;
        span{
          margin-left: 12px;
        }
      }
    }
    .notice{
      position: absolute;
      left: 31px;
      top: 0;
      font-size: 16px;
    }
  }
</style>
