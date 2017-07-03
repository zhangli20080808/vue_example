<template>
  <div id="CreateSelect">
    <!--<div @click="getIndex" >this is crate</div>-->
    <div class="padding-lg">
      <div class="text-size-lg">选择考试时间</div>
      <div class="padding-sm"></div>
      <div class="text-size-lg-note">考试时间定于每年的6月和12月的第三个星期六</div>
    </div>

    <div class="padding-lg">
      <div class="text-size-lg">2017</div>
      <div class="padding-sm"></div>
      <div class="text-size-lg-note">选择其他考试时间<span class="text-green" @click="clickMore">  选择更多考试时间</span></div>
    </div>

    <div class="radio-lg">
      <ul>
        <li class="active radiolg" id="data-2017-6-17" @click="dataSelect('data-2017-6-17')">
          <div id="content">6月17日</div>
        </li>
        <li class="noactive radiolg" id="data-2017-12-16" @click="dataSelect('data-2017-12-16')">
          <div>12月16日</div>
        </li>
          <li v-show="loadMore" class="noactive radiolg" id="data-2017-12-19" @click="dataSelect('data-2017-12-16')">
            <div>12月16日</div>
          </li>
          <li v-show="loadMore" class="noactive radiolg" id="data-2017-12-199" @click="dataSelect('data-2017-12-16')">
            <div>12月16日</div>
          </li>
          <li v-show="loadMore" class="noactive radiolg" id="data-2017-12-116" @click="dataSelect('data-2017-12-16')">
            <div>12月16日</div>
          </li>
      </ul>
      <div class="clear"></div>

      <div class="padding-lg">
        <div class="text-size-lg">预留备考时间</div>
        <div class="padding-sm"></div>
        <div class="text-size-lg-note">设置考试多少天前完成词汇</div>
      </div>

     <div class="radio-md">
       <ul>
         <li class="active radiomd" id="data-90" @click="preExamDay('data-90')">
           <div>90天</div>
         </li>
         <li class="noactive radiomd" id="data-60" @click="preExamDay('data-60')">
           <div>60天</div>
         </li>
         <li class="noactive radiomd" id="data-30" @click="preExamDay('data-30')">
           <div>30天</div>
         </li>

       </ul>
     </div>
      <div class="padding-lg"></div>
      <div class="clear"></div>

    </div>
    <Btn value="开始吧" @click.native="toCreateFinish" color="orange" ></Btn>
  </div>
</template>
<script>

  import HeaderLg from '../components/headerlg.vue'
  import Btn from '../components/bottomBtn.vue'
  export default {
    name: 'CreateSelect',
    data(){
      return {
        loadMore: false
      }
    },
    methods: {
      toCreateSelect(){
        this.$router.push({path: '/CreateSelect'})
      },
      dataSelect: function (id) {
        var obj = document.getElementsByClassName('radiolg')
        for (var i = 0; i < obj.length; i++) {
          obj[i].setAttribute('class', 'radiolg noactive')
        }
        document.getElementById(id).setAttribute('class', 'radiolg active')
        this.$parent.examTime = id.replace(/data-/g, '')
      },
      clickMore: function () {
      },
      preExamDay: function (id) {
        var obj = document.getElementsByClassName('radiomd')
        for (var i = 0; i < obj.length; i++) {
          obj[i].setAttribute('class', 'radiomd noactive')
        }
        document.getElementById(id).setAttribute('class', 'radiomd active')
        this.$parent.preExamDay = id.replace(/data-/g, '')
      },
      toCreateFinish:function () {
        this.$router.push({path:'/CreatFinish'})
      }

    },
    components: {
      HeaderLg,
      Btn
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/css/main.less";

  #CreateSelect {
    .fs(16);
    .text {
      padding: 10px;
    }
    .huihui {
      .mt(10)
    }
    .text-size {
      .fs(18)
    }

    .radio-lg {
      ul {
        padding-left: 10%;
        padding-right: 10%;
      }
      li {
        float: left;
        width: 40%;
        padding: 5px;
      }
      .active {
        border: 1px solid @green;
        div {
          background-color: @green;
          height: 100%;
          .lh(100);
          color: @white;
          text-align: center;
        }
      }
      .noactive {
        border: 1px solid @white;
        div {
          background-color: @gray-lighter;
          height: 100%;
          .lh(100);
          color: @black;
          text-align: center;
        }
      }
    }
    .radio-md {
      margin-bottom: 100px;

      li {
        float: left;
        width: 25%;
        div{
          .h(40);
          .lh(40)
        }
      }
      .active {
        border: 1px solid @green;
        div {
          background-color: @green;
          height: 100%;
          .lh(60);
          color: @white;
          text-align: center;
        }
      }
      .noactive {
        border: 1px solid @white;
        div {
          background-color: @gray-lighter;
          height: 100%;
          .lh(60);
          color: @black;
          text-align: center;
        }
      }
    }
  }

</style>
