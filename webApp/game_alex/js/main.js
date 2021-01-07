const cds = document.querySelectorAll(".cd"); // Selecting all CDs
const boombox = document.querySelector(".boombox"); // Selecting boombox

/* Setting up drag eventListeners on all CDs */
for (const cd of cds) {
  cd.addEventListener("dragstart", dragStart);
  cd.addEventListener("dragend", dragEnd);
}

/* Start Dragging eventListener function */
function dragStart() {
  this.className += " hold";
  requestAnimationFrame(() => (this.className = "invisible"), 0);
}

/* End Dragging eventListener function */
function dragEnd() {
  if (document.getElementById("target").className == "cd") {
    // If drop on boombox make CD disappear
    this.className = "";
  } else {
    // If not drop on boombox, put CD back
    this.className = "cd";
  }
}

/* Setting up boombox eventListeners */
boombox.addEventListener("dragover", dragOver);
boombox.addEventListener("dragenter", dragEnter);
boombox.addEventListener("dragleave", dragLeave);
boombox.addEventListener("drop", dragDrop);

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  // CD going over boombox (show drop spot)
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  // CD leaving boombox area (stop showing drop spot)
  this.className = "boombox";
}

/* When drop CD on boombox, launch music */
function dragDrop() {
  this.className = "cd";
  setTimeout(function () {
    boombox.className = "boombox";
    launchMusic();
  }, 1000);
}

var played = [false, false, false, false, false]; // Array for knowing if the songs (0-4) have been played

/* Background music */
var bgmusic = document.getElementById("bgmusic");
var bgVolume = document.getElementById("main-volume-control"); // Setting up volume control
bgVolume.addEventListener("change", function (e) {
  bgmusic.volume = e.currentTarget.value / 100;
});

/* When CD dragged to cd player */
function launchMusic() {
  bgmusic.pause();
  document.getElementsByClassName("grid-container")[0].style.display = "none"; // Removing background display

  var music = document.getElementById("song");
  music.className = "overlay"; // Activating music screen
  music.style.display = "flex";

  var toggle = document.getElementById("voiceInput");
  toggle.checked = true; // Choosing voice input by default

  var randNumber;
  do {
    // Generate random number (0-4) to choose a song that has not been played
    randNumber = Math.floor(Math.random() * 5);
  } while (played[randNumber] == true); // While that song number has not been played already

  switch (
    randNumber // Play random song that has not been played
  ) {
    case 0:
      playSong(
        0,
        languageUS,
        songTitles[0],
        songSources[0],
        syncDataSongs[0],
        songsAnswers[0],
        stopAudiosRanges[0]
      );
      break;
    case 1:
      playSong(
        1,
        languageUS,
        songTitles[1],
        songSources[1],
        syncDataSongs[1],
        songsAnswers[1],
        stopAudiosRanges[1]
      );
      break;
    case 2:
      playSong(
        2,
        languageUS,
        songTitles[2],
        songSources[2],
        syncDataSongs[2],
        songsAnswers[2],
        stopAudiosRanges[2]
      );
      break;
    case 3:
      playSong(
        3,
        languageES,
        songTitles[3],
        songSources[3],
        syncDataSongs[3],
        songsAnswers[3],
        stopAudiosRanges[3]
      );
      break;
    case 4:
      playSong(
        4,
        languageES,
        songTitles[4],
        songSources[4],
        syncDataSongs[4],
        songsAnswers[4],
        stopAudiosRanges[4]
      );
      break;
    default:
      break;
  }
}

/* Global variables */
var playAudio; // Defining playAudio function in outer scope
var questionNumber; // Sets the answer number we're on
var answers;
var stopped;
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
var voiceinput;
var textinput;
var pointLimit = document.getElementById("pointsCounter").dataset.limit; // Retrieving dataset limit value
var onePointScore = pointLimit / 20;
var song;
var points;
var showpoints = document.getElementById("score");
var maininfo;
var play;
var audio = document.getElementById("audio");
var volume = document.getElementById("volume-control");
var subtitles = document.getElementById("subtitles");
var element;
var toggle = document.getElementById("voiceInput");
var correct;

