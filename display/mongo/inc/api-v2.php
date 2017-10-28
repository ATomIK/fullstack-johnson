<?php

require './mongodb.helper.php';

/**
 * API
 * @author - Tom Johnson
 * @description - processes actions from the index
 */

class API extends mongo {

  public function __construct(){

    $this->mongo = new mongo("mongo_tests", "users");

    $this->method = $_SERVER['REQUEST_METHOD'];

  }

  public function processApi(){

    if($this->method == "POST"){

      // pseudo put for organization
      // meaning we're adding a user
      if($_POST['__method'] == "PUT"){

      }

      // we're updating a user
      if($_POST['__method'] == "PATCH"){

      }

    }

    // getting data in the form of json
    if($this->method == "GET"){
      header('Content-Type: application/json');
      echo json_encode(["status" => "go away."], JSON_PRETTY_PRINT);
    }

  }

}

$api = new Api;
$api->processApi();
