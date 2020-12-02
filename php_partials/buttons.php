<div id="buttons">
    <a role="button" class="btn btn-sm" href="/project1/php_views/login.php">
        <?php if(isset($_SESSION['user'])){echo "Log out";} else{echo "Log in";}?>
    </a>
    <?php if(!isset($_SESSION['user'])){?>
        <a role="button" class="btn btn-sm" href="/project1/php_views/signup.php">Registrarse</a>
    <?php }?>
</div>