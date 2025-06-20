<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $telefono = strip_tags(trim($_POST["phone"]));
    $mensaje = trim($_POST["message"]);

    // Validar campos
    if (empty($nombre) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($mensaje)) {
        echo "error";
        exit;
    }

    // Datos del correo
    $para = "miguetorres30@gmail.com";  // Reemplaza con tu correo
    $asunto = "Nuevo mensaje desde tu CV Web";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $email\n";
    $contenido .= "Teléfono: $telefono\n\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    $cabeceras = "From: $nombre <$email>";

    // Enviar
    if (mail($para, $asunto, $contenido, $cabeceras)) {
        echo "success";
    } else {
        echo "error";
    }
}

?>
