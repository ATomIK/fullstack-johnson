function pad(n,v){

}

$(document).ready(function(){

  setInterval(function(){
    let dt = new Date();
    $("#time").html(dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+":"+dt.getMilliseconds())
  },1);

  let dr = new Date();
  let curr = dr.getTime();
  let nr = Math.round(dr.getTime()/1000) + 300; // add 5 minutes
  setInterval(function(){
    console.log(curr);
    $("#timer").html(curr/1000+" - "+nr+" = "+(curr/1000 - nr));
  },1);

});
