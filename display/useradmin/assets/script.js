function checkVals(arr,modal){
  let hasVal = true;
  $.each(arr, function(k,v){
    if(v[1] == ""){
      hasVal = false;
    }
  });
  if(!hasVal){
    if(modal == 1){
      $("#addUserAlert").fadeIn();
      $("#addUserMsg").html("Sorry, you can't leave any of these inputs blank!");
    } else if(modal == 2){
      $("#updateUserAlert").fadeIn();
      $("#updateUserMsg").html("Sorry, you can't leave any of these inputs blank!");
    }
  }

  return hasVal;
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

  $(".random_user").click(function(){
    // send post to delete whole collection
    $.post("./inc/api-v2.php", {__method:"DELETE"});
    // get new collection
    datatable.ajax.reload();
  });

  // set the edit user modal's settings
  $("#editUser").modal({
    allowMultiple: true,
    onHide: function(){
      // add loader class
      $("#updateUser").addClass("loading");
    }
  }).modal('setting','transition','vertical flip');

  $("#example tbody").on('click', 'tr', function(){
    // get value from first column
    let data = datatable.row($(this)).data();
    // toggle edit user modal
    $("#editUser").modal("show");
    // fill form with row's data
    $.each(data, function(k,v){
      $("#updateUser").find("[name="+k+"]").val(v);
    });
    // give delete option an id
    $("#deleteUser").data("mid",data["_id"]);
    // when finished filling data, remove loading class
    $("#updateUser").removeClass("loading");
  });

  $("#adduser").modal('attach events', '.openAdd', 'show');

  $("#newUser").submit(function(e){
    e.preventDefault();

    $("#addUserAlert").fadeOut();
    let params = $("#newUser").serialize();
    let paramArr = getParams(params);
    paramArr.shift(); // since paramArr[0] is the pseudo method

    if(checkVals(paramArr,1)){

      $("#newUser").toggleClass("loading");

      $.ajax({
        type: "POST",
        url: "./inc/api-v2.php",
        data: params,
        success: function(response){
          $("#newUser").toggleClass("loading");

          datatable.row.add({
            _id: response._id,
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

  $("#updateUser").submit(function(e){
    e.preventDefault();

    var params = $("#updateUser").serialize();
    var paramArr = getParams(params);
    paramArr.shift(); // __method

    if(checkVals(paramArr,2)){

      $.ajax({
        type: "POST",
        url: "./inc/api-v2.php",
        data: params,
        success: function(response){
          $("#editUser").modal('hide');
          datatable.ajax.reload();
        }
      });

    }

  });

  // delete modal settings
  $("#deleteUser").modal({
    closable: false,
    onApprove: function(){
      $.ajax({
        type: "POST",
        url: "./inc/api-v2.php",
        data: "_id="+$("#deleteUser").data("mid")+"&__method=DELETE",
        success: function(response){
          datatable.ajax.reload();
        }
      })
    }
  }).modal('attach events', '#promptDelete');

});
