<?php

ini_set("display_errors", -1);

if ( 0 < $_FILES['file']['error'] ) {
    echo 'Error: ' . $_FILES['file']['error'] . '<br>';
}
else {
    var_dump(move_uploaded_file($_FILES['file']['tmp_name'], 'uploads/' . $_FILES['file']['name']));
}
