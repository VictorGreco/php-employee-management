
<?php
    $userId = $_COOKIE["userId"];

    echo "
    <header>
        <img src='../'>
        <span>Employee Manager</span>
        <nav>
            <a href='/src/dashboard.php'>Dashboard</a>
            <a href='/src/employee.php?userId=$userId'>My Info</a>
        </nav>
        <a href='/index.php>logout</a>
    </header>";
?>