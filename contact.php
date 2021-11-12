<?php

if (isset($_POST["email"]) && !empty($_POST["email"])) {
    $name = addslashes($_POST["name"]);
    $email = addslashes($_POST["email"]);
    $fone = addslashes($_POST["fone"]);
    $message = addslashes($_POST["textArea"]);

    $to = "Social Media <socialmedia@helptecnologia.net>";
    $subject = "QUERO SER CLIENTE";
    $body = "Nome: ".$name.
            "\nEmail: ".$email.
            "\nTelefone: ".$fone.
            "\nMensagem: ".$message;
    $header = "From: Social Media <socialmedia@helptecnologia.net>";

    if (mail($to, $subject, $body, $header)) {
        return true;
    } else {
        return false;
    }

    return false;
}
echo    "<h1>Humm..</h1>
        <p>Algo de errado não esta certo, click aqui para voltar para <a href='/'>CTInfo</a>.</p>";
?>