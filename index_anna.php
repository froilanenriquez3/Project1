<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style-navbar.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <title>Restore</title>
</head>
<body style="background-color: #F1F9F3;">
    <?php
    require_once 'php_partials/buttons.php';
  ?>
    <!-- <div id="buttons">
        <a role="button" class="btn btn-sm" href="#">Log in</a>
        <a role="button" class="btn btn-sm" href="#">Registrarse</a>
    </div> -->


    <div class="wrapper">
        <?php
            require_once './php_partials/navbar.php';
        ?>
        <!-- <div class="sidebar"> -->
            <!-- <h2>LOGO</h2> -->
            <!-- <ul> -->
                <!-- RECOMERÇEM -->
                <!-- <li><a href="#"><img src="./media/img/game-icon.png" width="50px"><p>Recomerçem</p></a></li>  -->
                <!-- GAMES -->
                <!-- <li><a href="#"><img src="./media/img/game.png" width="60px"><p>Juegos</p></a></li>  -->
                <!-- PUNTOS Y PROMOCIONES -->
                <!-- <li><a href="#"><img src="./media/img/promociones-relleno.png" width="50px"><p>Puntos y Promociones</p></a></li> -->
                <!-- SOBRE NOSOTRES -->
                <!-- <li><a href="#"><img src="./media/img/aboutUs.png" width="50px"><p>Sobre Nosotres</p></a></li> -->
                <!-- ADMINISTRADOR -->
                <!-- <li><a href="php_views/administration.php"><img src="./media/img/admin.png" width="50px"><p>Administración</p></a></li> -->

            <!-- </ul>  -->

            <!-- <div class="social_media">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div> -->
            
        <!-- </div> -->
        <div class="main_content">
           
            <div class="info">
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed nobis ut exercitationem atque accusamus sit natus officiis totam blanditiis at eum nemo, nulla et quae eius culpa eveniet voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio perferendis itaque alias sint, beatae non maiores magnam ad, veniam tenetur atque ea exercitationem earum eveniet totam ipsam magni tempora aliquid ullam possimus? Tempora nobis facere porro, praesentium magnam provident accusamus temporibus! Repellendus harum veritatis itaque molestias repudiandae ea corporis maiores non obcaecati libero, unde ipsum consequuntur aut consectetur culpa magni omnis vero odio suscipit vitae dolor quod dignissimos perferendis eos? Consequuntur!</div>
            </div>
        </div>
    </div>
    <script src="js/navbar.js"></script>
</body>
</html>