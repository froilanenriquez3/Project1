//Translations for spanish
cookiePoints = document.cookie;
//Erasing the part that we don't need from the cookie.
cookiePoints=  cookiePoints.replace("points=", "");
points= cookiePoints.split(';')[0];

let esp={
    restoreExclamation:"Recomerçem!",
    divulgation1: "El 96% de los pequeños negocios considera que la crisis provocada por la pandemia del coronavirus afectará de forma negativa o muy negativa a su actividad. Las restricciones de aforo y el cierre temporal de algunos de estos negocios han hecho que muchos de ellos se encuentren en una situación económica difícil. Para ayudar en estos momentos críticos nace ‘Recomerçem’." ,
    divulgation2: "‘Recomerçem’ es un proyecto que pretende potenciar las compras en comercios locales en Barcelona. Para ello hemos creado cuatro juegos, mediante los que se pueden acumular puntos para acceder a promociones y descuentos en diferentes tiendas. ¿Te apuntas? ¡Sigue hacia abajo para conocer a Teresa y descubrir su historia!",

    storyTelling1: "¡Quedan muy pocos días para Navidad y Teresa aún tiene muchas cosas que hacer antes de que llegue! Acaba de recordar que aún no ha comprado ningún regalo para Marco, su nieto más exigente. Sin embargo, antes de ir a comprar tendrá que conseguir dinero.",
    storyTelling2: "Además, quiere comprar algunos discos de Villancicos para ambientar la comida familiar. Hablando de la comida… ¡aún tiene que comprar algunos ingredientes que le faltan para prepararla! Regístrate para ayudarla a través de diferentes juegos, con los que ganarás puntos para acceder a descuentos y promociones exclusivas y, como Teresa, fomentar el comercio local.",

    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    register: "Registrarse",
    welcome: "Bienvenide! Tienes "+ points +" puntos",

    navRestore:"Restore",
    navGame:"Juegos",
    navPoints:"Puntos y Promociones",
    navAbout:"Sobre Nosotres",
    navAdmin:"Administración",

    aboutUs_Al: "Estudiante de desarrollo de aplicaciones web durante el día, ávido consumidor de Netflix durante la noche. Me gusta el esquí, tocar el piano y molestar a mi gata en mi tiempo libre. ",
    aboutUs_Fr: "Soy un estudiante de desarrollo de aplicaciones web de Estados Unidos pero resido en Barcelona. Toco el órgano para el coro de mi iglesia y en mi tiempo libre toco la guitarra, paso tiempo con mi novia e intento aprender cosas nuevas.",
    aboutUs_An: "Soy criminóloga y estudiante de desarrollo de aplicaciones web, lo que significa que en el trabajo me confuden con la que arregla impresoras. Me gustan los gatos y los juegos de mesa.", 
    aboutUs_Mi: "Después de diplomarme en turismo, decidí cambiar de aires y me embarqué en la aventura de ser desarrolladora web. Ahora mis lunes son menos lunes si tengo un té, música de fondo y un proyecto de javascript entre manos."
}
