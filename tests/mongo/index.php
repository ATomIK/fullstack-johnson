<?php require './inc/mongo.class.php'; require './inc/mongodb.helper.php'; ?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>MongoDB</title>
    <link rel="stylesheet" href="./assets/s.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
    <script src="./assets/jquery.min.js" charset="utf-8"></script>
    <script src="./assets/s.min.js" charset="utf-8"></script>
    <script src="https://cdn.datatables.net/v/se/dt-1.10.16/datatables.min.js" charset="utf-8"></script>
    <script type="text/javascript">
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

      });
    </script>
  </head>
  <body>

    <?php

      // $user = [
      //   [
      //     '_id' => 1,
      //     'first' => "fuck",
      //     'last' => "you"
      //   ],
      //   [
      //     '_id' => 2,
      //     'first' => "up",
      //     'last' => "yours"
      //   ]
      // ];
      //
      // $mongo = new mongo('mongo_tests', 'users');
      // var_dump($mongo->delete());
      //
      // var_dump($mongo->insert($user));
      //
      // $r = $mongo->query();

    ?>

    <div class="ui container">
      <div class="ui pointing  menu">
        <a class="active item">
          Home
        </a>
        <a class="item">
          Add User
        </a>
      </div>

      <table id="example" class="display">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Age</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>Age</th>
            <th>Nationality</th>
          </tr>
        </tfoot>
        <tbody>

        </tbody>
      </table>

    </div>

  </body>
</html>
