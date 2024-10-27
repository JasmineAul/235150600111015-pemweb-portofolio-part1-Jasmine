<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
}
$data = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message\n\n";
$file = 'responses.txt';

if(file_put_contents($file, $data, 'a')) {
    echo "Message send successfully!";
}else{
    echo "Failed to send message.";
}