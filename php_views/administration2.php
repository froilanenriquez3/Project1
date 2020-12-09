<?php
require_once '../php_libraries/bd.php';

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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="../style/all.min.css">
        <link rel="stylesheet" href="../style/style-navbar.css">
        <link rel="stylesheet" href="../style/buttons.css">
        <link rel="stylesheet" href="../style/administration2.css">
        <script src="../js/administration2.js"></script>

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
                    <h1>Administration</h1>
                </div>
                <div class="card-body">
                    <!-- <ul class="list-unstyled">
                        <li><a href="#adminssection">Manage admins</a></li>
                        <li><a href="#userssection">Manage users</a></li>
                        <li><a href="#promossection">Manage promos</a></li>
                        <li><a href="#pointssection">Manage points</a></li>
                    </ul> -->

                    <div class="titulo_boton">
                        Mantenimiento de administradores
                        <a style='cursor: pointer;' onClick="muestra_oculta('contenido')" title="" class="boton_mostrar">Mostrar</a>
                    </div>

                    <div id="contenido">
                        <div class="row d-flex align-items-stretch ">
                            <?php

                            $admins = [];
                            foreach ($all_users as $user) {

                                if ($user['isAdmin'] == 1) {
                                        array_push($admins, $user);
                                }
                            }

                            if (empty($admins)) {
                                echo "<p class='m-5'>There are no admins.</p> ";
                            }

                            foreach ($admins as $admin) {
                            ?>
                                <!-- Card of admin -->
                                <div class="card col-4 mb-1">
                                    <div class="card-body p-2">
                                        <p><?= "User ID-" . $admin['userid'] . ": " . $admin['username'] ?></p>
                                        <form action="../php_controllers/user_controller.php" method="post">
                                            <input name="adminid" id="adminid" type="text" value=" <?= $admin['userid'] ?> " style="display:none">
                                            <button type="submit" class="btn m-1" id="removeadmin" name="removeadmin">Remove admin</button>
                                        </form>
                                    </div>

                                </div>

                            <?php } ?>

                        </div>

                        <div class="row d-flex">
                            <div class="card col-4 mt-2">
                                <div class="card-body">
                                    <p class="">Grant user admin priveleges by ID</p>
                                    <form class="" action="../php_controllers/user_controller.php" method="post">
                                        <div class="form-group row ">
                                            <label class="m-1" for="newadmin">ID</label>
                                            <input class="m-1" type="number" name="newadmin" id="newadmin" min="1">
                                            <button class="btn" type="submit" id="addadmin" name="addadmin">Add admin</button>
                                        </div>    
                                    </form>
                                </div>
                            </div>
                        </div>               
                    </div>

                    <div class="titulo_boton2">
                        Mantenimiento de usuarios
                        <a style='cursor: pointer;' onClick="muestra_oculta2('contenido2')" title="" class="boton_mostrar2">Mostrar</a>
                    </div>

                    <div id="contenido2">
                        <div class="row d-flex">
                            <?php

                                if (empty($all_users)) {
                                    echo "<p class='m-5'>There are no users.</p> ";
                                }

                                foreach ($all_users as $user) { ?>
                                    <div class="card col-10">
                                        <div class="card-body">
                                            <form enctype="multipart/form-data" action="../php_controllers/user_controller.php" method="post">
                                                <p><?= "User ID-" . $user['userid'] ?></p>
                                                <input class="m-1" type="number" name="userid" id="userid" min="0" style="display:none" value="<?= $user['userid'] ?>">
                                                <!-- User -->
                                                <div class="form-group row">
                                                    <label class="col-2" for="username">Username</label>
                                                    <input class="col-10 form-control" type="text" id="username" name="username" value="<?= $user['username'] ?>">
                                                </div>
                                                <!-- Password -->
                                                <div class="form-group row">
                                                    <label class="col-2" for="password">Password</label>
                                                    <input class="col-10 form-control" type="password" id="password" name="password" minlength="8" value="<?= $user['password'] ?>" required>
                                                </div>
                                                <!-- Points -->
                                                <div class="form-group row">
                                                    <label for="points" class="col-2">Points</label>
                                                    <input type="number" class="col-10 form-control" id="points" name="points" value="<?= $user['points'] ?>" min="0">

                                                </div>
                                                <!-- Email -->
                                                <div class="form-group row">
                                                    <label for="email" class="col-2">Email</label>
                                                    <input type="text" class="col-10 form-control" id="email" name="email" value="<?= $user['email'] ?>">
                                                </div>

                                            
                                                <!-- Promotions -->
                                                <div class="form-group row">

                                                    <label class="col-2 form-check-label">Promotions</label>
                                                    <div class="col-10">
                                                        <?php

                                                        $user_promos = selectUserPromos($user['userid']);
                                                    
                                                        $counter = 0;
                                                        foreach ($all_promos as $promo) {

                                                        ?>

                                                            <div class="custom-checkbox form-check form-check-inline">
                                                                <input class="form-check-input" type="checkbox" id="promotion<?= $counter + 1 ?>" name="promotions[]" value="<?php echo $promo['idpromotion'] ?>" 
                                                                <?php 
                                                                    $same = false;
                                                                
                                                                    foreach($user_promos as $user_promo){
                                                                        if($user_promo['name'] == $promo['name']){
                                                                            $same = true;
                                                                        }
                                                                    }
                                                                    if($same){
                                                                        echo "checked";
                                                                    }

                                                                ?>  >

                                                                <label class="form-check-label" for="type<?= $counter + 1 ?>"> <?= $promo['name'] ?></label>
                                                            </div>

                                                        <?php
                                                            $counter++;
                                                        } 

                                                        ?>

                                                    </div>

                                                    </div>

                                                <button type="submit" class="btn m-2" name="modifyuser" id="modifyuser">Save</button>
                                                <button type="submit" class="btn m-2" name="deleteuser" id="deleteuser">Delete</button>
                                            </form>

                                        </div>
                                    </div>


                                <?php } ?>
                            <button class="btn m-2" name="adduser" id="adduser">
                                <a href="signup.php">Register a new user</a>
                            </button>

                        </div>

                        
                    </div>
                </div>
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    </body>
</html>

