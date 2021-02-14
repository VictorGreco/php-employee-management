<?php
    $userId = $_COOKIE["userId"];
    
    if (!$userId) {
        header("Location:http://localhost/LeyberProject/php-employee-manager-1/assets/html/unauthorized.html", true, 302);
        exit();
    }
?>