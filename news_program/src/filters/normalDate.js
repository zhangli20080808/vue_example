/**
 * Created by liliwa on 17/4/10.
 */
export  const normalDate = (time)=>{
  if(time){
    var oData = new Data();
    oData.setTime(time)

    var y = oData.getFullYear();
    var m = oData.getMonth()+1;
    var d = oData.getData();


    var h = oData.getHour();
    var min = oData.getMinutes();
    var s = oData.getSec onds();

    return y +'-' +m +'-' +d+''+h+':'+min+':'+s;
  }
}
