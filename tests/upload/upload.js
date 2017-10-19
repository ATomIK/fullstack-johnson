$(document).ready(function(){
  $("#fileUpload").on("change", function(e){

    var file = $(this)[0].files[0];

    $("#data").html("<p><b>File name:</b> "+file.name+"</p><p><b>File size:</b> "+(file.size/1000)+" Kb</p>");

  });

  $('#form').submit(function(e){
    e.preventDefault();

    console.log("init");

    var tFile = $("#file")[0].files[0];

    $.ajax({
      // xhr: function() {
      //   var xhr = new window.XMLHttpRequest();
      //
      //   xhr.upload.addEventListener("progress", function(evt) {
      //     if (evt.lengthComputable) {
      //       var percentComplete = evt.loaded / evt.total;
      //       percentComplete = parseInt(percentComplete * 100);
      //       console.log(percentComplete);
      //
      //       if (percentComplete === 100) {
      //
      //       }
      //
      //     }
      //   }, false);
      //
      //   return xhr;
      // },
      url: "./api.php",
      type: "POST",
      processData: false,
      data: $("#form").serialize(),
      // contentType: "application/json",
      // dataType: "json",
      success: function(result) {
        console.log(result);
      }
    });
  });
});
