

CREATE DATABASE ibge_survey;

USE ibge_survey;

CREATE TABLE survey_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    data_nascimento DATE NOT NULL,
    nacionalidade VARCHAR(50) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    raca VARCHAR(50) NOT NULL,
    religiao VARCHAR(50) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    escolaridade VARCHAR(50) NOT NULL,
    renda DECIMAL(10,2) NOT NULL,
    profissao VARCHAR(255),
    tipo_moradia VARCHAR(50) NOT NULL,
    acesso_servicos JSON NOT NULL,
    deficiencia JSON NOT NULL,
    termos BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
