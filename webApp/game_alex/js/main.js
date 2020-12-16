const cds = document.querySelectorAll(".cd");
const boombox = document.querySelector(".boombox");

for (const cd of cds) {
  cd.addEventListener("dragstart", dragStart);
  cd.addEventListener("dragend", dragEnd);
}

function dragStart() {
  this.className += " hold";
  requestAnimationFrame(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  if (document.getElementById("target").className == "cd") {
    this.className = "";
  } else {
    this.className = "cd";
  }
}

//document.getElementById('target').className = boombox;

boombox.addEventListener("dragover", dragOver);
boombox.addEventListener("dragenter", dragEnter);
boombox.addEventListener("dragleave", dragLeave);
boombox.addEventListener("drop", dragDrop);

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "boombox";
}

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
    // Generate random number to choose a song that has not been played
    randNumber = Math.floor(Math.random() * 5);
  } while (played[randNumber] == true);

  switch (
    randNumber // Play random song that has not been played
  ) {
    case 0:
      playLastxmas();
      break;
    case 1:
      playAlliwantforxmas();
      break;
    case 2:
      playRudolph();
      break;
    case 3:
      playFeliznavidad();
      break;
    case 4:
      playCampana();
      break;
    default:
      break;
  }
}

var playAudio; // Defining playAudio function in outer scope
var questionNumber; // Sets the answer number we're on
var answers;
var stopped;
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
var voiceinput;
var textinput;
var pointLimit = document.getElementById("pointsCounter").dataset.limit;
var onePointScore = pointLimit / 20;

function enterStore() {
  document.getElementById("start").style.display = "none";
  document.getElementsByClassName("grid-container")[0].style.display = "grid";
  bgmusic.play();
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

/* LasxMas song function: */
function playLastxmas() {
  voiceLanguage = "en-US";
  questionNumber = 0;
  var song = "Last Christmas by WHAM!";
  /* Setting up point system */
  var points = 0;
  var showpoints = document.getElementById("score");
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  buttons = document.querySelector("#song #buttons"); // Display song buttons
  buttons.style.display = "flex";

  /* Creating the music player */
  var play = document.getElementById("play");

  /* When click on start music, play music, display playing info and microphone status */
  play.addEventListener("click", function startPlaying() {
    playAudio();
    var maininfo = document.querySelector("#maininfo p");
    maininfo.innerHTML =
      "<span>¡Vamos allá!</span><br><br> Cada vez que pare la música escribe o canta el siguiente verso!<br><br>Clicka en el micrófono para hablar y vuelve a clickar para confirmar!<br><br>";
    document.querySelector("#voiceinfo p:first-child").style.visibility =
      "visible";
    document.querySelector("#maininfo p span:first-of-type").style.paddingLeft =
      "40px";
  });

  var audio = document.getElementById("audio");
  audio.setAttribute("src", "./media/songs/lastxmas/lastxmas.mp3");

  playAudio = function () {
    // Playing audio function
    // Start music function
    audio.play();
    play.style.backgroundColor = "lime";
    play.style.pointerEvents = "none";
  };

  function stopAudio() {
    // Stopping Audio function
    // Stop music function
    audio.pause();
    play.style.backgroundColor = "#d7ebf7";
  }

  let volume = document.getElementById("volume-control"); // Setting up volume control
  volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
  });

  /* Setting up highlited subtitles */

  var subtitles = document.getElementById("subtitles");

  var syncData = [
    // Subtitles timing object array
    {
      end: "21.8",
      start: "17.725",
      text: "Last Christmas‚ I gave you my heart",
    },
    //{ end: "26.42", start: "22.017", text: "But the very next day you gave it away" },
    { end: "30.8", start: "26.6", text: "This year‚ to save me from tears" },
    //{ end: "35.6", start: "31.019", text: "I'll give it to someone special" },
    { end: "76.2", start: "71.7", text: "Once bitten and twice shy" },
    //{ end: "77.9", start: "76.4", text: "I keep my distance" },
    { end: "80.9", start: "78.1", text: "But you still catch my eye" },
    //{ end: "82.5", start: "81.1", text: "Tell me baby" }
  ];

  /* Defining correct answers array */
  answers = [
    "But the very next day you gave it away",
    "I'll give it to someone special",
    "I keep my distance",
    "Tell me baby",
  ];

  createSubtitle();

  function createSubtitle() {
    var element;
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i * 2);
      element.innerText = syncData[i].text;
      subtitles.appendChild(element);
    }
  }

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
      (audio.currentTime >= 21.5 && audio.currentTime <= 21.8) ||
      (audio.currentTime >= 30.75 && audio.currentTime <= 31.019) ||
      (audio.currentTime >= 76.15 && audio.currentTime <= 76.45) ||
      (audio.currentTime >= 80.85 && audio.currentTime <= 81.15)
    ) {
      if (
        stopped == false &&
        subtitles.children[questionNumber * 2].style.backgroundColor == "lime"
      ) {
        stopAudio();
        console.log("parado musica");
        console.log(questionNumber);
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          console.log("changed input");
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

  function textInputFunc(number) {
    console.log("running text input");
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    textinput = document.createElement("input");
    textinput.setAttribute("type", "text");
    subtitles.children[number * 2 + 1].appendChild(textinput);
    submit.setAttribute("value", "Check");
    subtitles.children[number * 2 + 1].appendChild(submit);
  }

  function voiceInputFunc(number) {
    /* Setting up voice recognition */
    console.log("running voice input");

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

    console.log("voice recognition on");
  }

  var toggle = document.getElementById("voiceInput");
  toggle.addEventListener("change", function () {
    // Changing type of input on click
    console.log("changed input");
    if (!toggle.checked) {
      inputTypeFunc = textInputFunc;
    } else {
      inputTypeFunc = voiceInputFunc;
    }
  });

  /* Setting up and listening for answer submission, checking answer and showing feedback accordingly */
  submit.addEventListener("click", playclick);
  function playclick() {
    console.log("clicking submit");
    // console.log(submit);
    var answer;
    if (toggle.checked) {
      answer = voiceinput.innerText; // Assigning user input to answer var
    } else {
      answer = textinput.value;
    }
    // console.log(answer);
    console.log(questionNumber);

    if (answer.length > 38) {
      answer = answer.slice(0, 38);
    }

    var correct = checkAnswer(questionNumber, answer);

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
      setTimeout(playAudio, 500); // Resume music after evaluating answer
    }
    stopped = false;
    if (questionNumber == 4) {
      audio.play();
      played[0] = true;
      audio.removeEventListener("timeupdate", mainfunction);
      audio.removeEventListener("timeupdate", highlightsubs);
      submit.removeEventListener("click", playclick);
      play.style.backgroundColor = "#d7ebf7";
      play.style.pointerEvents = "all";
      setTimeout(function () {
        songEndScreen(song, points);
      }, 2000);
    }
  }
}

