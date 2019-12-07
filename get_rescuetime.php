<?php

$website = $_POST["website-list"];
$request_string = "?email1=leonzalion@gmail.com&email2=dragonhe36@gmail.com&name=Leon&apiToken=B63SD5uLHof2HskzdelSGP5Tp2d5QyGdE8J0ELSQ&website={$website}&threshold=60";
file_get_contents("https://script.google.com/macros/s/AKfycbwmHrhVGX8nkpmtLwiUsQnecS3KgAcstC_aco3y/exec{$request_string}");
echo "Action successfully created."

?>