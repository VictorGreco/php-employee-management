<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

$employeeJson = file_get_contents("../../resources/employees.json");
$employeeArray = json_decode($employeeJson, true);


if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    file_put_contents('php://stderr', print_r($data, TRUE)); // print $_SERVER['argv'] in terminal

    addEmployee($data);
}

function addEmployee(array $newEmployee) {
// TODO implement it

    $newArray = array_merge($employeeArray, $newEmployee);

    $newJsonString = json_encode($$newArray);
    file_put_contents("../../resources/employees.json", $newJsonString);
}


function deleteEmployee(string $id)
{
// TODO implement it
}


function updateEmployee(array $updateEmployee)
{
// TODO implement it
}


function getEmployee(string $id)
{
// TODO implement it
}


function removeAvatar($id)
{
// TODO implement it
}


function getQueryStringParameters(): array
{
// TODO implement it
}

function getNextIdentifier(array $employeesCollection): int
{
// TODO implement it
}
