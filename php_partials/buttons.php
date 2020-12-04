<?php 
    $user_set = false;
    if(isset($_SESSION['user'])){
        $user_set = true;
    }

?>

<div id="buttons">
    <a role="button" class="btn btn-sm" href=
        <?php if($user_set)
        {   
            $_SESSION['logmeout'] = true;
            echo "/project1/php_controllers/login_controller.php";}
        else{ 
            echo "/project1/php_views/login.php";
        } ?>   >
        <?php if($user_set){echo "Log out";} else{echo "Log in";}?>
    </a>

    <a role="button" class="btn btn-sm"
    <?php
    if (!$user_set){
        echo "href="."/project1/php_views/signup.php";
    } else{
        echo "style='pointer-events:none; cursor: default;'";
    }
    ?>>
    <?php
        if($user_set){
            echo 'Welcome, '.$_SESSION['user']['username'];
        } else{
            echo 'Register';
        }
    ?></a>
</div>