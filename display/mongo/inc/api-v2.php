<?php

class API {

  public function __construct(){

    $this->method = $_SERVER['REQUEST_METHOD'];

    $this->args = explode('/', rtrim($_SERVER['REQUEST_URI'], '/'));

    while($this->args[0] == '' || $this->args[0] == 'api.php'){
    	array_shift($this->args);
    }

  }

  public function processApi(){

    // if($this->method == "POST")
    var_dump($this->args);

  }

}

$api = new Api;
$api->processApi();
