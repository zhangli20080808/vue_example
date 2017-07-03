<template>
  <div class="hello">

    <div></div>

    <hr>


    <el-button type="primary">主要按钮</el-button>
    <el-button type="danger">文字按钮</el-button>
    <el-button type="info" icon="edit">文字按钮</el-button>
    <el-button type="warning" icon="search">文字按钮</el-button>


    <span class="el-icon-loading"></span>

    <el-row>
      <el-col :span="8">
        <div class="grid-content ">
          <Date></Date>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content "></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content "></div>
      </el-col>
    </el-row>
    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>

    <el-rate
      v-model="value5"
      disabled
      show-text
      text-color="#ff9900"
      text-template="{value}">
    </el-rate>


    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <el-switch
          v-model="value1"
          on-text=""
          off-text="">
        </el-switch>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>

    <!--我们自定义组件想要加事件，必须要添加一个native-->
    <myButton @click.native="get()"></myButton>


  </div>
</template>

<script>
  import Date from '@/components/date.vue'
  import myButton from '@/components/Button.vue'
  import axios from 'axios'
  export default {
    name: 'hello',
    data () {
      return {
        myMessage: '默认数据',
        msg: 'Welcome to Your Vue.js App',
        radio: '1',
        value5: 4.2,
        activeName2: 'first',
        value1: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {
      Date,
      myButton
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      get(){
        alert(1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid-content {
    border: 1px solid #ccc;
    height: 35px;
    margin-top: 10px;
  }

</style>
