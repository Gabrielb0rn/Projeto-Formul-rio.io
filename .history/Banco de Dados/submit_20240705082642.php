<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $idade = htmlspecialchars($_POST['idade']);
    $data_nascimento = htmlspecialchars($_POST['data_nascimento']);
    $nacionalidade = htmlspecialchars($_POST['nacionalidade']);
    $estado = htmlspecialchars($_POST['estado']);
    $cidade = htmlspecialchars($_POST['cidade']);
    $cep = htmlspecialchars($_POST['cep']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $raca = htmlspecialchars($_POST['raca']);
    $religiao = htmlspecialchars($_POST['religiao']);
    $genero = htmlspecialchars($_POST['genero']);
    $escolaridade = htmlspecialchars($_POST['escolaridade']);
    $renda = htmlspecialchars($_POST['renda']);
    $profissao = htmlspecialchars($_POST['profissao']);
    $tipo_moradia = htmlspecialchars($_POST['tipo_moradia']);
    $servicos = $_POST['servicos'];
    $deficiencia = $_POST['deficiencia'];

    $servicos_str = implode(", ", $servicos);
    $deficiencia_str = implode(", ", $deficiencia);

    echo "Nome: " . $nome . "<br>";
    echo "E-mail: " . $email . "<br>";
    echo "Idade: " . $idade . "<br>";
    echo "Data de Nascimento: " . $data_nascimento . "<br>";
    echo "Nacionalidade: " . $nacionalidade . "<br>";
    echo "Estado: " . $estado . "<br>";
    echo "Cidade: " . $cidade . "<br>";
    echo "CEP: " . $cep . "<br>";
    echo "Telefone: " . $telefone . "<br>";
    echo "Raça/Etnia: " . $raca . "<br>";
    echo "Religião: " . $religiao . "<br>";
    echo "Gênero: " . $genero . "<br>";
    echo "Escolaridade: " . $escolaridade . "<br>";
    echo "Renda familiar mensal: " . $renda . "<br>";
    echo "Profissão: " . $profissao . "<br>";
    echo "Tipo de Moradia: " . $tipo_moradia . "<br>";
    echo "Acesso a Serviços Básicos: " . $servicos_str . "<br>";
    echo "Tipo de Deficiência: " . $deficiencia_str . "<br>";
}
?>
