<?php
//Code to control backend related to users and sessions
//Updates to users based on administration
//Updates to tables if a new user is registered

require_once '../php_libraries/bd.php';

//Check if the user is an admin. If the current user is admin, they will be redirecte to admin page after operations
if(isset($_SESSION['user'])){
    if ($_SESSION['user']['isAdmin'] == 1) {
        $currentIsAdmin = true;
    }
    
}

//Select all the users from the user table for access
$all_users = selectAllFromTable('user');

//Check from where the form has been submitted
$remove_admin = isset($_POST['removeadmin']);
$add_admin = isset($_POST['addadmin']);
$modify_user = isset($_POST['modifyuser']);
$delete_user = isset($_POST['deleteuser']);
$add_user = isset($_POST['adduser']);

//Code to remove admin privileges from a user
if($remove_admin){
    $admin = selectUserById($_POST['adminid']);

    modifyUser($_POST['adminid'], $admin['username'], $admin['password'], $admin['points'], 0, $admin['email']);

    header("Location: ../php_views/administration.php#adminssection");
    $_SESSION['url'] = 'admin';

}

//Code to grant admin privileges to a user
if($add_admin){
    $admin = selectUserById($_POST['newadmin']);

    modifyUser($_POST['newadmin'], $admin['username'], $admin['password'], $admin['points'], 1, $admin['email']);

    header("Location: ../php_views/administration.php#adminssection");
    $_SESSION['url'] = 'admin';
}

//Update user table with different information when user data is modified and saved from the corresponding section in the admin page
if($modify_user){
    $_SESSION['url'] = '../php_controllers/user_controller.php';
    $user = selectUserById($_POST['userid']);

    modifyUser($_POST['userid'], $_POST['username'], $_POST['password'], $_POST['points'], $user['isAdmin'], $_POST['email']);
   insertUserHasPromo($_POST['userid'], $_POST['promotions']);
   

    header("Location: ../php_views/administration.php#userssection");
  
}

//Remove user from database
if($delete_user){
    $_SESSION['url'] = '../php_controllers/user_controller.php';
    $user = selectUserById($_POST['userid']);

    deleteUser($_POST['userid']);

    header("Location: ../php_views/administration.php#userssection");

}

//Add user to table 
if($add_user){
    //Set previous url in order to redirect to correct section in the administration section
    $_SESSION['url'] = '../php_controllers/user_controller.php';

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