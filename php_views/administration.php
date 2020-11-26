<?php
require_once '../php_libraries/bd.php';
session_start();
$all_users = selectAllFromTable('user');
$all_promos = selectAllFromTable('promotion');
$all_games = selectAllFromTable('game');

//$_SESSION['user']['isAdmin'] = 1; // REMOVE ME Setting user to admin
//Checking if user is an admin
if ($_SESSION['user']['isAdmin'] == 0) {
    header("Location: ../index_anna.html");
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
    <title>Restore</title>
</head>

<body>
    <div class="container">
        <div class="card mt-2">
            <div class="card-header">
                <h1>Administration</h1>
            </div>
            <div class="card-body">
                <ul class="list-unstyled">
                    <li><a href="#adminssection">Manage admins</a></li>
                    <li><a href="#userssection">Manage users</a></li>
                    <li><a href="#promossection">Manage promos</a></li>
                    <li><a href="#pointssection">Manage points</a></li>
                </ul>

                <p>Here is where you can manage the administrators, users, promotions, and points</p>
                <ul class="list-group">
                    <li class="list-group-item">
                        <h2 id="adminssection">Manage admins</h2>

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
                                <div class="card col-3 mb-1">
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
                        <div class="row d-flex align-items-stretch ">
                            <div class="card col-4 mt-2">
                                <div class="card-body">
                                    <p class="">Grant user admin priveleges by ID</p>
                                    <form class="" action="../php_controllers/user_controller.php" method="post">
                                        <div class="form-group row ">
                                            <label class="m-1" for="newadmin">ID</label>
                                            <input class="m-1" type="number" name="newadmin" id="newadmin" min="0">
                                            <button class="btn" type="submit" id="addadmin" name="addadmin">Add admin</button>
                                        </div>
                                        
                                    </form>
                                </div>

                            </div>
                        </div>


                    </li>

                    <li class="list-group-item">
                        <h2 id="userssection">Manage users</h2>

                        <?php

                        if (empty($all_users)) {
                            echo "<p class='m-5'>There are no users.</p> ";
                        }

                        foreach ($all_users as $user) { ?>
                            <div class="card">
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
                                            <input class="col-10 form-control" type="password" id="paswword" name="password" minlength="8" value="<?= $user['password'] ?>" required>
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


                                        <!-- Promos, not finished-->
                                        <div class="form-group row">
                                            <p class="col-2">Promotions:</p>
                                        <?php 
                                            $user_promos = selectUserPromos($user['userid']);
                                            foreach($user_promos as $user_promo){
                                        ?>
                                            <div class="card">
                                                <div class="card-body">
                                                    <?= $user_promo['name']?>

                                                </div>
                                            </div>
                                                                                   
                                        <?php }?>

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

                    </li>
                    <!-- not finished -->
                    <li class="list-group-item">
                        <h2 id="promossection">Manage promos</h2>
                        <div class="row d-flex align-items-stretch ">

                            <?php
                            if (empty($all_promos)) {
                                echo " <p class='m-5'>There are no promotions.</p>";
                            }

                            foreach ($all_promos as $promo) { ?>

                                <div class="card col-3">

                                    <div class="card-body">
                                        <p><?= $promo['name'] ?></p>
                                    </div>

                                </div>

                            <?php } ?>
                        </div>
                        <button class="btn m-2">Add promo</button>
                    </li>
                
                    <!-- not finished -->
                    
                    <li class="list-group-item">
                        <h2 id="pointssection">Manage points</h2>
                        <?php foreach ($all_games as $game) { ?>

                            <div class="card">
                                <div class="card-body">
                                    <p><?= $game['name'] ?></p>
                                    <form action="" method="post">

                                        <div class="form-group row">

                                            <label class="col-2" for="pointlimit">Maximum points</label>
                                            <input class="col-9 form-control" type="number" id="pointlimit" name="pointlimit" value="<?= $game['pointLimit'] ?>" min="0">

                                            <button class="col-1 btn" type="submit">Save</button>
                                        </div>


                                    </form>

                                </div>

                            </div>


                        <?php } ?>

                    </li>
                </ul>

            </div>
        </div>

    </div>




    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>