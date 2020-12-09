<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <!-- Bootstrap -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <!-- AOS -->
  <link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
  <script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>

  <link rel="stylesheet" href="style/reset.css">
  <link rel="stylesheet" href="style/nomWebApp.css">
  <link rel="stylesheet" href="style/buttons.css">

  <title>Restore</title>

</head>

<body>
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

    <a role="button" class="btn" href="#">Recomerçem!</a>
  </div>
  <section id="divulgacio">
    <p data-aos="fade-left" data-aos-duration="1500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo sed
      fugit quam repellendus ipsa asperiores, ab obcaecati non illum, quaerat, temporibus vitae sit dolore alias eaque
      enim blanditiis consectetur amet. Voluptatum saepe dolorum earum aspernatur vero quis exercitationem perspiciatis
      est provident veritatis at, tenetur officiis, aperiam molestiae amet eos recusandae quam, atque a! Odit sapiente
      veritatis quod necessitatibus, repudiandae omnis voluptate aut pariatur ab quos consectetur ea officiis sequi
      laborum rem voluptatem consequatur iure voluptatibus nulla eligendi reprehenderit harum impedit! Modi laboriosam
      accusantium expedita ut ratione repellendus dignissimos temporibus provident quasi atque magni praesentium
      blanditiis commodi eveniet, aliquid, eaque molestiae.</p>
    <div data-aos="fade-left" data-aos-duration="1500" id="imgDiv1"></div>
    <div data-aos="fade-right" data-aos-duration="1500" id="imgDiv2"></div>
    <p data-aos="fade-right" data-aos-duration="1500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
      sunt! Alias consequuntur eos, hic, ducimus eius ad modi, aperiam excepturi illo quasi sequi laborum mollitia!
      Placeat optio ab perspiciatis. Facere eveniet sint cum ipsa? Molestias, quidem animi dolores maxime, quod
      possimus, dignissimos voluptate a veritatis neque harum culpa! Incidunt et sit consectetur, inventore delectus
      atque temporibus porro corporis culpa voluptatibus officiis at vel omnis aspernatur fuga repellat nemo distinctio
      asperiores nesciunt dolore modi aperiam totam veritatis sunt! Saepe quidem eos vitae architecto ipsa maiores quo
      velit adipisci nesciunt minima doloribus praesentium repudiandae impedit dolore similique eaque, nisi debitis
      dolorem? Consequatur.</p>

  </section>
  <section id="story">

  </section>
  <section id="aboutUs">
    <div class="main_content">
      <div style="text-align: center;" class="member">
<<<<<<< HEAD
        <img src="./media/img/aboutUs.png" width="150px" class="rounded-circle" alt="Cinque Terre">
        <h3 class="fuente">Nombre</h3>
        <p>Lorem ipsum dolor sit, amet consectetur<br>
          adipisicing elit. A sed nobis ut exercitationem <br>
          atque accusamus sit natus officiis totam blanditiis <br>
          at eum nemo, nulla et quae eius culpa eveniet.
=======
        <img src="/project1/media/img/aboutUs.png" width="150px" class="rounded-circle" alt="">
        <h3 class="fuente">Alex Cantó</h3>
        <p>Estudiante de desarrollo de aplicaciones web durante el día, ávido consumidor de Netflix durante la noche. 
          Me gusta el esquí, tocar el piano y molestar a mi gata en mi tiempo libre. 
>>>>>>> 6995cfd7c5a2f349657c6b3e4e2edb278f4af7f6
        </p>
      </div>

      <div style="text-align: center;" class="member">
        <img src="./media/img/aboutUs.png" width="150px" class="rounded-circle" alt="Cinque Terre">
        <h3>Nombre</h3>
        <p>Lorem ipsum dolor sit, amet consectetur<br>
          adipisicing elit. A sed nobis ut exercitationem <br>
          atque accusamus sit natus officiis totam blanditiis <br>
          at eum nemo, nulla et quae eius culpa eveniet.
        </p>
      </div>

      <div style="text-align: center;" class="member">
        <img src="./media/img/aboutUs.png" width="150px" class="rounded-circle" alt="Cinque Terre">
        <h3>Anna Moreta</h3>
        <p>Soy criminóloga y estudiante de desarrollo<br>
          de aplicaciones web, lo que significa que en el <br>
          trabajo me confuden con la que arregla impresoras. <br>
          Me gustan los gatos y los juegos de mesa.
        </p>
      </div>

      <div style="text-align: center;" class="member">
        <img src="./media/img/aboutUs.png" width="150px" class="rounded-circle" alt="Cinque Terre">
        <h3>Mireia Sánchez</h3>
        <p>Después de diplomarme en turismo, decidí cambiar de aires y me embarqué en la aventura de ser desarrolladora web.
          Ahora mis lunes son menos lunes si tengo un té, música de fondo y un proyecto de javascript entre manos.
        </p>
      </div>
    </div>
    </div>
  </section>
  <script src="js/nomWebApp.js"></script>

</body>

</html>