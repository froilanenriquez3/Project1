<?php

require_once '../php_libraries/bd.php';

$promos = selectAllFromTable('promotion');
$user_promos = selectUserPromos($_SESSION['user']['userid']);
// $user = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../style/style-navbar.css">
    <link rel="stylesheet" href="../style/buttons.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/promotions.css">
    
    <!-- FONT MONTSERRAT -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">    


    <title>Points and Promotions</title>

</head>

<body>
    <?php
    require_once '../php_partials/navbar.php';
    require_once '../php_partials/buttons.php';
    ?>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Promociones canjeadas
            </div>
            <div class="card-body" id="redeemed">

                <?php
                foreach ($user_promos as $promo) { ?>
                    <div class="col-md-3" id="<?php echo $promo['idpromotion'] ?>">
                        <div class="card mb-2">
                            <img class="card-img-top" src="<?php echo $promo['img']; ?>" alt="Card image cap">
                            <div class="card-body">
                                <h4 class="card-title"><?php echo $promo['name'] ?></h4>
                                <p class="card-text"><?php echo $promo['promo_desc'] ?></p>
                            </div>
                        </div>
                    </div>
                <?php } ?>

            </div>
        </div>

        <div class="card">
            <div class="card-header">
                Promociones Disponibles!
            </div>
            <div class="card-body" id="available">
                <?php
                foreach ($promos as $promo) {
                    $taken = false;
                    foreach ($user_promos as $user_promo) {
                        if ($user_promo['idpromotion'] == $promo['idpromotion']) {
                            $taken = true;
                        }
                    } ?>
                    <?php
                    if ($_SESSION['user']['points'] >= $promo['pointCost'] && !$taken) {
                    ?>
                        <div class="col-md-3" id="<?php echo $promo['idpromotion'] ?>">
                            <div class="card mb-2">
                                <img class="card-img-top" src="<?php echo $promo['img']; ?>" alt="Card image cap">
                                <div class="card-body">
                                    <h4 class="card-title"><?php echo $promo['name'] ?></h4>
                                    <p class="card-text"><?php echo $promo['promo_desc'] ?></p>

                                    <form enctype="multipart/form-data" action="../php_controllers/promopage_controller.php" method="post">
                                        <input type="number" style="display:none" name="promoid" id="promoid" value="<?php echo $promo['idpromotion'] ?>">
                                        <input class="btn btn-block" type="submit" value="Canjear" name="submitpromo" id="submitpromo">
                                    </form>
                                </div>
                            </div>
                        </div>

                    <?php } ?>
                <?php } ?>
            </div>
        </div>
    </div>
    <script src=" ../js/promotions.js"> </script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>