<!-- TODO Main view or Employees Grid View here is where you get when logged here there's the grid of employees -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $pwd = dirname($_SERVER['SCRIPT_FILENAME']);
    
    require("$pwd/library/sessionHelper.php");
    ?>

    <?php 
    $pwDirectory = dirname($_SERVER['SCRIPT_FILENAME']);

    include ($pwDirectory.'/../assets/html/header.php'); ?>



    <?php
    $pwDirectory = dirname($_SERVER['SCRIPT_FILENAME']);
    echo file_get_contents($pwDirectory.'/../assets/html/footer.html'); ?>
</body>
</html>


