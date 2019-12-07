<?php
$to      = 'dragonhe36@gmail.com';
$subject = 'Does this even work?';
$message = 'Test';
$headers = 'From: leonzalion@gmail.com' . "\r\n" .
    'Reply-To: leonzalion@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
?>