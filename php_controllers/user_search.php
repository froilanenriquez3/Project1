<?php

    require_once '../php_libraries/bd.php';

    if(isset($_POST['see_all_users'])){
        $_SESSION['see_all_users'] = true;
    } else{
        $_SESSION['result_user'] = selectUserByUsername($_POST['usersearch']);
        $_SESSION['usersearch'] = $_POST['usersearch'];

        if($_SESSION['result_user'] == null){
        unset($_SESSION['result_user']);
        $_SESSION['no_user_results'] = true;
    }
    }

    header("Location: ../php_views/administration.php#userssection");

    exit();


?>