<?php
require_once '../php_libraries/bd.php';
session_start();

if (isset($_POST['login'])){
    $user = selectUserByUsername($_POST['username']);

    if($_POST['password'] != $user['password']){
        header("Location: ../php_views/login.php");
        $_SESSION['logged'] = false;
       
    } else{
        $_SESSION['user'] = $user;
        header("Location: ../index_anna.php");
    }
    
}

if(isset($_SESSION['logmeout'])){
    if($_SESSION['logmeout']){
        $_SESSION['user'] = null;
        $_SESSION['logmeout'] = false;
        header("Location: ../index.php");
    }
}

exit();
?>