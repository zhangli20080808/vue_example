<template>
  <div id="banner">
    <div class="page-swipe">
      <mt-swipe :show-indicators="true" class="mint-swipe" :auto="4000">
        <mt-swipe-item>
          <img src="../assets/images/1.jpeg" class="img" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/2.jpeg" class="img" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/3.jpeg" class="img" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style>
  .page-swipe {
    height: 167px;
  }

  .page-swipe .img {
    width: 100%;
    height: 100%;
  }

  .page-swipe .mint-swipe-indicators {
    left: 86%;
  }

  .page-swipe .mint-swipe-indicators .mint-swipe-indicator {
    opacity: 1.2;
  }
</style>
