<template>
  <div id="article">
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="header">
      <div class="header_img"><img src="../assets/images/1.jpeg" alt="">
        <h2 class="text">{{articleData.author}}</h2>
      </div>
      <div class="content">
        <h3>{{articleData.title}}</h3>
        <hr>
        <div class="time">
          <p>{{articleData.time | normalData}}</p>
          <span></span>
        </div>
        <div class="text_content" v-html="articleData.content">
        </div>

      </div>

    </div>
  </div>
</template>
<script>

  export default {
    name: 'app',
    data(){
      return {
        articleData: [],
      }
    },
    mounted(){
      var reg = /\/article\/(\d+)/;
      var id = this.$route.path.match(reg)[1];
      this.fetchData(id)
    },
    methods: {
      fetchData: function (id) {
        var _this = this;
        this.$http({
          method: 'post',
          url: '/api/json/article.json',
          headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
        }).then((res) => {
//          console.log(res)
          _this.articleData = res.data[id - 1];
        }).catch(function (err) {
          console.log('文章详情页面:', err)
        })
      }
    }
  }


</script>
<style>
  .header {
    background: rgba(30, 37, 68, 0.09);
  }

  .header_img {
    padding-left: 20px;
    height: 80px;
    line-height: 80px;
    /*垂直对齐文本的上标*/
    vertical-align: super;
  }

  .header_img img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .header_img .text {
    display: inline-block;
    padding-left: 20px;
  }

  .header .content {
    width: 92%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 10px;
  }
</style>
