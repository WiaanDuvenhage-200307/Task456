<?php

    include 'dbConn.php';

    header('Access-Control-Origin: *');
    header('Access-Control-Headers: *');

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $email = $data -> email;

    if($email === ""){
        echo "";
    } else {
        $sql = "SELECT * FROM users WHERE email = '$email';";
        $result = mysqli_query($conn, $sql);
        $resultCheck = mysqli_num_rows($result);

        if($resultCheck > 0){
            echo "Not Available";
        } else {
            echo "Available";
        }
    }

?>