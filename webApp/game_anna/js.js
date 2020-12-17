//MAIN
//get things
let woman = document.getElementById("character");
let block = document.getElementById("cloud");
let block2 = document.getElementById("cloud2");
let block3 = document.getElementById("cloud3");
let money = document.getElementById("coin");
let score = document.querySelector(".info > p");
let limit = document.querySelector("#counter").dataset.limit;


//BOTONES PARA CONTROLAR A TERESA
document.addEventListener('keydown', control);

//VARIABLES
let isJumping = false;
let velocidad = 10;
let up = 5;
let right = false;
let left = false;
let seconds;
let countdownTimer;
let finalCoundown = false;

//FUNCIÓN PARA CAMBIAR LAS LUCES
setInterval(change, 1000);


// Variable global
timeCoin = setInterval(moveCoin, 5000);
points = 0;
floor = 450;

//DEFINICIÓN DE OBJETOS
let character = {
  x: 0, 
  y: 370,
  width: 60,
  height: 80
}

let cloud = {
  x: 430, 
  y: 270,
  width: 120, 
  height: 50
}

let cloud2 = {
  x: 710, 
  y: 240,
  width: 120, 
  height: 50
}

let cloud3 = {
  x: 110, 
  y: 220,
  width: 120, 
  height: 50
}

let coin = {
  x: 470, 
  y: 300,
  width: 30, 
  height: 40
}



function startGame(){
  console.log('startgame');
  //esconder instrucciones para que aparezca el juego
  document.getElementById("instructions").style.display = "none";
  document.getElementById("finishGame").style.display = "none";
  document.getElementById("gamePlay").style.display = "block";

  //dibujar todos los elementos del juego
  drawWoman();
  drawBlock();
  drawBlock2();
  drawBlock3();
  drawCoin();
  moveCoin();


  points = 0;
  score.innerHTML = "Puntos: " + points;

  seconds = 59;
  time.innerHTML = "0" + ":" + seconds;

  //set music
  mySound = new sound("./img/sound.mp3");

  //set time
  countdownTimer = setInterval(gameTimer, 1000);

} 

//MOVIMIENTO LUCES
let image_tracker = 'white';
function change(){
  let image = document.getElementById('data');
  if (image_tracker == 'white'){
    image.src = 'img/byellow2.png';
    image_tracker = 'yellow';
  }

  else{
    image.src = 'img/bwhite.png';
    image_tracker = 'white';
  }
}


//FUNCIONES PARA EL TIEMPO DEL JUEGO
function gameTimer(){
  let minutes = Math.round((seconds - 30) / 60);
  let remainingSeconds = seconds % 60 ;

  if(remainingSeconds < 10){
    remainingSeconds = "0" + remainingSeconds;
  }

  document.getElementById('time').innerHTML = minutes + ":" + remainingSeconds;


  if(seconds == 0){
    clearInterval(countdownTimer);
    finalCoundown = true;
    gameOver();
    console.log('final');
    
  }

  else{
    seconds --;
  }

}


// Dibujar personaje
function drawWoman(){
  woman.style.left = character.x + 'px';
  woman.style.top = character.y + 'px';
}

// Dibujar plataformas
function drawBlock(){
  block.style.left = cloud.x + 'px';
  block.style.top = cloud.y + 'px';
}
function drawBlock2(){
  block2.style.left = cloud2.x + 'px';
  block2.style.top = cloud2.y + 'px';
}
function drawBlock3(){
  block3.style.left = cloud3.x + 'px';
  block3.style.top = cloud3.y + 'px';
}

//FUNCIONES RELACIONADAS CON LA MONEDA
//Dibujar moneda
function drawCoin(){
  money.style.left = coin.x + 'px';
  money.style.top = coin.y + 'px';
}

//Función para mover la moneda
function moveCoin(){
  let x = Math.floor((Math.random() * 860));
  let y = Math.floor((Math.random() * 410));

  
  //Adjudicamos valores a la posición de la moneda
  coin.x = x;
  
  coin.y = y;
  money.style.left = x + 'px';
  money.style.top = y + 'px';
}

//Función para delimitar cuando la abuela se encuentra la moneda
function coinCollision(){
  if((character.x <= coin.x + coin.width && character.x + character.width >= coin.x)
  && (character.y + character.height >= coin.y && character.y <= coin.y + coin.height)){
    stopCoin();
    if(points < limit){
     points += limit/25;
    }
    score.innerHTML = "Puntos: " +  points;
    //sound
    mySound.play();
  }
  
}

//Esta función para el intervalo de los 5s. Luego mueve la moneda para que no vuelva a colisionar con el personaje y vuelve a poner en marcha el intervalo. 
function stopCoin(){
  clearInterval(timeCoin);
  moveCoin();
  timeCoin = setInterval(moveCoin, 5000);
}

