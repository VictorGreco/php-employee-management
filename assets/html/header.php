<?php
    $userId = $_COOKIE["userId"];

    echo "
    <header>
        <img src='../'>
        <span>Employee Manager</span>
        <nav>
            <a href='http://localhost/LeyberProject/php-employee-manager-1/src/dashboard.php'>Dashboard</a>
            <a href='http://localhost/LeyberProject/php-employee-manager-1/src/employee.php?userId=$userId'>My Info</a>
        </nav>
        <a href='http://localhost/LeyberProject/php-employee-manager-1/index.php'>logout</a>
    </header>";
?>