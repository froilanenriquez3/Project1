<?php

insertUser("Froilan", "1235", 0, 0, "frilan@whatev.com");


function openDB(){
    $servername = "localhost";
    $username = "root";
    $password = "";

    $connection = new PDO("mysql:host=$servername;dbname=restore", $username, $password); 

    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $connection->exec("set names utf8");

    return $connection;

}

function closeDB(){
    return null;
}

//Function to select all items from a given table
function selectAllFromTable($table_name){

    $connection = openDB();

    $mySQLsentence = "SELECT * FROM ".$table_name;

    $mySQLsentence = $connection ->prepare($mySQLsentence);
    $mySQLsentence->execute();

    $result = $mySQLsentence->fetchAll();

    $connection = closeDB();

    return $result;

}

function selectUserById($user_id){

    $connection = openDB();

    $mySQLsentence = "SELECT * FROM user WHERE userid = :userid";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid",$user_id); 

    $mySQLsentence->execute();

    $result = $mySQLsentence->fetch();

    $connection = closeDB();

    return $result;

}

function selectUserPromotions($user_id){
    $connection = openDB();

    $mySQLsentence = "SELECT * FROM user_has_promotion WHERE user_userid = :userid";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid",$user_id); 

    $mySQLsentence->execute();

    $result = $mySQLsentence->fetchAll();

    $connection = closeDB();

    return $result;
}

function selectUserGameInfo($user_id) {
    $connection = openDB();

    $mySQLsentence = "SELECT * FROM user_plays_game WHERE users_userid = :userid";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid",$user_id); 

    $mySQLsentence->execute();

    $result = $mySQLsentence->fetchAll();

    $connection = closeDB();

    return $result;

}

function insertUser($username, $password, $points, $isAdmin, $email){
    $games = [1,2,3,4];

    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "INSERT INTO user VALUE(null, :username, :usepassword, :points, :isAdmin, :email)";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":username",$username);
    $mySQLsentence->bindParam(":usepassword",$password);  
    $mySQLsentence->bindParam(":points",$points); 
    $mySQLsentence->bindParam(":isAdmin",$isAdmin); 
    $mySQLsentence->bindParam(":email",$email); 

    $mySQLsentence->execute();
    $lastId = $connection->lastInsertId();

    foreach ($games as $game){

        $mySQLsentence2 = "INSERT INTO user_plays_game VALUES(:userid, :gameid, 0, 0)";

        $mySQLsentence2 = $connection ->prepare($mySQLsentence2);

        $mySQLsentence2->bindParam(":userid",$lastId);
        $mySQLsentence2->bindParam(":gameid",$game);
        $mySQLsentence2->execute();
    }
    
    $connection->commit();
    $connection = closeDB();

 

}


?>