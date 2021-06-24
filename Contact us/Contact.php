<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'chathuramail7@gmail.com';

    $email_subject = "New form Submission";

    $email_body = "User Name: $name.\n".
    "user Email: $visitor_email.\n".
    "User Message: $message.\n";

    $to = "mactmunasinghe@students.nsbm.ac.lk";

    $headers = "$From: $email_from \r\n";

    $headers = "$Reply_To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: Contact Us.html");

    




?>  