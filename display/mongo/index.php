<?php require './inc/mongodb.helper.php'; ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>DataTables &sdot; Users</title>
    <link rel="stylesheet" href="./assets/s.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/dataTables.semanticui.min.css">
    <script src="./assets/jquery.min.js" charset="utf-8"></script>
    <script src="https://cdn.datatables.net/v/se/dt-1.10.16/datatables.min.js" charset="utf-8"></script>
    <script src="https://cdn.datatables.net/1.10.16/js/dataTables.semanticui.min.js" charset="utf-8"></script>
    <script src="./assets/s.min.js" charset="utf-8"></script>

    <script src="./assets/script.js" charset="utf-8"></script>
  </head>
  <body>
    <div class="ui container">
      <div class="ui pointing  menu">
        <a class="active item">
          Home
        </a>
        <a class="item openAdd">
          Add User
        </a>
      </div>

      <table id="example" class="ui celled table display"></table>

      <div id="adduser" class="ui tiny modal">
        <div class="header">Add new user</div>
        <div class="content">
          <form id="newUser" class="ui form">

            <div id="addUserAlert" class="ui icon message" style="display:none">
              <i class="warning circle icon"></i>
              <div class="content">
                <div class="header">
                  ERROR
                </div>
                <p id="addUserMsg"></p>
              </div>
            </div>

            <input type="hidden" name="__method" value="PUT">
            <div class="two fields">
              <div class="field">
                <label>First name</label>
                <input type="text" name="first" placeholder="John">
              </div>
              <div class="field">
                <label>Last name</label>
                <input type="text" name="last" placeholder="Doe">
              </div>
            </div>
            <div class="field">
              <label>Email address</label>
              <input type="email" name="email" placeholder="example@example.com">
            </div>
            <div class="two fields">
              <div class="field">
                <label>Age</label>
                <input type="number" name="age" placeholder="32">
              </div>
              <div class="field">
                <label>Nationality</label>
                <input type="text" name="nat" placeholder="US">
              </div>
            </div>
            <div class="field text-right">
              <input type="submit" class="ui small primary button" value="Create">
            </div>
          </form>
        </div>
      </div>

      <div id="editUser" class="ui tiny modal">
        <div class="header">Edit user</div>
        <div class="content">
          <form id="updateUser" class="ui form">
            <input type="hidden" name="__method" value="PATCH">
            <input type="hidden" name="_id" value="">
            <div class="two fields">
              <div class="field">
                <label>First name</label>
                <input type="text" name="first" placeholder="John">
              </div>
              <div class="field">
                <label>Last name</label>
                <input type="text" name="last" placeholder="Doe">
              </div>
            </div>
            <div class="field">
              <label>Email address</label>
              <input type="email" name="email" placeholder="example@example.com">
            </div>
            <div class="two fields">
              <div class="field">
                <label>Age</label>
                <input type="number" name="age" placeholder="32">
              </div>
              <div class="field">
                <label>Nationality</label>
                <input type="text" name="nat" placeholder="US">
              </div>
            </div>
            <div class="field text-right">
              <input type="submit" class="ui small primary button" value="Create">
            </div>
          </form>
        </div>
      </div>

      <ul>
        <li><s>Add user.click: pop up semantic modal and add user</s></li>
        <li>Row.click: pop up semantic modal and edit user</li>
        <li>Delete at bottom of edit modal</li>
        <li>Done!</li>
      </ul>

    </div>

  </body>
</html>
