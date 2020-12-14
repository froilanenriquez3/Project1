//MAIN

let square = document.getElementById("character");
let barrera = document.getElementById("cloud");
let money = document.getElementById("coin");
let gravity = 0.9;
let isJumping = false;
let velocidad = 10;
let up = 5;
let right = false;
let left = false;
let score = document.querySelector(".info > p");
// let info = document.getElementsByClassName("info");
let seconds;
let countdownTimer;
let finalCoundown = false;
document.addEventListener('keydown', control);


// Variable global
timeCoin = setInterval(moveCoin, 5000);
points = 0;


// let data = {
//   x: 0, 
//   y: 0, 
//   width: 90, 
//   height: 50
// }

let character = {
  x: 0, 
  y: 370,
  width: 60,
  height: 80
}

let box = {
  x: 270, 
  y: 270,
  width: 120, 
  height: 50
}

let coin = {
  x: 470, 
  y: 300,
  width: 30, 
  height: 40
}

// startGame();
document.querySelector(".play > img").addEventListener('click', startGame);

function startGame(){
  console.log('startgame');
  //esconder instrucciones para que aparezca el juego
  document.getElementById("instructions").style.display = "none";
  document.getElementById("finishGame").style.display = "none";
  document.getElementById("gamePlay").style.display = "block";

  drawSquare();
  drawbox();
  drawCoin();
  moveCoin();
  // timer();
  points = 0;
  seconds = 10;
  score.innerHTML = "Puntos: " + points;
  time.innerHTML = "0" + ":" + seconds;

  //set music
  mySound = new sound("./img/sound.mp3")

  //set time
  gameTimer();
} 


//FUNCIONES PARA EL TIEMPO DEL JUEGO
function gameTimer(){
  let minutes = Math.round((seconds - 30) / 60);
  let remainingSeconds = seconds % 60 ;

  if(remainingSeconds < 10){
    remainingSeconds = "0" + remainingSeconds;
    document.getElementById('time').innerHTML = minutes + ":" + remainingSeconds;

  }


  if(seconds == 0){
    if(finalCoundown){
      clearInterval(countdownTimer);
    }

    else{
      finalCoundown = true;
      gameOver();
      console.log('final');
    }
  }

  else{
    seconds --;
  }

}
countdownTimer = setInterval(gameTimer, 1000);

// Dibujar personaje
function drawSquare(){
  square.style.left = character.x + 'px';
  square.style.top = character.y + 'px';
}

// Dibujar plataformas
function drawbox(){
  barrera.style.left = box.x + 'px';
  barrera.style.top = box.y + 'px';
}

//Dibujar moneda
function drawCoin(){
money.style.left = coin.x + 'px';
money.style.top = coin.y + 'px';
}

