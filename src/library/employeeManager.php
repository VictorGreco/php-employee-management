<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

$pwd = dirname($_SERVER['SCRIPT_FILENAME']);
$employeeJson = file_get_contents("$pwd/../../resources/employees.json");  
$employeeArray = json_decode($employeeJson, true);


if ($_SERVER['REQUEST_METHOD'] == "POST") {
    addEmployee($newEmployee);
}

function addEmployee(array $newEmployee)
{
// TODO implement it

    // $employeeArray[8] = "TENNIS";

    // $newJsonString = json_encode($employeeArray);
    // echo $newJsonString;
    // file_put_contents("$pwd/../../resources/employees.json", $newJsonString);
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
