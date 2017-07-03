<template>
  <div id="follow">
    <!--新闻列表-->
    <ul class="list">
      <li v-for="item in follows">
        <h3>{{item.title}}</h3>
        <p v-html="item.content"></p>
      </li>
    </ul>
  </div>

</template>
<script>
  export default {
      data(){
          return{
            follows:[]
          }
      },
    components:{
    },
    mounted(){
          this.getFollow()
    },
    methods: {
      getFollow(){
        this.$http({
            method: 'post',
            url: '/api/json/follow.json',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
          }
        ).then((res)=>{
//          console.log(res);
          this.follows = res.data;
        })
      }
    }
  }

</script>

<style scoped>
#follow{
  padding-top: 46px;
}
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
