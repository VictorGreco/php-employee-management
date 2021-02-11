<?php
    $userId = $_COOKIE["userId"];
    
    if (!$userId) {
        header("Location: http://localhost:8000/assets/html/unauthorized.html", true, 302);
        exit();
    }
?>