/* All I Want for Christmas song function: */
function playAlliwantforxmas() {
  voiceLanguage = "en-US";
  questionNumber = 0;
  var song = "All I Want for Christmas by Mariah Carey";
  /* Setting up point system */
  var points = 0;
  var showpoints = document.getElementById("score");
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  buttons = document.querySelector("#song #buttons"); // Display song buttons
  buttons.style.display = "flex";

  /* Creating the music player */
  var play = document.getElementById("play");

  /* When click on start music, play music, display playing info and microphone status */
  play.addEventListener("click", function startPlaying() {
    playAudio();
    var maininfo = document.querySelector("#maininfo p");
    maininfo.innerHTML =
      "<span>¡Vamos allá!</span><br><br> Cada vez que pare la música escribe o canta el siguiente verso!<br><br>Clicka en el micrófono para hablar y vuelve a clickar para confirmar!<br><br>";
    document.querySelector("#voiceinfo p:first-child").style.visibility =
      "visible";
    document.querySelector("#maininfo p span:first-of-type").style.paddingLeft =
      "40px";
  });

  var audio = document.getElementById("audio");
  audio.setAttribute(
    "src",
    "./media/songs/alliwantforxmas/alliwantforxmas.mp3"
  );

  playAudio = function () {
    // Playing audio function
    // Start music function
    audio.play();
    play.style.backgroundColor = "lime";
    play.style.pointerEvents = "none";
  };

  function stopAudio() {
    // Stopping Audio function
    // Stop music function
    audio.pause();
    play.style.backgroundColor = "#d7ebf7";
  }

  let volume = document.getElementById("volume-control"); // Setting up volume control
  volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
  });

  /* Setting up highlited subtitles */

  var subtitles = document.getElementById("subtitles");

  var syncData = [
    // Subtitles timing object array
    {
      end: "15.7",
      start: "9.5",
      text: "I don′t want a lot for Christmas",
    },
    //{ end: "20", start: "15.9", text: "There is just one thing I need" },
    { end: "23.8", start: "20.2", text: "I don′t care about the presents" },
    //{ end: "27.2", start: "24", text: "Underneath the Christmas tree" },
    { end: "31.2", start: "27.4", text: "I just want you for my own" },
    //{ end: "35.8", start: "31.4", text: "More than you could ever know" },
    { end: "41.8", start: "36", text: "Make my wish come true oh" },
    //{ end: "50", start: "42", text: "All I want for Christmas is you" }
  ];

  /* Defining correct answers array */
  answers = [
    "There is just one thing I need",
    "Underneath the Christmas tree",
    "More than you could ever know",
    "All I want for Christmas is you",
  ];

  createSubtitle();

  function createSubtitle() {
    var element;
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i * 2);
      element.innerText = syncData[i].text;
      subtitles.appendChild(element);
    }
  }

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
      (audio.currentTime >= 15.65 && audio.currentTime <= 15.95) ||
      (audio.currentTime >= 23.75 && audio.currentTime <= 24.05) ||
      (audio.currentTime >= 31.15 && audio.currentTime <= 31.45) ||
      (audio.currentTime >= 41.75 && audio.currentTime <= 42.05)
    ) {
      if (
        stopped == false &&
        subtitles.children[questionNumber * 2].style.backgroundColor == "lime"
      ) {
        stopAudio();
        console.log("parado musica");
        console.log(questionNumber);
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          console.log("changed input");
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

  function textInputFunc(number) {
    console.log("running text input");
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    textinput = document.createElement("input");
    textinput.setAttribute("type", "text");
    subtitles.children[number * 2 + 1].appendChild(textinput);
    submit.setAttribute("value", "Check");
    subtitles.children[number * 2 + 1].appendChild(submit);
  }

  function voiceInputFunc(number) {
    /* Setting up voice recognition */
    console.log("running voice input");

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

    console.log("voice recognition on");
  }

  var toggle = document.getElementById("voiceInput");
  toggle.addEventListener("change", function () {
    // Changing type of input on click
    console.log("changed input");
    if (!toggle.checked) {
      inputTypeFunc = textInputFunc;
    } else {
      inputTypeFunc = voiceInputFunc;
    }
  });

  /* Setting up and listening for answer submission, checking answer and showing feedback accordingly */
  submit.addEventListener("click", playclick);
  function playclick() {
    console.log("clicking submit");
    // console.log(submit);
    var answer;
    if (toggle.checked) {
      answer = voiceinput.innerText; // Assigning user input to answer var
    } else {
      answer = textinput.value;
    }
    // console.log(answer);
    console.log(questionNumber);

    if (answer.length > 38) {
      answer = answer.slice(0, 38);
    }

    var correct = checkAnswer(questionNumber, answer);

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
      setTimeout(playAudio, 500); // Resume music after evaluating answer
    }
    stopped = false;
    if (questionNumber == 4) {
      setTimeout(audio.play(), 2000);
      played[1] = true;
      audio.removeEventListener("timeupdate", mainfunction);
      audio.removeEventListener("timeupdate", highlightsubs);
      submit.removeEventListener("click", playclick);
      play.style.backgroundColor = "#d7ebf7";
      play.style.pointerEvents = "all";
      setTimeout(function () {
        songEndScreen(song, points);
      }, 2000);
    }
  }
}

