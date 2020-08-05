<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST['message'];
    $subject = "Website Message"

    $mailTo = "developer@kimberly-flores.com";
    $headers = "From: ".$mail;
    $text = "You have received a message from ".$name.".\n\n.$message;

    mail($mailTo, $subject, $text, $headers);
    header("Location: index.html?mailsend");

}