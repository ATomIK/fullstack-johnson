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

    $("#newUser").toggleClass("loading");

    $.ajax({
      type: "POST",
      url: "./inc/api-v2.php",
      data: $("#newUser").serialize(),
      success: function(response){
        $("#newUser").toggleClass("loading");
        console.log(response);
      }
    })

  });

});
