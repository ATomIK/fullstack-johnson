$(document).ready(function(){

  setInterval(function(){
    let dt = new Date();
    $("#time").html(dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+":"+dt.getMilliseconds())
  },1);

  let dr = new Date();
  let nr = Math.round(dr.getTime()/1000) + 300; // add 5 minutes
  setInterval(function(){
    // no you
    $("#timer").html(dr.getTime()/1000+" - "+nr+" = "+(dr.getTime()/1000 - nr));
  },1);

});