// function drawInfo(){
//   info.style.left = data.x + 'px';
//   info.style.top = data.y + 'px';
// }

  
//Esta función para el intervalo de los 5s. Luego mueve la moneda para que no vuelva a colisionar con el personaje y vuelve a poner en marcha el intervalo. 
function stopCoin(){
  clearInterval(timeCoin);
  moveCoin();
  timeCoin = setInterval(moveCoin, 5000);
}



  //Función para delimitar cuando la abuela se encuentra la moneda
  function coinCollision(){
    if((character.x <= coin.x + coin.width && character.x + character.width >= coin.x)
    && (character.y + character.height >= coin.y && character.y <= coin.y + coin.height)){
      //document.getElementById('coin').style.backgroundColor = "red";
      stopCoin();
      points += 20;
      score.innerHTML = "Puntos: " + points;
      console.log(score);

      //sound
      mySound.play();
    }
    // else if(data.x + data.width >= coin.x && data.y + data.height <= coin.y){
    //   moveCoin();
    // }
    
  }

  // cloudCollision();

  function cloudCollision(){
  
    let colision = false;

    if((character.x + velocidad <= box.x + box.width && character.x + character.width - velocidad >= box.x)
    && (character.y + character.height >= box.y + (box.height/2) && character.y <= box.y + box.height)){
        //document.getElementById('cloud').style.backgroundColor = "red";
        colision = true;
        isJumping = false;
    }
    else{
      //document.getElementById('cloud').style.backgroundColor = "pink";
    }

    return colision;
  }


  //FUNCIÓN PARA PONER SONIDO A LA MONEDA
  function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";

    document.body.appendChild(this.sound);
    this.play = function(){
      this.sound.play();
    }

    this.stop = function(){
      this.sound.pause();
    }
    
  }

 
  //FUNCIÓN PARA MOVER LA MONEDA
  function moveCoin(){
    let x = Math.floor((Math.random() * 860));
    let y = Math.floor((Math.random() * 410));

    
    //Adjudicamos valores a la posición de la moneda
    coin.x = x;
    
    coin.y = y;
    money.style.left = x + 'px';
    money.style.top = y + 'px';
  }

  //FUNCIÓN PARA SALTAR
  function jump(){
    //Para evitar el doble salto, de modo que solo llama a la función de saltar si no está saltando
    //Si es true, devolverá la función y no hará nada. Solo actuará cuando detecte el false, que indica que bottom es más pequeño que 0
    if (isJumping == true) return;
    //Establecemos un intervalo de 20 milisegundos
    let timerUp = setInterval(function(){

      //SALTAR
      if (square.getAttribute("src") == "img/abuela-right-mario.png" && right == true){
        square.setAttribute("src", "img/abuela-salto.png");
      }

      else if(square.getAttribute("src") == "img/abuela-left-mario.png" && left == true){
        square.setAttribute("src", "img/abuela-salto-left.png");
      }

      else if (square.getAttribute("src") == "img/abuela-right-mario.png"){
        square.setAttribute("src", "img/abuela-salto.png");
      }

      if(character.y < 250){
        clearInterval(timerUp);
        //Hacemos una función para que el cuadrado baje
        let timerDown = setInterval(function(){

          //BAJAR
          if (square.getAttribute("src") == "img/abuela-salto.png" && right == true){
            square.setAttribute("src", "img/abuela-right-mario.png");
          }

          else if(square.getAttribute("src") == "img/abuela-salto-left.png" && left == true){
            square.setAttribute("src", "img/abuela-left-mario.png");
          }

          else if (square.getAttribute("src") == "img/abuela-salto.png"){
            square.setAttribute("src", "img/abuela-right-mario.png");
          }
          
          //Si no lo paramos, sigue bajando hasta el infierno así que hay que poner un controlador
          if (character.y + character.height + up >= 450){
            clearInterval(timerDown);
            //Si está en el suelo (bottom es más pequeño que 0), sí podremos volver a saltar
            isJumping = false; 
          }
          fall();

         
        }, 20);
      }
      //Si ya está saltando, no podrá volver a saltar y no ascenderá 30px del suelo
      isJumping = true;
      //Cada vez que pulsamos la tecla sube 30px del suelo
      character.y -= 50;
      square.style.top = character.y + 'px';
      coinCollision();
      cloudCollision();

    }, 30);
    
  }


//FUNCIÓN PARA CAER
function fall(){
  if (cloudCollision() == false){
    character.y += up;
    square.style.top = character.y + 'px';
    
  }


  coinCollision();
  //cloudCollision();
  
}


//FUNCIÓN PARA LOS CONTROLES
function control(e) {    
  if (e.keyCode == 32) {
    jump(); // si apretamos la barra espaciadora
  } 
  
  
  //LEFT
  if(e.keyCode == 37 && character.x > 0){
   
    //ir hacia la izquierda
    if (square.getAttribute("src") == "img/abuela-right-mario.png"){
      square.setAttribute("src", "img/abuela-left-mario.png");
    }
    // if (character.x - velocidad >= box.x + box.width || character.x <= box.x ||
    //   box.y + box.height <= character.y || box.y >= character.y + character.height){
        
      character.x -= velocidad;
      square.style.left = character.x + 'px';
      left = true;
    // }
  } 
  //RIGHT
  if(e.keyCode == 39 && character.x < 830){
    //ir hacia la derecha
    if (square.getAttribute("src") == "img/abuela-left-mario.png"){
      square.setAttribute("src", "img/abuela-right-mario.png");
    }
    // if (character.x + character.width + velocidad <= box.x || character.x + character.width > box.x ||
    //   box.y + box.height <= character.y || box.y >= character.y + character.height){
      character.x += velocidad;
      square.style.left = character.x + 'px';
      right = true;
    // }
    // console.log(character.x + character.width);
  }
  coinCollision();
  cloudCollision();
}

//GUARDAR PUNTOS
function savePoints(){
  document.querySelector('#finalPoints').value = points;
  document.querySelector('#gameForm').submit();

}


//FUNCIÓN PARA ACABAR EL JUEGO
function gameOver(){
  window.clearInterval(countdownTimer);
  console.log('countdownTimer');
  
}
