<?php

require_once '../php_libraries/bd.php';
session_start();

if ($_SESSION['user']['isAdmin'] == 1) {
    $currentIsAdmin = true;
}

$all_users = selectAllFromTable('user');

$remove_admin = isset($_POST['removeadmin']);
$add_admin = isset($_POST['addadmin']);
$modify_user = isset($_POST['modifyuser']);
$delete_user = isset($_POST['deleteuser']);
$add_user = isset($_POST['adduser']);


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

if($modify_user){
    $user = selectUserById($_POST['userid']);

    modifyUser($_POST['userid'], $_POST['username'], $_POST['password'], $_POST['points'], $user['isAdmin'], $_POST['email']);

    header("Location: ../php_views/administration.php");
    exit();
}

if($delete_user){
    $user = selectUserById($_POST['userid']);

    deleteUser($_POST['userid']);

    header("Location: ../php_views/administration.php");
    exit();
}


if($add_user){
    insertUser($_POST['username'], $_POST['password'],0, 0,$_POST['email']);
    if($currentIsAdmin){
        header("Location: ../php_views/administration.php");
        exit();
    }else{
        header("Location: ../index.html");
        exit();
    }
  
}



?>