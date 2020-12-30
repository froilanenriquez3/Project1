
let hat;
let shirt;
let pants;
let shoes;

let pointLimit = document.querySelector('#counter').dataset.limit;

let previousNum =0;

let triesLimit = 5;

let myMusic;

console.log(pointLimit);

//Start game: hide start screen, generate new combo, set score to 0, start music 
function startGame() {
  let score = document.querySelector('#counter').dataset.points;
  newCombo(() => { console.log('Game started') }, resetTries, resetFeedback);
  //initPoints();

  document.querySelector('#counter').innerHTML = 'Score: ' + score;

  document.querySelector('.startscreen').style.display = "none";
  document.querySelector('.endscreen').style.display = "none";
  document.querySelector('.mainscreen').style.display = "block";

  window.myMusic = new sound("img/gamemusic3.mp3");
  play();

}

function endScreen() {
  document.querySelector('.mainscreen').style.display = "none";
  document.querySelector('.endscreen').style.display = "flex";
  window.myMusic.stop();
}

function howTo(){
  mute();
  document.querySelector('.startscreen').style.display = "flex";
  document.querySelector('.mainscreen').style.display = "none";

}

//Music functions

function mute() {
  window.myMusic.stop();

  document.querySelector('#music').setAttribute("onclick", "play()");

  //document.querySelector('#music').innerHTML = "Music: Off";

}

function play() {
  window.myMusic.play();

  document.querySelector('#music').setAttribute("onclick", "mute()");

  //document.querySelector('#music').innerHTML = "Music: On";
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
  let attempts = +document.querySelector('#tries').dataset.tries;
  attempts = 0;
  document.querySelector('#tries').innerHTML = "Tries: 0/" + triesLimit;

  document.querySelector('#tries').dataset.tries = attempts;
}

function increaseTries(callback1) {
  let attempts = +document.querySelector('#tries').dataset.tries;

  if (callback1()) {
    attempts++;
    //console.log(attempts);
    checkCombo();
  }

  if (attempts < triesLimit) {
    document.querySelector('#tries').innerHTML = "Tries: " + attempts + "/" + triesLimit;
  } else if (attempts == 5) {
    document.querySelector('#next').disabled = false;
    document.querySelector('#check').disabled = true;
    document.querySelector('#tries').innerHTML = "Tries: " + attempts + "/" + triesLimit;
    document.querySelector('#winner').innerHTML += " Click next";
  }

  document.querySelector('#tries').dataset.tries = attempts;

}

//Points functions

function increasePoints() {
  let score = +document.querySelector('#counter').dataset.points;

  if (score < pointLimit) {
    score += pointLimit/10;

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


function snarkTextGenerator() {
  let num;
  do {
    num = Math.floor((Math.random() * 12) + 1);
  } while (window.previousNum == num);

  window.previousNum = num;

  let message;

  switch (num) {
    case 1:
      message = "I don't like this outfit.";
      break;
    case 2:
      message = "You have the sense of fashion of a blind person.";
      break;
    case 3:
      message = "I'd rather wear a paper bag over my head.";
      break;
    case 4:
      message = "Do I look like I want to look like a clown?";
      break;
    case 5:
      message = "My other grandma gets me way nicer clothes.";
      break;
    case 6:
      message = "You should consider getting a job as a fashion designer... NOT!";
      break;
    case 7:
      message = "You don't seriously think I will wear this, do you?";
      break;
    case 8:
      message = "You don't really know what normal people dress up like, do you?";
      break;
    case 9:
      message = "If this is your gift for me, I'm finding a new grandma.";
      break;
    case 10:
      message = "Did you leave your glasses at home!?";
      break;
    case 11:
      message = "No. Just no.";
      break;
    case 12:
      message = "Thanks for the outfit! It'll go nicely with the garbage I have to take out later.";
      break;

    default:
      break;
  }





  return message;
}

//Function to check selected clothes items

function checkCombo() {
  let attempts = document.querySelector('#tries').dataset.tries;
  let checkHat = false;
  let checkShirt = false;
  let checkPants = false;
  let checkShoes = false;

  let text2 = snarkTextGenerator();


  if (document.querySelector(' #hathole').firstChild.id == window.hat) {
    let hat = document.querySelector('#feedhat');
    hat.innerHTML = "Hat ✓";
    hat.style.color = "green";
    checkHat = true;
  } else {
    let hat = document.querySelector('#feedhat');
    hat.innerHTML = "Hat X";
    hat.style.color = "red";
  }

  if (document.querySelector(' #shirthole').firstChild.id == window.shirt) {
    let shirt = document.querySelector('#feedshirt');
    shirt.innerHTML = "Shirt ✓";
    shirt.style.color = "green";
    checkShirt = true;
  } else {
    let shirt = document.querySelector('#feedshirt');
    shirt.innerHTML = "Shirt X";
    shirt.style.color = "red";
  }

  if (document.querySelector(' #pantshole').firstChild.id == window.pants) {
    let pant = document.querySelector('#feedpants');
    pant.innerHTML = "Pants ✓";
    pant.style.color = "green";
    checkPants = true;
  } else {
    let pant = document.querySelector('#feedpants');
    pant.innerHTML = "Pants X";
    pant.style.color = "red";
  }

  if (document.querySelector(' #shoeshole').firstChild.id == window.shoes) {
    let shoe = document.querySelector('#feedshoes');
    shoe.innerHTML = "Shoes ✓";
    shoe.style.color = "green";
    checkShoes = true;
  } else {
    let shoe = document.querySelector('#feedshoes');
    shoe.innerHTML = "Shoes X";
    shoe.style.color = "red";
  }

  if (attempts == triesLimit - 1) {
    text2 = "You're all out of tries!";
  }

  if (checkHat && checkShirt && checkPants && checkShoes) {
    text2 = "You got it!";
    increasePoints();
    displayUpdateScore();
    document.querySelector('#next').disabled = false;
    document.querySelector('#check').disabled = true;
  }



  document.querySelector('#winner').innerHTML = text2;


  document.querySelector('#tries').dataset.tries = attempts;


}

//Function to check if clothes are set

function checkOutfitFull() {
  let dressedUp = false;
  if (document.querySelector('#hathole').hasChildNodes()
    && document.querySelector('#shirthole').hasChildNodes()
    && document.querySelector('#pantshole').hasChildNodes()
    && document.querySelector('#shoeshole').hasChildNodes()
  ) {
    dressedUp = true;
  } else {
    document.querySelector('#winner').innerHTML = "You're missing clothes.";
  }

  return dressedUp;
}

//Function to generate new outfit
function newCombo(callback1, callback2, callback3) {
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
  //console.log(window.hat + " " + window.shirt + " " + window.pants + " " + window.shoes); //DELETE ME

  callback1();
  callback2();
  callback3();

}

function resetFeedback() {
  document.querySelector('#feedhat').innerHTML = "Hat";
  document.querySelector('#feedhat').style.color = "black";

  document.querySelector('#feedshirt').innerHTML = "Shirt";
  document.querySelector('#feedshirt').style.color = "black";

  document.querySelector('#feedpants').innerHTML = "Pants";
  document.querySelector('#feedpants').style.color = "black";

  document.querySelector('#feedshoes').innerHTML = "Shoes";
  document.querySelector('#feedshoes').style.color = "black";


  document.querySelector('#winner').innerHTML = "Click check when you're done";

  document.querySelector('#next').disabled = true;
  document.querySelector('#check').disabled = false;


}

function resetGame() {


  //When game container is updated, copy contents into this string literal
  document.querySelector(".box").innerHTML = ` 
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