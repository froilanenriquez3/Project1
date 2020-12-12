<?php
require_once '../php_libraries/bd.php';

// echo $_SERVER['HTTP_REFERER'];
// echo "<br>";
// echo $_SESSION['url'];

$all_users = selectAllFromTable('user');
$all_promos = selectAllFromTable('promotion');
$all_games = selectAllFromTable('game');

//$_SESSION['user']['isAdmin'] = 1; // REMOVE ME Setting user to admin
//Checking if user is an admin
if ($_SESSION['user']['isAdmin'] == 0) {
    header("Location: ../index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">        <link rel="stylesheet" href="../style/style-navbar.css">
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
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne"  aria-controls="collapseOne">
                                        Mantenimiento de administradores
                                    </button>
                                </h2>
                            </div>
                            
                            <div id="collapseOne" class="collapse  <?php 
                                        if (isset($_SESSION['url']) && ($_SESSION['url'] == 'admin')){
                                            echo 'show';
                                        }
                                    ?> " aria-labelledby="headingOne" data-parent="#admin-accordion">
                                <div class="card-body">
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
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-controls="collapseTwo">
                                    Mantener usuarios
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseTwo" class="collapse   <?php 
                                        if (isset($_SESSION['url']) && ($_SESSION['url'] == '../php_controllers/user_controller.php'  || $_SESSION['url'] == '../php_controllers/user_search.php' )){
                                            echo 'show';
                                        }
                                    ?> " aria-labelledby="headingTwo" data-parent="#admin-accordion">
                                <div class="card-body">

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
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree"  aria-controls="collapseThree">
                                    Mantener promociones
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseThree" class="collapse  <?php 
                                        if (isset($_SESSION['url']) && ($_SESSION['url'] == '../php_controllers/promo_controller.php' || $_SESSION['url'] == '../php_controllers/promo_search.php')){
                                            echo 'show';
                                        } 
                                    ?>" aria-labelledby="headingThree" data-parent="#admin-accordion">
                                <div class="card-body">
                                    <form action="../php_controllers/promo_search.php" method="POST">
                                        <label for="promosearch">Search for promo by name</label>
                                        <div class="form-group row">
                                            <input type="text" name="promosearch" id="promosearch" class="col-4 form-control ml-2">
                                            <button type="submit" class="btn ">Search</button>
                                        </div>
                                    </form>

                                    <form action="../php_controllers/promo_search.php" method="POST">
                                        <button type="submit" class="btn m-2" id="see_all_promos" name="see_all_promos">See All Promotions</button>
                                    </form>

                                    <?php 
                                    if(isset($_SESSION['result_promo'])){
                                        $promo = $_SESSION['result_promo'];

                                    ?> 

                                        <div class="card col-12">
                                            <form enctype="multipart/form-data" action="../php_controllers/promo_controller.php" method="post">
                                                <div class="card-body">
                                                    <p><?= "Promo ID-" . $promo['idpromotion'] . ": " . $promo['name'] ?></p>

                                                    <div class="form-group row">
                                                        <label class="col-2" for="modpromoname">Name</label>
                                                        <input class="col-10 form-control" type="text" id="modpromoname" name="promoname" value="<?= $promo['name'] ?>" maxlength="45">
                                                    </div>

                                                    <div class="form-group row">
                                                        <label class="col-2" for="modpromodesc">Description</label>
                                                        <input class="col-10 form-control" type="text" id="modpromodesc" name="promodesc" value="<?= $promo['promo_desc'] ?>" maxlength="45">
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-2" for="modpromocost">Cost</label>
                                                        <input class="col-10 form-control" type="number" id="modpromocost" name="promocost" min="0" value="<?= $promo['pointCost'] ?>">
                                                    </div>
                                                    <div class="form-group row">
                                                        <label class="col-2" for="modstoreid">Store ID</label>
                                                        <input class="col-10 form-control" type="number" id="modstoreid" name="storeid" min="1" value="<?= $promo['store_idstore'] ?>">
                                                    </div>

                                                    <div class="form-group row">
                                                    <label class="col-2" for="image">Image</label>
                                                        <div class="col-10 custom-file">
                                                            <label class="custom-file-label" for="modImage">Select file</label>
                                                            <input class="custom-file-input" type="file" id="modImage" name="modImage">
                                                        </div>
                                                    </div>


                                                    <button type="submit" id="modifypromo" name="modifypromo" class="btn m-2">Save changes</button>

                                                    <input type="number" value=<?= $promo['idpromotion'] ?> style="display:none" id="promoid" name="promoid">
                                                    <button type="submit" name="deletepromo" id="deletepromo" class="btn">Delete promo</button>
                                                </div>
                                            </form>
                                        </div>
                                    <?php }

                                    if (isset($_SESSION['no_promo_results']) && isset($_SESSION['promosearch'])) {
                                        echo "<p class='m-5'>There are no promotions with the name " . $_SESSION['promosearch'] . ".</p> ";
                                    }
                                    unset($_SESSION['result_promo']);
                                    unset($_SESSION['no_promo_results'])
                                    ?>

                                    <div class="row d-flex align-items-stretch ">

                                        <?php
                                        if (empty($all_promos)) {
                                            echo " <p class='m-3'>There are no promotions.</p>";
                                        }

                                        if(isset($_SESSION['see_all_promos'])){

                                        foreach ($all_promos as $promo) { ?>

                                            <div class="card col-12">
                                                <form enctype="multipart/form-data" action="../php_controllers/promo_controller.php" method="post">
                                                    <div class="card-body">
                                                        <p><?= "Promo ID-" . $promo['idpromotion'] . ": " . $promo['name'] ?></p>


                                                        <div class="form-group row">
                                                            <label class="col-2" for="modpromoname">Name</label>
                                                            <input class="col-10 form-control" type="text" id="modpromoname" name="promoname" value="<?= $promo['name'] ?>" maxlength="45">
                                                        </div>

                                                        <div class="form-group row">
                                                            <label class="col-2" for="modpromodesc">Description</label>
                                                            <input class="col-10 form-control" type="text" id="modpromodesc" name="promodesc" value="<?= $promo['promo_desc'] ?>" maxlength="45">
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-2" for="modpromocost">Cost</label>
                                                            <input class="col-10 form-control" type="number" id="modpromocost" name="promocost" min="0" value="<?= $promo['pointCost'] ?>">
                                                        </div>
                                                        <div class="form-group row">
                                                            <label class="col-2" for="modstoreid">Store ID</label>
                                                            <input class="col-10 form-control" type="number" id="modstoreid" name="storeid" min="1" value="<?= $promo['store_idstore'] ?>">
                                                        </div>

                                                        <div class="form-group row">
                                                        <label class="col-2" for="image">Image</label>
                                                        <div class="col-10 custom-file">
                                                            <label class="custom-file-label" for="modImage">Select file</label>
                                                            <input class="custom-file-input" type="file" id="modImage" name="modImage">
                                                        </div>
                                                        </div>


                                                        <button type="submit" id="modifypromo" name="modifypromo" class="btn m-2">Save changes</button>

                                                        <input type="number" value=<?= $promo['idpromotion'] ?> style="display:none" id="promoid" name="promoid">
                                                        <button type="submit" name="deletepromo" id="deletepromo" class="btn">Delete promo</button>
                                                    </div>
                                                </form>

                                            </div>

                                        <?php } }
                                        unset($_SESSION['see_all_promos']);
                                        ?>
                                    </div>

                                    <div class="card col-12">
                                        <div class="card-body">
                                            <h5>New promo</h5>
                                            <form enctype="multipart/form-data" action="../php_controllers/promo_controller.php" method="post">
                                                <div class="form-group row">
                                                    <label class="col-2" for="promoname">Name</label>
                                                    <input class="col-10 form-control" type="text" id="promoname" name="promoname" maxlength="45">
                                                </div>

                                                <div class="form-group row">
                                                    <label class="col-2" for="promodesc">Description</label>
                                                    <input class="col-10 form-control" type="text" id="promodesc" name="promodesc" maxlength="45">
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-2" for="promocost">Cost</label>
                                                    <input class="col-10 form-control" type="number" id="promocost" name="promocost" min="0">
                                                </div>
                                                <div class="form-group row">
                                                    <label class="col-2" for="storeid">Store ID</label>
                                                    <input class="col-10 form-control" type="number" id="storeid" name="storeid" min="1">
                                                </div>


                                                <div class="form-group row">
                                                    <label class="col-2" for="image">Image</label>
                                                        <div class="col-10 custom-file">
                                                            <label class="custom-file-label" for="image">Select file</label>
                                                            <input class="custom-file-input" type="file" id="image" name="image">
                                                        </div>
                                                    </div>

                                                <button type="submit" id="addpromo" name="addpromo" class="btn m-2">Add promo</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- CUARTO ITEM -->
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-controls="collapseFour">
                                    Mantener puntos
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseFour" class="collapse  <?php 
                                        if (isset($_SESSION['url']) && $_SESSION['url'] == '../php_controllers/game_controller.php'){
                                            echo 'show';
                                        } 
                                    ?>" aria-labelledby="headingFour" data-parent="#admin-accordion">
                                <div class="card-body">                
                                    <?php foreach ($all_games as $game) { ?>
                                        <div class="card">
                                            <div class="card-body">
                                                <p><?= "Game ID-" . $game['idgame'] . ": " . $game['name'] ?></p>
                                                <form action="../php_controllers/game_controller.php" method="post">

                                                    <div class="form-group row">

                                                        <label class="col-2" for="pointlimit">Maximum points</label>
                                                        <input class="col-9 form-control" type="number" id="pointlimit" name="pointlimit" value="<?= $game['pointLimit'] ?>" min="0" step="100">
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
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</html>

