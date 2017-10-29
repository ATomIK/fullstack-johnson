function checkVals(arr){
  let empty = true;
  $.each(arr, function(k,v){
    if(v == ""){
      $("#addUserAlert").fadeIn();
      $("#addUserMsg").html("Sorry, you can't leave any of these inputs blank!");
      empty = false;
    }
  });
  return empty;
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
      { "title": "MID", "data": "_id" },
      { "title": "First name", "data": "first" },
      { "title": "Last name", "data": "last" },
      { "title": "Email", "data": "email" },
      { "title": "Age", "data": "age" },
      { "title": "Nationality", "data": "nat" }
    ],
    columnDefs: [
      {
        "targets": [ 0 ],
        "visible": false
      }
    ],
    order: [
      [ 1, "asc" ]
    ]
  });

  // set the edit user modal's settings
  $("#editUser").modal({
    onHide: function(){
      // clear all inputs
      $.each($("#updateUser").find("input"), function(k,v){
        if(v.val() !== "PATCH"){
          v.val("");
        }
      });
      // add loader class back on because why not
      $("#updateUser").toggleClass("loading");
    }
  });

  $("#example tbody").on('click', 'tr', function(){
    // get value from first column
    let data = datatable.row($(this)).data();
    if( $(this).hasClass("selected") ) {
      $(this).removeClass("selected");
    } else {
      datatable.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
      // toggle edit user modal
      $("#editUser").modal("show");
      // fill form with row's data
      $.each(data, function(k,v){
        $("#updateUser").find("[name="+k+"]").val(v);
      });
      // when finished filling data, remove loading class
      $("#updateUser").toggleClass("loading");
    }
  });

  $("#adduser").modal('attach events', '.openAdd', 'show');

  $("#newUser").submit(function(e){
    e.preventDefault();

    $("#addUserAlert").fadeOut();
    let params = $("#newUser").serialize();
    let paramArr = getParams(params);
    paramArr.shift(); // since paramArr[0] is the pseudo method

    console.log(paramArr);

    if(checkVals(paramArr)){

      $("#newUser").toggleClass("loading");

      $.ajax({
        type: "POST",
        url: "./inc/api-v2.php",
        data: params,
        success: function(response){
          $("#newUser").toggleClass("loading");

          datatable.row.add({
            first: decodeURIComponent(paramArr[0][1]),
            last: decodeURIComponent(paramArr[1][1]),
            email: decodeURIComponent(paramArr[2][1]),
            age: decodeURIComponent(paramArr[3][1]),
            nat: decodeURIComponent(paramArr[4][1])
          }).draw(false);

          // clear inputs
          $.each(paramArr, function(k,v){
            $("#newUser").find("[name="+v[0]+"]").val("");
          });

          // close modal
          $("#adduser").modal('hide');
        }
      })
    }

  });

});
