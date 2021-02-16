<!-- TODO Application entry point. Login view -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/register.css">
    <title>Employee Manager</title>
</head>
<body>
        <!--HEADER. FUTURE TIME MEASUREMENT CLOCK-->
    <header>
        <button class='button' id='localStorageReset'>Local storage Reset</button>
    </header>
    <main>
        <h1>Choose your answer wisely...</h1>
        <section class = "terminalScreen" id="storyPage">
            <!--HOME PAGE-->


        <!--SCORE PAGE-->
        <div class="container">
            <div id="scenario"></div>
            <div id="optionPath" class="buttonn-flex-box"></div>
        </div>
        </section>

        <!--SCORE PAGE-->
        <section class = "terminalScreen" id="scorePage"></section>

        <!--CONTROLLER -->
        <footer id="controler"> </footer>
        <!-- <button id="finishAdventureButton">Finish Timeline</button>-->
        <?php echo file_get_contents('assets/html/footer.html'); ?>
        <p> I'm already a Citizen, <a href="/index.php">Request Access</a></p>

    </main>


    <script type ="module" src="http://localhost/LeyberProject/php-employee-manager-1/assets/js/main.js"></script>
    <script type ="module" src="http://localhost/LeyberProject/php-employee-manager-1/assets/js/storyModules/storyObjectArray.js"></script>
    <script type ="module" src="http://localhost/LeyberProject/php-employee-manager-1/assets/js/storage.js"></script>
    <script type ="module" src="http://localhost/LeyberProject/php-employee-manager-1/assets/js/buttons.js"></script>
    <script type ="module" src="http://localhost/LeyberProject/php-employee-manager-1/assets/js/storyModules/storyObjectArray.js"></script>
</body>
</html>