var languageUS = "en-US";
var languageES = "es-ES";
var songTitles = [
  "Last Christmas by WHAM!",
  "All I Want for Christmas by Mariah Carey",
  "Rudolph the Red Nosed Reindeer",
  "Feliz Navidad",
  "Campana sobre campana",
];
var songSources = [
  "./media/songs/lastxmas/lastxmas.mp3",
  "./media/songs/alliwantforxmas/alliwantforxmas.mp3",
  "./media/songs/rudolph/rudolph.mp3",
  "./media/songs/feliznavidad/feliznavidad.mp3",
  "./media/songs/campana/campana.mp3",
];
var syncDataSongs = [
  [
    {
      end: "21.8",
      start: "17.725",
      text: "Last Christmas‚ I gave you my heart",
    },
    { end: "30.8", start: "26.6", text: "This year‚ to save me from tears" },
    { end: "76.2", start: "71.7", text: "Once bitten and twice shy" },
    { end: "80.9", start: "78.1", text: "But you still catch my eye" },
  ],
  [
    {
      end: "15.7",
      start: "9.5",
      text: "I don′t want a lot for Christmas",
    },
    { end: "23.8", start: "20.2", text: "I don′t care about the presents" },
    { end: "31.2", start: "27.4", text: "I just want you for my own" },
    { end: "41.8", start: "36", text: "Make my wish come true oh" },
  ],
  [
    {
      end: "26.5",
      start: "24",
      text: "Rudolph the red-nosed reindeer",
    },
    { end: "32.5", start: "29.7", text: "And if you ever saw him" },
    { end: "38", start: "35.8", text: "All of the other reindeer" },
    { end: "43.5", start: "41.5", text: "They never let poor Rudolph" },
  ],
  [
    {
      end: "15",
      start: "13",
      text: "Feliz Navidad",
    },
    { end: "21", start: "20", text: "Feliz Navidad" },
    { end: "42", start: "39.5", text: "I want to wish you a Merry Christmas" },
    {
      end: "48.5",
      start: "46.5",
      text: "I want to wish you a Merry Christmas",
    },
  ],
  [
    {
      end: "18.5",
      start: "15",
      text: "Campana sobre campana",
    },
    { end: "27", start: "23.5", text: "Asómate a la ventana" },
    { end: "32.5", start: "31.5", text: "Belén" },
    { end: "36.5", start: "34.5", text: "Que los ángeles tocan" },
  ],
];
var songsAnswers = [
  [
    "But the very next day you gave it away",
    "I'll give it to someone special",
    "I keep my distance",
    "Tell me baby",
  ],
  [
    "There is just one thing I need",
    "Underneath the Christmas tree",
    "More than you could ever know",
    "All I want for Christmas is you",
  ],
  [
    "Had a very shiny nose",
    "You would even say it glows",
    "Used to laugh and call him names",
    "Join in any reindeer games",
  ],
  [
    "Feliz Navidad",
    "Próspero año y felicidad",
    "I want to wish you a Merry Christmas",
    "From the bottom of my heart",
  ],
  [
    "Y sobre campana una",
    "Verás al Niño en la cuna",
    "Campanas de Belén",
    "Qué nuevas me traéis",
  ],
];
var stopAudiosRanges = [
  [21.5, 21.8, 30.75, 31.019, 76.15, 76.45, 80.85, 81.15],
  [15.65, 15.95, 23.75, 24.05, 31.15, 31.45, 41.75, 42.05],
  [26.5, 26.8, 32.2, 32.5, 38, 38.3, 43.5, 43.8],
  [15.5, 15.8, 21, 21.3, 42.5, 42.8, 48.9, 49.2],
  [18.5, 18.8, 27, 27.3, 32.2, 32.5, 36.7, 37],
];

/* Begin game functions */
function enterStore() {
  document.getElementById("instructions").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementsByClassName("grid-container")[0].style.display = "grid";
  bgmusic.play();
}

function displayInstructions() {
  document.getElementById("start").style.display = "none";
  document.getElementById("instructions").style.display = "flex";
}

/* Points functions */
function increasePoints(points) {
  let score = +document.getElementById("pointsCounter").dataset.points;

  if (score < pointLimit) {
    score += points * onePointScore;
  }
  document.getElementById("pointsCounter").dataset.points = score;
  displayUpdateScore();
}

function displayUpdateScore() {
  let score = document.getElementById("pointsCounter").dataset.points;
  if (score == pointLimit) {
    document.getElementById("pointsCount").innerHTML = score + " (Point limit)";
  } else {
    document.getElementById("pointsCount").innerHTML = score;
  }
}

/* End menu functions */
function replayGame() {
  location.reload();
  return false;
}

function exitGame() {
  window.location.href = "/Project1/php_views/games.php";
}

