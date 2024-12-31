// Importa o módulo sqlite3 para interagir com o banco de dados SQLite.
const sqlite3 = require('sqlite3').verbose();

// Cria ou abre o banco de dados SQLite.
const db = new sqlite3.Database(':memory:');

// Cria uma tabela "users" para armazenar usuários no banco de dados.
db.serialize(() => {
    db.run("CREATE TABLE users (id INT, name TEXT, email TEXT)");

    // Insere alguns dados fictícios na tabela.
    const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?)");
    stmt.run(1, 'João', 'joao@example.com');
    stmt.run(2, 'Maria', 'maria@example.com');
    stmt.finalize();
});

// Exporta o banco de dados para ser usado em outras partes do código.
module.exports = db;

