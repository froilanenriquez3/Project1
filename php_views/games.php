<?php
require_once '../php_libraries/bd.php';
require_once '../php_partials/redirect.php';

$game_info1 = selectUserGameInfo($_SESSION['user']['userid'], 1);
$game_info2 = selectUserGameInfo($_SESSION['user']['userid'], 2);
$game_info3 = selectUserGameInfo($_SESSION['user']['userid'], 3);
$game_info4 = selectUserGameInfo($_SESSION['user']['userid'], 4);

$_SESSION['user'] = selectUserById($_SESSION['user']['userid']);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recomerçem-Jocs</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
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
      <div class="col-lg-6 pt-2 pb-2 d-flex justify-content-end">
        <a href="../webApp/game_anna/index.php">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Monedas al vuelo</h5>
              <img src="../media/img/game1screenshot.png" class="card-img-bottom" alt="game1">
            </div>
          </div>
        </a>
      </div>

      <div class="col-lg-6 pt-2 pb-2 d-flex justify-content-start <?php if ($game_info1['pointSave'] == 0) {
                                                              echo "locked";
                                                            } ?>">
        <a href="../webApp/game_froilan/index.php">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Probador Fantástico</h5>
              <div class="lockImg">
                <img src="../media/img/game2screenshot.png" class="card-img-bottom" alt="game2">
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
    <div class="row">

      <div class="col-lg-6 pt-2 pb-2 d-flex justify-content-end <?php if ($game_info2['pointSave'] == 0) {
                                                                  echo "locked";
                                                                } ?>">
        <a href="../webApp/game_alex/index.php">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Canta con Teresa</h5>
              <div class="lockImg">
                <img src="../media/img/game3screenshot.png" class="card-img-bottom" alt="game3">
              </div>
            </div>
          </div>
        </a>
      </div>


      <div class="col-lg-6 pt-2 pb-2 d-flex justify-content-start <?php if ($game_info3['pointSave'] == 0) {
                                                                    echo "locked";
                                                                  } ?>">
        <a href="../webApp/game_mireia/index.php">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Compras con prisas</h5>
              <div class="lockImg">
                <img src="../media/img/game4screenshot.png" class="card-img-bottom" alt="game4">
              </div>
            </div>
          </div>
        </a>
      </div>

    </div>
    <div class="row">
      <div class="col-12 statsDiv">
    <div id="stats">
      <button class="btn btn-sm" id="statsButton" type="button">
        <a href="./gamestats.php">Statistics</a>
      </button>
      </div>
    </div>
    </div>
  </div>
  <script src="../js/navbar.js"></script>
</body>

</html>