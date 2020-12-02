<div id="buttons">
    <a role="button" class="btn btn-sm" href="/project1/php_views/login.php">
        <?php if(isset($_SESSION['user'])){echo "Log out";} else{echo "Log in";}?>
    </a>
    <a role="button" class="btn btn-sm" href="/project1/php_views/signup.php">Registrarse</a>
</div>