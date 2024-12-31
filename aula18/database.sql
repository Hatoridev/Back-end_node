-- Criação da tabela 'users' com os campos 'id', 'name' e 'email'
-- Esse arquivo SQL pode ser usado no SQLite para criar o banco de dados.

-- No SQLite, a chave primária é gerada automaticamente com AUTOINCREMENT
-- No MySQL, seria algo como: `id INT NOT NULL AUTO_INCREMENT PRIMARY KEY`

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,  -- No MySQL: `id INT NOT NULL AUTO_INCREMENT PRIMARY KEY`
    name TEXT NOT NULL,                    -- No MySQL: `name VARCHAR(255) NOT NULL`
    email TEXT NOT NULL UNIQUE             -- No MySQL: `email VARCHAR(255) NOT NULL UNIQUE`
);

-- Inserção de dados na tabela 'users'
-- No SQLite, podemos usar INSERT INTO diretamente. O comportamento é o mesmo no MySQL.
-- O SQLite não necessita de um comando separado para definir a chave primária, ela é gerada automaticamente.

INSERT INTO users (name, email) VALUES ('João Silva', 'joao.silva@email.com');
INSERT INTO users (name, email) VALUES ('Maria Oliveira', 'maria.oliveira@email.com');
INSERT INTO users (name, email) VALUES ('Pedro Santos', 'pedro.santos@email.com');

-- Selecionar os dados para verificar se foram inseridos corretamente
SELECT * FROM users;

-- No SQLite, .exit encerra a sessão do SQLite.
-- No MySQL, você usaria o comando 'exit' ou poderia fechar o cliente diretamente.

