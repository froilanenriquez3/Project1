<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/project1/style/style-navbar.css">
    <link rel="stylesheet" href="/project1/style/buttons.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./styles/styles.css">
    <link rel="stylesheet" href="./styles/voicestyles.css">
</head>

<body>
    <?php
    require_once '../../php_partials/navbar.php';
    require_once '../../php_partials/buttons.php';
    // require_once '../../php_partials/language.php';
    ?>
    <div class="gameContainer">
        <div id="game">
            <div id="start">

            </div>
            <div id="song">
                <div id="buttons">
                    <div id="play">
                        <p>Start Music</p>
                        <img id="botonPlay" src="./media/img/play.png" height="50px" width="50px">
                    </div>

                    <div id="input">
                        <p>Text Input</p>
                        <label class="switch">
                            <input id="voiceInput" type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <p>Voice Input</p>
                    </div>

                    <div id="volume">
                        <p>Volume</p>
                        <input type="range" id="volume-control">
                    </div>
                </div>
                <div id="bottompart">
                    <div id="subtitles">
                    </div>
                    <div id="sidebar">
                        <div id="gameinfo">
                            <div id="maininfo">
                                <p><span>Antes de empezar...</span><br><br>Marca la opción de 'Text Input' si no tienes
                                    micrófono para cantar conmigo o si simplemente
                                    eres un soso!<br><br><span>Para empezar, haz click en '<u>Start Music</u>'...</span>
                                    <br><br>¡Recuerda que <u>puedes</u> cambiar el tipo de input (texto o voz) durante la
                                    canción!</u>
                                </p>
                            </div>
                            <div id="voiceinfo">
                                <p>Microphone Info:</p>
                                <p id="info_speak_now">Speak now.</p>
                                <p id="info_no_speech">No speech was detected. You may need to adjust your
                                    <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
                                        microphone settings</a>.</p>
                                <p id="info_no_microphone" style="display:none">
                                    No microphone was found. Ensure that a microphone is installed and that
                                    <a href="//support.google.com/chrome/bin/answer.py?hl=en&amp;answer=1407892">
                                        microphone settings</a> are configured correctly.</p>
                                <p id="info_allow">Click the "Allow" button above to enable your microphone.</p>
                                <p id="info_denied">Permission to use microphone was denied.</p>
                                <p id="info_blocked">Permission to use microphone is blocked. To change,
                                    go to chrome://settings/contentExceptions#media-stream</p>
                                <p id="info_upgrade">Web Speech API is not supported by this browser.
                                    Upgrade to <a href="//www.google.com/chrome">Chrome</a>
                                    version 25 or later.
                                </p>
                            </div>
                        </div>
                        <div id="points">
                            <p>Score: <span id="score"></span></p>
                        </div>
                    </div>
                </div>
                <div id="songEnd">
                    <h1>¡Gracias por ayudarme!</h1>
                    <h1>Has completado <span id="songName"></span> con una puntuación de <span id="songScore"></span> de 4
                    </h1>
                    <button onclick="backToStore()">Continuar</button>
                </div>

            </div>
            <div class="grid-container">
                <div id="box1"></div>
                <div id="box2"></div>
                <div id="box3"></div>
                <div id="box4"></div>
                <div id="box5"></div>
                <div id="box6"></div>
                <div id="box7">
                    <div class="cd" draggable="true"></div>
                </div>
                <div id="box8"></div>
                <div id="box9">
                    <div class="cd" draggable="true"></div>
                </div>
                <div id="box10"></div>
                <div id="box11"></div>
                <div id="box12"></div>
                <div id="box13">
                    <div id="target" class="boombox"></div>
                </div>
                <div id="box14">
                    <div class="cd" draggable="true"></div>
                </div>
                <div id="box15"></div>
                <div id="box16">
                    <div class="cd" draggable="true"></div>
                </div>
                <div id="box17">
                    <div class="cd" draggable="true"></div>
                </div>
                <div id="box18"></div>
            </div>
        </div>
    </div>
    <audio id="audio" type="audio/mpeg"></audio>
    <script src="./js/main.js"></script>
    <script src="/project1/js/navbar.js"></script>
</body>

</html>