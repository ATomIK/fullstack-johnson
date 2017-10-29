function checkParams(arr){
  var params = arr.split('&');
  $.each(params, function(k,v){
    var pkv = v.split('=');
    if(pkv[1] == ""){
      $("#addUserAlert").fadeIn();
      $("#addUserMsg").html("Sorry, you can't leave any of these inputs blank!");
      return false;
    } else {
      return true;
    }
  });
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

    $("#addUserAlert").fadeOut();
    $("#newUser").toggleClass("loading");

    if(checkParams($("#newUser").serialize())){
      $.ajax({
        type: "POST",
        url: "./inc/api-v2.php",
        data: $("#newUser").serialize(),
        success: function(response){
          $("#newUser").toggleClass("loading");
          console.log(response);
        }
      })
    } else {
      $("#newUser").toggleClass("loading");
    }

  });

});
