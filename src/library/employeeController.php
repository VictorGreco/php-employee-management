<?php
    require("employeeManager.php");

    $method = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $_GET["userId"];

    switch ($method) {
        case "GET":
            getEmployee($id, $employeeArray);
            break;

        case "DELETE":
            deleteEmployee($data, $employeeArray);
            break;

        case "PATCH":
            updateEmployee($data, $employeeArray);
            break;

        case "POST":
            addEmployee($data, $employeeArray);
            break;

        default:
            break;
    }
?>