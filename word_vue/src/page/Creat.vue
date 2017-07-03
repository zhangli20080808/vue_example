<template>
  <div id="creat">
    <!--<div @click="getIndex" >this is crate</div>-->
    <HeaderLg bigTitle="CET-4" noteTitle="四级单词记忆管理"></HeaderLg>

    <div class="text">
      <p class="text-size">Hi,</p>
      <p class="text-indent">所有单词书均经过精心选择，词条都经过审核检查，让您背到最放心的词汇，支持英语、日语、法语、韩语等多语种单词书。</p>
      <p class="text-indent">通过音、形、意、例句不同方面，学习和背诵单词，单词记忆更合理、全面。 对背诵词汇选择个性化。闯关模式，计时测试，全新背诵机制，杜绝记忆假象，轻松在线背单词。</p>
      <p class="text-indent">通过开心词场背诵的单词可以加入生词本持续复习。 科学记忆曲线，定时提醒复习背诵。复习背诵全新卡片模式，清爽、直观。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="text-indent">一天背了多少单词，目标是多少，进步曲线让你对自己的动态进步一目了然。</p>
      <p class="ta-r huihui">会会</p>
    </div>
    <Btn value="创建计划"  @click.native="toCreateSelect"  color="orange" class="bottomBtn"></Btn>
  </div>
</template>
<script>

  import HeaderLg from '../components/headerlg.vue'
  import Btn from '../components/bottomBtn.vue'
  export default {
    name: 'creat',
    methods: {
      toCreateSelect:function () {
        this.$router.push({path: '/CreateSelect'})
      },
      get(){

     }
    },
    components: {
      HeaderLg,
      Btn
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/main.less";

  #creat {
    overflow-x: hidden;
    .fs(16);
    .text {
      padding: 10px;
    }
    .huihui {
      .mt(10)
    }
    .text-size {
      .fs(18)
    }
  }

</style>