/* Rudolph the Red Nosed Reindeer song function: */
function playRudolph() {
  voiceLanguage = "en-US";
  questionNumber = 0;
  var song = "Rudolph the Red Nosed Reindeer";
  /* Setting up point system */
  var points = 0;
  var showpoints = document.getElementById("score");
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  buttons = document.querySelector("#song #buttons"); // Display song buttons
  buttons.style.display = "flex";

  /* Creating the music player */
  var play = document.getElementById("play");

  /* When click on start music, play music, display playing info and microphone status */
  play.addEventListener("click", function startPlaying() {
    playAudio();
    var maininfo = document.querySelector("#maininfo p");
    maininfo.innerHTML =
      "<span>¡Vamos allá!</span><br><br> Cada vez que pare la música escribe o canta el siguiente verso!<br><br>Clicka en el micrófono para hablar y vuelve a clickar para confirmar!<br><br>";
    document.querySelector("#voiceinfo p:first-child").style.visibility =
      "visible";
    document.querySelector("#maininfo p span:first-of-type").style.paddingLeft =
      "40px";
  });

  var audio = document.getElementById("audio");
  audio.setAttribute("src", "./media/songs/rudolph/rudolph.mp3");

  playAudio = function () {
    // Playing audio function
    // Start music function
    audio.play();
    play.style.backgroundColor = "lime";
    play.style.pointerEvents = "none";
  };

  function stopAudio() {
    // Stopping Audio function
    // Stop music function
    audio.pause();
    play.style.backgroundColor = "#d7ebf7";
  }

  let volume = document.getElementById("volume-control"); // Setting up volume control
  volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
  });

  /* Setting up highlited subtitles */

  var subtitles = document.getElementById("subtitles");

  var syncData = [
    // Subtitles timing object array
    {
      end: "26.5",
      start: "24",
      text: "Rudolph the red-nosed reindeer",
    },
    //{ end: "29.5", start: "27", text: "Had a very shiny nose" },
    { end: "32.5", start: "29.7", text: "And if you ever saw him" },
    //{ end: "35", start: "33", text: "You would even say it glows" },
    { end: "38", start: "35.8", text: "All of the other reindeer" },
    //{ end: "41", start: "38.5", text: "Used to laugh and call him names" },
    { end: "43.5", start: "41.5", text: "They never let poor Rudolph" },
    //{ end: "46.5", start: "44", text: "Join in any reindeer games" }
  ];

  /* Defining correct answers array */
  answers = [
    "Had a very shiny nose",
    "You would even say it glows",
    "Used to laugh and call him names",
    "Join in any reindeer games",
  ];

  createSubtitle();

  function createSubtitle() {
    var element;
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i * 2);
      element.innerText = syncData[i].text;
      subtitles.appendChild(element);
    }
  }

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
      (audio.currentTime >= 26.5 && audio.currentTime <= 26.8) ||
      (audio.currentTime >= 32.2 && audio.currentTime <= 32.5) ||
      (audio.currentTime >= 38 && audio.currentTime <= 38.3) ||
      (audio.currentTime >= 43.5 && audio.currentTime <= 43.8)
    ) {
      if (
        stopped == false &&
        subtitles.children[questionNumber * 2].style.backgroundColor == "lime"
      ) {
        stopAudio();
        console.log("parado musica");
        console.log(questionNumber);
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          console.log("changed input");
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

  function textInputFunc(number) {
    console.log("running text input");
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    textinput = document.createElement("input");
    textinput.setAttribute("type", "text");
    subtitles.children[number * 2 + 1].appendChild(textinput);
    submit.setAttribute("value", "Check");
    subtitles.children[number * 2 + 1].appendChild(submit);
  }

  function voiceInputFunc(number) {
    /* Setting up voice recognition */
    console.log("running voice input");

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

    console.log("voice recognition on");
  }

  var toggle = document.getElementById("voiceInput");
  toggle.addEventListener("change", function () {
    // Changing type of input on click
    console.log("changed input");
    if (!toggle.checked) {
      inputTypeFunc = textInputFunc;
    } else {
      inputTypeFunc = voiceInputFunc;
    }
  });

  /* Setting up and listening for answer submission, checking answer and showing feedback accordingly */
  submit.addEventListener("click", playclick);
  function playclick() {
    console.log("clicking submit");
    // console.log(submit);
    var answer;
    if (toggle.checked) {
      answer = voiceinput.innerText; // Assigning user input to answer var
    } else {
      answer = textinput.value;
    }
    // console.log(answer);
    console.log(questionNumber);

    if (answer.length > 38) {
      answer = answer.slice(0, 38);
    }

    var correct = checkAnswer(questionNumber, answer);

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
      setTimeout(playAudio, 500); // Resume music after evaluating answer
    }
    stopped = false;
    if (questionNumber == 4) {
      setTimeout(audio.play(), 2000);
      played[2] = true;
      audio.removeEventListener("timeupdate", mainfunction);
      audio.removeEventListener("timeupdate", highlightsubs);
      submit.removeEventListener("click", playclick);
      play.style.backgroundColor = "#d7ebf7";
      play.style.pointerEvents = "all";
      setTimeout(function () {
        songEndScreen(song, points);
      }, 2000);
    }
  }
}

