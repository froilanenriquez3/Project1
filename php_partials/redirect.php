<?php

if (!isset($_SESSION['user']) || $_SESSION['user'] == null) {
    header("Location: /project1/php_views/login.php");
    exit();  
}

?>