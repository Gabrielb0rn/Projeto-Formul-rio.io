<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];
$data_nascimento = $_POST['data_nascimento'];
$nacionalidade = $_POST['nacionalidade'];
$genero = $_POST['genero'];
$estado_civil = $_POST['estado_civil'];
$renda = $_POST['renda'];

$sql = "INSERT INTO pesquisa (nome, email, idade, data_nascimento, nacionalidade, genero, estado_civil, renda) 
VALUES ('$nome', '$email', $idade, '$data_nascimento', '$nacionalidade', '$genero', '$estado_civil', '$renda')";

$response = array();

if ($conn->query($sql) === TRUE) {
    $response['success'] = true;
} else {
    $response['success'] = false;
    $response['error'] = $conn->error;
}

$conn->close();

echo json_encode($response);
?>
