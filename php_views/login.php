<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/login.css">
    
    <!-- FONT MONTSERRAT -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">
    
    
    <!-- FONT OWSWALD BOLD -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">

    <title>Log In</title>
</head>

<body>
    <div class="home">
        <a href="/project1/index.php"><img src="/project1/media/img/home-icon-blue.png" width="70px"></a>
    </div>
    <div class="container">
        <div class="card mt-2">
            <div class="card-header text-center">
            <!-- bg-secondary text-white -->
                Log In
            </div>

            <div class="card-body">
                <form enctype="multipart/form-data" action="../php_controllers/login_controller.php" method="post">
                    <div class="form-group">
                        <!-- User -->
                        <div class="form-group row">
                            <!-- <label class="col-sm-3 col-form-label" for="username">Usuario</label> -->
                            <div class="col-sm-12">
                                <input class="form-control form-control-sm" type="text" id="username" name="username" placeholder="Usuario" autofocus>
                            </div>
                        </div>
                        <!-- Password -->
                        <div class="form-group row">
                            <!-- <label class="col-sm-3 col-form-label" for="password">Contraseña</label> -->
                            <div class="col-sm-12">
                                <input class="form-control form-control-sm" type="password" id="paswword" name="password" minlength="8" placeholder="Contraseña " autofocus required>
                            </div>                       
                        </div>
                        <!-- Boton de submit -->
                        <div class="btn-group">
                            <input class="btn btn-block" type="submit" value="Iniciar Sesión" name="login" id="login">
                        </div>         

                    </div>
                </form>
                <div class="entrar">
                    <a href="./signup.php">¿Aún no estás registrado?</a>
                </div>
            </div>
        </div>
    </div>
    <div class="<?php if (isset($_SESSION['logged'])){ echo "wrongPassword";} else{
        echo "message";}?>">
    <?php 
        if (isset($_SESSION['logged'])) {

        if (!$_SESSION['logged']) {
            echo "<p>Your username or password was incorrect!</p>";
        }}
        unset($_SESSION['logged']);
        ?>
    </div>
    

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>