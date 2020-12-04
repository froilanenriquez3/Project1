<?php


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


// **SELECT FUNCTIONS**

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

//Function to return a user given their user id number
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

//function to return a user given their username
function selectUserByUsername($username){
    $connection = openDB();

    $mySQLsentence = "SELECT * FROM user WHERE username = :username";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":username",$username); 

    $mySQLsentence->execute();

    $result = $mySQLsentence->fetch();

    $connection = closeDB();

    return $result;
}

//function to return all the promos that a user has given their user id
function selectUserPromos($user_id){
    $connection = openDB();

    $mySQLsentence = "select promotion.* from promotion 
    join user_has_promotion on promotion.idpromotion = user_has_promotion.promotion_idpromotion 
    join user on user_has_promotion.user_userid = user.userid
    where user_userid = :userid";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid",$user_id); 

    $mySQLsentence->execute();

    $result = $mySQLsentence->fetchAll();

    $connection = closeDB();

    return $result;
}

//Function to return all the info of a user playing a game based on the id of the user
function selectUserGameInfo($user_id, $game_id) {
    $connection = openDB();

    $mySQLsentence = "SELECT * FROM user_plays_game WHERE users_userid = :userid AND games_idgame = :gameid";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid",$user_id); 
    $mySQLsentence->bindParam(":gameid",$game_id); 

    $mySQLsentence->execute();

    $result = $mySQLsentence->fetch();

    $connection = closeDB();

    return $result;

}

//function that returns the highest score of all the users given a certain game id 
function selectHighScores($game_id){
    $connection = openDB();

    $mySQLsentence = "SELCT user_plays_game.highScore FROM user_plays_game JOIN user ON userid = users_userid WHERE games_gameid = :gameid;";

    $mySQLsentence= $connection ->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":gameid",$game_id); 


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

function insertStore($name, $desc){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "INSERT INTO store VALUES(null, :storename, :storedesc)";

    $mySQLsentence = $connection ->prepare($mySQLsentence);

    $mySQLsentence->bindParam(":storename", $name);
    $mySQLsentence->bindParam(":storedesc", $desc);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();
}

function insertPromo($name, $desc, $point_cost, $store_id){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "INSERT INTO promotion VALUES(null, :promname, :promdesc, :pointcost, :storeid)";

    $mySQLsentence = $connection ->prepare($mySQLsentence);

    $mySQLsentence->bindParam(":promname", $name);
    $mySQLsentence->bindParam(":promdesc", $desc);
    $mySQLsentence->bindParam(":pointcost", $point_cost);
    $mySQLsentence->bindParam(":storeid", $store_id);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();
}

function insertUserHasPromo($user_id, $promos){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence2 = "DELETE FROM user_has_promotion WHERE user_userid =:userid;";
    $mySQLsentence2 = $connection->prepare($mySQLsentence2);
    $mySQLsentence2->bindParam(':userid', $user_id);
    $mySQLsentence2->execute(); 

    foreach($promos as $promo){
        $mySQLsentence = "INSERT INTO user_has_promotion VALUES(:userid, :promoid)";

        $mySQLsentence = $connection->prepare($mySQLsentence);

        $mySQLsentence->bindParam(":userid", $user_id);
        $mySQLsentence->bindParam(":promoid", $promo);

        $mySQLsentence->execute();
    }

    $connection->commit();
    $connection = closeDB();

}

function insertUserPlaysGame($user_id, $game_id){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "INSERT INTO user_plays_game values(:userid, :gameid, 0, 0)";
    $mySQLsentence = $connection->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid", $user_id);
    $mySQLsentence->bindParam(":gameid", $game_id);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();

}


function modifyPointSave($user_id, $game_id){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "UPDATE user_plays_game SET pointSave=1 WHERE users_userid = :userid AND games_idgame = :gameid";
    $mySQLsentence = $connection->prepare($mySQLsentence);
    $mySQLsentence->bindParam(":userid", $user_id);
    $mySQLsentence->bindParam(":gameid", $game_id);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();

}

function modifyUser($user_id, $username, $password, $points, $isAdmin, $email){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "UPDATE user SET username =:username, password =:usepassword, points =:points, isAdmin =:isAdmin, email=:email WHERE userid=:userid";
    $mySQLsentence = $connection->prepare($mySQLsentence);

    $mySQLsentence->bindParam(":userid", $user_id);
    $mySQLsentence->bindParam(":username", $username);
    $mySQLsentence->bindParam(":usepassword", $password);
    $mySQLsentence->bindParam(":points", $points);
    $mySQLsentence->bindParam(":isAdmin", $isAdmin);
    $mySQLsentence->bindParam(":email", $email);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();

}

function modifyPromo($promo_name, $promo_desc, $point_cost, $store_id, $promo_id){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "UPDATE promotion SET name =:promoname, promo_desc=:promodesc, pointCost =:pointcost, store_idstore =:store_idstore WHERE idpromotion =:id_promo";
    $mySQLsentence = $connection->prepare($mySQLsentence);

    $mySQLsentence->bindParam(":promoname", $promo_name);
    $mySQLsentence->bindParam(":promodesc", $promo_desc);
    $mySQLsentence->bindParam(":pointcost", $point_cost);
    $mySQLsentence->bindParam(":store_idstore", $store_id);
    $mySQLsentence->bindParam(":id_promo", $promo_id);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();
}

function modifyGamePointLimit($game_limit, $game_id){
    $connection = openDB();
    $connection->beginTransaction();

    $mySQLsentence = "UPDATE game SET pointLimit = :game_limit WHERE idgame =:game_id";
    $mySQLsentence = $connection->prepare($mySQLsentence);

    $mySQLsentence->bindParam(":game_limit", $game_limit);
    $mySQLsentence->bindParam(":game_id", $game_id);

    $mySQLsentence->execute();

    $connection->commit();
    $connection = closeDB();

}

function deleteUser($user_id){
    $connection = openDb();
    
    $mySQLsentence = "DELETE FROM user WHERE userid=:userid";

    $mySQLsentence = $connection->prepare($mySQLsentence);
    $mySQLsentence->bindParam(':userid', $user_id);

    $connection->beginTransaction();
    $mySQLsentence->execute();

    $connection->commit();


    $connection = closeDb();

}

function deletePromo($promo_id){
    $connection = openDb();
    
    $mySQLsentence = "DELETE FROM promotion WHERE idpromotion=:id_promotion";

    $mySQLsentence = $connection->prepare($mySQLsentence);
    $mySQLsentence->bindParam(':id_promotion', $promo_id);

    $connection->beginTransaction();
    $mySQLsentence->execute();

    $connection->commit();


    $connection = closeDb();
}

?>