/* Feliz Navidad song function: */
function playFeliznavidad() {
  voiceLanguage = "es-ES";
  questionNumber = 0;
  var song = "Feliz Navidad";
  /* Setting up point system */
  var points = 0;
  var showpoints = document.getElementById("score");
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  buttons = document.querySelector("#song #buttons"); // Display song buttons
  buttons.style.display = "flex";

  /* Creating the music player */
  var play = document.getElementById("play");

  /* When click on start music, play music, display playing info and microphone status */
  play.addEventListener("click", function startPlaying() {
    playAudio();
    var maininfo = document.querySelector("#maininfo p");
    maininfo.innerHTML =
      "<span>¡Vamos allá!</span><br><br> Cada vez que pare la música escribe o canta el siguiente verso!<br><br>Clicka en el micrófono para hablar y vuelve a clickar para confirmar!<br><br>";
    document.querySelector("#voiceinfo p:first-child").style.visibility =
      "visible";
    document.querySelector("#maininfo p span:first-of-type").style.paddingLeft =
      "40px";
  });

  var audio = document.getElementById("audio");
  audio.setAttribute("src", "./media/songs/feliznavidad/feliznavidad.mp3");

  playAudio = function () {
    // Playing audio function
    // Start music function
    audio.play();
    play.style.backgroundColor = "lime";
    play.style.pointerEvents = "none";
  };

  function stopAudio() {
    // Stopping Audio function
    // Stop music function
    audio.pause();
    play.style.backgroundColor = "#d7ebf7";
  }

  let volume = document.getElementById("volume-control"); // Setting up volume control
  volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
  });

  /* Setting up highlited subtitles */

  var subtitles = document.getElementById("subtitles");

  var syncData = [
    // Subtitles timing object array
    {
      end: "15",
      start: "13",
      text: "Feliz Navidad",
    },
    //{ end: "18.5", start: "16", text: "Feliz Navidad" },
    { end: "21", start: "20", text: "Feliz Navidad" },
    //{ end: "25", start: "21.3", text: "Próspero año y felicidad" },
    { end: "42", start: "39.5", text: "I want to wish you a Merry Christmas" },
    //{ end: "46", start: "43", text: "I want to wish you a Merry Christmas" },
    { end: "48.5", start: "46.5", text: "I want to wish you a Merry Christmas" },
    //{ end: "53", start: "49", text: "From the bottom of my heart" }
  ];

  /* Defining correct answers array */
  answers = [
    "Feliz Navidad",
    "Próspero año y felicidad",
    "I want to wish you a Merry Christmas",
    "From the bottom of my heart",
  ];

  createSubtitle();

  function createSubtitle() {
    var element;
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i * 2);
      element.innerText = syncData[i].text;
      subtitles.appendChild(element);
    }
  }

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
      (audio.currentTime >= 15.5 && audio.currentTime <= 15.8) ||
      (audio.currentTime >= 21 && audio.currentTime <= 21.3) ||
      (audio.currentTime >= 42.5 && audio.currentTime <= 42.8) ||
      (audio.currentTime >= 48.9 && audio.currentTime <= 49.2)
    ) {
      if (
        stopped == false &&
        subtitles.children[questionNumber * 2].style.backgroundColor == "lime"
      ) {
        stopAudio();
        if (questionNumber == 2) {
          voiceLanguage = "en-US";
        }
        console.log("parado musica");
        console.log(questionNumber);
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          console.log("changed input");
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

  function textInputFunc(number) {
    console.log("running text input");
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    textinput = document.createElement("input");
    textinput.setAttribute("type", "text");
    subtitles.children[number * 2 + 1].appendChild(textinput);
    submit.setAttribute("value", "Check");
    subtitles.children[number * 2 + 1].appendChild(submit);
  }

  function voiceInputFunc(number) {
    /* Setting up voice recognition */
    console.log("running voice input");

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

    console.log("voice recognition on");
  }

  var toggle = document.getElementById("voiceInput");
  toggle.addEventListener("change", function () {
    // Changing type of input on click
    console.log("changed input");
    if (!toggle.checked) {
      inputTypeFunc = textInputFunc;
    } else {
      inputTypeFunc = voiceInputFunc;
    }
  });

  /* Setting up and listening for answer submission, checking answer and showing feedback accordingly */
  submit.addEventListener("click", playclick);
  function playclick() {
    console.log("clicking submit");
    // console.log(submit);
    var answer;
    if (toggle.checked) {
      answer = voiceinput.innerText; // Assigning user input to answer var
    } else {
      answer = textinput.value;
    }
    // console.log(answer);
    console.log(questionNumber);

    if (answer.length > 38) {
      answer = answer.slice(0, 38);
    }

    var correct = checkAnswer(questionNumber, answer);

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
      setTimeout(playAudio, 500); // Resume music after evaluating answer
    }
    stopped = false;
    if (questionNumber == 4) {
      setTimeout(audio.play(), 2000);
      played[3] = true;
      audio.removeEventListener("timeupdate", mainfunction);
      audio.removeEventListener("timeupdate", highlightsubs);
      submit.removeEventListener("click", playclick);
      play.style.backgroundColor = "#d7ebf7";
      play.style.pointerEvents = "all";
      setTimeout(function () {
        songEndScreen(song, points);
      }, 2000);
    }
  }
}

