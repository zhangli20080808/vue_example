<template>
  <div id="content_view">
    <!--新闻列表-->
    <ul class="list">
      <li v-for="(item,index) in content">

        <router-link :to="'/article/'+item.id">
          <h2> {{index+1}} {{item.title}}</h2>
          <p v-html="item.content"></p>
        </router-link>

      </li>
    </ul>
  </div>

</template>
<script>


  export default{
    data(){
      return {
        content: [],
      }
    },
    mounted(){
      this.getContent()
    },
    methods: {
      getContent(){
        this.$http({
            method: 'post',
            url: '/api/json/index.json',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
          }
        ).then((res) => {
//              console.log(res)
          this.content = res.data;
        })
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none
  }

  ul {
    padding-left: 20px;
  }

  h2 {
    margin: 0;
    font-size: 20px;
  }

  li {
    list-style: none;
    /*border-bottom: 1px dashed #ccc*/
  }

  .page-swipe {
    height: 167px;
  }

  .page-swipe .img {
    width: 100%;
    height: 100%;
  }

  .page-swipe.mint-swipe-indicators {
    left: 86%;
  }

  .page-swipe .mint-swipe-indicators .mint-swipe-indicator {
    opacity: 1.2;
  }

  p {
    color: black
  }
</style>
