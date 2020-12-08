
<div class="sidebar">
    <h2>LOGO</h2>
    <ul>
        <!-- RECOMERÇEM -->

        <li><a href="/project1/index.php/#divulgacio"><img src="/project1/media/img/home-icon.png" width="50px">
            <p>Recomerçem</p>
            </a>
        </li>
        <!-- GAMES -->
        <li><a href="/project1/php_views/games.php"><img src="/project1/media/img/game.png" width="50px">
                <p>Juegos</p>
            </a>
        </li>
        <!-- PUNTOS Y PROMOCIONES -->
        <li><a href="/project1/php_views/promotions.php"><img src="/project1/media/img/promociones-relleno.png" width="50px">
                <p>Puntos y Promociones</p>
            </a></li>
        <!-- SOBRE NOSOTRES -->
        <li><a href="/project1/index.php/#aboutUs"><img src="/project1/media/img/aboutUs.png" width="50px">
                <p>Sobre Nosotres</p>
            </a>
        </li>
        <?php if(isset($_SESSION['user'])){
            if($_SESSION['user']['isAdmin'] == 1){?>

            <!-- ADMINISTRADOR -->
        <li><a href="/project1/php_views/administration.php"><img src="/project1/media/img/admin.png" width="50px">
                <p>Administración</p>
            </a>
        </li>
          <?php  }
        } ?>
        
    </ul>

    <!-- <div class="social_media">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div> -->

</div>