<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

// file_put_contents('php://stderr', print_r($_SERVER, TRUE)); // Terminal log in php

function addEmployee(array $newEmployee, array $employeeArray, string $employeeJsonPath) {
    array_push($employeeArray, $newEmployee);

    $jsonData = json_encode($employeeArray);

    file_put_contents($employeeJsonPath, $jsonData);
}

function deleteEmployee(string $id, array $employeeArray, string $employeeJsonPath) {
    foreach($employeeArray as $employee) {

        if ($employee["id"] == $id) {
            $search = array_search($employee, $employeeArray);

            array_splice($employeeArray, $search , 1);

            $jsonData = json_encode($employeeArray);

            file_put_contents($employeeJsonPath, $jsonData);
        }
    }
}

function updateEmployee(array $updateEmployee, array $employeeArray, string $employeeJsonPath) {
    $id = $updateEmployee["id"];

    foreach($employeeArray as $employee) {

        if ($employee["id"] == $id) {
            $search = array_search($employee, $employeeArray);
            $employeeArray[$search] = $updateEmployee;
            $jsonData = json_encode($employeeArray);

            file_put_contents($employeeJsonPath, $jsonData);
        }
    }
}

function getEmployee(string $id, array $employeeArray) {
    foreach($employeeArray as $employee) {

        if ($employee["id"] == $id) {
            $search = array_search($employee, $employeeArray);
            $GLOBALS["currentEmployee"] = $employeeArray[$search];
        }
    }
}

function removeAvatar($id) {
// TODO implement it
}

function getQueryStringParameters(): array {
// TODO implement it
}

function getNextIdentifier(array $employeesCollection): int {
// TODO implement it
}
