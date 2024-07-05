<?php
$servername = "localhost";
$username = "root";
$password = ""; // Coloque sua senha do MySQL aqui
$dbname = "ibge_survey";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pegar dados do formulário
$nome = $_POST['nome'];
$email = $_POST['email'];
$idade = $_POST['idade'];
$estado = $_POST['estado'];
$cidade = $_POST['cidade'];
$cep = $_POST['cep'];
$telefone = $_POST['telefone'];
$nacionalidade = $_POST['nacionalidade'];
$raca = $_POST['raca'];
$religiao = $_POST['religiao'];
$genero = $_POST['genero'];
$data_nascimento = $_POST['data_nascimento'];
$escolaridade = $_POST['escolaridade'];
$renda = $_POST['renda'];
$profissao = $_POST['profissao'];
$tipo_moradia = $_POST['tipo_moradia'];
$acesso_servicos = json_encode($_POST['servicos']);
$plano_saude = $_POST['plano_saude'];
$freq_atividades = $_POST['freq_atividades'];
$comentarios = $_POST['comentarios'];

// Inserir dados no banco
$sql = "INSERT INTO survey_responses (nome, email, idade, estado, cidade, cep, telefone, nacionalidade, raca, religiao, genero, data_nascimento, escolaridade, renda, profissao, tipo_moradia, acesso_servicos, plano_saude, freq_atividades, comentarios) VALUES ('$nome', '$email', '$idade', '$estado', '$cidade', '$cep', '$telefone', '$nacionalidade', '$raca', '$religiao', '$genero', '$data_nascimento', '$escolaridade', '$renda', '$profissao', '$tipo_moradia', '$acesso_servicos', '$plano_saude', '$freq_atividades', '$comentarios')";

if ($conn->query($sql) === TRUE) {
    echo "Dados enviados com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
