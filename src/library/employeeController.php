<?php
    require("employeeManager.php");

    $method = $_SERVER["REQUEST_METHOD"];
    $httpReferer = $_SERVER["HTTP_REFERER"];
    $phpSelf = $_SERVER["PHP_SELF"];
    $id = $_GET["userId"];
    $data = json_decode(file_get_contents("php://input"), true);

    if ($httpReferer) {
        $isDashboardView = strpos($httpReferer, "dashboard.php") !== FALSE;
    }

    if ($phpSelf) {
        $isEmployeeView = strpos($phpSelf, "employee.php") !== FALSE;
    }

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