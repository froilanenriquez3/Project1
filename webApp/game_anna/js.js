//MOVIMIENTO DE PANTALLA

// window.onload = function(){
    document.addEventListener("click", mover_fondo);
    function mover_fondo(){
        fondo1 = document.getElementById("fondo1");
        fondo2 = document.getElementById("fondo2");
    
        pararmover = setInterval(mover, 65);
        setInterval(repetir, 6500);
    }
    
    desplazar = 0;
    function mover(){
        desplazar -= 10;
        desplazar2 = desplazar + 1000;
        posicion1 = desplazar + "px";
        posicion2 = desplazar2 + "px";
        fondo1.style.left = posicion1;
        fondo2.style.left = posicion2;
    }
    
    function repetir(){
        fondo1.style.left = "0px";
        fondo2.style.left = "1000";
        desplazar = 0;
    }
    
    
     let personaje = {
         x: 50, 
         y: 150
     }
    
    
    //CONTROL TECLADO
    function presionar(){
        personaje = document.getElementById("personaje");
        personaje.style.bottom -= 35;
    }
    
    
    
    //AÑADIR TECLADO PARA MOVER PERSONAJE
    window.addEventListener('keydown', presionar);