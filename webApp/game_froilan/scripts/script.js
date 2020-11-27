
let hat;
let shirt;
let pants;
let shoes;

let points;
let pointLimit = 1000;

let tries;
let triesLimit = 5;

let myMusic;

//Start game: hide start screen, generate new combo, set score to 0, start music 
function startGame(){
  newCombo();
  initPoints();
  document.querySelector('#counter').innerHTML = 'Score: ' + window.points;
  console.log(window.points);
  document.querySelector('.startscreen').style.display = "none";
  document.querySelector('.endscreen').style.display = "none";
  document.querySelector('.mainscreen').style.display = "block";
  window.myMusic = new sound("img/gamemusic.mp3");
  //window.myMusic.play();

}

function endScreen(){
  document.querySelector('.mainscreen').style.display = "none";
  document.querySelector('.endscreen').style.display = "flex";
}

//Music functions

function mute(){
  window.myMusic.stop();

  setTimeout(function(){
    document.querySelector('#music').setAttribute("onclick", "play()");
  }, 100);
  document.querySelector('#music').innerHTML = "Music: On";

}

function play(){
  window.myMusic.play();
  setTimeout(function(){
    document.querySelector('#music').setAttribute("onclick", "mute()");
  }, 100);
  document.querySelector('#music').innerHTML = "mute";
}

// Sound constructor to add music element to html
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.setAttribute("loop","true")
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

//Try functions

function resetTries(){
  window.tries = 0;
  document.querySelector('#tries').innerHTML = "Tries: 0/" + triesLimit;
}

function increaseTries(){
  if(window.tries < triesLimit-1){
    window.tries++;
    document.querySelector('#tries').innerHTML = "Tries: " + window.tries + "/" + triesLimit;
  } else{
    document.querySelector('#tries').innerHTML = "You are all out of tries!";
    document.querySelector('#next').disabled = false;
    document.querySelector('#check').disabled = true;

  }
  
}

//Points functions

function increasePoints(){
 
  if(window.points < pointLimit){
    window.points+= 100;
  } 
}

function initPoints(){
  window.points = 0;
}

function displayUpdateScore(){
  
  if(window.points == pointLimit){
    document.querySelector('#counter').innerHTML = 'Score: ' + window.points + " (Point limit)";
  }else{
    document.querySelector('#counter').innerHTML = 'Score: ' + window.points;
  }
  
  console.log(window.points);
}

//Function to check selected clothes items

function checkCombo() {
  increaseTries();

  let checkHat = false;
  let checkShirt = false;
  let checkPants = false;
  let checkShoes = false;


  let text2 = "Not quite.";

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

  if ( checkHat && checkShirt && checkPants && checkShoes){
    text2 = "You got it!";
    increasePoints();
    displayUpdateScore();
    document.querySelector('#next').disabled = false;
    document.querySelector('#check').disabled = true;
  }
  
  document.querySelector('#winner').innerHTML = text2;
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

}

function resetGame(){
  resetTries();
  document.querySelector('#feedhat').innerHTML = "";
  document.querySelector('#feedshirt').innerHTML = "";
  document.querySelector('#feedpants').innerHTML = "";
  document.querySelector('#feedshoes').innerHTML = "";

  document.querySelector('#winner').innerHTML = "";
  
  document.querySelector('#next').disabled = true;
  document.querySelector('#check').disabled = false;

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
  <div class="dropzone shirt">
      <div id="dragshirt1" class="dragShirt" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shirt">
      <div id="dragshirt2" class="dragShirt" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shirt">
      <div id="dragshirt3" class="dragShirt" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>

  <div class="center">
      <div class="dropzone shirt" id="shirthole"></div>
      
  </div>

  <div class="dropzone shirt">
      <div id="dragshirt4" class="dragShirt" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shirt">
      <div id="dragshirt5" class="dragShirt" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shirt">
      <div id="dragshirt6" class="dragShirt" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
</div>

<div class="shelf" id="pants">
  <div class="dropzone pants">
      <div id="dragpants1" class="dragPants" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone pants">
      <div id="dragpants2" class="dragPants" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone pants">
      <div id="dragpants3" class="dragPants" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>

  <div class="center">
      <div class="dropzone pants" id="pantshole"></div>
  </div>

  <div class="dropzone pants">
      <div id="dragpants4" class="dragPants" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone pants">
      <div id="dragpants5" class="dragPants" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone pants">
      <div id="dragpants6" class="dragPants" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
</div>


<div class="shelf" id="shoes">
  <div class="dropzone shoes">
      <div id="dragshoes1" class="dragShoes" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shoes">
      <div id="dragshoes2" class="dragShoes" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shoes">
      <div id="dragshoes3" class="dragShoes" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>

  <div class="center">
      <div class="dropzone shoes" id="shoeshole" ></div>
  </div>

  <div class="dropzone shoes">
      <div id="dragshoes4" class="dragShoes" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shoes">
      <div id="dragshoes5" class="dragShoes" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
  <div class="dropzone shoes">
      <div id="dragshoes6" class="dragShoes" draggable="true"
          ondragstart="event.dataTransfer.setData('text/plain',null)">
          
      </div>
  </div>
</div>
`;
}