/* Campana sobre Campana song function: */
function playCampana() {
  voiceLanguage = "es-ES";
  questionNumber = 0;
  var song = "Campana sobre campana";
  /* Setting up point system */
  var points = 0;
  var showpoints = document.getElementById("score");
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  buttons = document.querySelector("#song #buttons"); // Display song buttons
  buttons.style.display = "flex";

  /* Creating the music player */
  var play = document.getElementById("play");

  /* When click on start music, play music, display playing info and microphone status */
  play.addEventListener("click", startPlaying);

  function startPlaying() {
    playAudio();
    var maininfo = document.querySelector("#maininfo p");
    maininfo.innerHTML =
      "<span>¡Vamos allá!</span><br><br> Cada vez que pare la música escribe o canta el siguiente verso!<br><br>Clicka en el micrófono para hablar y vuelve a clickar para confirmar!<br><br>";
    document.querySelector("#voiceinfo p:first-child").style.visibility =
      "visible";
    document.querySelector("#maininfo p span:first-of-type").style.paddingLeft =
      "40px";
  }

  var audio = document.getElementById("audio");
  audio.setAttribute("src", "./media/songs/campana/campana.mp3");

  playAudio = function () {
    // Playing audio function
    // Start music function
    audio.play();
    play.style.backgroundColor = "lime";
    play.style.pointerEvents = "none";
    // setTimeout(songEndScreen(song, points), 5000);
  };

  function stopAudio() {
    // Stopping Audio function
    // Stop music function
    audio.pause();
    play.style.backgroundColor = "#d7ebf7";
  }

  let volume = document.getElementById("volume-control"); // Setting up volume control
  volume.addEventListener("change", function (e) {
    audio.volume = e.currentTarget.value / 100;
  });

  /* Setting up highlited subtitles */

  var subtitles = document.getElementById("subtitles");

  var syncData = [
    // Subtitles timing object array
    {
      end: "18.5",
      start: "15",
      text: "Campana sobre campana",
    },
    //{ end: "23", start: "19", text: "Y sobre campana una" },
    { end: "27", start: "23.5", text: "Asómate a la ventana" },
    //{ end: "31", start: "28", text: "Verás al Niño en la cuna" },
    { end: "32.5", start: "31.5", text: "Belén" },
    //{ end: "34", start: "32.8", text: "Campanas de Belén" },
    { end: "36.5", start: "34.5", text: "Que los ángeles tocan" },
    //{ end: "38", start: "37", text: "Qué nuevas me traéis" }
  ];

  /* Defining correct answers array */
  answers = [
    "Y sobre campana una",
    "Verás al Niño en la cuna",
    "Campanas de Belén",
    "Qué nuevas me traéis",
  ];

  createSubtitle();

  function createSubtitle() {
    var element;
    for (var i = 0; i < syncData.length; i++) {
      element = document.createElement("span");
      element.setAttribute("id", "c_" + i * 2);
      element.innerText = syncData[i].text;
      subtitles.appendChild(element);
    }
  }

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
      (audio.currentTime >= 18.5 && audio.currentTime <= 18.8) ||
      (audio.currentTime >= 27 && audio.currentTime <= 27.3) ||
      (audio.currentTime >= 32.2 && audio.currentTime <= 32.5) ||
      (audio.currentTime >= 36.7 && audio.currentTime <= 37)
    ) {
      if (
        stopped == false &&
        subtitles.children[questionNumber * 2].style.backgroundColor == "lime"
      ) {
        stopAudio();
        console.log("parado musica");
        console.log(questionNumber);
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          console.log("changed input");
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

  function textInputFunc(number) {
    console.log("running text input");
    var subtitles = document.getElementById("subtitles");
    subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
    textinput = document.createElement("input");
    textinput.setAttribute("type", "text");
    subtitles.children[number * 2 + 1].appendChild(textinput);
    submit.setAttribute("value", "Check");
    subtitles.children[number * 2 + 1].appendChild(submit);
  }

  function voiceInputFunc(number) {
    /* Setting up voice recognition */
    console.log("running voice input");

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

    console.log("voice recognition on");
  }

  var toggle = document.getElementById("voiceInput");
  toggle.addEventListener("change", function () {
    // Changing type of input on click
    console.log("changed input");
    if (!toggle.checked) {
      inputTypeFunc = textInputFunc;
    } else {
      inputTypeFunc = voiceInputFunc;
    }
  });

  /* Setting up and listening for answer submission, checking answer and showing feedback accordingly */
  submit.addEventListener("click", playclick);
  function playclick() {
    console.log("clicking submit");
    // console.log(submit);
    var answer;
    if (toggle.checked) {
      answer = voiceinput.innerText; // Assigning user input to answer var
    } else {
      answer = textinput.value;
    }
    // console.log(answer);
    console.log(questionNumber);

    if (answer.length > 38) {
      answer = answer.slice(0, 38);
    }

    var correct = checkAnswer(questionNumber, answer);

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
      setTimeout(playAudio, 500); // Resume music after evaluating answer
    }
    stopped = false;
    if (questionNumber == 4) {
      setTimeout(audio.play(), 2000); // won't work because invoking function instead of citing
      played[4] = true;
      audio.removeEventListener("timeupdate", mainfunction);
      audio.removeEventListener("timeupdate", highlightsubs);
      submit.removeEventListener("click", playclick);
      play.style.backgroundColor = "#d7ebf7";
      play.style.pointerEvents = "all";
      setTimeout(function () {
        songEndScreen(song, points);
      }, 2000);
    }
  }
}

