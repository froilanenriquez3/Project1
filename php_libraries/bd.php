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



?>