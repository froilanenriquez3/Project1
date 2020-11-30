//MAIN
window.addEventListener('DOMContentLoaded', start());


function start(){
  let square = document.getElementById("square");
  let barrera = document.getElementById("square2");
  let bottom = 0;
  let gravity = 0.9;
  let isJumping = false;
  let left = 0; //punto de partida para calcular el movimiento hacia la izquierda
  let velocidad = 15;
  let isGoingLeft = false; //a menos que se clique la flecha no se moverá a la izquierda
  let isGoingRight = false;
  let timerRight;
  let timerLeft;

  
  // function fall(){
  //   bottom -= 5;
  //   square.style.bottom = bottom + 'px';
  //   if(
  //     (square.bottom >= barrera.bottom) &&
  //     (square.bottom <= (barrera.bottom + 80))){
  //       console.log('funciona');
  //       square.bottom = barrera.bottom;
  //   }
  // }

//   var rect1 = {x: 5, y: 5, width: 50, height: 50}
//   var rect2 = {x: 20, y: 10, width: 10, height: 10}

//   if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&
//    rect1.y < rect2.y + rect2.height &&
//    rect1.y + rect1.height > rect2.y) {
//     // collision detected!
// }

  // function collision(){
  //   let characterLeft = square.offsetLeft;
  //   let characterRight = square.offsetLeft + square.offsetWidth;
  //   let characterTop = square.offsetTop;
  //   let objectLeft = barrera.offsetLeft;
  //   let objectRight = barrera.offsetLeft + barrera.offsetWidth;
  //   let objectTop = barrera.offsetTop;

  //   if (objectLeft > characterRight || objectRight < characterLeft){

  //   }
  // }


  function jump(){
    //Para evitar el doble salto, de modo que solo llama a la función de saltar si no está saltando
    //Si es true, devolverá la función y no hará nada. Solo actuará cuando detecte el false, que indica que bottom es más pequeño que 0
    if (isJumping == true) return;
    //Establecemos un intervalo de 20 milisegundos
    let timerUp = setInterval(function(){

      //Cuando llega a 250px se para
      if (bottom > 250){
        clearInterval(timerUp);

        //Hacemos una función para que el cuadrado baje
        let timerDown = setInterval(function(){
          //Si no lo paramos, sigue bajando hasta el infierno así que hay que poner un controlador
          if (bottom <  5){
            clearInterval(timerDown);
            //Si está en el suelo (bottom es más pequeño que 0), sí podremos volver a saltar
            isJumping = false;
          }
          //fall();
            bottom -= 5;
            square.style.bottom = bottom + 'px';
        }, 20);
      }

      //Si ya está saltando, no podrá volver a saltar y no ascenderá 30px del suelo
      isJumping = true;
      //Cada vez que pulsamos la tecla sube 30px del suelo
      bottom += 30;
      //Se multiplica constrantemente y cada vez la velocidad es menor para dar un efecto de gravedad
      bottom = bottom * gravity;
      square.style.bottom = bottom + 'px';
    }, 20);














    
  }

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

  // function chocar(){
  //   if (square.style.left < barrera.style.left){
  //     marginLeft = 0;
  //   }
  // }


  function control(e) {    
    //chocar();

    if (e.keyCode === 32) {
      jump(); // si apretamos la barra espaciadora
    } 

    else if(e.keyCode == 37 && left >0){
      // moveLeft();  //si apretamos la flecha de la izquierda
      left -= velocidad;
      square.style.marginLeft = left + 'px';
    }

    else if(e.keyCode == 39 && left < 800){
      // moveRight(); //si apretamos la flecha de la derecha
      left +=velocidad;
      square.style.marginLeft = left + 'px';
    }

  }

  document.addEventListener('keydown', control);

};






// let key = button.keyCode;
// if (key == 37 && character.x > 50){
//   //LEFT
//       left +=velocidad;
//       square.style.marginLeft = left + 'px';
// }

// else if(key == 39 && character.x < 530){
//   //RIGHT
//   character.x +=5;
//   square.style.left = character.x+"px";
// }