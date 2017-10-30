<?php

header('Content-Type: application/json');
require './mongodb.helper.php';

/**
 * API
 * @author - Tom Johnson
 * @description - processes actions from the index
 */

// class API extends mongo {
//
//   public function __construct(){
//
//     $this->mongo = new mongo("mongo_tests", "users");
//
//     $this->method = $_SERVER['REQUEST_METHOD'];
//
//   }
//
//   public function processApi(){
//
//     if($this->method == "POST"){
//
//       if($_POST['__method'] == "PUT"){
//         $this->mongo->insert([
//           [
//             '_id' => count($this->mongo->query())+1,
//             'first' => $_POST['first'],
//             'last' => $_POST['last'],
//             'email' => $_POST['email'],
//             'age' => $_POST['age'],
//             'nat' => $_POST['nat']
//           ]
//         ]);
//         echo json_encode(["status" => true],JSON_PRETTY_PRINT);
//       }
//
//       if($_POST['__method'] == "PATCH"){
//         $this->mongo->update(["_id" => intval($_POST['_id'])],[
//           'first' => $_POST['first'],
//           'last' => $_POST['last'],
//           'email' => $_POST['email'],
//           'age' => $_POST['age'],
//           'nat' => $_POST['nat']
//         ]);
//         echo json_encode(["status" => true],JSON_PRETTY_PRINT);
//       }
//
//       if($_POST['__method'] == "DELETE"){
//         $this->mongo->delete([["_id" => intval($_POST['_id'])]]);
//         echo json_encode(["status" => true, "_id" => $_POST['_id']],JSON_PRETTY_PRINT);
//       }
//
//     }
//
//     // getting data in the form of json
//     if($this->method == "GET"){
//       echo json_encode(["status" => "go away."], JSON_PRETTY_PRINT);
//     }
//
//   }
//
// }
//
// $api = new Api;
// $api->processApi();
