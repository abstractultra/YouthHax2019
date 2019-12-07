<?php
$data = file_get_contents("https://www.rescuetime.com/anapi/data?key=B63SD5uLHof2HskzdelSGP5Tp2d5QyGdE8J0ELSQ");
$stuff = json_decode($data, true);
for ($i : stuff) {
    
}