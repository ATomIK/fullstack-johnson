function checkVals(arr){
  let empty = true;
  $.each(arr, function(k,v){
    console.log(v[0]);
  });

  // let empty = true;
  // $.each(arr.split('&'), function(k,v){
  //   if(v.split('=')[1] == ""){
  //     $("#addUserAlert").fadeIn();
  //     $("#addUserMsg").html("Sorry, you can't leave any of these inputs blank!");
  //     empty = false;
  //   }
  // });
  // return empty;
}

function getParams(str){
  let arr = new Array();
  $.each(str.split("&"), function(k,v){
    arr.push(v.split("="));
  });
  return arr;
}

$(document).ready(function(){

  var datatable = $("#example").DataTable({
    ajax: "./inc/api-v1.php",
    columns: [
      { "data": "first" },
      { "data": "last" },
      { "data": "email" },
      { "data": "age" },
      { "data": "nat" }
    ]
  });

  $("#example tbody").on('click', 'tr', function(){
    if( $(this).hasClass("selected") ) {
      $(this).removeClass("selected");
    } else {
      datatable.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#adduser").modal('attach events', '.openAdd', 'show');

  $("#newUser").submit(function(e){
    e.preventDefault();

    $("#addUserAlert").fadeOut();
    let params = $("#newUser").serialize();

    checkVals(params);

    // if(checkParams(params)){
    //
    //   $("#newUser").toggleClass("loading");
    //
    //   $.ajax({
    //     type: "POST",
    //     url: "./inc/api-v2.php",
    //     data: params,
    //     success: function(response){
    //       $("#newUser").toggleClass("loading");
    //       datatable.row.add(params).draw( false );
    //       console.log(response);
    //     }
    //   })
    // }

  });

});
