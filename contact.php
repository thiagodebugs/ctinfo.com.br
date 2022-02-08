<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $message = $_POST["message"];

    $to = "Comercial <comercial@ctinfo.com.br>";
    $subject = "QUERO SER CLIENTE";
    $body = "Nome: ".$name.
            "\nEmail: ".$email.
            "\nTelefone: ".$tel.
            "\nMensagem: ".$message;
    $header = "From: Comercial <comercial@ctinfo.com.br>";

    mail($to, $subject, $body, $header);
    
    echo "<h1>Humm..</h1>
        <p>Algo de errado não esta certo, click aqui para voltar para <a href='ctinfo.com.br'>CTInfo</a>.</p>";
?>