//función para poner sonido a la moneda
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



//FUNCIÓN RELACIONADA CON LA NUBE
function cloudCollision(){
  let colision = false;
  //en el eje de la y tenemos que controlar que siempre lo mida todo desde los pies porque sino al bajar de la nube, se queda volando
  if((character.x + velocidad <= cloud.x + cloud.width && character.x + character.width - velocidad >= cloud.x)
  && (character.y + character.height >= cloud.y + (cloud.height/2) && character.y + character.height <= cloud.y + cloud.height) ||
  (character.x + velocidad <= cloud2.x + cloud2.width && character.x + character.width - velocidad >= cloud2.x)
  && (character.y + character.height >= cloud2.y + (cloud2.height/2) && character.y + character.height <= cloud2.y + cloud2.height) ||
  (character.x + velocidad <= cloud3.x + cloud3.width && character.x + character.width - velocidad >= cloud3.x)
  && (character.y + character.height >= cloud3.y + (cloud3.height/2) && character.y + character.height <= cloud3.y + cloud3.height)){
    colision = true;
    isJumping = false;
    floor = 295;
    
  }
  return colision;
}



 
//FUNCIONES DE CONTROLES
//saltar
function jump(){
  //Para evitar el doble salto, de modo que solo llama a la función de saltar si no está saltando
  //Si es true, devolverá la función y no hará nada. Solo actuará cuando detecte el false, que indica que bottom es más pequeño que 0
  if (isJumping == true) return;
  //Establecemos un intervalo de 20 milisegundos
  let timerUp = setInterval(function(){
    //SALTAR
    if (woman.getAttribute("src") == "img/abuela-right-mario.png" && right == true){
      woman.setAttribute("src", "img/abuela-salto.png");
    }
    else if(woman.getAttribute("src") == "img/abuela-left-mario.png" && left == true){
      woman.setAttribute("src", "img/abuela-salto-left.png");
    }
    else if (woman.getAttribute("src") == "img/abuela-right-mario.png"){
      woman.setAttribute("src", "img/abuela-salto.png");
    }
    if(character.y < floor - 200){
      clearInterval(timerUp);
      //Hacemos una función para que el cuadrado baje
      let timerDown = setInterval(function(){
        //BAJAR
        if (woman.getAttribute("src") == "img/abuela-salto.png" && right == true){
          woman.setAttribute("src", "img/abuela-right-mario.png");
        }
        else if(woman.getAttribute("src") == "img/abuela-salto-left.png" && left == true){
          woman.setAttribute("src", "img/abuela-left-mario.png");
        }
        else if (woman.getAttribute("src") == "img/abuela-salto.png"){
          woman.setAttribute("src", "img/abuela-right-mario.png");
        }
        
        //Si no lo paramos, sigue bajando hasta el infierno así que hay que poner un controlador
        if (character.y + character.height + up > 450){
          character.y = 365;
          floor = 450;
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
    woman.style.top = character.y + 'px';
    coinCollision();
    // cloudCollision();
  }, 30);
  
}

//caer
function fall(){
  if (cloudCollision() == false){
    character.y += up;
    woman.style.top = character.y + 'px';
    
  }
  coinCollision();  
}

//derecha e izquierda
function control(e) {    
  if (e.keyCode == 32) {
    jump(); // si apretamos la barra espaciadora
  } 
  
  
  //LEFT
  if(e.keyCode == 37 && character.x > 0){
   
    //ir hacia la izquierda
    if (woman.getAttribute("src") == "img/abuela-right-mario.png"){
      woman.setAttribute("src", "img/abuela-left-mario.png");
    }        
      character.x -= velocidad;
      woman.style.left = character.x + 'px';
      left = true;
  } 

  //RIGHT
  if(e.keyCode == 39 && character.x < 830){
    //ir hacia la derecha
    if (woman.getAttribute("src") == "img/abuela-left-mario.png"){
      woman.setAttribute("src", "img/abuela-right-mario.png");
    }

      character.x += velocidad;
      woman.style.left = character.x + 'px';
      right = true;
  }
  coinCollision();
  // cloudCollision();
}


//GUARDAR PUNTOS
function savePoints(){
  document.querySelector('#counter').dataset.points = points;
  let finalPoints = document.querySelector('#counter').dataset.points;
  document.querySelector('input#finalPoints').value = finalPoints;
  document.querySelector('#gameForm').submit();
}


//FUNCIÓN PARA ACABAR EL JUEGO
function gameOver(){
  document.getElementById("gamePlay").style.display = "none";
  let finishGame = document.getElementById('finishGame');
  finishGame.style.display = "block";
  document.getElementById('accumulatedPoints').innerHTML = points + " puntos";
  mySound.stop();
  clearInterval(moveCoin);
}
