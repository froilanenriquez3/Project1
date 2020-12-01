<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Sign Up</title>
</head>

<body>
    <div class="container">
        <div class="card mt-2">
            <div class="card-header bg-secondary text-white">
                Sign Up
            </div>

            <div class="card-body">
                <form enctype="multipart/form-data" action="../php_controllers/user_controller.php" method="post">
                    <div class="form-group">
                        <!-- User -->
                        <div class="form-group row">
                            <label class="col-2" for="username">Usuario</label>
                            <input class="col-10 form-control" type="text" id="username" name="username" placeholder="Introduce tu nombre de usuario" maxlength="16" autofocus required>
                        </div>
                        <!-- Email -->
                        <div class="form-group row">
                            <label class="col-2" for="email">Email</label>
                            <input class="col-10 form-control" type="text" id="email" name="email" placeholder="Introduce tu email" maxlength="45"  required>
                        </div>
                        <!-- Password -->
                        <div class="form-group row">
                            <label class="col-2" for="password">Contraseña</label>
                            <input class="col-10 form-control" type="password" id="password" name="password" minlength="8" placeholder="Introduce tu contraseña "  required>
                        </div>
                        <!-- Confirm Password -->
                        <div class="form-group row">
                            <label class="col-2" for="confpassword">Repite tu Contraseña</label>
                            <input class="col-10 form-control" type="password" id="confpassword" name="confpassword" minlength="8" placeholder="Introduce tu contraseña"  required>
                        </div>
                        <!-- Boton de submit -->
                        <div class="btn-group float-right">
                            <input class="btn btn-primary" type="submit" value="Registrarse" id="adduser" name="adduser">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <script src="../js/signup.js"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>

</html>