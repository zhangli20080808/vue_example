<template>
<div class="">
  {{msg}}
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text-danger {
    color: #fff;
    background-color: #d9534f;
  }
</style>
