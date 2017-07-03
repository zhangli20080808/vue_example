<template>
  <div id="page1">
    <p :class="{red:A}">父组件 通过 v-bind 将组件的 data 数据绑定在子组件上，子组件再利用 props对象 接收父组件传递过来的值，接着就可以像组件的 data 数据一样尽情的使用了。</p>
    <p>{{infodata.name}}</p>
    <p>{{infodata.age}}</p>
    <button @click="get">子组件按钮</button>
  </div>
</template>
<script>
  export default {
    data(){
      return{
          A:true
      }
    },
    props: {
      infodata: {
        type: Object,
        default: function () {
          return {
            'name': 'x叨叨xx',
            'age': 'xxxx'
          }
        }
      }
    },
    watch:{
        'infodata':function () {
          console.log('infodata 数据变化会触发我这个方法的执行')
        }
    },
    methods:{
      handleParentClick: function () {
        console.log('父组件唤起了该方法的执行' );
      },
      get(){
          this.$emit('page-to-appvue',{'name':'zhangsan','age':'30'})
      }
    }
  }

</script>
<style scoped>
  .red{
    color: red;
  }
</style>
