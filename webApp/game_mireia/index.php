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

<!-- Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">
<!-- Stylesheets -->
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
            <div id="time">00:00</div>
            <p>Puntos: 0</p>
            <img class="speak sp1" data-text="Hola Teresa! Como va todo? Y tu família? Hemos guardado el * que nos pediste! Aquí tienes" src="img/speak.png" alt="">
            <img class="speak sp2" data-text="Hola Teresa! Felices fiestas." src="img/speak.png" alt="">
            <img class="speak sp3" data-text="Cada Navidad voy a comprar * a la tienda de Antonia. Está buenísimo pero se agota muy rápido! Suerte que siempre que se lo pido me lo guarda." src="img/speak.png" alt="">
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