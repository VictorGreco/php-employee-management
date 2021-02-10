<?php
    $pwd = dirname($_SERVER['SCRIPT_FILENAME']);
    $userId = $_COOKIE["userId"];

    if (!$userId) {
        echo "redirect";
        //header("Location: $pwd/../../index.php");
    }