function redeemPoints() {
  let points = document.getElementById("pointsCounter").dataset.points;
  document.querySelector("#finalPoints").value = points;
  document.querySelector("#gameForm").submit();
}

/* Generic song function: */
function playSong(
  songId,
  language,
  songTitle,
  songSource,
  syncDataSong,
  songAnswers,
  stopAudioRanges
) {
  voiceLanguage = language;
  questionNumber = 0;
  song = songTitle;

  /* Setting up point system */
  points = 0;
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  buttons = document.querySelector("#song #buttons"); // Display song buttons
  buttons.style.display = "flex";

  /* Creating the music player */
  play = document.getElementById("play");

  /* When click on start music, play music, display playing info and microphone status */
  play.addEventListener("click", function startPlaying() {
    playAudio();
    maininfo = document.querySelector("#maininfo p");
    maininfo.innerHTML =
      "<span>¡Vamos allá!</span><br><br> Cada vez que pare la música escribe o canta el siguiente verso!<br><br>Clicka en el micrófono para hablar y vuelve a clickar para confirmar!<br><br>";
    document.querySelector("#voiceinfo p:first-child").style.visibility =
      "visible";
    document.querySelector("#maininfo p span:first-of-type").style.paddingLeft =
      "40px";
  });

  /* Assigning audio track */
  audio.setAttribute("src", songSource);

  /* Start music function */
  playAudio = function () {
    audio.play();
    play.style.backgroundColor = "lime";
    play.style.pointerEvents = "none";
  };

  /* Stop music function */
  function stopAudio() {
    audio.pause();
    play.style.backgroundColor = "#d7ebf7";
  }

  /* Setting up volume control */
  volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
  });

  /* Defining subtitles' stop-timing array */
  var syncData = syncDataSong;

  /* Defining correct answers array */
  answers = songAnswers;

  /* Setting up highlited subtitles */
  createSubtitle(); // Create subtitle spans

  /* Create subtitle spans function */
  function createSubtitle() {
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i * 2);
      element.innerText = syncData[i].text;
      subtitles.appendChild(element);
    }
  }

  /* Highlight subtitles depending on music currentTime */
  audio.addEventListener("timeupdate", highlightsubs);
  function highlightsubs() {
    syncData.forEach(function (element, index, array) {
      if (
        audio.currentTime >= element.start &&
        audio.currentTime <= element.end
      ) {
        subtitles.children[index * 2].style.background = "lime";
      }
    });
  }

  /* Appending answer spans */
  for (i = 0; i < 4; ++i) {
    element = document.createElement("span");
    element.innerText = "";
    element.setAttribute("id", "c_" + (i * 2 + 1));
    subtitles.insertBefore(element, subtitles.children[i * 2 + 1]);
  }

  stopped = false; // The music is off (false by default)

  /* Stop music when reach input point */
  audio.addEventListener("timeupdate", mainfunction);
  function mainfunction() {
    if (
      (audio.currentTime >= stopAudioRanges[0] &&
        audio.currentTime <= stopAudioRanges[1]) ||
      (audio.currentTime >= stopAudioRanges[2] &&
        audio.currentTime <= stopAudioRanges[3]) ||
      (audio.currentTime >= stopAudioRanges[4] &&
        audio.currentTime <= stopAudioRanges[5]) ||
      (audio.currentTime >= stopAudioRanges[6] &&
        audio.currentTime <= stopAudioRanges[7])
    ) {
      /* If last verse has ended */
      if (
        stopped == false &&
        subtitles.children[questionNumber * 2].style.backgroundColor == "lime"
      ) {
        stopAudio();
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          if (!toggle.checked) {
            inputTypeFunc = textInputFunc;
          } else {
            inputTypeFunc = voiceInputFunc;
          }
          if (audio.paused) {
            setTimeout(inputTypeFunc(questionNumber), 500);
          }
        });
        if (audio.paused) {
          setTimeout(inputTypeFunc(questionNumber), 500);
        }
      }
    }
  }

  var inputTypeFunc = voiceInputFunc; // Defining the initial type of input

  /* Setting up text input */
  function textInputFunc(number) {
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    textinput = document.createElement("input");
    textinput.setAttribute("type", "text");
    subtitles.children[number * 2 + 1].appendChild(textinput);
    submit.setAttribute("value", "Check");
    subtitles.children[number * 2 + 1].appendChild(submit);
  }

  /* Setting up voice recognition input */
  function voiceInputFunc(number) {
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    results = document.createElement("div");
    results.setAttribute("id", "results");
    subtitles.children[number * 2 + 1].appendChild(results);

    final_span = document.createElement("span");
    final_span.setAttribute("id", "final_span");
    final_span.setAttribute("class", "final");
    results.appendChild(final_span);

    interim_span = document.createElement("span");
    interim_span.setAttribute("id", "interim_span");
    interim_span.setAttribute("class", "interim");
    results.appendChild(interim_span);

    right = document.createElement("div");
    right.setAttribute("class", "right");
    subtitles.children[number * 2 + 1].appendChild(right);

    button = document.createElement("button");
    button.setAttribute("id", "start_button");
    button.setAttribute("onclick", "startButton(event)");
    right.appendChild(button);
    img = document.createElement("img");
    img.setAttribute("id", "start_img");
    img.setAttribute("src", "/Project1/webApp/game_alex/media/api/mic.gif");
    img.setAttribute("alt", "Start");
    button.appendChild(img);

    voiceinput = document.getElementById("final_span");

    voiceRegnition();
  }

  /* If input type switched call the input type's function to prepare input */
  toggle.addEventListener("change", function () {
    // Changing type of input on click
    if (!toggle.checked) {
      inputTypeFunc = textInputFunc;
      ignore_onend = true;
      recognition.stop();
    } else {
      inputTypeFunc = voiceInputFunc;
    }
  });

  /* Setting up and listening for answer submission, checking answer and showing feedback accordingly */
  submit.addEventListener("click", playclick);
  function playclick() {
    var answer;
    /* Assigning user input to string depending on input type */
    if (toggle.checked) {
      // If voice input
      answer = voiceinput.innerText;
    } else {
      // If text input
      answer = textinput.value;
    }

    /* If answer exceeds box, cut it */
    if (answer.length > 38) {
      answer = answer.slice(0, 38);
    }

    correct = checkAnswer(questionNumber, answer); // Check on answer

    answerBox = subtitles.children[questionNumber * 2 + 1];
    if (correct) {
      // If answer is correct turn green and add point
      answerBox.innerHTML = answers[questionNumber];
      answerBox.style.backgroundColor = "lime";
      ++points;
      updatePoints();
    } else {
      // If answer is not correct turn red
      answerBox.innerHTML = answer;
      answerBox.style.backgroundColor = "red";
    }
    ++questionNumber; // Move to the next question
    if (questionNumber != 4) {
      // If not last verse
      stopped = false;
      setTimeout(playAudio, 500); // Resume music after evaluating answer
    } else {
      // If last verse answered
      audio.play();
      played[songId] = true; // Setting song to played in played-songs array
      /* Removing eventListeners*/
      audio.removeEventListener("timeupdate", mainfunction);
      audio.removeEventListener("timeupdate", highlightsubs);
      submit.removeEventListener("click", playclick);
      play.style.backgroundColor = "#d7ebf7";
      play.style.pointerEvents = "all";
      setTimeout(function () {
        // Send to song-end screen
        songEndScreen(song, points);
      }, 2000);
    }
  }
}

