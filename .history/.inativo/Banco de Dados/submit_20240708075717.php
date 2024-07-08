<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "ibge_survey";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];
$data_nascimento = $_POST['data_nascimento'];
$nacionalidade = $_POST['nacionalidade'];
$estado = $_POST['estado'];
$cidade = $_POST['cidade'];
$cep = $_POST['cep'];
$telefone = $_POST['telefone'];
$raca = $_POST['raca'];
$religiao = $_POST['religiao'];
$genero = $_POST['genero'];
$escolaridade = $_POST['escolaridade'];
$renda = $_POST['renda'];
$profissao = $_POST['profissao'];
$tipo_moradia = $_POST['tipo_moradia'];
$acesso_servicos = json_encode($_POST['servicos']);
$deficiencia = json_encode($_POST['deficiencia']);
$termos = isset($_POST['termos']) ? 1 : 0;

$sql = "INSERT INTO survey_responses (nome, email, idade, data_nascimento, nacionalidade, estado, cidade, cep, telefone, raca, religiao, genero, escolaridade, renda, profissao, tipo_moradia, acesso_servicos, deficiencia, termos) 
VALUES ('$nome', '$email', $idade, '$data_nascimento', '$nacionalidade', '$estado', '$cidade', '$cep', '$telefone', '$raca', '$religiao', '$genero', '$escolaridade', $renda, '$profissao', '$tipo_moradia', '$acesso_servicos', '$deficiencia', $termos)";

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
<!--  -->