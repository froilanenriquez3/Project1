<?php 
  require_once '../php_libraries/bd.php';
  $game_info1 = selectUserGameInfo($_SESSION['user']['userid'],1);
  $game_info2 = selectUserGameInfo($_SESSION['user']['userid'],2);
  $game_info3 = selectUserGameInfo($_SESSION['user']['userid'],3);
  $game_info4 = selectUserGameInfo($_SESSION['user']['userid'],4);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recomençem-Jocs</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
  integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <link rel="stylesheet" href="/project1/style/style-navbar.css">
  <link rel="stylesheet" href="/project1/style/buttons.css">
  <link rel="stylesheet" href="/project1/style/games.css">

  <!-- FONT MONTSERRAT -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">    

  <!-- FONT OWSWALD BOLD -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">


</head>
<body>
<?php   
    require_once '../php_partials/navbar.php';
    require_once '../php_partials/buttons.php';
?>  


<div class="container-fluid">
<div class="row">
  <div class="col-lg-6 pt-2 pb-2">
    <a href="../webApp/game_anna/index.html">
  <div class="card mx-auto">
    <div class="card-body">
      <h5 class="card-title">Juego 1</h5>
    </div>
    <img src="../media/img/game4screenshot.png" class="card-img-bottom h-80" alt="game1" id="game_mireia">
  </div>
    </a>
  </div>

  <div class="col-lg-6 pt-2 pb-2  <?php if($game_info1['pointSave'] == 0){ echo "locked";}?> " id="game_froilan">
    <a href="../webApp/game_froilan/index.php">
    <div class="card mx-auto">
      <div class="card-body">
        <h5 class="card-title">Juego 2</h5>
    
      </div>
      <img src="../media/img/game2screenshot.png" class="card-img-bottom h-80" alt="game2">
    </div>
    </a>
  </div>
</div>

<div class="row">

    <div class="col-lg-6 pt-2 pb-2 <?php if($game_info2['pointSave'] == 0){ echo "locked";}?>" id="game_alex">
      <a href="../webApp/game_alex/index.html">
  <div class="card mx-auto">
    <div class="card-body">
      <h5 class="card-title">Juego 3</h5>
    </div>
    <img src="../media/img/game4screenshot.png" class="card-img-bottom h-80" alt="game3">
  </div>
      </a>
  </div>

  <div class="col-lg-6 pt-2 pb-2 <?php if($game_info3['pointSave'] == 0){ echo "locked";}?>" id="game_mireia">
    <a href="../webApp/game_mireia/index.php">
    <div class="card mx-auto">
    <div class="card-body">
      <h5 class="card-title">Juego 4</h5>
      </div>
      <img src="../media/img/game4screenshot.png" class="card-img-bottom h-80" alt="game4">
    </div>
    </a>
  </div>

</div>

</div>
<script src="../js/navbar.js"></script>
</body>
</html>
 -->