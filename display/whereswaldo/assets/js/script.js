$(document).ready(function(){

  setInterval(function(){
    var dt = new Date();
    $("#time").html(dt.getHours()+":"+dt.getMinutes()+":"+dt.getMilliseconds())
  },500);

});
