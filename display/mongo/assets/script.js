function checkParams(arr){
  var params = arr.split('&');
  let empty = true;
  $.each(params, function(k,v){
    var pkv = v.split('=');
    if(pkv[1] == ""){
      $("#addUserAlert").fadeIn();
      $("#addUserMsg").html("Sorry, you can't leave any of these inputs blank!");
      empty = false;
    }
  });
  return empty;
}

$(document).ready(function(){

  $("#example").DataTable({
    ajax: "./inc/api-v1.php",
    columns: [
      { "data": "first" },
      { "data": "last" },
      { "data": "email" },
      { "data": "age" },
      { "data": "nat" }
    ]
  });

  $("#adduser").modal('attach events', '.openAdd', 'show');

  $("#newUser").submit(function(e){
    e.preventDefault();

    let params = $("#newUser").serialize();

    $("#addUserAlert").fadeOut();

    if(checkParams(params)){
      console.log("i'm in.");
      $("#newUser").toggleClass("loading");
      $.ajax({
        type: "GET",
        url: "./inc/api-v2.php",
        data: params,
        success: function(response){
          $("#newUser").toggleClass("loading");
          console.log(response);
        }
      })
    } else {
      console.log(params);
    }

    console.log("complete");

  });

});
