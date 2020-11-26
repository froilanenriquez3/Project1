<?php
require_once '../php_libraries/bd.php';
session_start();

if (isset($_POST['login'])){
    $_SESSION['user'] = selectUserByUsername($_POST['username']);

    header("Location: ../index.html");
    exit();
}

?>