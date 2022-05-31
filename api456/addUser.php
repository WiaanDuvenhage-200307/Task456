<?php

include 'dbConn.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$fname = $data->fname;
$lname = $data->lname;
$email = $data->email;
$password = $data->password;
$phoneNumber = $data->number;

$passwordEncrypt = md5($password);

$sql = "INSERT INTO users (id, first_name, last_name, email, password, phone_number) VALUES (NULL, '$fname', '$lname', '$email', '$passwordEncrypt', '$phoneNumber');";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("Welcome to Artsy!");
}

?>