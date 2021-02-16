<?php     
    require(__DIR__."/library/sessionHelper.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../assets/css/main.css">
</head>
<body> 
    <?php
    require(__DIR__."/library/employeeController.php"); ?>

    <?php
        $userName = $currentEmployee['name'];
        $userLastName = $currentEmployee['lastName'];
        $userEmail = $currentEmployee['email'];
        $userGender = $currentEmployee['gender'];
        $userCity = $currentEmployee['city'];
        $userstreetAddress = $currentEmployee['streetAddress'];
        $userState = $currentEmployee['state'];
        $userAge = $currentEmployee['age'];
        $userPostalCode = $currentEmployee['postalCode'];
        $userPhoneNumber = $currentEmployee['phoneNumber'];
        $userImage = $currentEmployee['image'];

        echo "
            <img src='$userImage'>
            <form action='' method='POST' class = 'infoForm'>
                <div class='inputPair'>
                    <div class='inputItem'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' id='name' value='$userName'>
                    </div>
                    <div class='inputItem'>
                    <label for='lastname'>Last Name</label>
                    <input type='text' name='lastname' id='lastname' value='$userLastName'>
                    </div>
                </div>

                <div class='inputPair'>
                    <div class='inputItem'>
                    <label for='email'>Email</label>
                    <input type='email' name='email' id='email' value='$userEmail' pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' maxlength='100' required>
                    </div>
                    <div class='inputItem'>
                    <label for='gender'>Gender</label>
                    <input type='text' name='gender' id='gender' value='$userGender'>
                    </div>
                </div>

                <div class='inputPair'>
                    <div class='inputItem'>
                        <label for='city'>City</label>
                        <input type='text' name='city' id='city' value='$userCity'>
                    </div>
                    <div class='inputItem'>
                        <label for='streetAddress'>streetAddress</label>
                        <input type='text' name='streetAddress' id='streetAddress' value='$userstreetAddress'>
                    </div>
                </div>

                <div class='inputPair'>
                    <div class='inputItem'>
                        <label for='state'>State</label>
                        <input type='text' name='state' id='state' value='$userState'>
                    </div>
                    <div class='inputItem'>
                        <label for='age'>Age</label>
                        <input type='text' name='age' id='age' value='$userAge'>
                    </div>
                </div>

                <div class='inputPair'>
                    <div class='inputItem'>
                    <label for='postalCode'>Zip code</label>
                    <input type='text' name='postalCode' id='postalCode' value='$userPostalCode'>
                    </div>
                    <div class='inputItem'>
                    <label for='phoneNumber'>Phone number</label>
                    <input type='text' name='phoneNumber' id='phoneNumber' value='$userPhoneNumber'>
                    </div>
                </div>

                <div class = 'controller'>
                <button type='submit' class = 'submitBtn'>SUBMIT</button>
                <button class = 'returnBtn'> <a href='http://localhost/LeyberProject/php-employee-manager-1/src/dashboard.php' id = 'returnLink'>RETURN</a></button>
                </div>
            </form>
        ";

        exit();
            
    
        echo "
            <img src='../resources/unicorn.svg' height='200' width='200'>
            <h1>ERROR 404: Employee not found</h1>
    
            <button> <a href='http://localhost/LeyberProject/php-employee-manager-1/src/dashboard.php'>Return</a></button>";
    ?>
</body>
</html>