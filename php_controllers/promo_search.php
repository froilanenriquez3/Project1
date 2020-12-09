<?php

    require_once '../php_libraries/bd.php';

    if(isset($_POST['see_all_promos'])){
        $_SESSION['see_all_promos'] = true;
    } else{
        $_SESSION['result_promo'] = selectPromoByName($_POST['promosearch']);
        $_SESSION['promosearch'] = $_POST['promosearch'];

        if($_SESSION['result_promo'] == null){
        unset($_SESSION['result_promo']);
        $_SESSION['no_promo_results'] = true;
    }
    }

    header("Location: ../php_views/administration.php#promossection");

    exit();


?>