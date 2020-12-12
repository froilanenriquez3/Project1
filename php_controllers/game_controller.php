<?php
    require_once '../php_libraries/bd.php';

    $modpointlim = isset($_POST['modpointlim']);

    if($modpointlim){
        modifyGamePointLimit($_POST['pointlimit'],$_POST['gameid']);
        header("Location: ../php_views/administration.php#pointssection");
        
    }
    $_SESSION['url'] = '../php_controllers/game_controller.php';
    exit();
    
?>