<?php
    $usersJson = file_get_contents("$pwd/../resources/employees.json");  
    $usersArray = json_decode($usersJson, true);

    foreach ($usersArray as $user) {
        $isUserId = $user["id"] == $_GET["userId"];

        if ($isUserId) {
            //setcookie("userId", $user["userId"], time() + 600, '/');
            //header();

            $userName = $user['name'];
            $userLastName = $user['lastName'];
            $userEmail = $user['email'];
            $userGender = $user['gender'];
            $userCity = $user['city'];
            $userStreet = $user['streetAddress'];
            $userState = $user['state'];
            $userAge = $user['age'];
            $userPostalCode = $user['postalCode'];
            $userPhoneNumber = $user['phoneNumber'];

            echo "
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

            exit;
        }
    }?>