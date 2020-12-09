<<<<<<< HEAD
<div id="buttons">
    <a role="button" class="btn btn-sm" href=" 
        <?php if(isset($_SESSION['user']))
        {   
            $_SESSION['logmeout'] = true;
            echo "/project1/php_controllers/login_controller.php";}
        else{ 
            echo "/project1/php_views/login.php";
        } ?>   ">

        <?php if(isset($_SESSION['user'])){echo "Log out";} else{echo "Log in";}?>
    </a>
    <?php if(!isset($_SESSION['user'])){?>
        <a role="button" class="btn btn-sm" href="/project1/php_views/signup.php">Registrarse</a>
    <?php }?>
=======
<?php
$user_set = false;
if (isset($_SESSION['user'])) {
    $user_set = true;
}

?>


<div id="buttons">
    <div class="dropdown language">
        <button class="btn btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="/project1/media/img/planet.png" alt="">
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#"><img src="/project1/media/img/spanish.png" alt=""></a>
            <a class="dropdown-item" href="#"><img src="/project1/media/img/catalan.png" alt=""></a>
            <a class="dropdown-item" href="#"><img src="/project1/media/img/english.png" alt=""></a>
            <a class="dropdown-item" href="#"><img src="/project1/media/img/french.png" alt=""></a>
        </div>
    </div>

    <a role="button" class="btn btn-sm" href=<?php if ($user_set) {
         $_SESSION['logmeout'] = true;
             echo "/project1/php_controllers/login_controller.php";
            } else {
             echo "/project1/php_views/login.php";
            } ?>>
        <?php if ($user_set) {
            echo "Log out";
        } else {
            echo "Log in";
        } ?>
    </a>

    <a role="button" class="btn btn-sm" <?php
        if (!$user_set) {
            echo "href=" . "/project1/php_views/signup.php";
        } else {
            echo "style='pointer-events:none; cursor: default;'";
        }
    ?>>
        <?php
        if ($user_set) {
            echo 'Welcome, ' . $_SESSION['user']['username'];
        } else {
            echo 'Register';
        }
        ?></a>
>>>>>>> 416453652ecc64bf07267e8d69d6d947736dd987
</div>