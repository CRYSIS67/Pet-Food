<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['meassage'];

    $email_from = 'varshils60@gmail.com';
    $email_subject = "New from submission";
    $email_body = "User Name: $name.\n".
                    "User email: $visitor_email.\n".
                        "User message: $message.\n".
                        
    $to = "404peaceerror@gmail.com";
    $header = "From: $email_from  \r\n";
    $header = "Reply-To: $visitor_email  \r\n";
    mail($to,$email_subject,$email_body,$header);
    header("location:contact.html");

?>