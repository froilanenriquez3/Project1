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
        
            <a class="dropdown-item" id="spanish"  onclick='changeLangEsp()'><img src="/project1/media/img/spanish.png" alt=""></a>
            <a class="dropdown-item" id="catalan" onclick='changeLangCat()'><img src="/project1/media/img/catalan.png" alt=""></a>
            <a class="dropdown-item" id="english" onclick='changeLangEng()'><img src="/project1/media/img/english.png" alt=""></a>
            <a class="dropdown-item" id="french" onclick='changeLangFr()'><img src="/project1/media/img/french.png" alt=""></a>
        </div>
    </div>


    <a id="<?php
        if ($user_set) {
            echo 'logout';
        } else {
            echo 'login';
        }
        ?>" role="button" class="btn btn-sm translate" href=<?php if ($user_set) {
         $_SESSION['logmeout'] = true;
             echo "/project1/php_controllers/login_controller.php";
            } else {
             echo "/project1/php_views/login.php";
            } ?>>
        <?php if ($user_set) {
            echo "Cerrar sesión";
        } else {
            echo "Iniciar sesión";
        } ?>
    </a>

    <a id="<?php
        if ($user_set) {
            echo 'welcome';
        } else {
            echo 'register';
        }
        ?>" role="button" class="btn btn-sm translate" <?php
        if (!$user_set) {
            echo "href=" . "/project1/php_views/signup.php";
        } else {
            echo "style='pointer-events:none; cursor: default;'";
        }
    ?>>
    <?php
        if ($user_set) {
            echo 'Bienvenide! Tienes '. $_SESSION['user']['points'].' puntos' ;
        } else {
            echo 'Registrarse';
        }
        ?>

        </a>
</div>