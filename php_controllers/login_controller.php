<?php

//Code to redirect user based on the information entered and submitted from the login page.

//If the user name is not found, redirect to login page and show error message
//Else, set the session user variable to the user selected from the database with the same name username

require_once '../php_libraries/bd.php';

if (isset($_POST['login'])){
    $user = selectUserByUsername($_POST['username']);

    if($_POST['password'] != $user['password']){
        header("Location: ../php_views/login.php");
        $_SESSION['logged'] = false;
       
    } else{
        $_SESSION['user'] = $user;
        header("Location: ../index.php");
    }
    
}

//When logged in, the login button changes functionality to log out. Set session user variable to null

if(isset($_SESSION['logmeout'])){
    if($_SESSION['logmeout']){
        $_SESSION['user'] = null;
        $_SESSION['logmeout'] = false;
        header("Location: ../index.php");
    }
}

//Set previous url
$_SESSION['url'] = '../php_controllers/login_controller.php';
exit();
?>