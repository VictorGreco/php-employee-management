<?php
/**
 * EMPLOYEE FUNCTIONS LIBRARY
 *
 * @author: Jose Manuel Orts
 * @date: 11/06/2020
 */

// file_put_contents('php://stderr', print_r($_SERVER, TRUE)); // Terminal log in php

function addEmployee(array $data, array $employeeArray, string $employeeJsonPath) {
    $id = $data["id"];
    $isDuplicatedEmployee = FALSE;

    foreach($employeeArray as $employee) {
        if ($employee["id"] == $id) {
            
            $isDuplicatedEmployee = TRUE;
            break;
        }
    }

    if (!$isDuplicatedEmployee) {
        array_push($employeeArray, $newEmployee);
        file_put_contents($employeeJsonPath, json_encode($employeeArray));
    }
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

function updateEmployee(array $data, array $employeeArray, string $employeeJsonPath) {
    $id = $data["id"];

    //file_put_contents('php://stderr', print_r($data, TRUE)); // Terminal log in php

    foreach($employeeArray as $employee) {
        if ($employee["id"] == $id) {
            $search = array_search($employee, $employeeArray);
            $employeeArray[$search] = $data;
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
