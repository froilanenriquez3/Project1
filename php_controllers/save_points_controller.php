<?php 
//Code to redeem points at the end of game
    require_once '../php_libraries/bd.php';

    //Obtain the information of this instance of a game with this user
    $user_game = selectUserGameInfo($_SESSION['user']['userid'], $_POST['gameId']);
    print_r($user_game);

    //If the user has not redeemed their points in this game, execute the code below
    if ($user_game['pointSave'] == 0){
        //Change the user_plays_game table in order to change state of the redeemed column
        modifyPointSave($_SESSION['user']['userid'], $_POST['gameId'], $_POST['finalPoints']);

        //Add the number of points won from the game to the value of the user's total points
        modifyUser($_SESSION['user']['userid'], $_SESSION['user']['username'], $_SESSION['user']['password'], $_SESSION['user']['points'] + $_POST['finalPoints'],$_SESSION['user']['isAdmin'],$_SESSION['user']['email']); 

        //Update session user to reflect current number of points ... visible from the promotions page
        $_SESSION['user'] = selectUserById($_SESSION['user']['userid']);   
        echo "Points saved<br>";
    }

    //Set previous url session variable
    $_SESSION['url'] = '../php_controllers/save_points_controller.php';
    header("Location: ../php_views/games.php");
    exit();

    //If there are problems with redeeming points, comment out the header and exit lines and uncomment the lines below to see status of variables

    // $id = $_SESSION['user']['userid']; 
    // $_SESSION['user'] = selectUserById($id);
    // echo $_SESSION['user']['points']."<br>";
    // echo $user_game['pointSave']; 
?>