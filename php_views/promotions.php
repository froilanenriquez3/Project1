<?php

require_once '../php_libraries/bd.php';
$_SESSION['user'] = selectUserById($_SESSION['user']['userid']);

$promos = selectAllFromTable('promotion');
usort($promos, function ($item1, $item2) {
    return $item1['pointCost'] <=> $item2['pointCost'];
});
$user_promos = selectUserPromos($_SESSION['user']['userid']);
$minPrice = selectCheapestPromo();
// $user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- STYLESHEETS -->
    <link rel="stylesheet" href="../style/style-navbar.css">
    <link rel="stylesheet" href="../style/buttons.css">
    <link rel="stylesheet" href="../style/promotions.css?v=1236">

    <!-- FONTS -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">


    <title>Puntos y Promociones</title>
    <link rel="shortcut icon" type="image/png" href="/project1/media/img/logo.png" />
</head>

<body>
    <?php
    require_once '../php_partials/navbar.php';
    require_once '../php_partials/buttons.php';
    ?>
    <div class="container-fluid ">
        <div class="card ">
            <div class="card-header">
                Promociones ya canjeadas
            </div>
            <div class="card-body " id="redeemed">

                <?php
                if ($user_promos == null) {
                    echo "Aún no has canjeado ninguna promoción.";
                } else {
                    foreach ($user_promos as $promo) { ?>
                        <?php $storeName = selectStoreNameByPromoID($promo['idpromotion']); ?>
                        <div class="col-md-3 " id="<?php echo $promo['idpromotion'] ?>">
                            <div class="card mb-2 ">
                                <img class="card-img-top" src="<?php echo $promo['img']; ?>" alt="Card image cap" height=215px>
                                <div class="card-body d-flex align-items-stretch">
                                    <h4 class="card-title"><?php echo $promo['name'] ?></h4>
                                    <p class="card-text"><?= $storeName[0] ?></p>
                                    <p class="card-text"><?php echo $promo['promo_desc'] ?></p>
                                    <p class="card-text"><?= $promo['pointCost'] ?> puntos</p>
                                </div>
                            </div>
                        </div>
                <?php }
                } ?>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Promociones disponibles según tus puntos
                <p id="display_points">Puntos: <?= $_SESSION['user']['points'] ?> </p>
            </div>

            <div class="card-body" id="available">
                <div class="row d-flex align-items-stretch">

                    <?php
                    if ($_SESSION['user']['points'] < $minPrice[0]) {
                    ?> <div class="noPromo">
                            <?= "Ahora mismo no tienes ninguna promoción disponible."; ?>
                        </div>
                        <?php }
                    foreach ($promos as $promo) {
                        $storeName = selectStoreNameByPromoID($promo['idpromotion']);
                        $taken = false;
                        foreach ($user_promos as $user_promo) {
                            if ($user_promo['idpromotion'] == $promo['idpromotion']) {
                                $taken = true;
                            }
                        }
                        if ($_SESSION['user']['points'] >= $promo['pointCost'] && !$taken) {
                        ?>
                            <div class="col-md-3 " id="<?php echo $promo['idpromotion'] ?>">
                                <div class="card mb-2">
                                    <img class="card-img-top" src="<?php echo $promo['img']; ?>" alt="Card image cap" height=215px>
                                    <div class="card-body">
                                        <h4 class="card-title"><?php echo $promo['name'] ?></h4>
                                        <p class="card-text"><?= $storeName[0] ?></p>
                                        <p class="card-text"><?php echo $promo['promo_desc'] ?></p>
                                        <p class="card-text"><?= $promo['pointCost'] ?> puntos</p>
                                    </div>
                                    <div class="card-footer">
                                        <form enctype="multipart/form-data" action="../php_controllers/promopage_controller.php" method="post">
                                            <input type="number" style="display:none" name="promoid" id="promoid" value="<?php echo $promo['idpromotion'] ?>">
                                            <input type="number" id="point_cost" name="point_cost" style="display:none" value='<?= $promo['pointCost'] ?>'>
                                            <input class="btn botonPromo" type="submit" value="Canjear" name="submitpromo" id="submitpromo">
                                        </form>
                                    </div>
                                </div>
                            </div>
                        <?php
                        } elseif ($_SESSION['user']['points'] < $promo['pointCost'] && !$taken) { ?>
                            <div class="col-md-3 " id="<?php echo $promo['idpromotion'] ?>">
                                <div class="card mb-2">
                                    <div class="lockImg">
                                        <img class="card-img-top" src="<?php echo $promo['img']; ?>" alt="Card image cap" height=215px>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title"><?php echo $promo['name'] ?></h4>
                                        <p class="card-text"><?= $storeName[0] ?></p>
                                        <p class="card-text"><?php echo $promo['promo_desc'] ?></p>
                                        <p class="card-text"><?= $promo['pointCost'] ?> puntos</p>
                                    </div>
                                    <div class="card-footer">
                                        <form class="promoDisabled" enctype="multipart/form-data" action="../php_controllers/promopage_controller.php" method="post">
                                            <input type="number" style="display:none" name="promoid" id="promoid" value="<?php echo $promo['idpromotion'] ?>">
                                            <input type="number" id="point_cost" name="point_cost" style="display:none" value='<?= $promo['pointCost'] ?>'>
                                            <input class="btn botonPromo promoDisabled" type="submit" value="Canjear" name="submitpromo" id="submitpromo">
                                        </form>
                                    </div>
                                </div>
                            </div>
                        <?php } ?>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>