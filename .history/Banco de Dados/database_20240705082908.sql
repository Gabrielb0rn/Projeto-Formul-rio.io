<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE TABLE pesquisa (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
idade INT(3) NOT NULL,
data_nascimento DATE NOT NULL,
nacionalidade VARCHAR(255) NOT NULL,
genero VARCHAR(50) NOT NULL,
estado_civil VARCHAR(50) NOT NULL,
renda VARCHAR(50) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($sql) === TRUE) {
    echo "Table pesquisa created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
