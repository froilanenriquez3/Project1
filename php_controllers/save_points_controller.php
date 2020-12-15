<?php 
    require_once '../php_libraries/bd.php';
   

    $user_game = selectUserGameInfo($_SESSION['user']['userid'], $_POST['gameId']);
    print_r($user_game);
    if ($user_game['pointSave'] == 0){
        modifyPointSave($_SESSION['user']['userid'], $_POST['gameId'], $_POST['finalPoints']);
        modifyUser($_SESSION['user']['userid'], $_SESSION['user']['username'], $_SESSION['user']['password'], $_SESSION['user']['points'] + $_POST['finalPoints'],$_SESSION['user']['isAdmin'],$_SESSION['user']['email']); 
        $_SESSION['user'] = selectUserById($_SESSION['user']['userid']);   
        echo "Points saved<br>";
    }
    $_SESSION['url'] = '../php_controllers/save_points_controller.php';
    header("Location: ../php_views/games.php");
    exit();

    // $id = $_SESSION['user']['userid']; 
    // $_SESSION['user'] = selectUserById($id);
    // echo $_SESSION['user']['points']."<br>";
    // echo $user_game['pointSave'];
?>