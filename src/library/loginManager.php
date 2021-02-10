
<?php
$pwd = dirname($_SERVER['SCRIPT_FILENAME']); //This variable was created to execute on your current custom server

$usersJson = file_get_contents("$pwd/../../resources/users.json");  
$usersArray = json_decode($usersJson, true);

foreach ($usersArray['users'] as $user) {
    $isValidUser = $user['email'] === $_POST['email'];
    $isPasswordChecked = password_verify($_POST['password'], $user['password']);

    if ($isValidUser && $isPasswordChecked) {
        //setcookie("userId", $user["userId"], time() + 600, '/');
        //header();

        echo "Redirect to dashboard.php";
        exit;
    }
}

//header();
echo "Redirect to index.php with issue";