-- Criação da tabela 'users' com os campos 'id', 'name' e 'email'
-- Este arquivo SQL cria uma tabela simples para armazenar os dados dos usuários.

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- No MySQL: id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
    name TEXT NOT NULL,                    -- No MySQL: name VARCHAR(255) NOT NULL
    email TEXT NOT NULL UNIQUE             -- No MySQL: email VARCHAR(255) NOT NULL UNIQUE
);

-- Inserção de dados na tabela 'users'
INSERT INTO users (name, email) VALUES ('João Silva', 'joao.silva@email.com');
INSERT INTO users (name, email) VALUES ('Maria Oliveira', 'maria.oliveira@email.com');
INSERT INTO users (name, email) VALUES ('Pedro Santos', 'pedro.santos@email.com');

