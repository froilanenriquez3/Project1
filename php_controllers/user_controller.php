<?php

require_once '../php_libraries/bd.php';

if(isset($_SESSION['user'])){
    if ($_SESSION['user']['isAdmin'] == 1) {
        $currentIsAdmin = true;
    }
    
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

    header("Location: ../php_views/administration.php#adminssection");

}

if($add_admin){
    $admin = selectUserById($_POST['newadmin']);

    modifyUser($_POST['newadmin'], $admin['username'], $admin['password'], $admin['points'], 1, $admin['email']);

    header("Location: ../php_views/administration.php#adminssection");
  
   
    
}

if($modify_user){
    $user = selectUserById($_POST['userid']);

    modifyUser($_POST['userid'], $_POST['username'], $_POST['password'], $_POST['points'], $user['isAdmin'], $_POST['email']);
   insertUserHasPromo($_POST['userid'], $_POST['promotions']);
   

    header("Location: ../php_views/administration.php#userssection");
  
}

if($delete_user){
    $user = selectUserById($_POST['userid']);

    deleteUser($_POST['userid']);

    header("Location: ../php_views/administration.php#userssection");

}


if($add_user){

    /*Check that the passwords are the same. Then check if there was an error in inserting user. 
    Finally, check if the user is an administrator registering a user or a new customer signing up */

    if ($_POST['password'] == $_POST['confpassword']) {
        insertUser($_POST['username'], $_POST['password'],0, 0,$_POST['email']);

        if(isset($_SESSION['error'])){
            header('Location: ../php_views/signup.php');
        } else{
            if(!$currentIsAdmin){
                $user = selectUserByUsername($_POST['username']);
                header("Location: ../index.php");
                $_SESSION['user'] = $user;
              
            }else{
                header("Location: ../php_views/administration.php#userssection");
                
            }
        }


    } else{
        header("Location: ../php_views/signup.php");
        $_SESSION['password_conf'] = false;
    }

  
}

exit();

?>