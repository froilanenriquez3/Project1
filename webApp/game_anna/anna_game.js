//MAIN
window.addEventListener('DOMContentLoaded', start());


function start(){
  let square = document.getElementById("square");
  let barrera = document.getElementById("square2");
  let bottom = 0;
  let gravity = 0.9;
  let isJumping = false;
  let isGoingLeft = false; //a menos que se clique la flecha no se moverá a la izquierda
  let left = 0; //punto de partida para calcular el movimiento hacia la izquierda
  let isGoingRight = false;
  let timerRight;
  let timerLeft;
  let velocidad = 15;
  


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
    chocar();

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



// document.addEventListener('click', () => {
//     const character = document.querySelector('.character')
//     let isJumping = false
//     let isGoingRight = false
//     let isGoingLeft = false
//     let bottom = 0
//     let gravity = 0.9
//     let left = 0
//     //let leftTimerId
//     let rightTimerId

//     function jump() {
//         if (isJumping) return
//         //character.classList.remove('character-sliding')
//         //character.classList.add('character')
//         let upTimerId = setInterval(function () {
//           //jump down
//           if (bottom > 250) {
//             clearInterval(upTimerId)
//             let downTimerId = setInterval(function () {
//               if (bottom < 0 ) {
//                 clearInterval(downTimerId)
//                 isJumping = false
//               }
//               bottom -= 4
//               bottom = bottom * gravity
//               character.style.bottom = bottom + 'px'
//             },20)
//           }
//           //jump up
//           isJumping = true
//           bottom +=30
//           bottom = bottom * gravity
//           character.style.bottom = bottom + 'px'
//         },20)
//       }

//       // function slideLeft() {
//       //   // prince.classList.remove('character')
//       //   // prince.classList.add('character-sliding')
//       //   if (isGoingRight) {
//       //       clearInterval(rightTimerId)
//       //       isGoingRight = false
//       //   }
//       //   isGoingLeft = true
//       //   leftTimerId = setInterval(function () {
//       //       console.log('going left')
//       //       left -=5
//       //       character.style.left = left + 'px'
//       //   },20)
//       // }

//       // function slideRight() {
//       //   // prince.classList.remove('character')
//       //   // prince.classList.add('character-sliding')
//       //   if (isGoingLeft) {
//       //       //clearInterval(leftTimerId)
//       //       isGoingLeft = false
//       //   }
//       //   isGoingRight = true
//       //   rightTimerId = setInterval(function () {
//       //       console.log('going right')
//       //       left +=5
//       //       character.style.left = left + 'px'
//       //   },20)
//       // }

//     function moveRight(){
//       isGoingRight = true;
//       rightTimerId = setInterval(function(){
//         console.log('going right');
//         left += 5;
//         character.style.left = left + 'px'
//       },20)
//     }


//     //assign functions to keycodes
//     function control(e) {
//         if(e.keyCode === 39) {
//           moveRight()
//             // slideRight() //if we press the right arrow on our keyboard
//         } else if (e.keyCode === 32) {
//             jump() // if we press the up arrow
//         } else if (e.keyCode === 37) {
//             slideLeft() // if we press left
//         } 
//     }
//     document.addEventListener('keyup', control)


//assign functions to keycodes


//document.addEventListener('keyup', control)
// })