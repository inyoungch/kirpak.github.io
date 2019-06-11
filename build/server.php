<?php

    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $mail = $_POST['user-mail'];
    $theme = $_POST['user-theme'];
    $comment = $_POST['comment'];


    $mail_message = '
    <html>
        <head>
            <title>Request</title>
        </head>
        <body>
            <h2>Request</h2>
            <ul>
                <li>Name: ' . $name . '</li>
                <li>Phone number: ' . $phone . '</li>
                <li>Email: ' . $mail . '</li>
                <li>Theme: ' . $theme . '</li>
                <li>Message: ' . $comment . '</li>
            </ul>
        </body>
    </html>    
    ';

    $headers = "From: Admin Kir Pak Services <admin@resident-canada.ru>\r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('inkatsoy08@gmail.com', 'Заявка', $mail_message, $headers);

    $data = [];

    if ($mail) {
        $data['status'] = "true";
        // $data['mes'] = "The e-mail has been sent successfully";
    }else{
        $data['status'] = "false";
        // $data['mes'] = "An error occurred during the preparation of the despatch.";
    }

    echo json_encode($data);

?>