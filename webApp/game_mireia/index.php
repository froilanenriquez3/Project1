<?php
    require_once '../../php_libraries/bd.php';
    $gameInfo= selectAllFromTable("game");
    $pointsLimit= $gameInfo[3]["pointLimit"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/project1/style/style-navbar.css">
    <link rel="stylesheet" href="/project1/style/buttons.css">
    <link rel="stylesheet" href="css.css"> 
    <title>Game</title>
</head>

<body>
<?php
        include '../../php_partials/navbar.php';
        include '../../php_partials/buttons.php';

    ?>
    <div class="gameContainer">
    <div id="background">
        <!-- Instructions -->
        <div id="instructions">
            <h2>Ayuda a Teresa a acabar la compra para la comida de Navidad</h2>
            <div id="instructionsInfo">
                <img src="img/instructions1.png" alt="">
                <p>Aprieta al icono de lista cada vez que necesites consultar los ingredientes a comprar!</p>
                <img src="img/instructions2.png" alt="">
                <p>Arrastra los ingredientes correctos a la cesta de la compra!</p>
                <img src="img/instructions3.png" alt="">
                <p>Puedes mover a Teresa con las flechas de dirección para acercarte y hablar con las
                    personas! Aprieta el símbolo que aparecerá al acercarte a ellas.</p>

                <img src="img/plus.png" alt="">
                <p>Por cada ingrediente correcto ganarás <span id="pointsForObject"><?php echo round($pointsLimit/8, 0, PHP_ROUND_HALF_DOWN) ?></span> puntos.</p>
                <img src="img/minus.png" alt="">
                <p>Si te equivocas perderás <span id="pointsRest"><?php echo round(($pointsLimit/8)/2, 0, PHP_ROUND_HALF_DOWN)?></span> puntos.</p>
            </div>
            <div class="play">
                <h4>Máxima puntuación: <span><?php echo $pointsLimit ?></span></h4>
                <div>
                <h3>JUEGA</h3>
                <img src="img/playGame.png" alt="">
            </div>
            </div>
        </div>

        <!-- Game -->
        <div id="interior">
            <img src="img/background.png" id="gameBack" alt="imageback">
            <img id="list" src="img/list.png" alt="">
            <div class="divList">
                <ul></ul>
            </div>
            <img src="img/Shop.png" id="shop" alt="shop">
            <div id="time"></div>
            <p>Puntos: 0</p>
            <img id="speak" src="img/speak.png" alt="">
            <div id="text">
                <img onclick="closeText()" src="img/cross.png">
                <div></div>
            </div>
            <img id="basket" src="img/basket.png" alt="">
            <img id="lady" src="img/ladyLeft.png" alt="">
        </div>

        <!-- After Game -->
        <div id="afterGame">
            <h1></h1>
            <h3>Quieres canjear tus puntos?</h3>
            <form action="" method="POST">
            <button class="btn">Canjear</button>
            <input hidden value="4" type="number">
            </form>
            <div id="replay">
                <img src="img/Refresh.png" alt="">
                <h2>Volver a jugar</h2>
            </div>
        </div>
    </div>
    </div>
    <script src="/project1/js/navbar.js"></script>
    <script src="js.js"></script>
</body>

</html>