var JUEGO = {

    controles:{
        arriba: 38, 
        derecha: 39, 
        izquierda: 37
    },
 

    personaje:{
        elemento: document.getElementById("personaje"),
        velocidad: 5, 
        estado: {
            saltando: false
        }

    },

    movimientos: Array(),
    iniciar: function(){
        setInterval(function(){
            if(JUEGO.movimientos[JUEGO.controles.izquierda]){
                var posicionActual = parseInt(JUEGO.personaje.elemento.offsetLeft);
                JUEGO.personaje.elemento.style.left = posicionActual + 'px';
            }

            if(JUEGO.movimientos[JUEGO.controles.derecha]){
                var posicionActual = parseInt(JUEGO.personaje.elemento.offsetLeft);
                JUEGO.personaje.elemento.style.left = posicionActual + 'px';
            }
        },30)
    },

    saltar: function(){
        
        if(JUEGO.personaje.estado.saltando){
            JUEGO.personaje.estado.saltando = true;
            JUEGO.personaje.elemento.style.bottom = '22px';


            function animar(){
                setTimeout(function(){
                    if (parseInt(JUEGO.personaje.elemento.style.bottom)<66){
                        JUEGO.personaje.elemento.style.bottom=(parseInt(JUEGO.personaje.elemento.style.bottom)+1)+'px';
                        animar();
                    }
                    else{
                        bajar();
                    }

                });

                function bajar(){
                    setTimeout(function(){
                        if (parseInt(JUEGO.personaje.elemento.style.bottom)>22){
                            JUEGO.personaje.elemento.style.bottom=(parseInt(JUEGO.personaje.elemento.style.bottom)-1)+'px';
                            bajar();
                        }
                    });
                }

            }
            animar();
        }
    }
};


document.addEventListener('keydown', function(e){
    JUEGO.movimientos[e.which]=true;
    if (JUEGO.movimientos[JUEGO.controles.arriba]) JUEGO.saltar();
})