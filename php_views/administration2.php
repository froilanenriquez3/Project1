<?php
require_once '../php_libraries/bd.php';

$all_users = selectAllFromTable('user');
$all_promos = selectAllFromTable('promotion');
$all_games = selectAllFromTable('game');

//$_SESSION['user']['isAdmin'] = 1; // REMOVE ME Setting user to admin
//Checking if user is an admin
if ($_SESSION['user']['isAdmin'] == 0) {
    header("Location: ../index_anna.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">        <link rel="stylesheet" href="../style/all.min.css">
        <link rel="stylesheet" href="../style/style-navbar.css">
        <link rel="stylesheet" href="../style/buttons.css">
        <link rel="stylesheet" href="../style/administration2.css">
        <!-- <script src="../js/administration2.js"></script> -->

        <!-- FONT MONTSERRAT -->
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">    

        <title>Restore</title>
    </head>

    <body>

    <?php
        require_once "../php_partials/buttons.php";
        require_once "../php_partials/navbar.php";

    ?>
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <h1>Administración</h1>
                </div>

                <div class="card-body">
                <p>Aquí puedes mantener los administradores, usuarios, promociones y puntos</p>

                    <div class="accordion" id="admin-accordion">
                        <!-- PRIMER ITEM -->
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Mantenimiento de administradores
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#admin-accordion">
                                <div class="accordion-body">
                                    <div class="row d-flex align-items-stretch ">
                                        <?php

                                        $admins = [];
                                        foreach ($all_users as $user) {

                                            if ($user['isAdmin'] == 1) {
                                                array_push($admins, $user);
                                            }
                                        }

                                        if (empty($admins)) {
                                            echo "<p class='m-5'>No hay adminstradores.</p> ";
                                        }

                                        foreach ($admins as $admin) {
                                        ?>
                                            <!-- Card of admin -->
                                            <div class="card col-3 mb-1">
                                                <div class="card-body p-2">
                                                    <p><?= "Usuario ID-" . $admin['userid'] . ": " . $admin['username'] ?></p>
                                                    <form action="../php_controllers/user_controller.php" method="post">
                                                        <input name="adminid" id="adminid" type="text" value=" <?= $admin['userid'] ?> " style="display:none">
                                                        <button type="submit" class="btn m-1" id="removeadmin" name="removeadmin">Eliminar administrador</button>
                                                    </form>
                                                </div>

                                            </div>

                                        <?php } ?>
                                    </div>

                                    <div class="row d-flex align-items-stretch ">
                                        <div class="card col-4 mt-2">
                                            <div class="card-body">
                                                <p class="">Dar privilegios de usuario por ID</p>
                                                <form class="" action="../php_controllers/user_controller.php" method="post">
                                                    <div class="form-group row ">
                                                        <label class="m-1" for="newadmin">ID</label>
                                                        <input class="m-1" type="number" name="newadmin" id="newadmin" min="1">
                                                        <button class="btn" type="submit" id="addadmin" name="addadmin">Añadir administrador</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- SEGUNDO ITEM -->
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Mantener usuarios
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#admin-accordion">
                                <div class="accordion-body">

                                    <!-- Search user by their username-->
                                    <form action="../php_controllers/user_search.php" method="POST">
                                        <label for="usersearch">Buscar usuario por nombre</label>
                                        <div class="form-group row">
                                            <input type="text" name="usersearch" id="usersearch" class="col-4 form-control ml-2">
                                            <button type="submit" class="btn ">Buscar</button>
                                        </div>
                                    </form>

                                    <form action="../php_controllers/user_search.php" method="POST">
                                        <button type="submit" class="btn m-2" id="see_all_users" name="see_all_users">Ver todos los usuarios</button>
                                    </form>


                                    <?php

                                    if (empty($all_users)) {
                                        echo "<p class='m-5'>No hay usuarios.</p> ";
                                    }

                                    if (isset($_SESSION['result_user'])) {
                                        $user = $_SESSION['result_user']; ?>
                                        <div class="card">
                                            <div class="card-body">
                                                <form enctype="multipart/form-data" action="../php_controllers/user_controller.php" method="post">
                                                    <p><?= "User ID-" . $user['userid'] ?></p>
                                                    <input class="m-1" type="number" name="userid" id="userid" min="0" style="display:none" value="<?= $user['userid'] ?>">

                                                    <div class="form-group row">
                                                        <label class="col-2" for="username">Nombre de usuario</label>
                                                        <input class="col-10 form-control" type="text" id="username" name="username" value="<?= $user['username'] ?>">
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-2" for="password">Contraseña</label>
                                                        <input class="col-10 form-control" type="password" id="password" name="password" minlength="8" value="<?= $user['password'] ?>" required>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="points" class="col-2">Puntos</label>
                                                        <input type="number" class="col-10 form-control" id="points" name="points" value="<?= $user['points'] ?>" min="0">

                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="email" class="col-2">Correo electrónico</label>
                                                        <input type="text" class="col-10 form-control" id="email" name="email" value="<?= $user['email'] ?>">
                                                    </div>

                                                    <div class="form-group row">

                                                        <label class="col-2 form-check-label">Promociones</label>
                                                        <div class="col-10">
                                                            <?php

                                                            $user_promos = selectUserPromos($user['userid']);

                                                            $counter = 0;
                                                            foreach ($all_promos as $promo) {

                                                            ?>

                                                                <div class="custom-checkbox form-check form-check-inline">
                                                                    <input class="form-check-input" type="checkbox" id="promotion<?= $counter + 1 ?>" name="promotions[]" value="<?php echo $promo['idpromotion'] ?>" <?php
                                                                        $same = false;

                                                                        foreach ($user_promos as $user_promo) {
                                                                            if ($user_promo['name'] == $promo['name']) {
                                                                                $same = true;
                                                                            }
                                                                        }
                                                                        if ($same) {
                                                                            echo "checked";
                                                                        }

                                                                        ?>>

                                                                    <label class="form-check-label" for="type<?= $counter + 1 ?>"> <?= $promo['name'] ?></label>
                                                                </div>

                                                            <?php
                                                            }
                                                            ?>

                                                        </div>

                                                    </div>

                                                    <button type="submit" class="btn m-2" name="modifyuser" id="modifyuser">Guardar</button>
                                                    <button type="submit" class="btn m-2" name="deleteuser" id="deleteuser">Eliminar</button>
                                                </form>

                                            </div>
                                        </div>


                                    <?php }

                                    if (isset($_SESSION['no_user_results']) && isset($_SESSION['usersearch'])) {
                                        echo "<p class='m-5'>No hay usuarios con este nombre " . $_SESSION['usersearch'] . "</p> ";
                                    }
                                    unset($_SESSION['result_user']);
                                    unset($_SESSION['no_user_results'])

                                    ?>

                                    <!-- See all the users-->

                                    <?php
                                    if(isset($_SESSION['see_all_users'])){

                                    foreach ($all_users as $user) { ?>
                                        <div class="card">
                                            <div class="card-body">
                                                <form enctype="multipart/form-data" action="../php_controllers/user_controller.php" method="post">
                                                    <p><?= "User ID-" . $user['userid'] ?></p>
                                                    <input class="m-1" type="number" name="userid" id="userid" min="0" style="display:none" value="<?= $user['userid'] ?>">
                                                    <!-- User -->
                                                    <div class="form-group row">
                                                        <label class="col-2" for="username">Nombre de usuario</label>
                                                        <input class="col-10 form-control" type="text" id="username" name="username" value="<?= $user['username'] ?>">
                                                    </div>
                                                    <!-- Password -->
                                                    <div class="form-group row">
                                                        <label class="col-2" for="password">Contraseña</label>
                                                        <input class="col-10 form-control" type="password" id="password" name="password" minlength="8" value="<?= $user['password'] ?>" required>
                                                    </div>
                                                    <!-- Points -->
                                                    <div class="form-group row">
                                                        <label for="points" class="col-2">Puntos</label>
                                                        <input type="number" class="col-10 form-control" id="points" name="points" value="<?= $user['points'] ?>" min="0">

                                                    </div>
                                                    <!-- Email -->
                                                    <div class="form-group row">
                                                        <label for="email" class="col-2">Correo electrónico</label>
                                                        <input type="text" class="col-10 form-control" id="email" name="email" value="<?= $user['email'] ?>">
                                                    </div>


                                                    <!-- Promotions -->
                                                    <div class="form-group row">

                                                        <label class="col-2 form-check-label">Promociones</label>
                                                        <div class="col-10">
                                                            <?php

                                                            $user_promos = selectUserPromos($user['userid']);

                                                            $counter = 0;
                                                            foreach ($all_promos as $promo) {

                                                            ?>

                                                                <div class="custom-checkbox form-check form-check-inline">
                                                                    <input class="form-check-input" type="checkbox" id="promotion<?= $counter + 1 ?>" name="promotions[]" value="<?php echo $promo['idpromotion'] ?>" <?php
                                                                        $same = false;

                                                                        foreach ($user_promos as $user_promo) {
                                                                            if ($user_promo['name'] == $promo['name']) {
                                                                                $same = true;
                                                                            }
                                                                        }
                                                                        if ($same) {
                                                                            echo "checked";
                                                                        }

                                                                        ?>>

                                                                    <label class="form-check-label" for="type<?= $counter + 1 ?>"> <?= $promo['name'] ?></label>
                                                                </div>

                                                            <?php
                                                                $counter++;
                                                            }

                                                            ?>

                                                        </div>

                                                    </div>

                                                    <button type="submit" class="btn m-2" name="modifyuser" id="modifyuser">Guardar</button>
                                                    <button type="submit" class="btn m-2" name="deleteuser" id="deleteuser">Eliminar</button>
                                                </form>

                                            </div>
                                        </div>


                                    <?php }}
                                        unset($_SESSION['see_all_users']);
                                    ?>

                                    <button class="btn m-2" name="adduser" id="adduser">
                                        <a href="signup.php">Registrar nuevo usuario</a>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- TERCER ITEM -->
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Mantener promociones
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#admin-accordion">
                                <div class="accordion-body">
                                    <div class="row d-flex align-items-stretch ">

                                        <?php
                                        if (empty($all_promos)) {
                                            echo " <p cass='m-5'>No hay promociones.</p>";
                                        }

                                        foreach ($all_promos as $promo) { ?>

                                            <div class="card col-12">
                                                <form action="../php_controllers/promo_controller.php" method="post">
                                                    <div class="card-body">
                                                        <p><?= "Promo ID-" . $promo['idpromotion'] . ": " . $promo['name'] ?></p>

                                                        <div class="form-group row">
                                                            <label class="col-2" for="modpromoname">Nombre</label>
                                                            <input class="col-10 form-control" type="text" id="modpromoname" name="promoname" value="<?= $promo['name'] ?>" maxlength="45">
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-2" for="modpromodesc">Descripción</label>
                                                            <input class="col-10 form-control" type="text" id="modpromodesc" name="promodesc" value="<?= $promo['promo_desc'] ?>" maxlength="45">
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-2" for="modpromocost">Precio</label>
                                                            <input class="col-10 form-control" type="number" id="modpromocost" name="promocost" min="0" value="<?= $promo['pointCost'] ?>">
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-2" for="modstoreid">ID</label>
                                                            <input class="col-10 form-control" type="number" id="modstoreid" name="storeid" min="1" value="<?= $promo['store_idstore'] ?>">
                                                        </div>

                                                        <button type="submit" id="modifypromo" name="modifypromo" class="btn m-2">Guardar cambios</button>

                                                        <input type="number" value=<?= $promo['idpromotion'] ?> style="display:none" id="promoid" name="promoid">
                                                        <button type="submit" name="deletepromo" id="deletepromo" class="btn">Eliminar promoción</button>
                                                    </div>
                                                </form>
                                            </div>
                                        <?php } ?>
                                    </div>
                                    
                                    <div class="row ">
                                        <div class="card col-12">
                                            <div class="card-body">
                                                <h5>Nueva promoción</h5>
                                                <form action="../php_controllers/promo_controller.php" method="post">
                                                    <div class="form-group row">
                                                        <label class="col-2" for="promoname">Nombre</label>
                                                        <input class="col-10 form-control" type="text" id="promoname" name="promoname" maxlength="45">
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-2" for="promodesc">Descripción</label>
                                                        <input class="col-10 form-control" type="text" id="promodesc" name="promodesc" maxlength="45">
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-2" for="promocost">Precio</label>
                                                        <input class="col-10 form-control" type="number" id="promocost" name="promocost" min="0">
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-2" for="storeid">ID</label>
                                                        <input class="col-10 form-control" type="number" id="storeid" name="storeid" min="1">
                                                    </div>
                                                    <button type="submit" id="addpromo" name="addpromo" class="btn m-2">Añadir promoción</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- CUARTO ITEM -->
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                    Mantener puntos
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#admin-accordion">
                                <div class="accordion-body">
                                    <?php foreach ($all_games as $game) { ?>
                                        <div class="card">
                                            <div class="card-body">
                                                <p><?= "Game ID-" . $game['idgame'] . ": " . $game['name'] ?></p>
                                                <form action="../php_controllers/game_controller.php" method="post">

                                                    <div class="form-group row">

                                                        <label class="col-2" for="pointlimit">Maximum points</label>
                                                        <input class="col-9 form-control" type="number" id="pointlimit" name="pointlimit" value="<?= $game['pointLimit'] ?>" min="0">
                                                        <input type="num" id="gameid" name="gameid" value="<?= $game['idgame'] ?>" style="display:none">

                                                        <button class="col-1 btn" type="submit" id="modpoint" name="modpointlim">Save</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
</html>

