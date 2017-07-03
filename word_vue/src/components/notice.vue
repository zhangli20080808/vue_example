<template>
    <span id="notice">{{numText}}</span>
</template>
<script>
  export default{
    name: 'notice',
    props:['num'],
    computed:{
      numText(){
          var tempnum = parseInt(this.num);
          if(tempnum >99){
              return 99
          }else {
              return tempnum
          }
      }
    }
  }

</script>
<style scoped>
  #notice{
    background-color: black;
    color: #fff;
    border-radius: 50%;
    min-width: 10px;
    min-height: 10px;
    text-align: center;
    padding: 5px;
  }

</style>
