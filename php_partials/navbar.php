
<div class="sidebar">
    <h2>LOGO</h2>
    <ul>
        <!-- RECOMERÇEM -->

        <li><a href="/project1/index.php/#divulgacio"><div><p>Recomerçem</p></div><img src="/project1/media/img/home-icon.png" width="50px">
            
            </a>
        </li>
        <!-- GAMES -->
        <li><a href="/project1/php_views/games.php"><div><p>Juegos</p></div><img src="/project1/media/img/game.png" width="50px">
                
            </a>
        </li>
        <!-- PUNTOS Y PROMOCIONES -->
        <li><a href="/project1/php_views/promotions.php"><div><p>Puntos y Promociones</p></div><img src="/project1/media/img/promociones-relleno.png" width="50px">
            </a></li>
        <!-- SOBRE NOSOTRES -->
        <li><a href="/project1/index.php/#aboutUs"><div><p>Sobre Nosotres</p></div><img src="/project1/media/img/aboutUs.png" width="50px">
            </a>
        </li>
        <?php if($user_set){
            if($_SESSION['user']['isAdmin'] == 1){?>

            <!-- ADMINISTRADOR -->
        <li><a href="/project1/php_views/administration.php"><div><p>Administración</p></div><img src="/project1/media/img/admin.png" width="50px">
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