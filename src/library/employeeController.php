<?php
    require("employeeManager.php");

    $method = $_SERVER['REQUEST_METHOD'];
    $data = json_decode(file_get_contents("php://input"), true);
    $id = $_GET["userId"];
    $isDashboardView = strpos($_SERVER["HTTP_REFERER"], "dashboard.php") !== FALSE;
    $isEmployeeView = strpos($_SERVER["PHP_SELF"], "employee.php") !== FALSE;
    $employeeJsonPath = $isEmployeeView ? "../resources/employees.json" : "../../resources/employees.json";
    $employeeJson = file_get_contents($employeeJsonPath);
    $employeeArray = json_decode($employeeJson, true);

    switch ($method) {

        case "GET":
            getEmployee($id, $employeeArray, $employeeJsonPath);
            break;

        case "DELETE":
            deleteEmployee($data, $employeeArray, $employeeJsonPath);
            break;

        case "PATCH":
            updateEmployee($data, $employeeArray, $employeeJsonPath);
            break;

        case "POST":
            addEmployee($data, $employeeArray, $employeeJsonPath);
            break;

        default:
            break;
    }
?>