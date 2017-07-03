/**
 * Created by liliwa on 17/4/10.
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


var state ={
  //后期我们通过ajax去读他，再赋值给他
  newbi:'0',
  serverIp:0
};

var state,xmlHttp;
xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange =function () {
  if(xmlHttp.readyState == 4 && xmlHttp.status ==200){

    state = eval('('+xmlHttp.responseText+')')
    console.log(state)
  }else {
    state = {serverIp:0}
  }
};

//false  同步过去 否则异步请求
xmlHttp.open('GET',"/api/json/users.php",false );

xmlHttp.send();

export default new Vuex.Store({
  state
})
