<?php
    $userId = $_COOKIE["userId"];

    echo "
    <header>
        <img src='../'>
        <h2 class = 'title' >CITADEL EMPLOYEE MANAGER</h2>
        <nav class = 'nav'>
            <button class = 'dashboardBtn'><a href='http://localhost/LeyberProject/php-employee-manager-1/src/dashboard.php'>DASHBOARD</a></button>
            <button class = 'myInfoBtn'><a href='http://localhost/LeyberProject/php-employee-manager-1/src/employee.php?userId=$userId'>PERSONAL INFO</a></button>
            <button class= 'logOutBtn'><a href='http://localhost/LeyberProject/php-employee-manager-1/index.php?logout=true'>LOGOUT</a></button>
            </nav>
    </header>";
?>