/* Display song score and thank you function (when song is over) */
function songEndScreen(song, points) {
  increasePoints(points); // Increase the global points counter

  /* Preparing DOM for song ended screen */
  buttons = document.querySelector("#song #buttons");
  buttons.style.display = "none";
  songEnd = document.getElementById("songEnd");
  songEnd.style.display = "flex";
  songName = document.getElementById("songName");
  songName.innerText = song;
  score = document.getElementById("songScore");
  score.innerHTML = points.toString();

  /* Resetting DOM for next song */
  document.getElementById("subtitles").innerHTML = "";
  document.getElementById("maininfo").innerHTML =
    "<p><span>Antes de empezar...</span><br><br>Marca la opción de 'Text Input' si no tienes micrófono para cantar conmigo o si simplemente eres un soso!<br><br><span>Para empezar, haz click en '<u>Start Music</u>'...</span><br><br>¡Recuerda que <u>puedes</u> cambiar el tipo de input (texto o voz) durante la canción!</u></p>";
  let playbutton = document.getElementById("play");
  playbutton.setAttribute(
    "style",
    "background-color: #d7ebf7 !important; pointer-events: all !important;"
  );
  document.querySelector("#voiceinfo p:first-child").style.visibility =
    "hidden";

  // let done = played.some((value) => {
  //   return value == true;
  // });

  /* Evaluating if all songs have played */
  let done = played.every((value) => {
    return value == true;
  });

  if (done) {
    // If all songs have played, display end screen
    displayEndScreen();
  }
}

