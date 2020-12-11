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
let score = document.querySelector("p");


// Variable global
timeCoin = setInterval(moveCoin, 5000);
points = 0;
minutes = 1;
seconds = 0;

let character = {
  x: 0, 
  y: 370,
  width: 60,
  height: 80
}

let box = {
  x: 270, 
  y: 370,
  width: 120, 
  height: 50
}

let coin = {
  x: 470, 
  y: 300,
  width: 30, 
  height: 40
}

//window.addEventListener('DOMContentLoaded', start());
start();

function start(){
  
  drawSquare();
  drawbox();
  drawCoin();
  moveCoin();
  timer();

} 

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
    if (isJumping == true) return;
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
          

          if (character.y + character.height + up >= 450){
            clearInterval(timerDown);
            isJumping = false; 
          }
          fall();

         
        }, 20);
      }

      isJumping = true;
      character.y -= 150;
      square.style.top = character.y + 'px';
      coinCollision();

    }, 50);
    
  }


  //FUNCIÓN PARA CAER
  function fall(){
    character.y += up;
    square.style.top = character.y + 'px';
    coinCollision();
    
  }

  // function jump(){
    
  //   //Para evitar el doble salto, de modo que solo llama a la función de saltar si no está saltando
  //   //Si es true, devolverá la función y no hará nada. Solo actuará cuando detecte el false, que indica que bottom es más pequeño que 0
  //   if (isJumping == true) return;
  //   //Establecemos un intervalo de 20 milisegundos
  //   let timerUp = setInterval(function(){

  //     //Cuando llega a 250px se para
  //     if (bottom > 250){
  //       clearInterval(timerUp);

  //       //Hacemos una función para que el cuadrado baje
  //       let timerDown = setInterval(function(){
  //         //Si no lo paramos, sigue bajando hasta el infierno así que hay que poner un controlador
  //         if (bottom <  5){
  //           clearInterval(timerDown);
  //           //Si está en el suelo (bottom es más pequeño que 0), sí podremos volver a saltar
  //           isJumping = false;
  //         }
  //         //fall();
  //           bottom -= 5;
  //           square.style.bottom = bottom + 'px';
  //       }, 20);
  //     }

  //     //Si ya está saltando, no podrá volver a saltar y no ascenderá 30px del suelo
  //     isJumping = true;
  //     //Cada vez que pulsamos la tecla sube 30px del suelo
  //     bottom += 30;
  //     //Se multiplica constrantemente y cada vez la velocidad es menor para dar un efecto de gravedad
  //     bottom = bottom * gravity;
  //     square.style.bottom = bottom + 'px';
  //   }, 20);
    
  // }

  // if(){
  //   document.getElementsByClassName('background')[0].removeChild(money);
  // }
  
  

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

      if (character.x - velocidad >= box.x + box.width || character.x <= box.x ||
        box.y + box.height <= character.y || box.y >= character.y + character.height){
          
        character.x -= velocidad;
        square.style.left = character.x + 'px';
        left = true;
      }

    } 

    //RIGHT
    if(e.keyCode == 39 && character.x < 830){
      //ir hacia la derecha
      if (square.getAttribute("src") == "img/abuela-left-mario.png"){
        square.setAttribute("src", "img/abuela-right-mario.png");
      }

      if (character.x + character.width + velocidad <= box.x || character.x + character.width > box.x ||
        box.y + box.height <= character.y || box.y >= character.y + character.height){
        character.x += velocidad;
        square.style.left = character.x + 'px';
        right = true;

      }


    }
    coinCollision();
  }


  document.addEventListener('keydown', control);

