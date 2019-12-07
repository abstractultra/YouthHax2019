<?php
$data = file_get_contents("https://www.rescuetime.com/anapi/data?key=B63SD5uLHof2HskzdelSGP5Tp2d5QyGdE8J0ELSQ");
$stuff = json_decode($data, true);
foreach ($stuff as $name => $value) {
    if ($name == "rows") {
        foreach($idk as $names => $text) {
            if ($text == "youtube.com") {
                g
            }
        }
    }
}