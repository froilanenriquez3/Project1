<?php
    session_start();
    if(isset($_SESSION['password_conf']))
    {
        if(!$_SESSION['password_conf']){
            echo "Your password must match in both fields.";
        }
    }
  
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/signup.css">
    
    <!-- FONT MONTSERRAT -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap" rel="stylesheet">    


    <!-- FONT OWSWALD BOLD -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet">


    <title>Sign Up</title>
</head>

<body>
    <div class="home">
        <a href="/project1/index.php"><img src="/project1/media/img/home-icon-blue.png" width="70px"></a>
    </div>    
    <div class="container">
        <div class="card mt-2">
            <div class="card-header text-center">
                Sign Up
            </div>

            <div class="card-body">
                <form enctype="multipart/form-data" action="../php_controllers/user_controller.php" method="post">
                    <div class="form-group">
                        <!-- User -->
                        <div class="form-group row">
                            <label class="col-4" for="username">Usuario</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm" type="text" id="username" name="username" placeholder="Nombre de usuario" maxlength="16" autofocus required>
                            </div>
                        </div>
                        <!-- Email -->
                        <div class="form-group row">
                            <label class="col-4" for="email">Email</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm" type="text" id="email" name="email" placeholder="Email" maxlength="45"  required>
                            </div>
                        </div>
                        <!-- Password -->
                        <div class="form-group row">
                            <label class="col-4" for="password">Contraseña</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm" type="password" id="password" name="password" minlength="8" placeholder="Contraseña "  required>
                            </div>
                        </div>
                        <!-- Confirm Password -->
                        <div class="form-group row">
                            <label class="col-4" for="confpassword">Repite tu Contraseña</label>
                            <div class="col-sm-8">
                                <input class="form-control form-control-sm" type="password" id="confpassword" name="confpassword" minlength="8" placeholder="Repite la contraseña"  required>
                            </div>
                        </div>
                        <!-- Boton de submit -->
                        <div class="btn-group">
                            <input class="btn" type="submit" value="Registrarse" id="adduser" name="adduser" >
                        </div>
                    </div>
                </form>
                <div class="entrar">
                    <a href="./login.php">¿Ya estás registrado?</a>
                </div>
            </div>
        </div>
    </div>
    <script src="../js/signup.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>