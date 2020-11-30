
let hat;
let shirt;
let pants;
let shoes;

let pointLimit = 1000;

let tries;
let triesLimit = 5;

let myMusic;

//Start game: hide start screen, generate new combo, set score to 0, start music 
function startGame() {
  let score = document.querySelector('#counter').dataset.points;
  newCombo();
  //initPoints();

  document.querySelector('#counter').innerHTML = 'Score: ' + score;

  document.querySelector('.startscreen').style.display = "none";
  document.querySelector('.endscreen').style.display = "none";
  document.querySelector('.mainscreen').style.display = "block";

  window.myMusic = new sound("img/gamemusic.mp3");
  window.myMusic.play();

}

function endScreen() {
  document.querySelector('.mainscreen').style.display = "none";
  document.querySelector('.endscreen').style.display = "flex";
  window.myMusic.stop();
}

//Music functions

function mute() {
  window.myMusic.stop();

  setTimeout(function () {
    document.querySelector('#music').setAttribute("onclick", "play()");
  }, 100);
  document.querySelector('#music').innerHTML = "Music: Off";

}

function play() {
  window.myMusic.play();
  setTimeout(function () {
    document.querySelector('#music').setAttribute("onclick", "mute()");
  }, 100);
  document.querySelector('#music').innerHTML = "Music: On";
}

// Sound constructor to add music element to html
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.setAttribute("loop", "true")
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  }
  this.stop = function () {
    this.sound.pause();
  }
}

//Try functions

function resetTries() {
  window.tries = 0;
  document.querySelector('#tries').innerHTML = "Tries: 0/" + triesLimit;
}

function increaseTries() {
  checkCombo();
  window.tries++;

  if (window.tries < triesLimit) {
    document.querySelector('#tries').innerHTML = "Tries: " + window.tries + "/" + triesLimit;
  } else if (window.tries == 5) {
    document.querySelector('#next').disabled = false;
    document.querySelector('#check').disabled = true;
    document.querySelector('#tries').innerHTML = "Tries: " + window.tries + "/" + triesLimit;
    document.querySelector('#winner').innerHTML = "Click next";
  }


}

//Points functions

function increasePoints() {
  let score = +document.querySelector('#counter').dataset.points;
  
  if (score < pointLimit) {
    score += 100;
   
  }
  document.querySelector('#counter').dataset.points = score;
}


function displayUpdateScore() {
  let score = document.querySelector('#counter').dataset.points;
  if (score == pointLimit) {
    document.querySelector('#counter').innerHTML = 'Score: ' + score + " (Point limit)";
  } else {
    document.querySelector('#counter').innerHTML = 'Score: ' + score;
  }

  
}

//Function to check selected clothes items

function checkCombo() {
  let checkHat = false;
  let checkShirt = false;
  let checkPants = false;
  let checkShoes = false;


  let text2 = "Not quite.";

  if (document.querySelector('#hathole').hasChildNodes()
    && document.querySelector('#shirthole').hasChildNodes()
    && document.querySelector('#pantshole').hasChildNodes()
    && document.querySelector('#shoeshole').hasChildNodes()

  ) {
    if (document.querySelector(' #hathole').firstChild.id == window.hat) {
      let hat = document.querySelector('#feedhat');
      hat.innerHTML = "Hat: ✓ ";
      hat.style.color = "green";
      checkHat = true;
    } else {
      let hat = document.querySelector('#feedhat');
      hat.innerHTML = "Hat: X ";
      hat.style.color = "red";
    }

    if (document.querySelector(' #shirthole').firstChild.id == window.shirt) {
      let shirt = document.querySelector('#feedshirt');
      shirt.innerHTML = "Shirt: ✓ ";
      shirt.style.color = "green";
      checkShirt = true;
    } else {
      let shirt = document.querySelector('#feedshirt');
      shirt.innerHTML = "Shirt: X ";
      shirt.style.color = "red";
    }

    if (document.querySelector(' #pantshole').firstChild.id == window.pants) {
      let pant = document.querySelector('#feedpants');
      pant.innerHTML = "Pants: ✓ ";
      pant.style.color = "green";
      checkPants = true;
    } else {
      let pant = document.querySelector('#feedpants');
      pant.innerHTML = "Pants: X ";
      pant.style.color = "red";
    }

    if (document.querySelector(' #shoeshole').firstChild.id == window.shoes) {
      let shoe = document.querySelector('#feedshoes');
      shoe.innerHTML = "Shoes: ✓ ";
      shoe.style.color = "green";
      checkShoes = true;
    } else {
      let shoe = document.querySelector('#feedshoes');
      shoe.innerHTML = "Shoes: X ";
      shoe.style.color = "red";
    }

    if (checkHat && checkShirt && checkPants && checkShoes) {
      text2 = "You got it!";
      increasePoints();
      displayUpdateScore();
      document.querySelector('#next').disabled = false;
      document.querySelector('#check').disabled = true;
    }

    document.querySelector('#winner').innerHTML = text2;
  } else {
    document.querySelector('#winner').innerHTML = "You're missing clothes.";
    window.tries--;
  }


}

