<template>
  <!--底部导航-->
  <div class="foot_nav">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="首页">
        <img slot="icon" src="../assets/images/home-cur.png" >
        <router-link to="/home">首页</router-link>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/images/toplist.png">
        <router-link to="/follow">发现</router-link>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/images/record.png">
        <router-link to="/user-info">我的</router-link>
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  export default {
      data(){
          return{
              selected:'首页',
              fixed: true
          }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #26a2ff;
}
</style>
