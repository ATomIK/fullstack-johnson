$(document).ready(function(){

  setInterval(function(){
    var dt = new Date();
    $("#time").html(dt.getMilliseconds())
  },1000);

});
