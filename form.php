<?php
if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "kontakt@piotr-stefanowicz.pl";
    $email_subject = "Wiadomość od klienta";

    function died($error) {
        // your error code can go here
        echo "Niestety formularz nie został poprawnie wypełniony: ";
        die();
    }

    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('Przykro nam ale wystąpił problem z przesłaniem formularza.');
    }

    $name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['telephone']; // not required
    $comments = $_POST['comments']; // required

    $email_message = "Treść formularza poniżej.\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "Imię: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telefon: ".clean_string($telephone)."\n";
    $email_message .= "Wiadomość: ".clean_string($comments)."\n";

// create email headers
$headers = 'From: '.$email_from."\r\n".
"Content-type: text/html; charset=UTF-8" . "\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>

<!-- include your own success html here -->
<!doctype html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Marta Wodzińska Design</title>
    <link rel="icon" href="img/favicon.ico" type="image/gif">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<main>
  <section id="contact" class="contact">
          <span></span>
          <div class="contact--content">
            <h3><span class="form-submitted--message">Dziękuję za kontakt. Postaram się odpowiedzieć najszybciej jak będę mogła.</span></h3>
            <a class="btn btn-back" href="index.html">Wróć do strony</a>
          </div>
              <footer class="footer">
                      Copyrights Marta Wodzińska © 2017
                  </footer>
      </section>
</main>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/index.js"></script>
</body>
</html>

<?php

}
?>