<?php
    require_once '../php_libraries/bd.php';
    session_start();

    $delete_promo = isset($_POST['deletepromo']);
    $add_promo = isset($_POST['addpromo']);
    $mod_promo = isset($_POST['modifypromo']);

    if($delete_promo){
        deletePromo($_POST['promoid']);
        header("Location: ../php_views/administration.php#promossection");
        exit();
    }
    
    if($mod_promo){
        modifyPromo($_POST['promoname'], $_POST['promodesc'], $_POST['promocost'],$_POST['storeid'],$_POST['promoid']);
        header("Location: ../php_views/administration.php#promossection");
        exit();
    }

    if($add_promo){
        insertPromo($_POST['promoname'], $_POST['promodesc'], $_POST['promocost'], $_POST['storeid']);
        header("Location: ../php_views/administration.php#promossection");
        exit();
    }

    
?>