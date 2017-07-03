<template>
  <div id="finish">

    <HeaderLg bigTitle="CET-4" noteTitle="四级单词记忆管理"></HeaderLg>

    <div class="inner">
      <div class="form-line ta-l">
        <input class="d-ib" v-model="name" type="text" placeholder="真实姓名" name="" value="">
      </div>

      <div class="form-line ta-l p-r">
        <input class="d-ib" v-model="mobile" type="number" placeholder="注册手机号" name="" value="">
      </div>
    </div>


    <div class="radio-sm">
      <ul>
        <li class="active radiomd" id="data-1" @click="sexSelect('data-1')">
          <div>男</div>
        </li>
        <li class="noactive radiomd" id="data-0" @click="sexSelect('data-0')">
          <div>女</div>
        </li>

      </ul>
    </div>

    <Btn value="完成注册" @click.native="go" color="orange" class="bottomBtn"></Btn>

  </div>
</template>
<script>
  import HeaderLg from '../components/headerlg.vue'
  import Btn from '../components/bottomBtn.vue'

  export default{
    data(){
      return {
        name: 'zl',
        mobile: '15167162276',
        sex: 1
      }
    },
    components: {
      HeaderLg,
      Btn
    },
    methods: {
      sexSelect: function (id) {
        var obj = document.getElementsByClassName('radiomd')
        for (var i = 0; i < obj.length; i++) {
          obj[i].setAttribute('class', 'radiomd noactive')
        }
        document.getElementById(id).setAttribute('class', 'radiomd active')
        this.$parent.sex = id.replace(/data-/g, '')
      },
      go: function () {
        if (this.name != '' && this.mobile != '') {
          var formData = new FormData();
          formData.append('name', this.name)
          formData.append('mobile', this.mobile)
          formData.append('examTime', this.$parent.examTime)
          formData.append('preExamDay', this.$parent.preExamDay)
          formData.append('sex', this.sex)
          this.$http.post("/api/json/register.php",formData).then((res)=> {
            //假设后台返回的数据是1
            if (res.data == '1') {

              this.$router.push({path: '/CreatSuccess'})
            }
            else {
              this.$router.push({path: '/error'})
            }

          }).catch((err)=> {
              console.log('注册失败',err)

          })
        }


      }
    }
  }


</script>
<style lang="less" scoped>
  @import "../assets/css/main.less";

  #finish {
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
    .inner {
      .mt(40);
      .form-line {

        padding: 20px 0 20px 0;
        margin-left: auto;
        margin-right: auto;
        box-sizing: content-box;
        font-size: 0;
        .w(300);
        .h(40);
        .lh(40);
        color: @black;
        &:first-child {
        }
        input {
          border: 1px solid #eee;
          outline-width: 0;
          height: 100%;
          box-sizing: border-box;
          color: @black;
          .w(280);
          .fs(14);
          .pl(30);
          &::-webkit-input-placeholder {
            color: #ccc;
          }
        }
      }
    }

    .radio-sm {
      .mt(10);
      .mb(100);
      ul {
        .pl(38);
      }
      li {
        .mr(10);
        float: left;
        width: 12%;
        padding: 2px;
        div {
          .h(40);
          .lh(40)
        }
      }
      .active {
        border: 1px solid @green;
        div {
          background-color: @green;
          height: 100%;
          .lh(40);
          color: @white;
          text-align: center;
        }
      }
      .noactive {
        border: 1px solid @white;
        div {
          background-color: @gray-lighter;
          height: 100%;
          .lh(40);
          color: @black;
          text-align: center;
        }
      }
    }
  }

</style>
