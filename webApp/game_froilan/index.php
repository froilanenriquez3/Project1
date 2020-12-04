
<?php
    require_once '../../php_libraries/bd.php';
    session_start();
    if (!isset($_SESSION['user'])) {
        header("Location: ../../php_views/login.php");
        exit();  
    }
    $games = selectAllFromTable('game');
    $limit = $games['1']['pointLimit'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="/project1/style/style-navbar.css">
    <link rel="stylesheet" href="/project1/style/buttons.css">
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="../../style/language.css">
    <link href="./styles/all.min.css" rel="stylesheet">


    <title>Froilan's Fantastic Fitting Room</title>
</head>

<body>
    <?php
        require_once '../../php_partials/navbar.php';
        require_once '../../php_partials/buttons.php';
        require_once '../../php_partials/language.php';
    ?>
    <div class="gameContainer">
    <div id="game">
        <div class="startscreen">
            <div class="text">
                <h1 id="screenHeader" >Welcome to Froilan's Fantastic Fitting Room!</h1>
                <h2>Help me buy clothes for my grandson, Marco</h2>
                <p>Drag and drop clothing items to create a new outfit. Once you think you have a winner, click the CHECK button. 
                    If your combo works, you earn points! If it doesn't, try again with something different. 
                    You can earn up to <?= $limit ?> points. Let's go!
                </p>
            </div>
            <button class='startbutton' onclick="startGame()">Start</button>

            
        </div>
        <div class="mainscreen">
            <div class="topbar">
                <div id="feedbackbox">
                    <p id="feedhat">Hat </p>
                    <p id="feedshirt">Shirt </p>
                    <p id="feedpants">Pants </p>
                    <p id="feedshoes">Shoes</p>
                </div>
                <div id="scorebox">

                    <p id="counter" data-points=0 data-limit= "<?= $limit?>" >Score: 0</p>
                    <p id="tries" data-tries=0>Tries: 0</p>
                    <p id="winner"></p>
    
                </div>
                <div id="buttonsbox">
                    <button class="endgame" onclick="endScreen()">EXIT</button>

                    <div class="music">
                    <i class="music fas fa-volume-mute"></i>
                    
                    <label class="switch" >
                        <input type="checkbox" id="music" onclick="mute()">
                        <span class="slider"></span>
                    </label>
                      <i class="music fas fa-volume-up"></i>

                    </div>
                    
                </div>
    
            </div>
    
            <div class="box">
                <!-- Updates to content of container must be copied to script.js resetGame function-->
                <div class="shelf" id="hats">
                    <div class="dropzone hat" id="hatzone1">
                        <div id="draghat1" class="dragHat" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
                    </div>
                    <div class="dropzone hat" id="hatzone2">
                        <div id="draghat2" class="dragHat" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
                    </div>
                    <div class="dropzone hat" id="hatzone3">
                        <div id="draghat3" class="dragHat" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
                    </div>
    
                    <div class="center">
                        <div class="dropzone hat" id="hathole"></div>
    
                    </div>
    
                    <div class="dropzone hat" id="hatzone4">
                        <div id="draghat4" class="dragHat" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
                    </div>
                    <div class="dropzone hat" id="hatzone5">
                        <div id="draghat5" class="dragHat" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
                    </div>
                    <div class="dropzone hat" id="hatzone6">
                        <div id="draghat6" class="dragHat" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
                    </div>
                </div>
    
    
                <div class="shelf" id="shirts">
                    <div class="dropzone shirt" id="shirtzone1">
                        <div id="dragshirt1" class="dragShirt" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shirt" id="shirtzone2">
                        <div id="dragshirt2" class="dragShirt" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shirt" id="shirtzone3">
                        <div id="dragshirt3" class="dragShirt" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
    
                    <div class="center">
                        <div class="dropzone shirt" id="shirthole"></div>
    
                    </div>
    
                    <div class="dropzone shirt" id="shirtzone4">
                        <div id="dragshirt4" class="dragShirt" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shirt" id="shirtzone5">
                        <div id="dragshirt5" class="dragShirt" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shirt" id="shirtzone6">
                        <div id="dragshirt6" class="dragShirt" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                </div>
    
                <div class="shelf" id="pants">
                    <div class="dropzone pants" id="pantszone1">
                        <div id="dragpants1" class="dragPants" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone pants" id="pantszone2">
                        <div id="dragpants2" class="dragPants" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone pants" id="pantszone3">
                        <div id="dragpants3" class="dragPants" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
    
                    <div class="center">
                        <div class="dropzone pants" id="pantshole"></div>
                    </div>
    
                    <div class="dropzone pants" id="pantszone4">
                        <div id="dragpants4" class="dragPants" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone pants" id="pantszone5">
                        <div id="dragpants5" class="dragPants" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone pants" id="pantszone6">
                        <div id="dragpants6" class="dragPants" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                </div>
    
    
                <div class="shelf" id="shoes">
                    <div class="dropzone shoes" id="shoeszone1">
                        <div id="dragshoes1" class="dragShoes" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shoes" id="shoeszone2">
                        <div id="dragshoes2" class="dragShoes" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shoes" id="shoeszone3">
                        <div id="dragshoes3" class="dragShoes" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
    
                    <div class="center">
                        <div class="dropzone shoes" id="shoeshole"></div>
                    </div>
    
                    <div class="dropzone shoes" id="shoeszone4">
                        <div id="dragshoes4" class="dragShoes" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shoes" id="shoeszone5">
                        <div id="dragshoes5" class="dragShoes" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                    <div class="dropzone shoes" id="shoeszone6">
                        <div id="dragshoes6" class="dragShoes" draggable="true"
                            ondragstart="event.dataTransfer.setData('text/plain',null)">
    
                        </div>
                    </div>
                </div>
    
            </div>
            

                <button class="check" onclick="increaseTries(checkOutfitFull)" id="check">check</button>
                <button class="check" onclick="newCombo(resetGame, resetTries, resetFeedback)" id="next" disabled>next</button>
                
        </div>


        <div class="endscreen">
            <div class="text">
                <h1>Would you like to redeem your points or try for a higher score?</h1>
                <h2>You can only redeem your points once!</h2>
                
            </div>
            
            <div>
                <button class='startbutton' onclick="startGame()">Try for more points!</button>
                <button class='startbutton redeem' onclick="savePoints()">Redeem my points!</button>
                <form action="../../php_controllers/save_points_controller.php" method="POST" id="gameForm">
                     <input type="number" style="display:none" id="finalPoints" name="finalPoints">
                     <input type="number" style="display:none" id="gameId" name="gameId" value="2">
                </form>
               
               

            </div>


        </div>
        </div>



    </div>
    <script src="/project1/js/navbar.js"></script>
    <script src="scripts/script.js"></script>
    <script src="scripts/eventListeners.js"></script>
    <script src="scripts/submit.js"></script>

    <script src="../../lang/ESP.js"></script>
    <script src="../../lang/ENG.js"></script>
    <script src="../../lang/CAT.js"></script>
    <script src="../../lang/language.js"></script>
</body>

</html>