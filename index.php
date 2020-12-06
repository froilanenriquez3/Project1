<?php
  session_start();

  $user_set = false;
    if(isset($_SESSION['user'])){
        $user_set = true;
    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <!-- Bootstrap -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<!-- AOS -->
  <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
  <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>

  <link rel="stylesheet" href="/project1/style/reset.css">
  <link rel="stylesheet" href="/project1/style/nomWebApp.css">
  <link rel="stylesheet" href="/project1/style/buttons.css">
  <link rel="stylesheet" href="/project1/style/style-navbar.css">

  <!-- FONT MONTSERRAT -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">    


  <title>Restore</title>

</head>

<body>
  <?php
  $logState;
  if($user_set){
    require_once 'php_partials/navbar.php';
    $logState= "logged";
  } else {
    $logState= "no logged";
  }
?>

  <p id="logState"><?php echo $logState?></p>

  <ul class="recomerçem">
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <?php
    require_once 'php_partials/buttons.php';
  ?>
  <!-- <div id="buttons">
    <a role="button" class="btn btn-sm" href="php_views/login.php">Log in</a>
    <a role="button" class="btn btn-sm" href="php_views/signup.php">Registrarse</a>
  </div> -->
 
  <div id="recomerçButton">
    <a role="button" class="btn" href="/project1/index.php/#divulgacio">Recomerçem!</a>
  </div>

  <section id="divulgacio">
    <p data-aos="fade-up" data-aos-duration="1500">El 96% de los pequeños negocios considera que la crisis provocada por la pandemia del coronavirus afectará de forma negativa o muy negativa a su actividad. Las restricciones de aforo y el cierre temporal de algunos de estos negocios han hecho que muchos de ellos se encuentren en una situación económica difícil. 
      Para ayudar en estos momentos críticos nace ‘Recomerçem’.</p>
    <div data-aos="fade-up" data-aos-duration="1500" id="imgDiv1"></div>
    <div data-aos="fade-up" data-aos-duration="1500" id="imgDiv2"></div>
    <p data-aos="fade-up" data-aos-duration="1500">‘Recomerçem’ es un proyecto que pretende potenciar las compras en comercios locales en Barcelona. Para ello hemos creado cuatro juegos, mediante los que se pueden acumular puntos para acceder a promociones y descuentos en diferentes tiendas. 
      ¿Te apuntas? ¡Sigue hacia abajo para conocer a Teresa y descubrir su historia!</p>

  </section>
  <section id="story">

  </section>
  <section id="aboutUs">
    <div class="main_content">
      <div style="text-align: center;" class="member">
        <img src="/project1/media/img/aboutUs.png" width="150px" class="rounded-circle" alt="">
        <h3 class="fuente">Alex Cantó</h3>
        <p>Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. A sed nobis ut exercitationem 
          atque accusamus sit natus officiis totam blanditiis 
          at eum nemo, nulla et quae eius culpa eveniet.
        </p>
      </div>

      <div style="text-align: center;" class="member">
        <img src="/project1/media/img/aboutUs.png" width="150px" class="rounded-circle" alt="">
        <h3>Froilan Enriquez</h3>
        <p>I am a web app development student from the US but newly a resident of Barcelona. I play the organ for the choir at my church
          and my downtime is spent noodling on the guitar, spending time with my girlfriend, and trying to learn new things. 
        </p>
      </div>

      <div style="text-align: center;" class="member">
        <img src="/project1/media/img/aboutUs.png" width="150px" class="rounded-circle" alt="">
        <h3>Anna Moreta</h3>
        <p>Soy criminóloga y estudiante de desarrollo
          de aplicaciones web, lo que significa que en el 
          trabajo me confuden con la que arregla impresoras. 
          Me gustan los gatos y los juegos de mesa.
        </p>
      </div>

      <div style="text-align: center;" class="member">
        <img src="/project1/media/img/aboutUs.png" width="150px" class="rounded-circle" alt="">
        <h3>Mireia Sánchez</h3>
        <p>Después de diplomarme en turismo, decidí cambiar de aires y me embarqué en la aventura de ser desarrolladora web.
          Ahora mis lunes son menos lunes si tengo un té, música de fondo y un proyecto de javascript entre manos.
        </p>
      </div>
    </div>
    </div>
  </section>
  <script src="/project1/js/nomWebApp.js"></script>
  <script src="/project1/js/navbar.js"></script>
</body>

</html>