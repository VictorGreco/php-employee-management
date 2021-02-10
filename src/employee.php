<!-- TODO Employee view -->
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
        
        require("$pwd/library/sessionHelper.php")?>

    <?php 
        require("$pwd/library/employeeController.php") 
    ?>
    
</body>
</html>