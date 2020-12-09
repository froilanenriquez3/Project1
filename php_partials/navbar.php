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
                <p>Juegos</p>
            </a></li>
=======

        <li><a href="/project1/index.php/#divulgacio"><div><p>Recomerçem</p></div><img src="/project1/media/img/home-icon.png" width="50px">
            
            </a>
        </li>
        <!-- GAMES -->
        <li><a href="/project1/php_views/games.php"><div><p>Juegos</p></div><img src="/project1/media/img/game.png" width="50px">
                
            </a>
        </li>
>>>>>>> 6995cfd7c5a2f349657c6b3e4e2edb278f4af7f6
        <!-- PUNTOS Y PROMOCIONES -->
        <li><a href="/project1/php_views/promotions.php"><div><p>Puntos y Promociones</p></div><img src="/project1/media/img/promociones-relleno.png" width="50px">
            </a></li>
        <!-- SOBRE NOSOTRES -->
<<<<<<< HEAD
        <li><a href="#"><img src="/project1/media/img/aboutUs.png" width="50px">
                <p>Sobre Nosotres</p>
            </a></li>
        <!-- ADMINISTRADOR -->
        <li><a href="/project1/php_views/administration.php"><img src="/project1/media/img/admin.png" width="50px">
                <p>Administración</p>
            </a></li>

=======
        <li><a href="/project1/index.php/#aboutUs"><div><p>Sobre Nosotres</p></div><img src="/project1/media/img/aboutUs.png" width="50px">
            </a>
        </li>
        <?php if(isset($_SESSION['user'])){
            if($_SESSION['user']['isAdmin'] == 1){?>

            <!-- ADMINISTRADOR -->
        <li><a href="/project1/php_views/administration.php"><div><p>Administración</p></div><img src="/project1/media/img/admin.png" width="50px">

            </a>
        </li>
          <?php  }
        } ?>
        
>>>>>>> 6995cfd7c5a2f349657c6b3e4e2edb278f4af7f6
    </ul>

    <!-- <div class="social_media">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div> -->

</div>