/* On click 'continuar' at songEndScreen go back to store */
function backToStore() {
  audio = document.getElementById("audio");
  audio.pause(); // Stop song
  audio.currentTime = 0;
  bgmusic.play(); // Play background music
  document.getElementById("song").style.display = "none";
  document.getElementsByClassName("grid-container")[0].style.display = "grid";
  document.getElementById("songEnd").style.display = "none";
}

/* End screen function (when all songs played) */
function displayEndScreen() {
  document.getElementById("song").style.display = "none";
  document.getElementById("endScreen").style.display = "inline-block";
  /* Displaying total score earned */
  let score = document.getElementById("pointsCounter").dataset.points;
  document.getElementById("finalScore").innerHTML = score;
}

/* Function to check a specific verse answer */
function checkAnswer(number, text) {
  var correct = false;
  switch (number) {
    case 0:
      if (text.toLowerCase() === answers[number].toLowerCase()) {
        correct = true;
      }
      break;
    case 1:
      if (text.toLowerCase() === answers[number].toLowerCase()) {
        correct = true;
      }
      break;
    case 2:
      if (text.toLowerCase() === answers[number].toLowerCase()) {
        correct = true;
      }
      break;
    case 3:
      if (text.toLowerCase() === answers[number].toLowerCase()) {
        correct = true;
      }
      break;
  }
  return correct;
}

/* External voice recognition variables */
var startButton;
var voiceLanguage = "en-US";
var recognition;
var ignore_onend;

/* Voice recognition function: */
function voiceRegnition() {
  var final_transcript = "";
  var recognizing = false;
  ignore_onend;
  var start_timestamp;
  start_img = document.getElementById("start_img");
  if (!("webkitSpeechRecognition" in window)) {
    upgrade();
  } else {
    start_button.style.display = "inline-block";
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      recognizing = true;
      showInfo("info_speak_now");
      start_img.src = "/Project1/webApp/game_alex/media/api/mic-animate.gif";
    };

    recognition.onerror = function (event) {
      if (event.error == "no-speech") {
        start_img.src = "/Project1/webApp/game_alex/media/api/mic.gif";
        showInfo("info_no_speech");
        ignore_onend = true;
      }
      if (event.error == "audio-capture") {
        start_img.src = "/Project1/webApp/game_alex/media/api/mic.gif";
        showInfo("info_no_microphone");
        ignore_onend = true;
      }
      if (event.error == "not-allowed") {
        if (event.timeStamp - start_timestamp < 100) {
          showInfo("info_blocked");
        } else {
          showInfo("info_denied");
        }
        ignore_onend = true;
      }
    };

    recognition.onend = function endFunction() {
      recognizing = false;
      if (ignore_onend) {
        return;
      }
      start_img.src = "/Project1/webApp/game_alex/media/api/mic.gif";
      if (!final_transcript) {
        showInfo("info_start");
        return;
      }
      submit.click(); // Adding answer recognition
      showInfo("");
    };

    recognition.onresult = function (event) {
      var interim_transcript = "";
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript += event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      final_transcript = capitalize(final_transcript);
      final_span.innerHTML = linebreak(final_transcript);
      interim_span.innerHTML = linebreak(interim_transcript);
    };
  }

  function upgrade() {
    start_button.style.visibility = "hidden";
    showInfo("info_upgrade");
  }

  var two_line = /\n\n/g;
  var one_line = /\n/g;
  function linebreak(s) {
    return s.replace(two_line, "<p></p>").replace(one_line, "<br>");
  }

  var first_char = /\S/;
  function capitalize(s) {
    return s.replace(first_char, function (m) {
      return m.toUpperCase();
    });
  }

  startButton = function (event) {
    if (recognizing) {
      recognition.stop();
      return;
    }
    final_transcript = "";
    recognition.lang = voiceLanguage;
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = "";
    interim_span.innerHTML = "";
    start_img.src = "/Project1/webApp/game_alex/media/api/mic-slash.gif";
    showInfo("info_allow");
    start_timestamp = event.timeStamp;
  };

  function showInfo(s) {
    var info = document.getElementById("voiceinfo");
    if (s) {
      for (var child = info.children[1]; child; child = child.nextSibling) {
        if (child.style) {
          child.style.display = child.id == s ? "inline" : "none";
        }
      }
      info.style.visibility = "visible";
    } else {
      info.style.visibility = "hidden";
    }
  }
}
