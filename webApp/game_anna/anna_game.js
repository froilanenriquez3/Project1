//MAIN
window.addEventListener('DOMContentLoaded', start());


function start(){
  const square = document.getElementById("square");
  let bottom = 0;

  function jump(){

    //Establecemos un intervalo de 20 milisegundos
    let timerUp = setInterval(function(){

      //Cuando llega a 250px se para
      if (bottom > 250){
        clearInterval(timerUp);

        //Hacemos una función para que el cuadrado baje
        let timerDown = setInterval(function(){
          //Si no lo paramos, sigue bajando hasta el infierno así que hay que poner un controlador
          if (bottom < 20){
            clearInterval(timerDown);
          }
          bottom -= 5;
          square.style.bottom = bottom + 'px';
        }, 20);
      }


      //Cada vez que pulsamos la tecla sube 30px del suelo
      bottom += 30;
      square.style.bottom = bottom + 'px';
    }, 20);
    
  }


  // jump();

  //CONTROLES
  function control(e) {    
    if (e.keyCode === 32) {
      jump(); // if we press the spacebar
    } 
  }

  document.addEventListener('keydown', control);

};





// let key = button.keyCode;
// if (key == 37 && character.x > 50){
//   //LEFT
//   character.x-=5;
//   square.style.left = character.x+"px";
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


document.addEventListener('keyup', control)
// })