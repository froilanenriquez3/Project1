
<div class="sidebar">
    <h2>LOGO</h2>
    <ul>
        <!-- RECOMERÇEM -->
<<<<<<< HEAD
        <li><a href="#"><img src="/project1/media/img/game-icon.png" width="50px">
                <p>Recomerçem</p>
            </a></li>
        <!-- GAMES -->
        <li><a href="#"><img src="/project1/media/img/game.png" width="60px">
=======

        <li><a href="/project1/index.php/#divulgacio"><img src="/project1/media/img/home-icon.png" width="50px">
            <p>Recomerçem</p>
            </a>
        </li>
        <!-- GAMES -->
        <li><a href="/project1/php_views/games.php"><img src="/project1/media/img/game.png" width="50px">
>>>>>>> 416453652ecc64bf07267e8d69d6d947736dd987
                <p>Juegos</p>
            </a>
        </li>
        <!-- PUNTOS Y PROMOCIONES -->
        <li><a href="/project1/php_views/promotions.php"><img src="/project1/media/img/promociones-relleno.png" width="50px">
                <p>Puntos y Promociones</p>
            </a></li>
        <!-- SOBRE NOSOTRES -->
<<<<<<< HEAD
        <li><a href="#"><img src="/project1/media/img/aboutUs.png" width="50px">
=======
        <li><a href="/project1/index.php/#aboutUs"><img src="/project1/media/img/aboutUs.png" width="50px">
>>>>>>> 416453652ecc64bf07267e8d69d6d947736dd987
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