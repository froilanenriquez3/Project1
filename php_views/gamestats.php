<?php
require_once '../php_libraries/bd.php';
$high1 = selectHighScores(1);
$high2 = selectHighScores(2);
$high3 = selectHighScores(3);
$high4 = selectHighScores(4);
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="../style/style-navbar.css">
    <link rel="stylesheet" href="../style/buttons.css">
    <title>Restore</title>
</head>

<body>
    <?php
    require_once '../php_partials/navbar.php';
    require_once '../php_partials/buttons.php';
    ?>

    <div class="container" style="padding-top: 100px;">
        <div class="card">
            <div class="card-header" style="text-align: center; font-weight: bolder;">Statistics</div>
            <div class="card-body">
                <table class="table" style="text-align: center; background-color: lightgrey;">
                    <thead>
                        <tr>
                            <th scope="col">Game Number</th>
                            <th scope="col">Game Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">User ID</th>
                            <th scope="col">Highest Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Monedas al Vuelo</td>
                            <td><?= $high1[0][2]; ?></td>
                            <td><?= $high1[0][1]; ?></td>
                            <td><?= $high1[0][0]; ?></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Probador Fantástico</td>
                            <td><?= $high2[0][2]; ?></td>
                            <td><?= $high2[0][1]; ?></td>
                            <td><?= $high2[0][0]; ?></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Canta con Teresa</td>
                            <td><?= $high3[0][2]; ?></td>
                            <td><?= $high3[0][1]; ?></td>
                            <td><?= $high3[0][0]; ?></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Compras con prisas</td>
                            <td><?= $high4[0][2]; ?></td>
                            <td><?= $high4[0][1]; ?></td>
                            <td><?= $high4[0][0]; ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

</html>