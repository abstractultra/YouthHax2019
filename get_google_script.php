<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $request_string = "?email={$_POST['email']}&name={$_POST['name']}&apiToken={$_POST['apitoken']}";
    file_get_contents("https://script.google.com/macros/s/AKfycbwmHrhVGX8nkpmtLwiUsQnecS3KgAcstC_aco3y/exec{$request_string}");
} else {
    echo "bad";
}