//Function to generate new outfit
function newCombo() {
  let hatNum = Math.floor((Math.random() * 6) + 1);
  let shirtNum = Math.floor((Math.random() * 6) + 1);
  let pantsNum = Math.floor((Math.random() * 6) + 1);
  let shoesNum = Math.floor((Math.random() * 6) + 1);

  switch (hatNum) {
    case 1:
      window.hat = "draghat1";
      break;
    case 2:
      window.hat = "draghat2";
      break;
    case 3:
      window.hat = "draghat3";
      break;
    case 4:
      window.hat = "draghat4";
      break;
    case 5:
      window.hat = "draghat5";
      break;
    case 6:
      window.hat = "draghat6";
      break;
    default:
      break;
  }

  switch (shirtNum) {
    case 1:
      window.shirt = "dragshirt1";
      break;
    case 2:
      window.shirt = "dragshirt2";
      break;
    case 3:
      window.shirt = "dragshirt3";
      break;
    case 4:
      window.shirt = "dragshirt4";
      break;
    case 5:
      window.shirt = "dragshirt5";
      break;
    case 6:
      window.shirt = "dragshirt6";
      break;
    default:
      break;
  }

  switch (pantsNum) {
    case 1:
      window.pants = "dragpants1";
      break;
    case 2:
      window.pants = "dragpants2";
      break;
    case 3:
      window.pants = "dragpants3";
      break;
    case 4:
      window.pants = "dragpants4";
      break;
    case 5:
      window.pants = "dragpants5";
      break;
    case 6:
      window.pants = "dragpants6";
      break;
    default:
      break;
  }


  switch (shoesNum) {
    case 1:
      window.shoes = "dragshoes1";
      break;
    case 2:
      window.shoes = "dragshoes2";
      break;
    case 3:
      window.shoes = "dragshoes3";
      break;
    case 4:
      window.shoes = "dragshoes4";
      break;
    case 5:
      window.shoes = "dragshoes5";
      break;
    case 6:
      window.shoes = "dragshoes6";
      break;
    default:
      break;
  }
  console.log(window.hat + " " + window.shirt + " " + window.pants + " " + window.shoes); //DELETE ME

  resetGame();
  resetTries();
  resetFeedback();

}

function resetFeedback() {
  document.querySelector('#feedhat').innerHTML = "Hat: ";
  document.querySelector('#feedhat').style.color="black";
  document.querySelector('#feedshirt').innerHTML = "Shirt: ";
  document.querySelector('#feedshirt').style.color="black";
  document.querySelector('#feedpants').innerHTML = "Pants: ";
  document.querySelector('#feedpants').style.color="black";
  document.querySelector('#feedshoes').innerHTML = "Shoes: ";
  document.querySelector('#feedshoes').style.color="black";
  

  document.querySelector('#winner').innerHTML = "Click check when you're done";

  document.querySelector('#next').disabled = true;
  document.querySelector('#check').disabled = false;


}

function resetGame() {


  //When game container is updated, copy contents into this string literal
  document.querySelector(".container").innerHTML = ` 
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
`;
}