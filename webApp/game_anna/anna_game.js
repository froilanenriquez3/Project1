//MAIN
window.addEventListener('DOMContentLoaded', start());


function start(){
  let square = document.getElementById("square");
  let barrera = document.getElementById("square2");
  let bottom = 0;
  let gravity = 0.9;
  let isJumping = false;
  let left = 0; //punto de partida para calcular el movimiento hacia la izquierda
  let velocidad = 10;
  let isGoingLeft = false; //a menos que se clique la flecha no se moverá a la izquierda
  let isGoingRight = false;
  let timerRight;
  let timerLeft;

  let character ={
    x: 0, 
    y: 370,
    width: 80
  }

  let box = {
    x: 270,
    y: 370,
    width: 80
  }

  drawSquare();
  drawbox();

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

  function jump(){
    //Para evitar el doble salto, de modo que solo llama a la función de saltar si no está saltando
    //Si es true, devolverá la función y no hará nada. Solo actuará cuando detecte el false, que indica que bottom es más pequeño que 0
    //if (isJumping == true) return;
    //Establecemos un intervalo de 20 milisegundos
    //et timerUp = setInterval(function(){

      //Cuando llega a 250px se para
      //if (character.bottom > 250){
      //  clearInterval(timerUp);

        // //Hacemos una función para que el cuadrado baje
        // let timerDown = setInterval(function(){
        //   //Si no lo paramos, sigue bajando hasta el infierno así que hay que poner un controlador
        //   if (character.y <  5){
        //     clearInterval(timerDown);
        //     //Si está en el suelo (bottom es más pequeño que 0), sí podremos volver a saltar
        //     isJumping = false;
        //   }
        //   //fall();
        //     character.y -= 5;
        //     square.style.bottom = character.y + 'px';
        // }, 20);
      //}

      //Si ya está saltando, no podrá volver a saltar y no ascenderá 30px del suelo
      //isJumping = true;
      //Cada vez que pulsamos la tecla sube 30px del suelo
      bottom += 30;
      //Se multiplica constrantemente y cada vez la velocidad es menor para dar un efecto de gravedad
      //character.y = character.y * gravity;
      //square.style.bottom = character.y + 'px';
    //}, 20);
    
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

  // function moveLeft(){
  //   if(isGoingRight == true){
  //     clearInterval(timerRight);
  //     isGoingRight = false;
  //   }
  //   isGoingLeft = true;
  //   //   timerLeft = setInterval(function(){
  //   //   left -=5;
  //   //   square.style.left = left + 'px';
  //   // }, 5);

  //   left -= velocidad;
  //   square.style.marginLeft = left + 'px';
    
  //  }

  // function moveRight(){
  //   if (isGoingLeft == true){
  //     clearInterval(timerLeft);
  //     isGoingLeft = false;
  //   }
  //     isGoingRight = true;
  //   //   timerRight = setInterval(function(){
  //   //   left +=5;
  //   //   square.style.left = left + 'px';
  //   // }, 5);
    
  //   left +=velocidad;
  //   square.style.marginLeft = left + 'px';

  // }
  
// let cantidad = 0;

  //CONTROLES
  // function control(e){
  //   switch(e.keyCode){
  //     case 32: 
  //       jump();
  //       break;
  //     case 37: 
  //       moveLeft();
  //       // cantidad -=100;
  //       // setTimeout(() => {
  //       //   square.style.transform = "translateX(200px)";
  //       // });
  //       break;
  //     case 39: 
  //       moveRight();
  //       // setTimeout(() => {
  //       //   square.style.transform = 'translateX(200px)';
  //       // });
  //       break;
  //   }
  // }



  function control(e) {    
    if (e.keyCode === 32) {
      jump(); // si apretamos la barra espaciadora
    } 

    else if(e.keyCode == 37 && character.x > 0){
      // moveLeft();  //si apretamos la flecha de la izquierda
      character.x -= velocidad;
      square.style.left = character.x + "px";
      if (character.x <= box.x + box.width && character.x > box.x){
        character.x = box.x + box.width + 10;
      }
    
    }

    else if(e.keyCode == 39 && character.x < 805){
      // moveRight(); //si apretamos la flecha de la derecha
      character.x += velocidad;
      square.style.left = character.x + "px";
      if (character.x + character.width > box.x && character.x + character.width < box.x + box.width){
        character.x = box.x - character.width -5;
      }
    }

  }

  document.addEventListener('keydown', control);

};