<?php

require_once '../php_libraries/bd.php';
session_start();

$remove_admin = isset($_POST['removeadmin']);
$add_admin = isset($_POST['addadmin']);

if($remove_admin){
    $admin = selectUserById($_POST['adminid']);

    modifyUser($_POST['adminid'], $admin['username'], $admin['password'], $admin['points'], 0, $admin['email']);

    header("Location: ../php_views/administration.php");
    exit();
}

if($add_admin){
    $admin = selectUserById($_POST['newadmin']);
    modifyUser($_POST['newadmin'], $admin['username'], $admin['password'], $admin['points'], 1, $admin['email']);
    header("Location: ../php_views/administration.php");
    exit();
}




?>