<!-- TODO Application entry point. Login view -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Employee Manager</title>
</head>
<body>
    <main>
        <h1>Register</h1>




        <form action="./src/library/loginControler.php" method="POST" >
            <input type="email" id="email" name="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" maxlength="100" required>
            <input type="password" id="password" name="password" required>
            <input type="password" id="confirmPassword" name="password" required>
            <input type="text" id="gender" name="gender" required>
            <button type="submit">Register</button>
        </form>
        <p> I'm already a Citizen, <a href="/index.php">Request Access</a></p>
    </main>

    <?php echo file_get_contents('assets/html/footer.html'); ?>

    <script src="/assets/js/index.js"></script>
</body>
</html>