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
  setTimeout(launchMusic, 1000);
}

function launchMusic() {
  document.getElementsByClassName("grid-container")[0].style.display = "none"; // Removing background display

  var music = document.getElementById("song");
  music.className = "overlay"; // Activating music screen
  music.style.display = "flex";

  var toggle = document.getElementById("voiceInput");
  toggle.checked = true; // Choosing voice input by default

  playLastxmas(); //Playing music
}

var playAudio; // Defining playAudio function in outer scope

/* LasxMas song function: */
function playLastxmas() {
  /* Setting up point system */
  var points = 0;
  var showpoints = document.getElementById("score");
  updatePoints();
  function updatePoints() {
    showpoints.innerHTML = points.toString() + " / 4";
  }

  var questionNumber = 0; // Sets the answer number we're on

  /* Creating the music player */
  var play = document.getElementById("play");
  play.addEventListener("click", function () {
    playAudio();
    var maininfo = document.querySelector("#maininfo p"); //check queryselector
    maininfo.innerHTML =
      "<span>¡Vamos allá!...</span><br><br> Cada vez que pare la música introduce el siguiente verso en la cajita correspondiente (opción text input) o haz click en el micrófono, canta tu respuesta y haz click otra vez para confirmarla!<br><br>¡Recuerda que <u>puedes</u> cambiar el tipo de input (texto o voz) durante la canción!";
  }); // Onclick start music

  var audio = document.getElementById("audio");

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
    // audio.currentTime = syncData[questionNumber * 2].end; //setting currentTime to last verse's endtime
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
  var answers = [
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

  /* Appending answer spans */
  for (i = 0; i < 4; ++i) {
    element = document.createElement("span");
    element.innerText = "";
    element.setAttribute("id", "c_" + (i * 2 + 1));
    subtitles.insertBefore(element, subtitles.children[i * 2 + 1]);
  }

  var stopped = false; // The music is off (false by default)

  /* Stop music when reach input point */
  audio.addEventListener("timeupdate", function (e) {
    syncData.forEach(function (element, index, array) {
      if (
        audio.currentTime >= element.start &&
        audio.currentTime <= element.end
      ) {
        subtitles.children[index * 2].style.backgroundColor = "lime";
      }
    });
    // console.log(audio.currentTime);
    if (
      (audio.currentTime >= 21.5 && audio.currentTime <= 21.8) ||
      (audio.currentTime >= 30.75 && audio.currentTime <= 31.019) ||
      (audio.currentTime >= 76.15 && audio.currentTime <= 76.45) ||
      (audio.currentTime >= 80.85 && audio.currentTime <= 81.15)
    ) {
      console.log(questionNumber);
      /* Check music is stopped and previous verse is played before stopping and asking for input */
      var previousSpan = subtitles.children[questionNumber * 2].style;
      if (stopped == false && previousSpan.backgroundColor == "lime") {
        stopAudio();
        console.log("parado musica");
        stopped = true;
        toggle.addEventListener("change", function () {
          // Changing type of input on click
          console.log("changed input");
          if (!toggle.checked) {
            inputTypeFunc = textInputFunc;
          } else {
            inputTypeFunc = voiceInputFunc;
          }
          inputTypeFunc(questionNumber);
        });
        inputTypeFunc(questionNumber);
      }
    }
  });

  var inputTypeFunc = voiceInputFunc; // Defining the initial type of input

  var submit = document.createElement("input");

  function textInputFunc(number) {
    if (stopped == true) {
      console.log("running text input");
      var subtitles = document.getElementById("subtitles");
      subtitles.children[number * 2 + 1].innerHTML = ""; // erasing previous input type
      input = document.createElement("input");
      input.setAttribute("type", "text");
      subtitles.children[number * 2 + 1].appendChild(input);
      submit.setAttribute("type", "submit");
      submit.setAttribute("value", "Check");
      subtitles.children[number * 2 + 1].appendChild(submit);
    }
  }

  function voiceInputFunc(number) {
    if (stopped == true) {
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
      img.setAttribute("src", "./media/api/mic.gif");
      img.setAttribute("alt", "Start");
      button.appendChild(img);

      voiceRegnition();

      // input = document.getElementById('final_span');
      // submit = document.getElementById('start_button');
      console.log("voice recognition on");
    }
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
  submit.addEventListener("click", function () {
    console.log("clicking submit");
    // console.log(submit);
    var answer = input.value; // Assigning user input to answer var
    // console.log(answer);
    console.log(questionNumber);

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
    setTimeout(playAudio, 500); // Resume music after evaluating answer
    ++questionNumber; // Move to the next question
  });

  function checkAnswer(number, text) {
    console.log("checking asnwer");
    var correct = false;
    switch (number) {
      case 0:
        if (text.toLowerCase() === answers[number].toLocaleLowerCase()) {
          correct = true;
        }
        break;
      case 1:
        if (text.toLowerCase() === "i'll give it to someone special") {
          correct = true;
        }
        break;
      case 2:
        if (text.toLowerCase() === "i keep my distance") {
          correct = true;
        }
        break;
      case 3:
        if (text.toLowerCase() === "tell me baby") {
          correct = true;
        }
        break;
    }
    stopped = false;
    return correct;
  }
}

var startButton;

function voiceRegnition() {
  var final_transcript = "";
  var recognizing = false;
  var ignore_onend;
  var start_timestamp;
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
      start_img.src = "./media/api/mic-animate.gif";
    };

    recognition.onerror = function (event) {
      if (event.error == "no-speech") {
        start_img.src = "./media/api/mic.gif";
        showInfo("info_no_speech");
        ignore_onend = true;
      }
      if (event.error == "audio-capture") {
        start_img.src = "./media/api/mic.gif";
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
      recognizing = false;
      if (ignore_onend) {
        return;
      }
      start_img.src = "./media/api/mic.gif";
      if (!final_transcript) {
        showInfo("info_start");
        return;
      }
      showInfo("");
      if (window.getSelection) {
        window.getSelection().removeAllRanges();
        var range = document.createRange();
        range.selectNode(document.getElementById("final_span"));
        window.getSelection().addRange(range);
      }
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
    recognition.lang = "en-US";
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = "";
    interim_span.innerHTML = "";
    start_img.src = "./media/api/mic-slash.gif";
    showInfo("info_allow");
    start_timestamp = event.timeStamp;
  };

  function showInfo(s) {
    var info = document.getElementById("voiceinfo");
    if (s) {
      for (var child = info.firstChild; child; child = child.nextSibling) {
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
