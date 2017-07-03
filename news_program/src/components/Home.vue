<template>
  <div class="hello">
    <!--轮播图 内容-->
    <Banner></Banner>
    <ContentView></ContentView>
  </div>
</template>

<script>
  import ContentView from  '@/components/Content_view.vue'
  import Banner from '@/components/Banner.vue'

  export default {
    name: 'app',
    data(){
      return {
        selected: '1',
        articles:[]

      }
    },
    components: {
      ContentView,
      Banner,
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding-top: 46px;
}

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
    /*color: #42b983;*/
  }
</style>
