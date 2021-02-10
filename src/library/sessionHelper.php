<?php
    $pwDirectory = dirname($_SERVER['SCRIPT_FILENAME']);
    setcookie('hello', 'hihihi', time()+600);
    //if ($_COOKIE)
    var_dump($_COOKIE['hello']);
    if (!$_COOKIE['hello']){

        header('Location: '.$pwDirectory.'/../../index.php');
    }
?>