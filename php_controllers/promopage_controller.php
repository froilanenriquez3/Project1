<?php
//Code to allow users to exchange points for promotions
//Modify the user_has_promo table in order to add the selected promotion
//Subtract the cost of the promotion from the value of the user's total points
require_once '../php_libraries/bd.php';

if (isset($_POST['promoid'])) {
    $promos = selectUserPromos($_SESSION['user']['userid']);
    $promos2 = [];
    foreach ($promos as $promo) {
        array_push($promos2, $promo['idpromotion']);
    }
    array_push($promos2, $_POST['promoid']);
    insertUserHasPromo($_SESSION['user']['userid'], $promos2);

    $_SESSION['user']['points'] -= $_POST['point_cost'];

    modifyUser($_SESSION['user']['userid'],$_SESSION['user']['username'],$_SESSION['user']['password'],$_SESSION['user']['points'],$_SESSION['user']['isAdmin'], $_SESSION['user']['email']);

    header("Location: ../php_views/promotions.php");
}
$_SESSION['url'] = '../php_controllers/promopage_controller.php';
exit();
