
<?php
$pwDirectory = dirname($_SERVER['SCRIPT_FILENAME']); //This variable was created to execute on your current custom server
$usersJson = file_get_contents($pwDirectory.'/../../resources/users.json');  
$usersArray = json_decode($usersJson, true);

echo $_SERVER['DOCUMENT_ROOT'].`/`;
echo dirname($_SERVER['SCRIPT_FILENAME']);

foreach ($usersArray['users'] as $user) {
    $isValidUser = $user['email'] === $_POST['email'];
    $isPasswordChecked = password_verify($_POST['password'], $user['password']);

    if ($isValidUser && $isPasswordChecked) {
        echo "Success!";
        echo $user["userId"];
        setcookie("userId", $user["userId"], time()+ 20, '/');
    }
}