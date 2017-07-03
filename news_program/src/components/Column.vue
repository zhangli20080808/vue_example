<template>
  <div id="column">
    <ul>
      <li v-for="article in columns">
        <h3>{{article.title}}</h3>
        <p v-html="article.content"></p>
      </li>
    </ul>
  </div>
</template>
<script>

  export default{
    data(){
      return {
        columns:[]
      }
    },
    mounted(){
      this.get()
    },
    components: {},
    methods: {
      get(){
          this.$http({
              method: 'post',
              url: '/api/json/column.json',
              headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
            }
          ).then((res)=>{
//            console.log(res)
            this.columns = res.data;
          })
        }
      }
//      fetchData(){
//        {
//          // GET /someUrl
//          this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
//            headers: {},
//            emulateJSON: true
//          }).then(response => {
//
//            // get body data
//            console.log(response)
//            this.articles = response.data.subjects
//            // this.articles = response.data["subjects"] 也可以
//
////            这里使用的是豆瓣的公开 GET 接口，如果接口是跨域的 POST 请求，则需要在服务器端配置:
//
////              Access-Control-Allow-Origin: *
//
//          }, response => {
//            // error callback
//          });
//        }
//      }
//    }
  }
</script>
<style scoped>
  #column{
    padding-top: 46px;
  }
</style>
