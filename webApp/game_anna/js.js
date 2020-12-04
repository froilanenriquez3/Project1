//MAIN
window.addEventListener('DOMContentLoaded', start());


function start(){
  let square = document.getElementById("square");
  let barrera = document.getElementById("square2");
  let gravity = 0.9;
  let isJumping = false;
  let velocidad = 10;
  let up = 5;


  let character ={
    x: 0, 
    y: 370,
    width: 80,
    height: 80
  }

  let box = {
    x: 270,
    y: 370,
    width: 80, 
    height: 80
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
    if (isJumping == true) return;
    let timerUp = setInterval(function(){
      if(character.y < 250){
        clearInterval(timerUp);
      
        let timerDown = setInterval(function(){
          if (character.y + character.height + up >= 450){
            clearInterval(timerDown);
            isJumping = false; 
          }
          character.y += up;
          square.style.top = character.y + 'px';
        }, 20);
      }

      isJumping = true;
      character.y -= 50;
      square.style.top = character.y + 'px';
      console.log(character.y);

    }, 25);
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

  console.log(character.y);


  function control(e) {    
    if (e.keyCode === 32) {
      jump(); // si apretamos la barra espaciadora
    } 

    //LEFT
    else if(e.keyCode == 37 && character.x > 0){
      // character.x -= velocidad;
      // square.style.left = character.x + "px";
      // console.log(character.x);
      // if (character.x <= box.x + box.width && character.x > box.x){
      //   character.x = box.x + box.width + 10;
        
      // }
      if(character.x - velocidad < box.x + box.width && character.x > box.x){

      }
      else{
        character.x -= velocidad;
        square.style.left = character.x + 'px';
        console.log(character.x);
      }
    
    } 

    //RIGHT
    else if(e.keyCode == 39 && character.x < 810){
      // character.x += velocidad;
      // square.style.left = character.x + "px";
      // console.log(character.x);
      // if (character.x + character.width > box.x && character.x + character.width < box.x + box.width){
      //   character.x = box.x - character.width -10;
      // }
      if(character.x + character.width + velocidad > box.x && character.x + character.width < box.x + box.width){

      }
      else{
        character.x += velocidad;
        square.style.left = character.x + 'px';
        console.log(character.x);
      }
    }

  }

  document.addEventListener('keydown', control);

};