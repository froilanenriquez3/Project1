<?php
  require_once '../../php_libraries/bd.php';
  require_once '../../php_partials/redirect.php';
  $games= selectAllFromTable("game");
  $game_info1 = selectUserGameInfo($_SESSION['user']['userid'], 1);
  $limit = $games['0']['pointLimit'];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- STYLESHEETS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/project1/style/style-navbar.css">
    <link rel="stylesheet" href="/project1/style/buttons.css">
    <link rel="stylesheet" href="style.css">
    
    <!-- FONT MONTSERRAT -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">

    <!-- FONT OWSWALD BOLD -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">

    <title>Monedas al vuelo</title>
  </head>


  <body>

    <?php 
      include '../../php_partials/navbar.php';
      include '../../php_partials/buttons.php';
    ?> 

    <div id="container">
      <div id="game">
        <!-- INSTRUCCIONES -->
        <div id="instructions">
          <h3>¡Ayúdame a conseguir dinero para poder comprar todo lo que necesito para celebrar esta Navidad!</h3>
          <div class="container-fluid" id="instructionsList">
            <div class="row">
              <div class="col-1">
                <img src="img/list.png" width= "20px" alt="" >
              </div>
            
              <div class="col-11">
                <p>Tienes que recoger el máximo número de monedas que puedas durante 1 minuto. Por cada moneda que consigas
                  recibirás 30 puntos.</p>
              </div>
            </div>  

            <div class="row">
              <div class="col-1">
                <img src="img/list.png" width= "20px" alt="">
              </div>

              <div class="col-11">
                <p>Pulsa la barra espaciadora para saltar.</p>
              </div>
            </div>  

            <div class="row">
              <div class="col-1">
                <img src="img/list.png" width= "20px" alt="">
              </div>

              <div class="col-11">
                <p>Puedes moverte con las flechas de izquierda y derecha.</p>
              </div>
            </div>  

            <div class="row">
              <div class="col-1">
                <img src="img/list.png" width= "20px" alt="">
              </div>

              <div class="col-11">
                <p>Máxima puntuación: <span><?php echo $limit ?></span></p>
              </div>
            </div>  
          </div>

          <!-- BOTÓN JUGAR -->
          <button id="play" onclick="startGame()">
            <img src="./img/jugar2.png" width="">
          </button>  
        </div>

        <!-- JUEGO -->
        <div id="gamePlay">
          <div id="background">
            <div id="image-data">
              <img src="img/bwhite.png" alt="fondo" id="data">
            </div>  

            <img id="character" src="img/abuela-right-mario.png" alt="">
            <img id="cloud" src="img/nube.png" alt="">
            <img id="cloud2" src="img/nube.png" alt="">
            <img id="cloud3" src="img/nube.png" alt="">
            <img id="coin" src="img/coin.png" alt="">
            <div class="info">
              <p class="points" id="counter" data-points=0 data-limit = "<?=$limit?>">Puntos: 0</p>
              <div id="time"></div>
            </div>          
          </div>  
        </div>

        <!-- AL ACABAR EL JUEGO -->
        <div id="finishGame">
          <p>¡Genial! Has conseguido <span id="accumulatedPoints"></span>.</p>
          <p>¿Quieres canjear tus puntos o prefieres volver a jugar para conseguir más?</p>
          <div class="container-fluid" id="gameOverInfo">
            <div class="row">
              <div class="col-1">
                <img src="img/abuela-final.png" width= "100px" id="abuela-final" alt="">
              </div>
            
              <div class="col-11">
                <p>Recuerda que podrás canjear tus puntos una sola vez</p>
              </div>
            </div>  
          <!-- <img src="img/abuela-final.png" id="abuela-final" width="80px">
          <p class="remember">Recuerda que podrás canjear tus puntos una sola vez</p> -->
          <div class="final-buttons">
            <button id="replay" onclick="startGame()">
              <img src="./img/jugar.png" width="80px">
            </button>  

            <button id="redeem" onclick="savePoints()" <?php if($game_info1['pointSave'] == 1){ echo "disabled";}?>> 
              <img src="./img/canjear.png" width="100px">
            </button>  
          </div>  

          <form action="../../php_controllers/save_points_controller.php" method="POST" id="gameForm">
            <input type="number" style="display:none" id="finalPoints" name="finalPoints">
            <input type="number" style="display:none" id="gameId" name="gameId" value="1">
          </form>
          
        </div>
      </div>  
    </div>  
  </body>
<script src="./js.js"></script>
</html>
