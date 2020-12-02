<?php
require_once '../php_libraries/bd.php';
session_start();
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
                <ul class="list-group" id="adminssection">
                    <li class="list-group-item">
                        <h2>Manage admins</h2>

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
                                            <input class="m-1" type="number" name="newadmin" id="newadmin" min="1">
                                            <button class="btn" type="submit" id="addadmin" name="addadmin">Add admin</button>
                                        </div>
                                        
                                    </form>
                                </div>

                            </div>
                        </div>


                    </li>

                    <li class="list-group-item" id="userssection">
                        <h2>Manage users</h2>

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

                    </li>
                    <!-- not finished -->
                    <li class="list-group-item" id="promossection">
                        <h2>Manage promos</h2>
                        <div class="row d-flex align-items-stretch ">

                            <?php
                            if (empty($all_promos)) {
                                echo " <p cass='m-5'>There are no promotions.</p>";
                            }

                            foreach ($all_promos as $promo) { ?>

                                <div class="card col-12">
                                    <form action="../php_controllers/promo_controller.php" method="post">
                                    <div class="card-body">
                                        <p><?= "Promo ID-".$promo['idpromotion'].": ".$promo['name'] ?></p>


                                        <div class="form-group row">
                                            <label class="col-2" for="modpromoname">Name</label>
                                            <input class="col-10 form-control" type="text" id="modpromoname" name="promoname" value="<?=$promo['name']?>" maxlength="45">
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-2" for="modpromodesc">Description</label>
                                            <input class="col-10 form-control" type="text" id="modpromodesc" name="promodesc" value="<?=$promo['promo_desc']?>" maxlength="45">
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-2" for="modpromocost">Cost</label>
                                            <input class="col-10 form-control" type="number" id="modpromocost" name="promocost" min="0" value="<?=$promo['pointCost']?>">
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-2" for="modstoreid">Store ID</label>
                                            <input class="col-10 form-control" type="number" id="modstoreid" name="storeid" min="1" value="<?=$promo['store_idstore']?>">
                                        </div>


                                        <button type="submit" id="modifypromo" name="modifypromo" class="btn m-2">Save changes</button>

                                        <input type="number" value=<?=$promo['idpromotion']?> style="display:none" id="promoid" name="promoid">
                                        <button type="submit" name="deletepromo" id="deletepromo" class="btn">Delete promo</button>
                                    </div>
                                    </form>

                                </div>

                            <?php } ?>
                            
                            
                        </div>
                        <div class="row ">
                            <div class="card col-12">

                                <div class="card-body">
                                    <h5>New promo</h5>
                                    <form action="../php_controllers/promo_controller.php" method="post">
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


                                    <button type="submit" id="addpromo" name="addpromo" class="btn m-2">Add promo</button>
                                    </form>

                                    
                                </div>
                                
                            </div>
                        </div>
                        
                        
                    </li>
                
                    <!-- not finished -->
                    
                    <li class="list-group-item" id="pointssection">
                        <h2>Manage points</h2>
                        <?php foreach ($all_games as $game) { ?>

                            <div class="card">
                                <div class="card-body">
                                    <p><?= "Game ID-".$game['idgame'].": ".$game['name'] ?></p>
                                    <form action="../php_controllers/game_controller.php" method="post">

                                        <div class="form-group row">

                                            <label class="col-2" for="pointlimit">Maximum points</label>
                                            <input class="col-9 form-control" type="number" id="pointlimit" name="pointlimit" value="<?= $game['pointLimit'] ?>" min="0">
                                            <input type="num" id="gameid" name="gameid" value="<?=$game['idgame']?>" style="display:none"> 

                                            <button class="col-1 btn" type="submit" id="modpoint" name="modpointlim">Save</button>
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