/* Display song score and thank you */
function songEndScreen(song, points) {
  increasePoints(points);
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

  let done = played.every((value) => {
    return value == true;
  });

  // let done = played.some((value) => {
  //   return value == true;
  // });

  if (done) {
    displayEndScreen();
  }

  // playbutton.style.backgroundColor = "#d7ebf7 !important";
  // playbutton.style.pointerEvents = "all !important";
  // playbutton.style.cursor = "pointer";
}

/* On click continuar at songEndScreen go back to store */
function backToStore() {
  audio = document.getElementById("audio");
  audio.pause();
  audio.currentTime = 0;
  bgmusic.play();
  document.getElementById("song").style.display = "none";
  document.getElementsByClassName("grid-container")[0].style.display = "grid";
  document.getElementById("songEnd").style.display = "none";
}

function displayEndScreen() {
  document.getElementById("song").style.display = "none";
  document.getElementById("endScreen").style.display = "inline-block";
  let score = document.getElementById("pointsCounter").dataset.points;
  document.getElementById("finalScore").innerHTML = score;
}

function checkAnswer(number, text) {
  console.log("checking asnwer");
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

var startButton;
var voiceLanguage = "en-US";

function voiceRegnition() {
  var final_transcript = "";
  var recognizing = false;
  var ignore_onend;
  var start_timestamp;
  start_img = document.getElementById("start_img");
  if (!("webkitSpeechRecognition" in window)) {
    upgrade();
  } else {
    start_button.style.display = "inline-block";
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function () {
      recognizing = true;
      showInfo("info_speak_now");
      start_img.src = "/Project1/webApp/game_alex/media/api/mic-animate.gif";
      let currentQuestion = questionNumber; // Set current question to check if input is moving between questions
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

    recognition.onend = function () {
      if(questionNumber != currentQuestion){ // If input has moved to another question ignore onend so it starts recognition again
        ignore_onend = true;
        //final_transcript = ""; ????
      }
      recognizing = false;
      if (ignore_onend) {
        return;
      }
      start_img.src = "/Project1/webApp/game_alex/media/api/mic.gif";
      if (!final_transcript) {
        showInfo("info_start");
        return;
      }
      // Adding answer recognition
      submit.click();
      console.log("Voice Anwser is correct!");

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
