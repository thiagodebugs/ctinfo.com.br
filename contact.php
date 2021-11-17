<?php

    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];
    $message = $_POST["message"];

    $to = "Social Media <socialmedia@helptecnologia.net>";
    $subject = "QUERO SER CLIENTE";
    $body = "Nome: ".$name.
            "Email: ".$email.
            "Telefone: ".$fone.
            "Mensagem: ".$message;
    $header = "From: Social Media <socialmedia@helptecnologia.net>";

    if (mail($to, $subject, $body, $header)) {
        return true;
    } else {
        return false;
    }
    
echo    "<h1>Humm..</h1>
        <p>Algo de errado não esta certo, click aqui para voltar para <a href='/'>CTInfo</a>.</p>";
?>