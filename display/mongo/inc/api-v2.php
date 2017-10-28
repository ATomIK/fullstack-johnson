<?php

class API {

  public function __construct(){

    $this->headers = getallheaders();

  }

  public function processApi(){

    // $this->
    var_dump($_SERVER);

  }

}

$api = new Api;
$api->processApi();
