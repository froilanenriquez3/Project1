<?php
require_once '../php_libraries/bd.php';

if (isset($_POST['promoid'])) {
    $promos = selectUserPromos($_SESSION['user']['userid']);
    $promos2 = [];
    foreach ($promos as $promo) {
        array_push($promos2, $promo['idpromotion']);
    }
    array_push($promos2, $_POST['promoid']);
    insertUserHasPromo($_SESSION['user']['userid'], $promos2);
    header("Location: ../php_views/promotions.php");
}

exit();
