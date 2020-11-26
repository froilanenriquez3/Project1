<?php

require_once '../php_libraries/bd.php';
session_start();

$remove_admin = isset($_POST['removeadmin']);

if($remove_admin){
    $admin = selectUserById($_POST['adminid']);

    modifyUser($_POST['adminid'], $admin['username'], $admin['password'], $admin['points'], 0, $admin['email']);

    header("Location: ../php_views/administration.php");
    exit();
}




?>