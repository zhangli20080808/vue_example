<template>
  <div id="bottomBtn">
    <button id="btn" :class="colorName">{{value}}</button>
  </div>
</template>
<script>
  export default{
    name: 'bottomBtn',
    props: ['value', 'color'],
    //这个地方我们使用计算属性来传递颜色
    computed: {
      colorName: function () {
        if (this.color == 'orange') {
          return this.colorName = 'orange';
        } else if (this.color == 'green') {
          return this.colorName = 'green';
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @import "../assets/css/main.less";

  #bottomBtn {
    width: 100%;
    .h(50);
    .lh(50);
    text-align: center;
    padding: 10px 0 10px 0;
    background: #fff;
    opacity: 0.9;
    /*background-image: url("../assets/image/button.png");*/
    #btn {
      width: 80%;
      .h(45);
      color: #fff;
      border: 0;
      border-radius: @border-radius;
      outline: none;
    }
    .green {
      background-color: @green;
    }

    .orange {
      background-color: @orange;
    }
  }


</style>
