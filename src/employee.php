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
        $userStreet = $currentEmployee['streetAddress'];
        $userState = $currentEmployee['state'];
        $userAge = $currentEmployee['age'];
        $userPostalCode = $currentEmployee['postalCode'];
        $userPhoneNumber = $currentEmployee['phoneNumber'];
        $userImage = $currentEmployee['image'];

        echo "
            <img src='$userImage'>
            <form action='' method='POST'>
                <label for='name'>Name</label>
                <input type='text' name='name' id='name' value='$userName'>

                <label for='lastname'>Last Name</label>
                <input type='text' name='lastname' id='lastname' value='$userLastName'>

                <label for='email'>Email</label>
                <input type='email' name='email' id='email' value='$userEmail' pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$' maxlength='100' required>

                <label for='gender'>Gender</label>
                <input type='text' name='gender' id='gender' value='$userGender'>

                <label for='city'>City</label>
                <input type='text' name='city' id='city' value='$userCity'>

                <label for='street'>Street adress</label>
                <input type='text' name='street' id='street' value='$userStreet'>

                <label for='state'>State</label>
                <input type='text' name='state' id='state' value='$userState'>

                <label for='age'>Age</label>
                <input type='text' name='age' id='age' value='$userAge'>

                <label for='postalCode'>Zip code</label>
                <input type='text' name='postalCode' id='postalCode' value='$userPostalCode'>

                <label for='phoneNumber'>Phone number</label>
                <input type='text' name='phoneNumber' id='phoneNumber' value='$userPhoneNumber'>


                <button type='submit'>Submit</button>
                <button> <a href='/src/dashboard.php'>Return</a></button>
            </form>
        ";

        exit();
            
    
        echo "
            <img src='../resources/unicorn.svg' height='200' width='200'>
            <h1>ERROR 404: Employee not found</h1>
    
            <button> <a href='/src/dashboard.php'>Return</a></button>";
    ?>
</body>
</html>