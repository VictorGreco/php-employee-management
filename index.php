<?php 
    if ($_GET["logout"]) {
        if (isset($_COOKIE['userId'])) {
            unset($_COOKIE['userId']); 
            setcookie('userId', null, -1, '/'); 
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Employee Manager</title>
    <link rel="stylesheet" href="./assets/css/main.css">
    <link rel="stylesheet" href="./assets/css/scrollBar.css">
    <link rel="stylesheet" href="./assets/css/login.css">
    <link rel="stylesheet" href="./assets/css/index.css">
</head>
<body>
    <main>
        <h1>LOGIN</h1>
        <form action="http://localhost/LeyberProject/php-employee-manager-1/src/library/loginManager.php" method="POST">
            <div class='inputItem'>
            <input type="email" id="email" name="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" maxlength="100" required>
            </div>
            <div class='inputItem'>
            <input type="password" id="password" name="password" required>
            </div>
            <button type="submit" class = 'signInBtn'>Sign In</button>
        </form>
        <p> I'm not a member of the Citadel, tramit <a href="http://localhost/LeyberProject/php-employee-manager-1/register.php">Citizenship</a></p>
    </main>

    <?php echo file_get_contents('http://localhost/LeyberProject/php-employee-manager-1/assets/html/footer.html'); ?>
</body>
</html>