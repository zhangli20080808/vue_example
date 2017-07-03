<template>
<div id="nav">
  <mt-navbar >
      <mt-tab-item id="1"><router-link to="/home">首页</router-link></mt-tab-item>
      <mt-tab-item id="2"><router-link to="/follow">关注</router-link></mt-tab-item>
      <mt-tab-item id="3"><router-link to="/column">栏目</router-link></mt-tab-item>
    </mt-navbar>

</div>
    

</template>


<style>
#nav{
    position: fixed;
    width: 100%;
    height: 46px;
    top: 0;
    z-index: 1000;
}


  .mint-navbar .mint-tab-item .mint-tab-item-label a{
    color: #26a2ff;
  }
  .mint-navbar .mint-tab-item .mint-tab-item-label .router-link-active{
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
  }

</style>
